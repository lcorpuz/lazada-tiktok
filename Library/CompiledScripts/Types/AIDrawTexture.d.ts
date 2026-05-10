declare namespace APJS {
  /**
   * @class AIDrawTextureProvider
   * @description AIDrawTextureProvider
   */
  class AIDrawTextureProvider extends RenderTextureProvider implements IDynamicAsset{
    protected constructor();
  
    /**
     * @description get prompt.
     */
    get prompt(): string;
    /**
     * @description set prompt.
     * @param {string} value - New prompt string to set to
     */
    set prompt(value: string);
    /**
     * @description play.
     */
    get play(): boolean;
    /**
     * @description play.
     */
    set play(value: boolean);
  }
}