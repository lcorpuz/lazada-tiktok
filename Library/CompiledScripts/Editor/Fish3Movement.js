const APJS = globalThis.orion['@orion/orion-sdk/EditorFramework'].APJS;

const {BasicScriptNode} = require('./BasicScriptNode');
const {
  customNode,
  component,
  input,
  output,
  serializeSceneObjectFlag,
  serializeProperty
} = require('./OrionDecorators');

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fish3Movement = void 0;
let Fish3Movement = class Fish3Movement extends APJS.BasicScriptComponent {
    constructor() {
        super(...arguments);
        this.speed = 120; // pixels per second
        this.targetX = 100;
    }
    onStart() {
        const fish = this.getSceneObject().scene.findSceneObject("fish3");
        if (!fish) {
            console.log("fish3 not found");
            return;
        }
        this.fish3 = fish;
    }
    onUpdate(deltaTime) {
        if (!this.fish3)
            return;
        const transform = this.fish3.getTransform();
        const pos = transform.localPosition;
        if (pos.x < this.targetX) {
            pos.x += this.speed * deltaTime;
            if (pos.x > this.targetX) {
                pos.x = this.targetX;
            }
            transform.localPosition = pos;
        }
    }
};
Fish3Movement = __decorate([
    component()
], Fish3Movement);
exports.Fish3Movement = Fish3Movement;
