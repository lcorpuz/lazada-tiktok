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
exports.BallSpawner = void 0;
let BallSpawner = class BallSpawner extends APJS.BasicScriptComponent {
    constructor() {
        super(...arguments);
        this.ballCount = 50;
    }
    onStart() {
        if (!this.ballPrefab) {
            console.log("Ball Prefab is missing");
            return;
        }
        for (let i = 0; i < this.ballCount; i++) {
            const ball = this.ballPrefab.instantiate(this.getSceneObject());
            ball.name = `Ball_${i + 1}`;
            const transform = ball.getTransform();
            const randomX = this.randomRange(-300, 300);
            const randomY = this.randomRange(-500, 500);
            transform.localPosition = new APJS.Vector2(randomX, randomY, 0);
        }
    }
    randomRange(min, max) {
        return Math.random() * (max - min) + min;
    }
};
__decorate([
    input
], BallSpawner.prototype, "ballPrefab", void 0);
__decorate([
    input
], BallSpawner.prototype, "ballCount", void 0);
BallSpawner = __decorate([
    component()
], BallSpawner);
exports.BallSpawner = BallSpawner;
