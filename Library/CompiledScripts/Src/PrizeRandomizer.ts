@component()
export class PrizeRandomizer extends APJS.BasicScriptComponent {

	private totalPrizes: number = 5;
	private prizeQueue: number[] = [];
	private currentIndex: number = 0;
	private prizes: APJS.SceneObject[] = [];
	private orbIDnumber: APJS.SceneObject | null = null;

	// Orb watching
	private orbs: APJS.SceneObject[] = [];
	private orbWasEnabled: boolean[] = [];

	// Prize display
	private showPrize: boolean = false;
	private showTimer: number = 0;
	private showDuration: number = 1.0; // seconds to show prize
	private pendingPrize: number = 0;

	onStart() {
		const scene = this.getSceneObject().scene;

		// Find orbIDnumber text
		this.orbIDnumber = scene.findSceneObject("orbIDnumber");

		// Find all 5 prize images
		for (let i = 1; i <= this.totalPrizes; i++) {
			const prize = scene.findSceneObject("prize_" + i);
			if (prize) {
				this.prizes.push(prize);
				const img = prize.getComponent("Image") as any;
				if (img) img.opacity = 0;
				console.log("Found prize_" + i);
			} else {
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

	private buildShuffledQueue() {
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

	private getNextPrize(): number {
		if (this.currentIndex >= this.prizeQueue.length) {
			this.buildShuffledQueue();
		}
		return this.prizeQueue[this.currentIndex++];
	}

	private hideAllPrizes() {
		for (const prize of this.prizes) {
			const img = prize.getComponent("Image") as any;
			if (img) img.opacity = 0;
		}
	}

	private showPrizeImage(index: number) {
		this.hideAllPrizes();
		if (index >= 0 && index < this.prizes.length) {
			const img = this.prizes[index].getComponent("Image") as any;
			if (img) {
				img.opacity = 1;
				console.log("Showing prize_" + (index + 1));
			}
		}
	}

	private updatePrizeText(index: number) {
		if (!this.orbIDnumber) return;
		const textComp = this.orbIDnumber.getComponent("Text") as any;
		if (textComp) textComp.text = (index + 1).toString();
	}

	// ── UPDATE ────────────────────────────────────────────

	onUpdate(deltaTime: number) {

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
}