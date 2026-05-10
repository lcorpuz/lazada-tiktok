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
exports.HookController = void 0;
let HookController = class HookController extends APJS.BasicScriptComponent {
    constructor() {
        super(...arguments);
        this.isMoving = false;
        this.isReturning = false;
        this.startWorldY = 0;
        this.currentLocalY = 0;
        this.dropSpeed = 15;
        this.maxDrop = 25;
        this.hookTransform = null;
        this.rodTransform = null;
        this.orbSpawner = null;
        this.score = 0;
        // Catch thresholds in world space
        this.catchThresholdX = 0.7;
        this.catchThresholdY = 0.7;
        // Timer
        this.timeLeft = 20;
        this.gameOver = false;
        this.gameOverPanel = null;
        this.gameOverText = null;
        this.playAgainButton = null;
        this.playAgainText = null;
    }
    onStart() {
        const scene = this.getSceneObject().scene;
        // Get Hook and its parent Rod
        const hook = scene.findSceneObject("Hook");
        const rod = scene.findSceneObject("Rod");
        const playAgainButton = scene.findSceneObject("PlayAgainButton");
        const playAgainTextObj = scene.findSceneObject("PlayAgainText");
        const GameOverText = scene.findSceneObject("GameOverText");
        if (!hook || !rod || !playAgainButton || !playAgainTextObj || !GameOverText) {
            console.log("ERROR: Hook, Rod, Play Again Button, playAgainText, or Game Over Text not found!");
            return;
        }
        this.gameOverText = GameOverText;
        this.setGameOverTextVisible(false);
        this.playAgainButton = playAgainButton;
        this.playAgainText = playAgainTextObj;
        this.setPlayAgainVisible(false);
        this.hookTransform = hook.getTransform();
        this.rodTransform = rod.getTransform();
        // Store hook's starting LOCAL Y
        this.currentLocalY = this.hookTransform.localPosition.y;
        // Get OrbSpawner
        const orbContainer = scene.findSceneObject("OrbContainer");
        if (orbContainer) {
            this.orbSpawner = orbContainer.getComponent("OrbSpawner");
        }
        // Hide game over panel at start
        this.gameOverPanel = scene.findSceneObject("GameOverPanel");
        if (this.gameOverPanel) {
            this.gameOverPanel.enabled = false;
        }
        this.updateScoreText();
        this.updateTimerText();
        APJS.EventManager.getGlobalEmitter().on(APJS.EventType.Touch, this.onTouch, this);
        console.log("Game started!");
    }
    onDestroy() {
        APJS.EventManager.getGlobalEmitter().off(APJS.EventType.Touch, this.onTouch, this);
    }
    onTouch(event) {
        const touchInfo = event.args[0];
        if (touchInfo.phase !== APJS.TouchPhase.Began)
            return;
        // If game over, check if Play Again was tapped
        if (this.gameOver) {
            this.restartGame();
            return;
        }
        if (!this.isMoving) {
            this.isMoving = true;
            this.isReturning = false;
        }
    }
    getHookWorldPosition() {
        // Hook world position = Rod world position + Hook local position
        const rodPos = this.rodTransform.localPosition;
        const hookLocal = this.hookTransform.localPosition;
        return {
            x: rodPos.x + hookLocal.x,
            y: rodPos.y + hookLocal.y
        };
    }
    checkCatch() {
        if (!this.hookTransform || !this.orbSpawner)
            return;
        // Use calculated world position
        const hookWorld = this.getHookWorldPosition();
        const orbs = this.orbSpawner.getActiveOrbs();
        for (let i = orbs.length - 1; i >= 0; i--) {
            const orb = orbs[i];
            if (!orb || !orb.enabled)
                continue;
            const orbPos = orb.getTransform().localPosition;
            // Separate X and Y threshold check (box collision)
            const dx = Math.abs(hookWorld.x - orbPos.x);
            const dy = Math.abs(hookWorld.y - orbPos.y);
            if (dx < this.catchThresholdX && dy < this.catchThresholdY) {
                this.orbSpawner.removeOrb(orb);
                this.score++;
                this.isReturning = true;
                console.log("CAUGHT! Score: " + this.score);
                this.updateScoreText();
                break;
            }
        }
    }
    updateScoreText() {
        const scene = this.getSceneObject().scene;
        const obj = scene.findSceneObject("ScoreText");
        if (obj) {
            const t = obj.getComponent("Text");
            if (t)
                t.text = "Score: " + this.score;
        }
    }
    updateTimerText() {
        const scene = this.getSceneObject().scene;
        const obj = scene.findSceneObject("TimerText");
        if (obj) {
            const t = obj.getComponent("Text");
            if (t)
                t.text = "Time: " + Math.ceil(this.timeLeft);
        }
    }
    endGame() {
        var _a;
        this.gameOver = true;
        if (this.orbSpawner)
            this.orbSpawner.gameOver = true;
        if (((_a = this.gameOverPanel) === null || _a === void 0 ? void 0 : _a.enabled) === false)
            this.gameOverPanel.enabled = true;
        this.setGameOverTextVisible(true);
        this.setPlayAgainVisible(true);
        // Hide all orbs
        if (this.orbSpawner) {
            const orbs = [...this.orbSpawner.getActiveOrbs()];
            for (const orb of orbs)
                orb.enabled = false;
        }
        // Show game over panel
        if (this.gameOverPanel) {
            this.gameOverPanel.enabled = true;
        }
        // Update game over score display
        if (this.gameOverText) {
            const t = this.gameOverText.getComponent("Text");
            if (t)
                t.text = "GAME OVER\nScore: " + this.score;
        }
        console.log("GAME OVER! Score: " + this.score);
    }
    restartGame() {
        this.score = 0;
        this.timeLeft = 20;
        this.gameOver = false;
        this.isMoving = false;
        this.isReturning = false;
        // Reset hook position
        if (this.hookTransform) {
            const pos = this.hookTransform.localPosition;
            pos.y = this.currentLocalY;
            this.hookTransform.localPosition = pos;
        }
        // Hide game over panel
        if (this.gameOverPanel) {
            this.gameOverPanel.enabled = false;
        }
        this.setGameOverTextVisible(false);
        this.setPlayAgainVisible(false);
        // Reset spawner
        if (this.orbSpawner) {
            this.orbSpawner.resetGame();
        }
        this.updateScoreText();
        this.updateTimerText();
        console.log("Game restarted!");
    }
    setPlayAgainVisible(isVisible) {
        if (this.playAgainText) {
            this.playAgainText.enabled = isVisible;
        }
        if (this.playAgainButton) {
            this.playAgainButton.enabled = isVisible;
        }
    }
    setGameOverTextVisible(isVisible) {
        if (this.gameOverText) {
            this.gameOverText.enabled = isVisible;
        }
    }
    onUpdate(deltaTime) {
        if (this.gameOver)
            return;
        // Countdown
        this.timeLeft -= deltaTime;
        this.updateTimerText();
        if (this.timeLeft <= 0) {
            this.timeLeft = 0;
            this.endGame();
            return;
        }
        if (!this.isMoving || !this.hookTransform)
            return;
        const pos = this.hookTransform.localPosition;
        if (!this.isReturning) {
            this.currentLocalY -= this.dropSpeed * deltaTime;
            pos.y = this.currentLocalY;
            this.hookTransform.localPosition = pos;
            this.checkCatch();
            if (this.currentLocalY <= this.startWorldY - this.maxDrop) {
                this.isReturning = true;
            }
        }
        else {
            this.currentLocalY += this.dropSpeed * deltaTime;
            pos.y = this.currentLocalY;
            this.hookTransform.localPosition = pos;
            if (this.currentLocalY >= this.startWorldY) {
                this.currentLocalY = this.startWorldY;
                pos.y = this.startWorldY;
                this.hookTransform.localPosition = pos;
                this.isMoving = false;
                this.isReturning = false;
            }
        }
    }
};
HookController = __decorate([
    component()
], HookController);
exports.HookController = HookController;
