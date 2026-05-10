@component()
export class PrizeRandomizer extends APJS.BasicScriptComponent {

	// Total number of prize types (1 to this number)
	private totalPrizes: number = 5;

	// Pre-shuffled prize queue
	private prizeQueue: number[] = [];
	private currentIndex: number = 0;

	private orbIDnumber: APJS.SceneObject | null = null;

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
		APJS.EventManager.getGlobalEmitter().on(
			APJS.EventType.Touch,
			this.onTouch,
			this
		);
	}

	onDestroy() {
		APJS.EventManager.getGlobalEmitter().off(
			APJS.EventType.Touch,
			this.onTouch,
			this
		);
	}

	private buildShuffledQueue() {
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

	private onTouch(event: APJS.IEvent) {
		const touchInfo = event.args[0] as APJS.TouchData;
		if (touchInfo.phase !== APJS.TouchPhase.Began) return;

		// Assign next prize from shuffled queue
		this.assignNextPrize();
	}

	private assignNextPrize() {
		if (!this.orbIDnumber) return;

		// Loop back if we run out
		if (this.currentIndex >= this.prizeQueue.length) {
			this.buildShuffledQueue();
		}

		const prize = this.prizeQueue[this.currentIndex];
		this.currentIndex++;

		// Set the text
		const textComp = this.orbIDnumber.getComponent("Text") as any;
		if (textComp) {
			textComp.text = prize.toString();
			console.log("Prize assigned: " + prize);
		}
	}
}