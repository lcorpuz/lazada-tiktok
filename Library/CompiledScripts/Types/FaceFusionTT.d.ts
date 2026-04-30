declare namespace APJS {
  /**
   * @class FaceFusionTextureProvider
   * @description FaceFusionTextureProvider
   */
  class FaceFusionTextureProvider extends ScreenTextureProvider implements IDynamicAsset{
    protected constructor();
  
    get fusionTexture(): Texture;
    /**
     * @description fusion texture.
     * @param {Texture} value - New fusion texture to set to
     */
    set fusionTexture(value: Texture);
    /**
     * @description trigger morph.
     */
    triggerMorph(): void;
  }
}