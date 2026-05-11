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
        this.totalPrizes = 5;
        this.prizeQueue = [];
        this.currentIndex = 0;
        this.prizes = [];
        this.orbIDnumber = null;
        // Orb watching
        this.orbs = [];
        this.orbWasEnabled = [];
        // Prize display
        this.showPrize = false;
        this.showTimer = 0;
        this.showDuration = 1.0; // seconds to show prize
        this.pendingPrize = 0;
    }
    onStart() {
        const scene = this.getSceneObject().scene;
        // Find orbIDnumber text
        this.orbIDnumber = scene.findSceneObject("orbIDnumber");
        // Find all 5 prize images
        for (let i = 1; i <= this.totalPrizes; i++) {
            const prize = scene.findSceneObject("prize_" + i);
            if (prize) {
                this.prizes.push(prize);
                const img = prize.getComponent("Image");
                if (img)
                    img.opacity = 0;
                console.log("Found prize_" + i);
            }
            else {
                console.log("ERROR: prize_" + i + " not found!");
            }
        }
        // Find all 10 orbs and track their enabled state
        for (let i = 1; i <= 10; i++) {
            const orb = scene.findSceneObject("orb" + i);
            if (orb) {
                this.orbs.push(orb);
                this.orbWasEnabled.push(orb.enabled);
            }
        }
        this.buildShuffledQueue();
        console.log("PrizeRandomizer ready!");
        console.log("Queue: " + this.prizeQueue.join(", "));
    }
    // ── PRIZE QUEUE ───────────────────────────────────────
    buildShuffledQueue() {
        this.prizeQueue = [];
        for (let round = 0; round < 2; round++) {
            for (let i = 0; i < this.totalPrizes; i++) {
                this.prizeQueue.push(i);
            }
        }
        for (let i = this.prizeQueue.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = this.prizeQueue[i];
            this.prizeQueue[i] = this.prizeQueue[j];
            this.prizeQueue[j] = temp;
        }
        this.currentIndex = 0;
    }
    getNextPrize() {
        if (this.currentIndex >= this.prizeQueue.length) {
            this.buildShuffledQueue();
        }
        return this.prizeQueue[this.currentIndex++];
    }
    hideAllPrizes() {
        for (const prize of this.prizes) {
            const img = prize.getComponent("Image");
            if (img)
                img.opacity = 0;
        }
    }
    showPrizeImage(index) {
        this.hideAllPrizes();
        if (index >= 0 && index < this.prizes.length) {
            const img = this.prizes[index].getComponent("Image");
            if (img) {
                img.opacity = 1;
                console.log("Showing prize_" + (index + 1));
            }
        }
    }
    updatePrizeText(index) {
        if (!this.orbIDnumber)
            return;
        const textComp = this.orbIDnumber.getComponent("Text");
        if (textComp)
            textComp.text = (index + 1).toString();
    }
    // ── UPDATE ────────────────────────────────────────────
    onUpdate(deltaTime) {
        // Watch for orb catches — when orb goes from enabled to disabled
        for (let i = 0; i < this.orbs.length; i++) {
            const isEnabled = this.orbs[i].enabled;
            if (this.orbWasEnabled[i] && !isEnabled) {
                // Orb just got caught by VS!
                this.pendingPrize = this.getNextPrize();
                this.showPrizeImage(this.pendingPrize);
                this.updatePrizeText(this.pendingPrize);
                this.showPrize = true;
                this.showTimer = 0;
                console.log("Orb caught! Prize: " + (this.pendingPrize + 1));
            }
            // Update tracked state
            this.orbWasEnabled[i] = isEnabled;
        }
        // Hide prize after showDuration seconds
        if (this.showPrize) {
            this.showTimer += deltaTime;
            if (this.showTimer >= this.showDuration) {
                this.showPrize = false;
                this.hideAllPrizes();
                console.log("Prize hidden");
            }
        }
    }
};
PrizeRandomizer = __decorate([
    component()
], PrizeRandomizer);
exports.PrizeRandomizer = PrizeRandomizer;
