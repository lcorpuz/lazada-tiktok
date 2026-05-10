declare namespace APJS {
  /**
   * @description TweenType
   * @enum
   * @property  Transform - Transform
   * @property  TransformPath - TransformPath
   * @property  TransformFollow - TransformFollow
   * @property  Material - Material
   */
  enum TweenType {
    None,
    Transform,
    TransformPath,
    TransformFollow,
    Material,
  }
  
  /**
   * @namespace Tween
   * @extends DynamicComponent
   * @description Represents a dynamic component specifically designed for the Tween.
   */
  class Tween extends DynamicComponent {
    protected constructor();
  
    /**
       * @description Tween animation implementation
       */
    get tweenAnimation(): TweenAnimation;
  
    /**
       * @description Gets the type of tween animation.
       * @returns The tween type.
       */
    get tweenType(): TweenType;
  
    /**
       * @description Sets the type of tween animation.
       * @param value - The tween type to set.
       */
    set tweenType(value: TweenType);
  }
  
  /**
   * @description TweenPlayMode
   * @enum
   * @property  Loop - Loop
   * @property  LoopOnce - LoopOnce
   * @property  PingPong - PingPong
   * @property  PingPongOnce - PingPongOnce
   */
  enum TweenPlayMode {
    Loop,
    LoopOnce,
    PingPong,
    PingPongOnce,
  }
  
  /**
   * @description TweenMotionType
   * @enum
   * @property  FromTo - Move form start to end
   * @property  To - Move to end
   * @property  Offset - Move to offset
   */
  enum TweenMotionType {
    FromTo,
    To,
    Offset,
  }
  
  /**
   * @description TweenTargetType - Tween target type
   * @enum
   * @property Position - Position
   * @property Rotation - Rotation
   * @property Scale - Scale
   * @property AlbedoColor - Albedo color
   * @property EmissionColor - Emission color
   * @property UV - UV coordinates
   */
  enum TweenTargetType {
    Position,
    Rotation,
    Scale,
    AlbedoColor,
    EmissionColor,
    UV,
  }
  
  /**
   * @description TweenOrientation - Object orientation control method in path mode
   * @enum
   * @property Fixed - Fixed orientation
   * @property Path - Follow path direction
   */
  enum TweenOrientation {
    Fixed,
    Path,
  }
  
  /**
   * @description TweenPathType - Path type
   * @enum
   * @property Curve - Curve path
   * @property Straight - Straight path
   */
  enum TweenPathType {
    Curve,
    Straight,
  }
  
  /**
   * @description TweenEasingFunction - Tween easing function
   * @enum
   * @property Linear - Linear
   * @property Quadratic - Quadratic
   * @property Cubic - Cubic
   * @property Quartic - Quartic
   * @property Quintic - Quintic
   * @property Sinusoidal - Sinusoidal
   * @property Exponential - Exponential
   * @property Circular - Circular
   * @property Elastic - Elastic
   * @property Back - Back
   * @property Bounce - Bounce
   * @property Power - Power function
   */
  enum TweenEasingFunction {
    Linear,
    Quadratic,
    Cubic,
    Quartic,
    Quintic,
    Sinusoidal,
    Exponential,
    Circular,
    Elastic,
    Back,
    Bounce,
    GeneratePow,
  }
  
  /**
   * @description TweenEasingType - Tween easing type
   * @enum
   * @property None - None
   * @property EaseIn - Ease in
   * @property EaseOut - Ease out
   * @property EaseInOut - Ease in and out
   */
  enum TweenEasingType {
    None,
    In,
    Out,
    InOut,
  }
  
  /**
   * @namespace TweenAnimation
   * @description Base class for tween animation implementation
   */
  class TweenAnimation extends ScriptCustomObject {
    protected constructor();
  
    /**
       * @description Animation delay is the time in seconds before the animation starts.
       */
    get delay(): number;
  
    set delay(value: number);
  
    /**
       * @description Animation duration for the tween animation.
       */
    get duration(): number;
  
    set duration(value: number);
  
    /**
       * @description Easing function for the tween animation.
       */
    get easingFunction(): TweenEasingFunction;
  
    set easingFunction(value: TweenEasingFunction);
  
    /**
       * @description Easing type for the tween animation.
       */
    get easingType(): TweenEasingType;
  
    set easingType(value: TweenEasingType);
  
    /**
       * @description Motion type for the tween animation.
       */
    get motionType(): TweenMotionType;
  
    set motionType(value: TweenMotionType);
  
    /**
       * @description Gets or sets the target scene object for the tween animation.
       */
    get object(): SceneObject | null;
  
    set object(value: SceneObject | null);
  
    /**
       * @description Playback mode for the tween animation.
       */
    get playMode(): TweenPlayMode;
  
    set playMode(value: TweenPlayMode);
  
    /**
       * @description Target type for the tween animation.
       */
    get targetType(): TweenTargetType;
  
    set targetType(value: TweenTargetType);
  
    /**
       * @description Pause tween animation
       */
    pause(): void;
  
    /**
       * @description Resume tween animation
       */
    resume(): void;
  
    /**
       * @description Start tween animation
       */
    start(): void;
  
    /**
       * @description Pause tween animation
       */
    stop(): void;
  }
  
  /**
   * @namespace TweenMaterial
   * @extends TweenAnimation
   * @description Tween component specifically for material animations (base color, emission color, uv)
   */
  class TweenMaterial extends TweenAnimation {
    protected constructor();
  
    /**
       * @description End color value. This is the color value that the material will transition to.
       */
    get endColor(): Color;
  
    set endColor(value: Color);
  
    /**
       * @description End vector2 value. This is the vector2 value that the material will transition to.
       */
    get endVector2(): Vector2f;
  
    set endVector2(value: Vector2f);
  
    /**
       * @description Start color value. This is the color value that the material will transition from.
       */
    get startColor(): Color;
  
    set startColor(value: Color);
  
    /**
       * @description Start vector2 value. This is the vector2 value that the material will transition from.
       */
    get startVector2(): Vector2f;
  
    set startVector2(value: Vector2f);
  
    /**
       * @description Target type for the tween animation.
       */
    set targetType(value: TweenTargetType);
  
    get targetType(): TweenTargetType;
  
    /**
       * @description Pause the tween animation. This will temporarily stop the transition between the start and end values.
       */
    pause(): void;
  
    /**
       * @description Resume the tween animation. This will continue the transition between the start and end values.
       */
    resume(): void;
  
    /**
       * @description Start the tween animation. This will begin the transition between the start and end values.
       */
    start(): void;
  
    /**
       * @description Stop the tween animation. This will end the transition between the start and end values.
       */
    stop(): void;
  }
  
  /**
   * @namespace TweenTransform
   * @extends TweenAnimation
   * @description Tween component specifically for transform animations (position, rotation, scale)
   */
  class TweenTransform extends TweenAnimation {
    protected constructor();
  
    /**
       * @description End number value for the tween animation.
       */
    get endNumber(): number;
  
    set endNumber(value: number);
  
    /**
       * @description End vector2 value
       * @type {Vector2f}
       */
    get endVector2(): Vector2f;
  
    set endVector2(value: Vector2f);
  
    /**
       * @description End vector3 value for the tween animation.
       */
    get endVector3(): Vector3f;
  
    set endVector3(value: Vector3f);
  
    /**
       * @description Offset number value for the tween animation.
       */
    get offsetNumber(): number;
  
    set offsetNumber(value: number);
  
    /**
       * @description Offset vector2 value for the tween animation.
       */
    get offsetVector2(): Vector2f;
  
    set offsetVector2(value: Vector2f);
  
    /**
       * @description Offset vector3 value for the tween animation.
       */
    get offsetVector3(): Vector3f;
  
    set offsetVector3(value: Vector3f);
  
    /**
       * @description Start number value for the tween animation
       */
    get startNumber(): number;
  
    set startNumber(value: number);
  
    /**
       * @description Start vector2 value for the tween animation
       */
    get startVector2(): Vector2f;
  
    set startVector2(value: Vector2f);
  
    /**
       * @description Start vector3 value for the tween animation
       */
    get startVector3(): Vector3f;
  
    set startVector3(value: Vector3f);
  
    /**
       * @description Target type for the tween animation.
       */
    set targetType(value: TweenTargetType);
  
    get targetType(): TweenTargetType;
  
    /**
       * @description Pause tween animation.
       */
    pause(): void;
  
    /**
       * @description Resume tween animation.
       */
    resume(): void;
  
    /**
       * @description Start tween animation.
       */
    start(): void;
  
    /**
       * @description Stop tween animation.
       */
    stop(): void;
  }
  
  /**
   * @namespace TweenTransformFollow
   * @extends TweenAnimation
   * @description Tween component specifically for transform follow target animations (position, rotation, scale)
   */
  class TweenTransformFollow extends TweenAnimation {
    protected constructor();
  
    /**
       * @description The follow target transform for the tween animation.
       */
    get followTarget(): Transform | null;
  
    set followTarget(value: Transform | null);
  
    /**
       * @description The starting number value for the tween animation.
       */
    get startNumber(): number;
  
    set startNumber(value: number);
  
    /**
       * @description The starting Vector2f value for the tween animation.
       */
    get startVector2(): Vector2f;
  
    set startVector2(value: Vector2f);
  
    /**
       * @description The starting Vector3f value for the tween animation.
       */
    get startVector3(): Vector3f;
  
    set startVector3(value: Vector3f);
  
    /**
       * @description Sets the target type for the tween animation.
       * Valid values are Position, Rotation, and Scale.
       * @param value - The TweenTargetType to set (must be Position, Rotation, or Scale)
       */
    set targetType(value: TweenTargetType);
  
    /**
       * @description Gets the target type for the tween animation.
       * Valid values are Position, Rotation, and Scale.
       */
    get targetType(): TweenTargetType;
  
    /**
       * @description Pauses the tween animation for the follow target transform.
       */
    pause(): void;
  
    /**
       * @description Resumes the tween animation for the follow target transform.
       */
    resume(): void;
  
    /**
       * @description Starts the tween animation for the follow target transform.
       */
    start(): void;
  
    /**
       * @description Stops the tween animation for the follow target transform.
       */
    stop(): void;
  }
  
  /**
   * @namespace TweenTransformPath
   * @extends TweenAnimation
   * @description Tween component specifically for transform path animations (position, rotation, scale)
   */
  class TweenTransformPath extends TweenAnimation {
    protected constructor();
  
    /**
       * @description The array of delays for each path segment in the animation.
       */
    get delays(): number[];
  
    set delays(value: number[]);
  
    /**
       * @description The array of durations for each path segment.
       */
    get durations(): number[];
  
    set durations(value: number[]);
  
    /**
       * @description Whether the animation uses fixed duration for all path segments.
       */
    get fixedDuration(): boolean;
  
    set fixedDuration(value: boolean);
  
    /**
       * @description The orientation mode for the animated object along the path.
       */
    get orientation(): TweenOrientation;
  
    set orientation(value: TweenOrientation);
  
    /**
       * @description The type of path interpolation used for the animation.
       */
    get pathType(): TweenPathType;
  
    set pathType(value: TweenPathType);
  
    /**
       * @description The array of numeric points defining the path for single-value transformations.
       */
    get pointsPathNumber(): number[];
  
    set pointsPathNumber(value: number[]);
  
    /**
       * @description The array of Vector2 points defining the path for 2D transformations.
       */
    get pointsPathVector2(): Vector2f[];
  
    set pointsPathVector2(value: Vector2f[]);
  
    /**
       * @description The array of Vector3 points defining the path for 3D transformations.
       */
    get pointsPathVector3(): Vector3f[];
  
    set pointsPathVector3(value: Vector3f[]);
  
    /**
       * @description Target type for the tween animation. Valid values are Position, Rotation, and Scale.
       */
    set targetType(value: TweenTargetType);
  
    get targetType(): TweenTargetType;
  
    /**
       * @description Pauses the animation.
       */
    pause(): void;
  
    /**
       * @description Resumes the animation.
       */
    resume(): void;
  
    /**
       * @description Starts the animation.
       */
    start(): void;
  
    /**
       * @description Stops the animation.
       */
    stop(): void;
  }
}