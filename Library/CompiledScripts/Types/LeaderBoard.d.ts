declare namespace APJS {
  /**
   * @class Leaderboard
   * @extends DynamicComponent
   * @description Leaderboard component. Component that displays leaderboard.
   * @apjs_protected_constructor
   */
  class Leaderboard extends DynamicComponent {
    protected constructor();

    /**
     * @description Get current score.
     * @returns {number}
     */
    getScore(): number;

    /**
     * @description Set current score.
     * @param {number} score - New score to set to
     */
    setScore(score: number): void;

    /**
     * @description Post current final score.
     */
    postFinalScore(): void;
  }
}
