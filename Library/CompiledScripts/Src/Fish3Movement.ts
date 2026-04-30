@component()
export class Fish3Movement extends APJS.BasicScriptComponent {
  private fish3!: APJS.SceneObject;
  private speed = 120; // pixels per second
  private targetX = 100;

  onStart() {
    const fish = this.getSceneObject().scene.findSceneObject("fish3");

    if (!fish) {
      console.log("fish3 not found");
      return;
    }

    this.fish3 = fish;
  }

  onUpdate(deltaTime: number) {
    if (!this.fish3) return;

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
}
