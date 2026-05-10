declare namespace APJS {
  /**
   * @namespace Bloom
   * @description Represents a PostEffect specifically designed for the Bloom.
   * This class implements bloom post-processing effects with various configurable parameters.
   */
  class Bloom extends PostEffect {
    protected constructor();
  
    /**
       * @description Gets the bloom anamorphic ratio. Stretches the glow horizontally or vertically.
       */
    get anamorphicRatio(): number;
  
    /**
       * @description Sets the bloom anamorphic ratio. Stretches the glow horizontally or vertically.
       */
    set anamorphicRatio(value: number);
  
    /**
       * @description Gets the bloom clamp value. Limits the maximum brightness of the glow.
       */
    get clamp(): number;
  
    /**
       * @description Sets the bloom clamp value. Limits the maximum brightness of the glow.
       */
    set clamp(value: number);
  
    /**
       * @description Gets the bloom effect color, used to tint the glow.
       */
    get color(): Color;
  
    /**
       * @description Sets the bloom effect color, used to tint the glow.
       */
    set color(value: Color);
  
    /**
       * @description Gets the bloom diffuse factor. Controls the blur radius of the glow.
       */
    get diffuse(): number;
  
    /**
       * @description Sets the bloom diffuse factor. Controls the blur radius of the glow.
       */
    set diffuse(value: number);
  
    /**
       * @description Gets whether fast mode is enabled. Improves performance at the cost of quality.
       * @deprecated fast mode is deprecated, can not be used at runtime.
       */
    get fastMode(): boolean;
  
    /**
       * @description Sets whether fast mode is enabled. Improves performance at the cost of quality.
       * @deprecated fast mode is deprecated, can not be used at runtime.
       */
    set fastMode(value: boolean);
  
    /**
       * @description Gets the bloom effect intensity. Higher values make the glow stronger.
       */
    get intensity(): number;
  
    /**
       * @description Sets the bloom effect intensity. Higher values make the glow stronger.
       */
    set intensity(value: number);
  
    /**
       * @description Gets the bloom soft knee value. Smooths the transition around the threshold.
       */
    get softKnee(): number;
  
    /**
       * @description Sets the bloom soft knee value. Smooths the transition around the threshold.
       */
    set softKnee(value: number);
  
    /**
       * @description Gets the bloom threshold. Pixels brighter than this value will trigger the glow.
       */
    get threshold(): number;
  
    /**
       * @description Sets the bloom threshold. Pixels brighter than this value will trigger the glow.
       */
    set threshold(value: number);
  }
  
  /**
   * @enum
   * @description Enumeration of bokeh blur shape types.
   */
  enum BokehBlurShapeType {
    Hexagon,
    Circle,
  }
  
  /**
   * @namespace BokehBlur
   * @description Represents a PostEffect specifically designed for the BokehBlur.
   * This class implements a bokeh blur effect commonly used in post-processing to simulate
   * the optical effect of camera lenses, creating aesthetically pleasing blur with highlight points.
   */
  class BokehBlur extends PostEffect {
    protected constructor();
  
    /**
       * @description Gets the downsample factor for the bokeh blur effect. Higher values improve performance but reduce quality.
       */
    get downsample(): number;
  
    /**
       * @description Sets the downsample factor for the bokeh blur effect. Higher values improve performance but reduce quality.
       */
    set downsample(value: number);
  
    /**
       * @description Gets whether fast circle approximation mode is enabled for the bokeh blur effect. Improves performance but reduces accuracy.
       */
    get fastCircle(): boolean;
  
    /**
       * @description Sets whether fast circle approximation mode is enabled for the bokeh blur effect. Improves performance but reduces accuracy.
       */
    set fastCircle(value: boolean);
  
    /**
       * @description Gets the number of iterations for the bokeh blur effect. Higher values produce smoother results at the cost of performance.
       */
    get iterations(): number;
  
    /**
       * @description Sets the number of iterations for the bokeh blur effect. Higher values produce smoother results at the cost of performance.
       */
    set iterations(value: number);
  
    /**
       * @description Gets the shape type for the bokeh blur effect. (e.g., hexagon, circle). Determines the appearance of the blur highlights.
       */
    get shape(): BokehBlurShapeType;
  
    /**
       * @description Sets the shape type for the bokeh blur effect. (e.g., hexagon, circle). Determines the appearance of the blur highlights.
       */
    set shape(value: BokehBlurShapeType);
  
    /**
       * @description Gets the size of the bokeh blur effect. Controls the radius of the blur effect.
       */
    get size(): number;
  
    /**
       * @description Sets the size of the bokeh blur effect. Controls the radius of the blur effect.
       */
    set size(value: number);
  }
  
  /**
   * @namespace ChromaticAberration
   * @description This class implements chromatic aberration post-processing effects,
   * which simulate the optical phenomenon where different wavelengths of light
   * are focused at slightly different points, causing color fringes.
   */
  class ChromaticAberration extends PostEffect {
    protected constructor();
  
    /**
       * @description Gets whether fast mode for chromatic aberration is enabled.
       * Fast mode improves performance but reduces accuracy of the effect.
       */
    get fastMode(): boolean;
  
    /**
       * @description Sets whether fast mode for chromatic aberration is enabled.
       * Fast mode improves performance but reduces accuracy of the effect.
       */
    set fastMode(value: boolean);
  
    /**
       * @description Gets the chromatic aberration intensity.
       * Controls how strongly the RGB channels are shifted apart.
       */
    get intensity(): number;
  
    /**
       * @description Sets the chromatic aberration intensity.
       * Controls how strongly the RGB channels are shifted apart.
       */
    set intensity(value: number);
  
    /**
       * @description Gets the spectral LUT (Lookup Texture) used for chromatic aberration.
       * Defines how RGB channels are sampled and shifted.
       * @deprecated spectralLUT is deprecated, can not be used at runtime.
       */
    get spectralLUT(): Texture | null;
  
    /**
       * @description Sets the spectral LUT (Lookup Texture) used for chromatic aberration.
       * Defines how RGB channels are sampled and shifted.
       * @deprecated spectralLUT is deprecated, can not be used at runtime.
       */
    set spectralLUT(value: Texture | null);
  }
  
  /**
   * @namespace Custom
   * @description A PostEffect implementation that enables custom post-processing effects through user-defined materials and shaders.
   */
  class Custom extends PostEffect {
    protected constructor();
  
    /**
       * @description Gets the material used for the custom post-process effect. Defines the shader applied in the effect.
       */
    get material(): Material | null;
  
    /**
       * @description Sets the material used for the custom post-process effect.
       */
    set material(value: Material | null);
  }
  
  /**
   * @namespace Distort
   * @description Represents a PostEffect specifically designed for the Distort.
   */
  class Distort extends PostEffect {
    protected constructor();
  
    /**
       * @description Gets the distortion amplitude (X,Y). Defines the strength of the wave-like distortion along each axis.
       * X component controls horizontal distortion strength, Y component controls vertical distortion strength.
       */
    get amplitude(): Vector2f;
  
    /**
       * @description Sets the distortion amplitude (X,Y). Defines the strength of the wave-like distortion along each axis.
       * X component controls horizontal distortion strength, Y component controls vertical distortion strength.
       */
    set amplitude(value: Vector2f);
  
    /**
       * @description Gets the barrel distortion power. Controls the strength of the radial distortion.
       * A value of 0 means no distortion, positive values create barrel distortion, negative values create pincushion distortion.
       */
    get barrelPower(): number;
  
    /**
       * @description Sets the barrel distortion power. Controls the strength of the radial distortion.
       * A value of 0 means no distortion, positive values create barrel distortion, negative values create pincushion distortion.
       */
    set barrelPower(value: number);
  
    /**
       * @description Gets the distortion frequency (X,Y). Controls how frequently the distortion waves repeat across the screen.
       * X component controls horizontal wave frequency, Y component controls vertical wave frequency.
       */
    get frequency(): Vector2f;
  
    /**
       * @description Sets the distortion frequency (X,Y). Controls how frequently the distortion waves repeat across the screen.
       * X component controls horizontal wave frequency, Y component controls vertical wave frequency.
       */
    set frequency(value: Vector2f);
  
    /**
       * @description Gets the distortion offset (X,Y). Shifts the phase of the distortion pattern.
       * X component shifts horizontal wave phase, Y component shifts vertical wave phase.
       */
    get offset(): Vector2f;
  
    /**
       * @description Sets the distortion offset (X,Y). Shifts the phase of the distortion pattern.
       * X component shifts horizontal wave phase, Y component shifts vertical wave phase.
       */
    set offset(value: Vector2f);
  
    /**
       * @description Gets the distortion rotation angle. Rotates the distortion effect around the screen center.
       */
    get rotation(): number;
  
    /**
       * @description Sets the distortion rotation angle. Rotates the distortion effect around the screen center.
       */
    set rotation(value: number);
  
    /**
       * @description Gets the distortion speed (X,Y). Determines the animation speed of the distortion waves.
       * X component controls horizontal wave animation speed, Y component controls vertical wave animation speed.
       */
    get speed(): Vector2f;
  
    /**
       * @description Sets the distortion speed (X,Y). Determines the animation speed of the distortion waves.
       * X component controls horizontal wave animation speed, Y component controls vertical wave animation speed.
       */
    set speed(value: Vector2f);
  
    /**
       * @description Gets the zoom factor for the distortion effect. Higher values zoom the image in or out.
       * A value of 1.0 represents no zoom.
       */
    get zoom(): number;
  
    /**
       * @description Sets the zoom factor for the distortion effect.  Higher values zoom the image in or out.
       * A value of 1.0 represents no zoom.
       */
    set zoom(value: number);
  }
  
  /**
   * @namespace Fxaa
   * @description Represents a PostEffect specifically designed for the Fxaa.
   */
  class Fxaa extends PostEffect {
    protected constructor();
  }
  
  /**
   * @namespace Grain
   * @description Represents a PostEffect specifically designed for the Grain.
   */
  class Grain extends PostEffect {
    protected constructor();
  
    /**
       * @description Gets the grain color contribution. Adjusts how much color noise is blended into the effect.
       */
    get color(): number;
  
    /**
       * @description Sets the grain color contribution. Adjusts how much color noise is blended into the effect.
       */
    set color(value: number);
  
    /**
       * @description Gets the grain animation speed. Higher values make the grain move faster across frames.
       */
    get speed(): number;
  
    /**
       * @description Sets the grain animation speed. Higher values make the grain move faster across frames.
       */
    set speed(value: number);
  
    /**
       * @description Gets the grain strength. Controls the overall intensity of the film grain effect.
       */
    get strength(): number;
  
    /**
       * @description Sets the grain strength. Controls the overall intensity of the film grain effect.
       */
    set strength(value: number);
  }
  
  /**
   * @namespace LensFlare
   * @description Represents a PostEffect specifically designed for the LensFlare.
   */
  class LensFlare extends PostEffect {
    protected constructor();
  
    /**
       * @description Gets the lens flare intensity. Controls the brightness of the flare effect.
       */
    get intensity(): number;
  
    /**
       * @description Sets the lens flare intensity. Controls the brightness of the flare effect.
       */
    set intensity(value: number);
  
    /**
       * @description Gets the lens flare position (X,Y). Defines the screen-space position of the flare source.
       */
    get position(): Vector2f;
  
    /**
       * @description Sets the lens flare position (X,Y). Defines the screen-space position of the flare source.
       */
    set position(value: Vector2f);
  }
  
  /**
   * @namespace MotionBlur
   * @description Represents a PostEffect specifically designed for the MotionBlur.
   * This class implements motion blur functionality by accumulating frames over time to create blur trails for moving objects.
   */
  class MotionBlur extends PostEffect {
    protected constructor();
  
    /**
       * @description Sets the motion blur intensity. Controls how strongly moving objects are blurred between frames.
       */
    get intensity(): number;
  
    /**
       * @description Sets the motion blur intensity. Controls how strongly moving objects are blurred between frames.
       */
    set intensity(value: number);
  }
  
  /**
   * @namespace Vignette
   * @description Represents a PostEffect specifically designed for the Vignette.
   */
  class Vignette extends PostEffect {
    protected constructor();
  
    /**
       * @description Gets the vignette contrast value.
       * Adjusts the sharpness of the vignette falloff between center and edges.
       */
    get contrast(): number;
  
    /**
       * @description Sets the vignette contrast value.
       * Adjusts the sharpness of the vignette falloff between center and edges.
       */
    set contrast(value: number);
  
    /**
       * @description Gets the vignette power value.
       * Controls the radial strength of the darkening effect towards screen corners.
       */
    get power(): number;
  
    /**
       * @description Sets the vignette power value.
       * Controls the radial strength of the darkening effect towards screen corners.
       */
    set power(value: number);
  }
  
  /**
   * @namespace PostProcess
   * @description Represents a dynamic component specifically designed for the PostProcess.
   */
  class PostProcess extends DynamicComponent {
    protected constructor();
  
    /**
       * @description Bloom effect configuration.
       * Bloom is a visual effect that makes bright areas of the scene appear to glow.
       */
    readonly bloom: Bloom | null;
  
    /**
       * @description Bokeh blur effect configuration.
       * Simulates the optical effect of defocus blur with customizable shapes.
       */
    readonly bokehBlur: BokehBlur | null;
  
    /**
       * @description Chromatic aberration effect configuration.
       * Simulates the optical effect where different wavelengths of light are focused at different points.
       */
    readonly chromaticAberration: ChromaticAberration | null;
  
    /**
       * @description Custom effect configuration.
       * Allows for applying user-defined post-processing effects through custom materials.
       */
    readonly custom: Custom | null;
  
    /**
       * @description Distortion effect configuration.
       * Applies distortion effects to the scene, such as barrel distortion or wave effects.
       */
    readonly distort: Distort | null;
  
    /**
       * @description FXAA (Fast Approximate Anti-Aliasing) effect configuration.
       * Reduces aliasing artifacts in the rendered image with minimal performance impact.
       */
    readonly fxaa: Fxaa | null;
  
    /**
       * @description Film grain effect configuration.
       * Adds film-like grain to the scene for artistic purposes.
       */
    readonly grain: Grain | null;
  
    /**
       * @description Lens flare effect configuration.
       * Simulates the optical phenomenon that occurs when light hits the lens of a camera.
       */
    readonly lensFlare: LensFlare | null;
  
    /**
       * @description Motion blur effect configuration.
       * Creates a blur effect based on the velocity of objects or camera movement.
       */
    readonly motionBlur: MotionBlur | null;
  
    /**
       * @description Vignette effect configuration.
       * Darkens the edges of the screen to draw attention to the center.
       */
    readonly vignette: Vignette | null;
  }
  
  /**
   * @namespace PostEffect
   * @description Represents a base class for other post effects.
   */
  class PostEffect extends ScriptCustomObject {
    protected constructor();
  
    /**
       * @description Indicates whether the post effect is enabled.
       */
    enabled: any;
  }
}