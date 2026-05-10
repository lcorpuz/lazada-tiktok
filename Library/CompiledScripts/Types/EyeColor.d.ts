declare namespace APJS {
  /**
   * @description The scope of applying the eye color effect.
   * @enum
   */
  enum EyeApplyingScope {
    BothEyes,
    LeftEyeOnly,
    RightEyeOnly,
  }
  
  /**
   * @namespace EyeColor
   * @extends DynamicComponent
   */
  class EyeColor extends DynamicComponent {
    protected constructor();
  
    /**
     * @description The scope to apply the eye color effect to, can be both eyes, left eye, or right eye.
     * @default EyeApplyingScope.BothEyes
     */
    applyingScope: EyeApplyingScope;
  
    /**
     * @description Base color of the eyes, used in combination with the makeup texture.
     * @default new Color(1, 1, 1, 1) // Opaque white
     */
    color: Color;
  
    /**
     * @description The intensity of the eye color effect. Higher values make the color effect more prominent. Range [0.0, 1.0]
     * @default 0.0
     */
    intensity: number;
  
    /**
     * @description Whether opacity effect is enabled.
     * @default false
     */
    isOpacityEnabled: boolean;
  
    /**
     * @description Whether reflection effect is enabled.
     * @default false
     */
    isReflectionEnabled: boolean;
  
    /**
     * @description Makeup texture used to define the eye color effect.
     * @default null
     */
    makeupTexture: Texture | null;
  
    /**
     * @description Opacity texture used to control transparency in different eye regions.
     * @default null
     */
    opacityTexture: Texture | null;
  
    /**
     * @description The intensity of the reflection effect. Range [0.0, 1.0]
     * @default 0.0
     */
    reflectionIntensity: number;
  
    /**
     * @description Reflection texture used to simulate eye shine effects.
     * @default null
     */
    reflectionTexture: Texture | null;
  }
}