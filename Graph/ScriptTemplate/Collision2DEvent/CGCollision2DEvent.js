const {BaseNode} = require('../Utils/BaseNode');
const {ControlFlow} = require('../Utils/ControlFlow');
const APJS = require('../../../amazingpro');

class CGCollision2DEvent extends BaseNode {
  constructor() {
    super();
    this.selfCollider = null;
    this.selfColliderComp = null;
    this.otherCollider = null;
    this.otherColliderComp = null;
    this.eventCallback = null;
    this.eventType = -1;
    this.colliderCompCache = new Map();
    this.collisionInfo = null;
  }

  isCollider2D(comp) {
    if (!comp) return false;
    if (comp instanceof APJS.Collider2D) return true;
    return (
      comp instanceof APJS.JSScriptComponent && 
      comp.path && 
      comp.path.endsWith('ErasableCollider.js')
    );
  }

  getOtherColliderComp(otherCollider) {
    if (!otherCollider) return null;
    //If the object is already the component, return it directly.
    if (this.isCollider2D(otherCollider)) {
        return otherCollider;
    }

    if (this.colliderCompCache.has(otherCollider)) {
      return this.colliderCompCache.get(otherCollider);
    }

    let found = null;
    
    //compatible with .entity (erasable collider) and .getSceneObject (other collider)
    const otherObj = (otherCollider.entity && APJS.transferToAPJSObj(otherCollider.entity)) || 
                     (otherCollider.getSceneObject && otherCollider.getSceneObject());

    if (otherObj) {
      const comps = otherObj.getComponents();
      for (let i = 0; i < comps.length; i++) {
        const comp = comps[i];
        if (this.isCollider2D(comp) && comp.enabled && comp === otherCollider) {
          found = comp;
          break;
        }
      }
    }

    this.colliderCompCache.set(otherCollider, found);
    return found;
  }

  next(selfCollider, otherCollider, collisionInfo) {
    if (this.selfColliderComp && !this.selfColliderComp.enabled) {
        return;
    }
    this.otherCollider = otherCollider;
    this.collisionInfo = collisionInfo;
    
    if (this.nexts[0]) {
      this.nexts[0]();
    }
  }

  updateColliderComponent(object, newEventType) {
    if (!object) {
      return;
    }
    let newSelfCollider = null;
    if (object instanceof APJS.Collider2D) {
      newSelfCollider = object;
    } else {
      newSelfCollider = object.getScript().ref;
    }

    if (this.selfCollider === newSelfCollider && this.eventType === newEventType) {
      return;
    }

    if (this.selfCollider && this.eventCallback && this.selfCollider.unregisterHitEventCallback) {
        this.selfCollider.unregisterHitEventCallback(this.eventCallback);
    }

    if (!this.eventCallback) {
      this.eventCallback = ControlFlow.runFlowWrapper(this, this.next);
    }

    this.selfColliderComp = object;
    this.selfCollider = newSelfCollider;
    this.eventType = newEventType;

    switch (newEventType) {
      case 'onEnter':
        this.selfCollider.registerHitEventCallback(this.eventCallback, 0);
        break;
      case 'onStay':
        this.selfCollider.registerHitEventCallback(this.eventCallback, 1);
        break;
      case 'onExit':
        this.selfCollider.registerHitEventCallback(this.eventCallback, 2);
        break;
      default:
        break;
    }
  }

  beforeStart(sys) {
    // set up listener
    const object = this.inputs[0]();
    const newEventType = this.inputs[1]();
    if (object && this.isCollider2D(object)) {
      this.updateColliderComponent(object, newEventType);
    }
  }

  onUpdate(sys, deltatime) {
    const object = this.inputs[0]();
    const newEventType = this.inputs[1]();
    if (!object) return;
    if (object !== this.selfColliderComp || newEventType !== this.eventType) {
        if (this.isCollider2D(object)) {
            this.updateColliderComponent(object, newEventType);
        }
    }
  }

  getOutput(index) {
    switch (index) {
      case 1:
        return this.selfColliderComp;
      case 2:
        // calculate only when requested
        return this.getOtherColliderComp(this.otherCollider);
      case 3:
        if (this.collisionInfo) {
          return new APJS.Vector2f(this.collisionInfo.pointX, this.collisionInfo.pointY);
        }
        return APJS.Vector2f.zero();
      case 4:
        if (this.collisionInfo) {
          return new APJS.Vector2f(this.collisionInfo.normalX, this.collisionInfo.normalY);
        }
        return APJS.Vector2f.zero();
      case 5:
        if (this.collisionInfo) {
          return this.collisionInfo.normalImpulse;
        }
        return 0;
      case 6:
        if (this.collisionInfo) {
          return this.collisionInfo.tangentImpulse;
        }
        return 0;
      default:
        return null;
    }
  }

  onDestroy() {
    if (this.selfCollider && this.eventCallback && this.selfCollider.unregisterHitEventCallback) {
      this.selfCollider.unregisterHitEventCallback(this.eventCallback);
    }
    this.selfColliderComp = null;
    this.selfCollider = null;
    this.otherCollider = null;
    this.otherColliderComp = null;
    this.collisionInfo = null;
    this.eventType = -1;
    this.colliderCompCache.clear();
    this.colliderCompCache = null;
  }
}

exports.CGCollision2DEvent = CGCollision2DEvent;
