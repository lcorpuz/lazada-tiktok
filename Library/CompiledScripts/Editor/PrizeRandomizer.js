const APJS = globalThis.orion['@orion/orion-sdk/EditorFramework'].APJS;

const {BasicScriptNode} = require('./BasicScriptNode');
const {
  customNode,
  component,
  input,
  output,
  serializeSceneObjectFlag,
  serializeProperty,
  label, readOnly, slider, spinBox, dropDown,
  textArea, header, showIf, tooltip, separator,
  space, groupBegin, groupEnd, disablePin,
} = require('./OrionDecorators');

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrizeRandomizer = void 0;
let PrizeRandomizer = class PrizeRandomizer extends APJS.BasicScriptComponent {
    constructor() {
        super(...arguments);
        // Total number of prize types (1 to this number)
        this.totalPrizes = 5;
        // Pre-shuffled prize queue
        this.prizeQueue = [];
        this.currentIndex = 0;
        this.orbIDnumber = null;
    }
    onStart() {
        const scene = this.getSceneObject().scene;
        // Find the orbIDnumber text object
        this.orbIDnumber = scene.findSceneObject("orbIDnumber");
        if (!this.orbIDnumber) {
            console.log("ERROR: orbIDnumber not found!");
            return;
        }
        // Build and shuffle the prize queue
        this.buildShuffledQueue();
        console.log("PrizeRandomizer ready! Queue: " + this.prizeQueue.join(", "));
        // Listen for screen tap
        APJS.EventManager.getGlobalEmitter().on(APJS.EventType.Touch, this.onTouch, this);
    }
    onDestroy() {
        APJS.EventManager.getGlobalEmitter().off(APJS.EventType.Touch, this.onTouch, this);
    }
    buildShuffledQueue() {
        // Build array [1, 2, 3, 4, 5, 1, 2, 3, 4, 5] for 10 orbs
        this.prizeQueue = [];
        for (let round = 0; round < 2; round++) {
            for (let i = 1; i <= this.totalPrizes; i++) {
                this.prizeQueue.push(i);
            }
        }
        // Fisher-Yates shuffle
        for (let i = this.prizeQueue.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = this.prizeQueue[i];
            this.prizeQueue[i] = this.prizeQueue[j];
            this.prizeQueue[j] = temp;
        }
        this.currentIndex = 0;
    }
    onTouch(event) {
        const touchInfo = event.args[0];
        if (touchInfo.phase !== APJS.TouchPhase.Began)
            return;
        // Assign next prize from shuffled queue
        this.assignNextPrize();
    }
    assignNextPrize() {
        if (!this.orbIDnumber)
            return;
        // Loop back if we run out
        if (this.currentIndex >= this.prizeQueue.length) {
            this.buildShuffledQueue();
        }
        const prize = this.prizeQueue[this.currentIndex];
        this.currentIndex++;
        // Set the text
        const textComp = this.orbIDnumber.getComponent("Text");
        if (textComp) {
            textComp.text = prize.toString();
            console.log("Prize assigned: " + prize);
        }
    }
};
PrizeRandomizer = __decorate([
    component()
], PrizeRandomizer);
exports.PrizeRandomizer = PrizeRandomizer;
