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
exports.GameController = void 0;
let GameController = class GameController extends APJS.BasicScriptComponent {
    constructor() {
        super(...arguments);
        // ── CONFIG ────────────────────────────────────────────
        this.totalOrbs = 10;
        this.totalPrizes = 5;
        this.gameDuration = 15;
        this.hookDropSpeed = 10;
        this.hookReturnSpeed = 10;
        this.orbSpeed = 10;
        this.catchRadius = 60;
        // ── STATE ─────────────────────────────────────────────
        this.score = 0;
        this.timeLeft = 15;
        this.gameStarted = false;
        this.gameOver = false;
        this.hookDropping = false;
        this.hookReturning = false;
        this.hookStartY = 0;
        this.hookCurrentY = 0;
        this.prizeQueue = [];
        this.prizeIndex = 0;
        this.orbsRemaining = 10;
        this.effectsHideTimer = 0;
        this.effectsVisible = false;
        // ── SCENE OBJECTS ─────────────────────────────────────
        this.hook = null;
        this.hookTransform = null;
        this.orbs = [];
        this.orbStartX = [];
        this.orbActive = [];
        this.timerText = null;
        this.scoreText = null;
        this.emoji = null;
        this.confetti = null;
        this.tapTheScreen = null;
        this.orbIDnumber = null;
    }
    onStart() {
        const scene = this.getSceneObject().scene;
        // Find all scene objects
        this.hook = scene.findSceneObject("hook1");
        this.timerText = scene.findSceneObject("timer");
        this.scoreText = scene.findSceneObject("score");
        this.emoji = scene.findSceneObject("emoji");
        this.confetti = scene.findSceneObject("ConfettiPartyLoop");
        this.tapTheScreen = scene.findSceneObject("tapTheScreen");
        this.orbIDnumber = scene.findSceneObject("orbIDnumber");
        // Find all orbs
        for (let i = 1; i <= this.totalOrbs; i++) {
            const orb = scene.findSceneObject("orb" + i);
            if (orb) {
                this.orbs.push(orb);
                // Store each orb's starting X position
                this.orbStartX.push(orb.getTransform().localPosition.x);
                this.orbActive.push(true);
                console.log("Found orb" + i);
            }
        }
        this.orbsRemaining = this.orbs.length;
        // Setup hook
        if (this.hook) {
            this.hookTransform = this.hook.getTransform();
            this.hookStartY = this.hookTransform.localPosition.y;
            this.hookCurrentY = this.hookStartY;
        }
        // Hide emoji and confetti at start
        if (this.emoji)
            this.emoji.enabled = false;
        if (this.confetti)
            this.confetti.enabled = false;
        // Build shuffled prize queue
        this.buildPrizeQueue();
        // Update UI
        this.updateTimerText();
        this.updateScoreText();
        console.log("GameController ready!");
        console.log("Prize queue: " + this.prizeQueue.join(", "));
        // Listen for tap
        APJS.EventManager.getGlobalEmitter().on(APJS.EventType.Touch, this.onTouch, this);
    }
    onDestroy() {
        APJS.EventManager.getGlobalEmitter().off(APJS.EventType.Touch, this.onTouch, this);
    }
    // ── PRIZE SYSTEM ──────────────────────────────────────
    buildPrizeQueue() {
        this.prizeQueue = [];
        // Fill with 2 full sets to cover 10 orbs
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
        this.prizeIndex = 0;
    }
    getNextPrize() {
        if (this.prizeIndex >= this.prizeQueue.length) {
            this.buildPrizeQueue();
        }
        return this.prizeQueue[this.prizeIndex++];
    }
    // ── INPUT ─────────────────────────────────────────────
    onTouch(event) {
        const touchInfo = event.args[0];
        if (touchInfo.phase !== APJS.TouchPhase.Began)
            return;
        if (this.gameOver)
            return;
        // First tap starts the game
        if (!this.gameStarted) {
            this.startGame();
            return;
        }
        // Drop the hook if idle
        if (!this.hookDropping && !this.hookReturning) {
            this.hookDropping = true;
            console.log("Hook dropping!");
        }
    }
    // ── GAME FLOW ─────────────────────────────────────────
    startGame() {
        this.gameStarted = true;
        // Hide tap prompt
        if (this.tapTheScreen) {
            this.tapTheScreen.enabled = false;
        }
        console.log("Game started!");
    }
    triggerCatch(orbIndex) {
        // Mark orb as caught
        this.orbActive[orbIndex] = false;
        this.orbs[orbIndex].enabled = false;
        // Assign random prize
        const prize = this.getNextPrize();
        console.log("Caught orb" + (orbIndex + 1) + " Prize: " + prize);
        // Update score
        this.score++;
        this.orbsRemaining--;
        this.updateScoreText();
        // Update prize text
        if (this.orbIDnumber) {
            const t = this.orbIDnumber.getComponent("Text");
            if (t)
                t.text = prize.toString();
        }
        // Show emoji prize
        if (this.emoji) {
            this.emoji.enabled = true;
        }
        // Show confetti
        if (this.confetti) {
            this.confetti.enabled = true;
        }
        // Return hook immediately
        this.hookDropping = false;
        this.hookReturning = true;
        // Hide emoji and confetti after 1.5 seconds
        this.scheduleHide();
        // Check if all orbs caught
        if (this.orbsRemaining <= 0) {
            this.endGame();
        }
    }
    scheduleHide() {
        this.effectsHideTimer = 1.5;
        this.effectsVisible = true;
    }
    endGame() {
        if (this.gameOver)
            return;
        this.gameOver = true;
        console.log("GAME OVER! Score: " + this.score + "/10");
        // Update timer text to show game over
        if (this.timerText) {
            const t = this.timerText.getComponent("Text");
            if (t)
                t.text = "0";
        }
        // Show final score
        if (this.tapTheScreen) {
            this.tapTheScreen.enabled = true;
            const t = this.tapTheScreen.getComponent("Text");
            if (t)
                t.text = "Score: " + this.score + "/10";
        }
    }
    // ── UI UPDATES ────────────────────────────────────────
    updateTimerText() {
        if (!this.timerText)
            return;
        const t = this.timerText.getComponent("Text");
        if (t)
            t.text = Math.ceil(this.timeLeft).toString();
    }
    updateScoreText() {
        if (!this.scoreText)
            return;
        const t = this.scoreText.getComponent("Text");
        if (t)
            t.text = this.score.toString();
    }
    // ── UPDATE LOOP ───────────────────────────────────────
    onUpdate(deltaTime) {
        this.updateTemporaryEffects(deltaTime);
        if (!this.gameStarted || this.gameOver)
            return;
        // Countdown timer
        this.timeLeft -= deltaTime;
        this.updateTimerText();
        if (this.timeLeft <= 0) {
            this.timeLeft = 0;
            this.endGame();
            return;
        }
        // Move orbs left
        this.moveOrbs(deltaTime);
        // Move hook
        this.moveHook(deltaTime);
        // Check collisions
        if (this.hookDropping) {
            this.checkCollisions();
        }
    }
    updateTemporaryEffects(deltaTime) {
        if (!this.effectsVisible)
            return;
        this.effectsHideTimer -= deltaTime;
        if (this.effectsHideTimer > 0)
            return;
        if (this.emoji)
            this.emoji.enabled = false;
        if (this.confetti)
            this.confetti.enabled = false;
        this.effectsVisible = false;
    }
    moveOrbs(deltaTime) {
        for (let i = 0; i < this.orbs.length; i++) {
            if (!this.orbActive[i])
                continue;
            const transform = this.orbs[i].getTransform();
            const pos = transform.localPosition;
            // Move left
            pos.x -= this.orbSpeed * deltaTime;
            // If orb goes off left edge, deactivate it
            if (pos.x < -800) {
                this.orbActive[i] = false;
                this.orbs[i].enabled = false;
                this.orbsRemaining--;
                console.log("Orb" + (i + 1) + " missed!");
                if (this.orbsRemaining <= 0) {
                    this.endGame();
                }
            }
            transform.localPosition = pos;
        }
    }
    moveHook(deltaTime) {
        if (!this.hookTransform)
            return;
        const pos = this.hookTransform.localPosition;
        if (this.hookDropping) {
            // Drop down
            this.hookCurrentY -= this.hookDropSpeed * deltaTime;
            pos.y = this.hookCurrentY;
            // Max drop limit
            if (this.hookCurrentY <= this.hookStartY - 800) {
                this.hookDropping = false;
                this.hookReturning = true;
            }
        }
        else if (this.hookReturning) {
            // Return up
            this.hookCurrentY += this.hookReturnSpeed * deltaTime;
            pos.y = this.hookCurrentY;
            if (this.hookCurrentY >= this.hookStartY) {
                this.hookCurrentY = this.hookStartY;
                pos.y = this.hookStartY;
                this.hookDropping = false;
                this.hookReturning = false;
                console.log("Hook returned!");
            }
        }
        this.hookTransform.localPosition = pos;
    }
    checkCollisions() {
        if (!this.hookTransform)
            return;
        const hookPos = this.hookTransform.localPosition;
        for (let i = 0; i < this.orbs.length; i++) {
            if (!this.orbActive[i])
                continue;
            const orbPos = this.orbs[i].getTransform().localPosition;
            const dx = Math.abs(hookPos.x - orbPos.x);
            const dy = Math.abs(hookPos.y - orbPos.y);
            if (dx < this.catchRadius && dy < this.catchRadius) {
                this.triggerCatch(i);
                break;
            }
        }
    }
};
GameController = __decorate([
    component()
], GameController);
exports.GameController = GameController;
