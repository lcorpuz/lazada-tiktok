declare namespace APJS {
  /**
   * @class
   * An axis-aligned bounding box, or AABB for short, is a box aligned with coordinate axes and fully enclosing some object
   * @example
   * let aabb_1 = new AABB(new Vector3f(-1, -1, -1), new Vector3f(1, 1, 1));
   */
  class AABB {
    /**
     * @constructor
     */
    constructor();
    /**
     * @constructor
     * @param min - The minimum corner of the box.
     * @param max - The maximum corner of the box.
     */
    constructor(min?: Vector3f, max?: Vector3f);
    /**
     * @description The minimal point-X of the box.
     */
    get minX(): number;
    /**
     * @description Sets the minimum x-coordinate of the axis-aligned bounding box (AABB).
     */
    set minX(value: number);
    /**
     * @description The minimal point-Y of the box.
     */
    get minY(): number;
    /**
     * @description Sets the minimum Y-coordinate of the axis-aligned bounding box (AABB).
     */
    set minY(value: number);
    /**
     * @description The minimal point-Z of the box.
     */
    get minZ(): number;
    /**
     * @description Sets the minimum Z-coordinate of the axis-aligned bounding box (AABB).
     */
    set minZ(value: number);
    /**
     * @description The max point-X of the box.
     */
    get maxX(): number;
    /**
     * @description Sets the maximum X-coordinate of the AABB (Axis-Aligned Bounding Box).
     */
    set maxX(value: number);
    /**
     * @description The max point-Y of the box.
     */
    get maxY(): number;
    /**
     * @description Sets the maximum Y-coordinate of the axis-aligned bounding box (AABB).
     */
    set maxY(value: number);
    /**
     * @description The max point-Z of the box.
     */
    get maxZ(): number;
    /**
     * @description Sets the maximum Z-coordinate of the axis-aligned bounding box (AABB).
     */
    set maxZ(value: number);
    /**
     * @description Returns whether this AABB is equal to the specified `v` AABB.
     * @param v - The AABB to compare with.
     * @returns A boolean indicating whether the two AABBs are equal.
     */
    equals(v: AABB): boolean;
    /**
     * @description Returns a clone of this AABB.
     * @returns A new instance of AABB with the same properties as this one.
     */
    clone(): AABB;
    /**
     * @description Returns a string representation of the AABB.
     * @returns The string representation of the AABB.
     */
    toString(): string;
    /**
     * @description Determines if the current AABB intersects with another AABB.
     * @param other - The other AABB to check for intersection.
     * @returns A boolean indicating whether the two AABBs intersect.
     */
    intersects(other: AABB): boolean;
  }
  /**
   * @namespace AlgorithmManager
   */
  namespace AlgorithmManager {
    /**
     * @description get Result
     * @example
     * const result = APJS.AlgorithmManager.getResult();
     * if (result.getFaceCount() > 0) {
     *   //TODO
     * }
     */
    function getResult(): AlgorithmResult;
  }
  /**
   * @interface AlgorithmResult
   */
  interface AlgorithmResult {
    /**
     * @description getBodyInfo
     * @param index
     * @returns {BodyInfo}
     */
    getBodyInfo(index: number): BodyInfo;
    /**
     * @description getBodyCount
     * @returns number
     */
    getBodyCount(): number;
    /**
     * @description getFaceAttributeCount
     * @returns {number}
     */
    getFaceAttributeCount(): number;
    /**
     * @description getFaceAttributeInfo
     * @param {number} index
     * @returns {FaceAttributeInterface}
     */
    getFaceAttributeInfo(index: number): FaceAttributeInterface;
    /**
     * @description getFaceBaseInfo
     * @param {number} index
     * @returns {Face106Interface}
     */
    getFaceBaseInfo(index: number): Face106Interface;
    /**
     * @description getFaceCount
     * @returns {number}
     */
    getFaceCount(): number;
    /**
     * @description getFaceFaceMask
     * @param {number} index
     * @returns {FaceFaceMaskInterface}
     */
    getFaceFaceMask(index: number): FaceFaceMaskInterface;
    /**
     * @description getFaceMouthMask
     * @param {number} index
     * @returns {FaceMouthMaskInterface}
     */
    getFaceMouthMask(index: number): FaceMouthMaskInterface;
    /**
     * @description getFacePetInfo
     * @param {number} index
     * @returns {FacePetInfoInterface}
     */
    getFacePetInfo(index: number): FacePetInfoInterface;
    /**
     * @description getFacePetInfoCount
     * @returns {number}
     */
    getFacePetInfoCount(): number;
    /**
     * @description getFaceTeethMask
     * @param {number} index
     * @returns {FaceTeethMaskInterface}
     */
    getFaceTeethMask(index: number): FaceTeethMaskInterface;
    /**
     * @description getHandCount
     * @returns {number}
     */
    getHandCount(): number;
    /**
     * @description getHandInfo
     * @param {number} index
     * @returns {HandInfo}
     */
    getHandInfo(index: number): HandInfo;
  }
  /**
   * @description AnimatedTextureEvent
   * @enum
   * @property {number} PlayBegin
   * @property {number} PlayEnd
   * @property {number} LoopBegin
   * @property {number} LoopEnd
   * @property {number} KeyFrame
   * @property {number} Pause
   * @property {number} Resume
   * @example
   * const imageComponent = this.getSceneObject().getComponent('Image') as APJS.Image;
   * const tex = imageComponent.texture;
   * const emitter = APJS.EventManager.getObjectEmitter(tex);
   * emitter.on(APJS.AnimatedTextureEvent.LoopEnd, this.onLoopEnd, this);
   */
  enum AnimatedTextureEvent {
    PlayBegin,
    PlayEnd,
    LoopBegin,
    LoopEnd,
    KeyFrame,
    Pause,
    Resume
  }
  /**
   * @description AnimatedTexturePlayMode
   * @enum
   * @property {number} Forward
   * @property {number} PingPong
   * @property {number} Randomize
   * @property {number} Shuffle
   */
  enum AnimatedTexturePlayMode {
    Forward = 0,
    PingPong = 1,
    Randomize = 2,
    Shuffle = 3
  }
  /**
   * @class AnimatedTextureProvider
   */
  class AnimatedTextureProvider extends TextureDelegateProvider {
    /**
     * @description Gets whether the animation plays in reverse.
     * @returns True if animation plays in reverse, false otherwise
     */
    get reverse(): boolean;
    /**
     * @description Sets whether the animation plays in reverse.
     * @param value True if animation plays in reverse, false otherwise
     */
    set reverse(value: boolean);
    /**
     * @description Gets or sets the play mode of the animation.
     */
    get playMode(): AnimatedTexturePlayMode;
    /**
     * @description Sets the play mode of the animation.
     * @param value The play mode to set (Forward, PingPong, Randomize, or Shuffle)
     */
    set playMode(value: AnimatedTexturePlayMode);
    /**
     * @description Gets the number of times the animation should loop.
     */
    get loopCount(): number;
    /**
     * @description Sets the number of times the animation should loop.
     */
    set loopCount(value: number);
    /**
     * @description Gets the frames per second (fps) of the animation.
     */
    get fps(): number;
    /**
     * @description Sets the frames per second (fps) of the animation.
     */
    set fps(value: number);
    /**
     * @description Gets the duration of the animation in seconds.
     */
    get duration(): number;
    /**
     * @description Sets the duration of the animation in seconds.
     */
    set duration(value: number);
    /**
     * @description reset and set the start and end index of the animation. The index range from 0 to frameCount - 1.
     * @param from - start index of the animation
     * @param to - end index of the animation
     */
    playFromTo(from: number, to: number): void;
    /**
     * @description Starts the animation playback.
     */
    play(): void;
    /**
     * @description Pauses animation playback.
     */
    pause(): void;
    /**
     * @description Stops animation playback, resets to initial state, and displays the first frame.
     */
    stop(): void;
    /**
     * @description Resumes the animation playback.
     */
    resume(): void;
    /**
     * @description Resets the animation to its initial state and restarts playback.
     */
    reset(): void;
    /**
     * @description Get current playing frame index, the index range from 0 to frameCount - 1
     * @returns Current frame index
     */
    getCurrentPlayingFrame(): number;
    /**
     * @description Gets the total number of frames in the animation sequence.
     * @returns Total frame count
     */
    getFrameCount(): number;
  }
  /**
   * @class Animation
   * @description Animation. Stores keyframe based animations. Used by Animator to play back animations.
   */
  class Animation extends AObject {
    protected constructor();
    /**
     * @description total duration in seconds
     * @type {number}
     */
    get duration(): number;
    /**
     * @description default start time for this animation
     * @type {number}
     */
    get startTime(): number;
    /**
     * @description default end time for this animation
     * @type {number}
     */
    get endTime(): number;
    /**
     * @readonly
     * @description The frame count of the animation.
     * Determined by the track with the highest number of frames.
     * Enabling animation compression on import may reduce this value.
     * @type {number}
     */
    get frameCount(): number;
    /**
     * @description set default WrapMode for this animation
     * @type {AnimationWrapMode}
     */
    get wrapMode(): AnimationWrapMode;
    /**
     * @description set default WrapMode for this animation
     * @type {AnimationWrapMode}
     */
    set wrapMode(inWrapMode: AnimationWrapMode);
    /**
     * @description set default playback speed for this animation
     * @type {number}
     */
    get speed(): number;
    set speed(inSpeed: number);
  }
  /**
   * @description AnimazEventType
   * @enum
   */
  enum AnimationEventType {
    /** Animation start event. */
    AnimationStart,
    /** Animation end event. */
    AnimationEnd,
  }
  /**
   * @description AnimationWrapMode
   * @enum
   */
  enum AnimationWrapMode {
    /** When time reaches the end of the animation clip, the clip will automatically stop playing. */
    Once = 1,
    /** When time reaches the end of the animation clip, time will continue at the beginning. */
    Repeat = 0,
    /** When time reaches the end of the animation clip, time will ping pong back between beginning and end. */
    PingPong = -1,
    /** Plays back the animation. When it reaches the end, it will keep playing the last frame and never stop playing. */
    ClampForever = -2
  }
  /**
   * @class Animator
   * @description Animator. Component that plays back animations.
   */
  class Animator extends Component {
    protected constructor();
    /**
     * @description Retrieves the animation event emitter instance. If it doesn't exist, it creates a new one.
     * @param name - The name of the animation.
     * @returns The animation event emitter instance.
     * @example
     * const emitter = animator.getEmitter('animationName-walk');
     * emitter.on(APJS.AnimationEventType.AnimationEnd, (event: APJS.IEvent) => {
     *     const animation = event.args[0] as APJS.Animation;
     *     const speed = 1;
     *     const wrapMode = APJS.AnimationWrapMode.Once;
     *     const fadeInTime = 1;
     *     animation.play('animationName-run', wrapMode, speed, fadeInTime);
     * });
     */
    getEmitter(animationName: string): IEventEmitter | undefined;
    /**
     * @description Return if the animator is playing any animation.
     * @returns True if the animator is playing any animation, otherwise false.
     * @example
     *     const isPlaying = animator.isPlaying('animationName-walk');
     */
    isPlaying(animationName: string): boolean;
    /**
     * @description Gets the animation resource currently being played.
     * @returns The animation resource currently being played, or null if no animation is currently playing.
     */
    get playback(): Animation | null;
    /**
     * @description Sets the animation resource currently being played.
     * @param animation - The animation resource to play. Set to null to stop all animations.
     */
    set playback(animation: Animation | null);
    /**
     * @description Gets the list of all animation resources associated with this animator.
     * The returned array contains all animation resources that have been added to this animator.
     * @returns The array of animation resources.
     */
    get animations(): Animation[];
    /**
     * @description Sets the list of all animation resources associated with this animator.
     * The array can be modified to add or remove animation resources.
     * @param value - The array of animation resources to set.
     */
    set animations(value: Animation[]);
    /**
     * @description Gets the animation resource with the specified name.
     * @param name - The name of the animation resource to get.
     * @returns The animation resource with the specified name, or null if no animation resource with the specified name exists.
     */
    getAnimation(name: string): Animation;
    /**
     * @description Deprecated. play animation exclusively in default layer, use playState instead
     * @param animationName - animation's name
     * @param wrapMode - loopCount or wrap mode, a value above 0 means loopCount
     * @param speed - play speed
     * @param fadeTime - blend weight fade duration, if is 0, do transition immediately
     */
    play(animationName: string, wrapMode: number | AnimationWrapMode, speed: number, fadeInTime?: number): void;
    /**
     * @description stop all animations playing in this animator
     */
    stopAll(): void;
    /**
     * @description pause all animations playing in this animator
     */
    pauseAll(): void;
    /**
     * @description resume all animations playing in this animator
     */
    resumeAll(): void;
  }
  /**
   * @class AObject
   */
  class AObject {
    protected constructor();
    /**
     * @description Get the name of the object.
     */
    get name(): string;
    /**
     * @description Set the name of the object.
     * @param value - The name to set for the object.
     */
    set name(value: string);
  }
  /**
   * @class AudioAsset
   * @description Audio clip of resource.
   */
  class AudioAsset extends AObject {
    protected constructor();
  }
  /**
   * @class AudioDetectorBuilder
   * @description The base builder for audio detector to set the source of the detector and build the detector.
   */
  abstract class AudioDetectorBuilder<T> {
    protected constructor();
    /**
     * @description Set the source of the detector.
     * @param type - The type of audio source. Default is None. When the type is ExternalFile, the audioComponent must be provided.
     * @param audioComponent - The audio component which plays the external audio file.
     * @example
     * audioDetectorBuilder
     *     .setDetectorSource(APJS.AudioSourceType.ExternalFile, audioComponent)
     *     .build();
     * @returns Builder instance for chaining.
     */
    setDetectorSource(type: AudioSourceType, audioComponent: IAudioComponent | null): this;
  }
  /**
   * @enum AudioSourceType
   * @description The type of audio source for detection.
   */
  enum AudioSourceType {
    None = 0,
    Microphone = 1,
    Music = 2,
    ExternalFile = 3
  }
  /**
   * @class BaseAudioDetector
   * @description The base class for audio detectors with common functionality.
   */
  abstract class BaseAudioDetector implements IAudioDetector {
    protected constructor();
    enabled: boolean;
  }
  /**
   * @class
   */
  abstract class BasicScriptComponent extends DynamicComponent {
    /**
     * @description Get the scene object this component is attached to.
     * @returns The scene object this component is attached to.
     */
    getSceneObject(): SceneObject;
    /**
     * @description Called by engine when component itself is enabled.
     */
    onEnable(): void;
    /**
     * @description Called by engine when component itself is disabled.
     */
    onDisable(): void;
    /**
     * @description Called by engine when component is added to SceneObject, will be called even if component is disabled.
     */
    onInit(): void;
    /**
     * @description Called by engine when component is started, will not be called if component is disabled.
     */
    onStart(): void;
    /**
     * @description Called by engine every frame.
     * @param deltaTime - Time duration from last update in seconds.
     */
    onUpdate(deltaTime: number): void;
    /**
     * @description Called by engine every frame after all systems updated.
     * @param deltaTime - Time duration from last update in seconds.
     */
    onLateUpdate(deltaTime: number): void;
    /**
     * @description Called by engine when component is destroyed.
     */
    onDestroy(): void;
    /**
     * @description Called by engine when events occurred.
     * @param event - Event object.
     */
    onEvent(event: IEvent): void;
  }
  /**
   * @class BeatDetector
   * @description A beat detector implementation.
   * @example
   * OnInit() {
   *     const builder = APJS.AudioDetectionModule.getAudioDetectionBuilder(APJS.AudioDetectionType.Beat);
   *     builder.setDetectorSource(APJS.AudioSourceType.Microphone, null);
   *     this.detector = builder.build();
   * }
   * OnUpdate(dt: number) {
   *     if (this.detector) {
   *         const result = this.detector.getResult();
   *         console.log(result);
   *     }
   * }
   */
  class BeatDetector extends BaseAudioDetector {
    protected constructor();
    /**
     * @description Get the result of the beat detection.
     * @returns [1, 2, ...] The result of the beat detection.
     */
    getResult(): number;
  }
  /**
   * @class BeatDetectorBuilder
   * @description A builder for beat detector to set the source of the detector and build the detector.
   * @example
   * OnInit() {
   *     const builder = APJS.AudioDetectionModule.getAudioDetectionBuilder(APJS.AudioDetectionType.Beat);
   *     builder.setDetectorSource(APJS.AudioSourceType.Microphone, null);
   *     const detector = builder.build();
   * }
   */
  class BeatDetectorBuilder extends AudioDetectorBuilder<BeatDetector> {
    protected constructor();
    setDetectorSource(type: AudioSourceType, audioComponent: IAudioComponent | null): this;
    /**
     * @description Build the beat detector. Note that the detector should be built in OnInit, otherwise it will return null.
     * @returns Detector instance of the beat detector.
     */
    build(): BeatDetector | null;
  }
  /**
   * @description Enumeration representing blend factors used in blending operations.
   * @enum
   */
  enum BlendFactor {
    /** Blending factor that uses zero as the source and destination color values. */
    Zero,
    /** Blending factor that uses one as the source and destination color values. */
    One,
    /** Blending factor that uses the source color as the source value. */
    SrcColor,
    /** Blending factor that uses one minus the source color as the source value. */
    OneMinusSrcColor,
    /** Blending factor that uses the destination color as the source value. */
    DstColor,
    /** Blending factor that uses one minus the destination color as the source value. */
    OneMinusDstColor,
    /** Blending factor that uses the source alpha as the source value. */
    SrcAlpha,
    /** Blending factor that uses one minus the source alpha as the source value. */
    OneMinusSrcAlpha,
    /** Blending factor that uses the destination alpha as the source value. */
    DstAlpha,
    /** Blending factor that uses one minus the destination alpha as the source value. */
    OneMinusDstAlpha
  }
  /**
   * @description Defines the blend operations that can be used for blending colors.
   * @enum
   */
  enum BlendOperation {
    /** Adds the source and destination colors. */
    Add,
    /** Subtracts the destination color from the source color. */
    Subtract,
    /** Subtracts the source color from the destination color. */
    ReverseSubtract,
    /** Takes the minimum of the source and destination colors. */
    Min,
    /** Takes the maximum of the source and destination colors. */
    Max
  }
  /**
   * @class ColorBlendState
   * @extends AObject
   * @description Represents the blend state for color blending in the rendering pipeline.
   *
   * ### Core Features
   * - Controls how colors are blended during rendering
   * - Supports configurable blend factors and operations
   * - Enables or disables blending for color attachments
   * - Provides access to native blend state implementation
   *
   * ### Usage Examples
   * @example <caption>Basic Usage: Setting Up Alpha Blending</caption>
   * // Create a new blend state for alpha blending
   * const blendState = new BlendState();
   * blendState.enabled = true;
   * blendState.srcColorFactor = BlendFactor.SrcAlpha;
   * blendState.dstColorFactor = BlendFactor.OneMinusSrcAlpha;
   * blendState.colorBlendOperation = BlendOperation.Add;
   * blendState.srcAlphaFactor = BlendFactor.SrcAlpha;
   * blendState.dstAlphaFactor = BlendFactor.OneMinusSrcAlpha;
   * blendState.alphaBlendOperation = BlendOperation.Add;
   *
   * // Apply the blend state to a material
   * material.mainpass.blendState = blendState;
   *
   * @example <caption>Advanced Usage: Setting Up Additive Blending</caption>
   * // Create a new blend state for additive blending
   * const additiveBlendState = new BlendState();
   * additiveBlendState.enabled = true;
   * additiveBlendState.srcColorFactor = BlendFactor.SrcAlpha;
   * additiveBlendState.dstColorFactor = BlendFactor.One;
   * additiveBlendState.colorBlendOperation = BlendOperation.Add;
   * additiveBlendState.srcAlphaFactor = BlendFactor.SrcAlpha;
   * additiveBlendState.dstAlphaFactor = BlendFactor.One;
   * additiveBlendState.alphaBlendOperation = BlendOperation.Add;
   *
   * // Apply the blend state to a material
   * material.mainpass.blendState = additiveBlendState;
   *
   * @see BlendFactor
   * @see BlendOperation
   */
  class BlendState extends AObject {
    /**
     * @description Constructs a BlendState object.
     * @param rtti The native color blend state to wrap (optional).
     */
    constructor();
    /**
     * @description Indicates whether blending is enabled for the color attachment state.
     * @returns True if blending is enabled, false otherwise.
     */
    get enabled(): boolean;
    /**
     * @description Sets the enabled state of the blend state for the first attachment.
     * @param value True to enable blending, false otherwise.
     */
    set enabled(value: boolean);
    /**
     * @description The source color blend factor for the first attachment in the blend state.
     * @returns The source color blend factor.
     */
    get srcColorFactor(): BlendFactor;
    /**
     * @description Sets the source color blend factor for the first attachment.
     * @param value The source color blend factor to set.
     */
    set srcColorFactor(value: BlendFactor);
    /**
     * @description The destination color blend factor for the first attachment in the blend state.
     * @returns The destination color blend factor.
     */
    get dstColorFactor(): BlendFactor;
    /**
     * @description Sets the destination color blend factor for the first attachment.
     * @param value The destination color blend factor to set.
     */
    set dstColorFactor(value: BlendFactor);
    /**
     * @description The source alpha blend factor for the first color attachment in the blend state.
     * @returns The source alpha blend factor.
     */
    get srcAlphaFactor(): BlendFactor;
    /**
     * @description Sets the source alpha blend factor for the first attachment.
     * @param value The source alpha blend factor to set.
     */
    set srcAlphaFactor(value: BlendFactor);
    /**
     * @description The destination alpha blend factor for the first color attachment in the blend state.
     * @returns The destination alpha blend factor.
     */
    get dstAlphaFactor(): BlendFactor;
    /**
     * @description Sets the destination alpha blend factor for the first attachment.
     * @param value The destination alpha blend factor to set.
     */
    set dstAlphaFactor(value: BlendFactor);
    /**
     * @description The blend operation for the first color attachment in the blend state.
     * @returns The color blend operation.
     */
    get colorBlendOperation(): BlendOperation;
    /**
     * @description Sets the color blend operation for the first attachment.
     * @param value The color blend operation to set.
     */
    set colorBlendOperation(value: BlendOperation);
    /**
     * @description The blend operation for alpha blending in the first color attachment in the blend state.
     * @returns The alpha blend operation.
     */
    get alphaBlendOperation(): BlendOperation;
    /**
     * @description Sets the alpha blend operation for the first attachment in the blend state.
     * @param value The alpha blend operation to set.
     */
    set alphaBlendOperation(value: BlendOperation);
  }
  /**
   * @interface
   * BodyInfo
   */
  interface BodyInfo {
    /**
     * @readonly
     * @description detected
     * @type {boolean}
     */
    readonly detected: boolean;
  }
  /**
   * @class BoxCollider
   * @description Represents a box-shaped collider component used for physics collision detection.
   */
  class BoxCollider extends Collider {
    protected constructor();
    /**
     * @description Gets the size of the box collider. Represents the dimensions of the box in 3D space.
     * @returns {Vector3f} The size vector with x, y, z dimensions of the box collider
     */
    get size(): Vector3f;
    /**
     * @description Sets the size of the box collider. Updates the physical properties of the collider when changed.
     * @param value The new size vector with x, y, z dimensions for the box collider
     */
    set size(value: Vector3f);
  }
  /**
   * @class BoxCollider2D
   */
  class BoxCollider2D extends Collider2D {
    protected constructor();
    /**
     * @description Gets the size of the box collider.
     * @returns The size of the box collider.
     */
    get size(): Vector2f;
    /**
     * @description Sets the size of the box collider.
     * @param value - The new size of the box collider.
     */
    set size(value: Vector2f);
  }
  /**
   * @class Camera
   * @description
   * <br/>A Camera is a device through which the player views the world.
   * <br/>use sceneObject.addComponent("Camera") to create one camera component
   * @example
   * let cam = sceneObj.addComponent("Camera");
   * cam.clearColor = new Color(0,0,0,1);
   */
  class Camera extends Component {
    protected constructor();
    /**
     * @description When enableClearColor is true and inputTexture is null, this color is used to clear this Camera's renderTarget before drawing to it.
     */
    get clearColor(): Color;
    /**
     * @description Sets the clear color for the camera.
     * @param color - The new clear color for the camera.
     */
    set clearColor(color: Color);
    /**
     * @description Gets the clear type of the current camera.
     */
    get clearType(): CameraClearType;
    /**
     * @description Sets the type of clearing operation for the camera.
     * @param type - The new clear type for the camera.
     */
    set clearType(type: CameraClearType);
    /**
     * @description Gets the type of the camera, which can be either CameraType.Ortho or CameraType.PERSPECTIVE.
     */
    get cameraType(): CameraType;
    /**
     * @description Sets the type of the camera.
     * @param type - The new type for the camera.
     */
    set cameraType(type: CameraType);
    /**
     * @description The orthographic height of the camera if the camera type is orthographic.
     */
    get orthoHeight(): number;
    /**
     * @description Sets the orthographic height of the camera.
     * @param height - The new orthographic height for the camera.
     */
    set orthoHeight(height: number);
    /**
     * @description The distance of the far clipping plane.
     */
    get far(): number;
    /**
     * @description Sets the far clipping plane of the camera, defining the maximum distance at which objects are visible.
     * @param value - The new far clipping plane for the camera.
     */
    set far(value: number);
    /**
     * @description The distance of the near clipping plane.
     */
    get near(): number;
    /**
     * @description Sets the near clipping plane of the camera, defining the closest distance at which objects are visible.
     * @param value - The new near clipping plane for the camera.
     */
    set near(value: number);
    /**
     * @description The Camera's field of view in radians.
     */
    get fov(): number;
    /**
     * @description Sets the field of view (FOV) for the camera.
     * @param value - The new field of view for the camera.
     */
    set fov(value: number);
    /**
     * @description Gets the field of view type for the camera.
     */
    get fovType(): CameraFovType;
    /**
     * @description Sets the field of view type for the camera.
     * @param value - The new field of view type for the camera.
     */
    set fovType(value: CameraFovType);
    /**
     * @description This texture is used to clear the Camera's renderTarget before drawing.
     * <br/>If this texture is null, clearColor will be used instead.
     */
    get inputTexture(): Texture | null;
    /**
     * @description Sets the input texture for the camera.
     * @param value - The new input texture for the camera.
     */
    set inputTexture(value: Texture | null);
    /**
     * @description Gets of layers this Camera will render.
     */
    get renderLayer(): LayerSet;
    /**
     * @description Sets the render layer for the camera.
     * @param value - The new render layer for the camera.
     */
    set renderLayer(value: LayerSet);
    /**
     * @description Gets the render texture associated with the current camera.
     */
    get renderTexture(): Texture;
    /**
     * @description Sets the render texture for the camera.
     * @param value - The new render texture for the camera.
     */
    set renderTexture(value: Texture);
    /**
     * @description Gets the depth render texture associated with the current camera.
     */
    get depthRenderTexture(): Texture;
    /**
     * @description Sets the depth render texture for the camera.
     * @param value - The new depth render texture for the camera.s
     */
    set depthRenderTexture(value: Texture);
    /**
     * @description The camera's viewport, default is (0,0,1,1)
     */
    get viewport(): Rect;
    /**
     * @description Sets the camera's viewport to the specified rectangular area.
     * @param value - The new viewport for the camera.
     */
    set viewport(value: Rect);
    /**
     * @description The sorting order the Camera renders in. Every frame, Cameras render in ascending order determined by their renderOrder properties.
     */
    get renderOrder(): number;
    /**
     * @description Sets the render order of the camera.
     * @param value - The new render order for the camera.
     */
    set renderOrder(value: number);
    /**
     * @readonly
     * @description Get the projection matrix of the camera.
     */
    get projectionMatrix(): Matrix4x4f;
    /**
     * @description Converts a point from view port space to world space.
     * @param viewPortPoint - A point in view port space represented as a Vector3f.
     * @returns The corresponding point in world space as a Vector3f.
     */
    viewportToWorldPoint(viewPortPoint: Vector3f): Vector3f;
    /**
     * @description Projects a point from world space to viewport space.
     * @param worldPoint - A point in world space represented as a Vector3f.
     * @returns The calculated point in viewport space as a Vector3f.
     */
    worldToViewportPoint(worldPoint: Vector3f): Vector3f;
    /**
     * @description Converts a screen space position to a world space position, given an absolute depth.
     * @param screenPoint - A point in screen space represented as a Vector3f.
     * @returns The corresponding world space position as a Vector3f.
     */
    screenToWorldPoint(screenPoint: Vector3f): Vector3f;
    /**
     * @description Converts a world space position to a screen space position.
     * Screen position is based on the current rendered screen resolution W x H. Therefore, it represents within the range ([0,W], [0,H]), where (0,0) is the bottom-left of the screen and (W,H) is the top-right.
     * @param worldPoint - The world space point as a Vector3f.
     * @returns The corresponding screen space position as a Vector3f.
     */
    worldToScreenPoint(worldPoint: Vector3f): Vector3f;
    /**
     * @description Generates a ray from the specified position in this camera's viewport space.
     * @param viewportPoint - A point in viewport space represented as a Vector2f.
     * @returns The calculated world space ray as a Ray object.
     */
    viewportPointToRay(viewportPoint: Vector2f): Ray;
    /**
     * @description Generates a ray from the screen position in this camera's view space.
     * @param screenPoint - A point in screen space represented as a Vector2f.
     * @returns The calculated world space ray as a Ray object.
     */
    ScreenPointToRay(screenPoint: Vector2f): Ray;
    /**
     * @description Retrieves the transformation matrix that converts coordinates from world space to clip space.
     * @returns The 4x4 matrix representing the world-to-clip space transformation.
     */
    getWorldToClipMatrix(): Matrix4x4f;
    /**
     * @description Get the matrix that transforms from camera space to world space.
     * Use this to calculate where in the world a specific camera space point is located.
     * @returns The transformation matrix from camera space to world space.
     */
    getCameraToWorldMatrix(): Matrix4x4f;
    /**
     * @description Retrieves the matrix that transforms coordinates from world space to camera space.
     * <br/>This matrix is commonly known as the "view matrix" in graphics literature.
     * <br/>It can be used to determine the position of game objects in camera space or to specify a custom camera location independent of its transform.
     * @returns The transformation matrix from world space to camera space.
     */
    getWorldToCameraMatrix(): Matrix4x4f;
    /**
     * @description Gets the camera's forward direction, also known as the look-at direction.
     * @returns The forward direction vector of the camera.
     */
    getLookAt(): Vector3f;
  }
  /**
   * @description Specifies what to clear when a camera renders.
   * @enum
   */
  enum CameraClearType {
    /** Clear color only. */
    Color,
    /** Clear depth only. */
    Depth,
    /** Clear color and depth. */
    ColorDepth,
    /** Clear nothing. */
    Dont,
    /** Clear depth and stencil. */
    DepthStencil,
    /** Clear color, depth and stencil. */
    ColorDepthStencil,
    /** Clear stencil only. */
    Stencil,
    /** Clear color and stencil. */
    ColorStencil,
    /** Clear with a texture. */
    Texture,
    /** Clear depth with a texture. */
    TextureDepth
  }
  /**
   * @description Defines how the camera's Field of View (FOV) is determined.
   * @enum
   */
  enum CameraFovType {
    /** Custom FOV setting. */
    Custom,
    /** FOV based on physical properties. */
    Physical
  }
  /**
   * @description Defines the projection type of a camera.
   * @enum
   */
  enum CameraType {
    /** Perspective projection. */
    Perspective,
    /** Orthogonal projection. */
    Ortho
  }
  /**
   * @class CapsuleCollider
   */
  class CapsuleCollider extends Collider {
    protected constructor();
    /**
     * @description Gets the radius of the capsule collider.
     * @returns The radius of the capsule collider.
     */
    get radius(): number;
    /**
     * @description Sets the radius of the capsule collider.
     * @param value - The radius value to set.
     */
    set radius(value: number);
    /**
     * @description Gets the height of the capsule collider.
     * @returns The height of the capsule collider.
     */
    get height(): number;
    /**
     * @description Sets the height of the capsule collider.
     * @param value - The height value to set.
     */
    set height(value: number);
  }
  /**
   * @description
   * <br/>CaptureFrameHelper is a helper class to capture camera output.
   * @example
   * let texture = APJS.CaptureFrameHelper.captureCameraOutput(camera);
   * @class CaptureFrameHelper
   */
  class CaptureFrameHelper {
    protected constructor();
    /**
     *
     * @description capture camera output to a texture
     * @param camera The camera to capture output from.
     * @param cropRect The crop rectangle to apply to the captured frame (default is Rect(0, 0, 1, 1)).
     * @param resolutionRatio The resolution ratio to apply to the captured frame (default is 1.0).
     * @returns The captured texture, or null if capture failed.
     * @example
     * const texture = CaptureFrameHelper.captureCameraOutput(camera, new Rect(0, 0, 1, 1), 0.5);
     */
    static captureCameraOutput(camera: Camera, cropRect?: Rect, resolutionRatio?: number): Texture | null;
  }
  /**
   * @class CircleCollider2D
   * @description Represents a 2D circle collider.
   */
  class CircleCollider2D extends Collider2D {
    protected constructor();
    /**
     * @description Gets the radius of the circle collider.
     */
    get radius(): number;
    /**
     * @description Sets the radius of the circle collider.
     */
    set radius(value: number);
    /**
     * @description Indicates whether the collider should automatically adjust its size to fit the attached image.
     */
    get fitImage(): boolean;
    /**
     * @description Set whether the collider should automatically adjust its size to fit the attached image.
     */
    set fitImage(value: boolean);
  }
  /**
   * @class Collider
   */
  class Collider extends DynamicComponent {
    protected constructor();
    /**
     * @description Gets the collider is tangible.
     * When true, the collider is tangible and objects will collide with it normally.
     * When false, it becomes a trigger — objects can pass through it, but
     * collision events can still be detected.
     */
    get isTangible(): boolean;
    /**
     * @description Sets the collider is tangible.
     * When true, the collider is tangible and objects will collide with it normally.
     * When false, it becomes a trigger — objects can pass through it, but
     * collision events can still be detected.
     */
    set isTangible(value: boolean);
    /**
     * @description Gets the center position of the collider.
     */
    get center(): Vector3f;
    /**
     * @description Sets the center position of the collider.
     */
    set center(value: Vector3f);
    /**
     * @description Gets the collider is interactable through interactor node.
     * When true, Physics Interactor Script Graph Node can be used to drag this object.
     */
    get interactable(): boolean;
    /**
     * @description Sets the collider is interactable through interactor node.
     * When true, Physics Interactor Script Graph Node can be used to drag this object.
     */
    set interactable(value: boolean);
    /**
     * @description The physics material of the collider.
     */
    get physicsMaterial(): PhysicsMaterial | null;
    set physicsMaterial(value: PhysicsMaterial | null);
    /**
     * @description The rotation of the collider in quaternion form.
     */
    get rotation(): Quaternionf;
    set rotation(value: Quaternionf);
    /**
     * @description The collider’s rotation in euler angles (degrees).
     */
    get eulerAngles(): Vector3f;
    set eulerAngles(value: Vector3f);
    /**
     * @description Whether the collider emits collision events for custom script.
     * When true, the collider will send collision events
     * every frame (Enter / Stay / Exit).
     * Enable this if your script needs to listen for collision callbacks.
     */
    get emitCollisionEvent(): boolean;
    set emitCollisionEvent(value: boolean);
  }
  /**
   * @class Collider2D
   */
  class Collider2D extends DynamicComponent {
    protected constructor();
    /**
     * @description Gets the center position offset of the collider.
     */
    get offset(): Vector2f;
    /**
     * @description Sets the center position offset of the collider.
     */
    set offset(value: Vector2f);
    /**
     * @description Gets the physics material of the collider.
     */
    get physicsMaterial(): PhysicsMaterial | null;
    /**
     * @description Sets the physics material of the collider.
     */
    set physicsMaterial(value: PhysicsMaterial | null);
    /**
     * @description Gets whether the collider is tangible.
     * When true, the collider is tangible and objects will collide with it normally.
     * When false, it becomes a trigger — objects can pass through it, but
     * collision events can still be detected.
     */
    get isTangible(): boolean;
    /**
     * @description Sets whether the collider is tangible.
     * When true, the collider is tangible and objects will collide with it normally.
     * When false, it becomes a trigger — objects can pass through it, but
     * collision events can still be detected.
     */
    set isTangible(value: boolean);
    /**
     * @description Gets whether the collider emits collision events for custom script.
     * When true, the collider will send collision events
     * every frame (Enter / Stay / Exit).
     * Enable this if your script needs to listen for collision callbacks.
     */
    get emitCollisionEvent(): boolean;
    /**
     * @description Sets whether the collider emits collision events for custom script.
     * When true, the collider will send collision events
     * every frame (Enter / Stay / Exit).
     * Enable this if your script needs to listen for collision callbacks.
     */
    set emitCollisionEvent(value: boolean);
  }
  class CollisionEvent {
    constructor();
    /**
     * @readonly
     * @description Enter
     * @type {UserEventType}
     */
    static get Enter(): UserEventType;
    /**
     * @readonly
     * @description Stay
     * @type {UserEventType}
     */
    static get Stay(): UserEventType;
    /**
     * @readonly
     * @description Exit
     * @type {UserEventType}
     */
    static get Exit(): UserEventType;
  }
  class CollisionEvent2D {
    constructor();
    /**
     * @readonly
     * @description Enter
     * @type {UserEventType}
     */
    static get Enter(): UserEventType;
    /**
     * @readonly
     * @description Stay
     * @type {UserEventType}
     */
    static get Stay(): UserEventType;
    /**
     * @readonly
     * @description Exit
     * @type {UserEventType}
     */
    static get Exit(): UserEventType;
  }
  class CollisionInfo {
    constructor(point: Vector3f, normal: Vector3f, otherObject: SceneObject | null);
    /**
     * @description The point of contact in world space.
     * @type {Vector3f}
     */
    readonly point: Vector3f;
    /**
     * @description The normal of contact in world space.
     * @type {Vector3f}
     */
    readonly normal: Vector3f;
    /**
     * @description The other object involved in the collision.
     * @type {SceneObject | null}
     */
    readonly otherObject: SceneObject | null;
  }
  class CollisionInfo2D {
    constructor(point: Vector2f, normal: Vector2f, otherObject: SceneObject | null);
    /**
     * @description The point of contact in world space.
     * @type {Vector2f}
     */
    readonly point: Vector2f;
    /**
     * @description The normal of contact in world space.
     * @type {Vector2f}
     */
    readonly normal: Vector2f;
    /**
     * @description The other object involved in the collision.
     * @type {SceneObject | null}
     */
    readonly otherObject: SceneObject | null;
  }
  /**
   * @class Color
   * @example
   * const white = new Color(1, 1, 1, 1);
   */
  class Color {
    /**
     * @description Color's channel R
     */
    r: number;
    /**
     * @description Color's channel G
     */
    g: number;
    /**
     * @description Color's channel B
     */
    b: number;
    /**
     * @description Color's channel A
     */
    a: number;
    /**
     * @constructor
     * @param r - The red component of the color, or an existing Color object. Defaults to 0 if not provided.
     * @param g - The green component of the color. Defaults to 0 if not provided.
     * @param b - The blue component of the color. Defaults to 0 if not provided.
     * @param a - The alpha (opacity) component of the color. Defaults to 0 if not provided.
     */
    constructor(r?: number, g?: number, b?: number, a?: number);
    /**
     * @description Compares the current color with another color for equality.
     * @param v - The color to compare against.
     * @returns A boolean indicating whether the two colors are equal.
     */
    equals(v: Color): boolean;
    /**
     * @description Converts the color to a string representation.
     * @returns A string representation of the color in the format "Color(R: r, G: g, B: b, A: a)" where r, g, b, and a are fixed to 5 decimal places.
     */
    toString(): string;
    /**
     * @description Creates and returns a copy of the current color instance.
     * @returns A new Color object with the same properties as the original.
     */
    clone(): Color;
    /**
     * @description Compares two colors for equality.
     * @param v0 - The first color to compare.
     * @param v1 - The second color to compare.
     * @returns True if the colors are equal, false otherwise.
     */
    static equals(v0: Color, v1: Color): boolean;
  }
  /**
   * @description Represents the color channels that can be masked in a graphics operation.
   * @enum
   */
  enum ColorMask {
    /** Red channel mask. */
    R,
    /** Green channel mask. */
    G,
    /** Blue channel mask. */
    B,
    /** Alpha channel mask. */
    A
  }
  /**
   * @class CommandBuffer
   * @extends AObject
   * @description A self-contained sequence of graphics commands that can be executed by the renderer.
   *
   * ### Core Features
   * - Records and executes graphics commands in sequence
   * - Supports rendering operations like drawing meshes and clearing render targets
   * - Enables texture operations such as blitting and setting global textures
   * - Provides temporary render texture management
   * - Allows setting global shader properties
   * - Can be committed to the renderer for execution
   *
   * ### Usage Examples
   * @example <caption>Basic Usage: Drawing a Mesh</caption>
   * // Create a command buffer
   * const cmdBuffer = new CommandBuffer();
   *
   * // Clear command buffer
   * cmdBuffer.clear();
   *
   * // Set the render target
   * cmdBuffer.setRenderTexture(renderTexture);
   *
   * // Clear the render texture
   * cmdBuffer.clearRenderTexture(true, true, new Color(0, 0, 0, 0), 1.0);
   *
   * // Draw a mesh
   * cmdBuffer.drawMesh(
   *   mesh,                 // The mesh to draw
   *   transformMatrix,      // The transformation matrix
   *   material,             // The material to use
   *   0,                    // Submesh index
   *   0,                    // Shader pass index
   *   null,                 // Material properties
   *   false                 // Whether to cache
   * );
   *
   * // Commit the command buffer
   * this.scene.commitCommandBuffer(cmdBuffer);
   *
   * @example <caption>Texture Operations: Blitting</caption>
   * // Create a command buffer
   * const cmdBuffer = new CommandBuffer();
   *
   * // Blit from one texture to another
   * cmdBuffer.blit(sourceTexture, destinationTexture);
   *
   * // Commit the command buffer
   * this.scene.commitCommandBuffer(cmdBuffer);;
   *
   * @example <caption>Using Temporary Render Textures</caption>
   * // Create a command buffer
   * const cmdBuffer = new CommandBuffer();
   *
   * // Define render texture description
   * const rtDesc = new RenderTextureCreateDesc();
   * rtDesc.width = 1024;
   * rtDesc.height = 1024;
   * rtDesc.internalFormat = InternalFormat.RGBA8;
   *
   * // Get a temporary render texture
   * const tempRTId = cmdBuffer.propertyToID('tempRT');
   * cmdBuffer.getTemporaryRT(tempRTId, rtDesc, false);
   *
   * // Use the temporary render texture
   * cmdBuffer.setRenderTexture(tempRTId);
   * cmdBuffer.clearRenderTexture(true, true, new Color(0, 0, 0, 0), 1.0);
   * cmdBuffer.drawMesh(mesh, transformMatrix, material, 0, 0, null, false);
   *
   * // Blit from temporary RT to final texture
   * cmdBuffer.setRenderTexture(finalTexture);
   * cmdBuffer.clearRenderTexture(true, true, new Color(0, 0, 0, 0), 1.0);
   * cmdBuffer.blit(tempRTId, finalTexture);
   *
   * // Release the temporary render texture
   * cmdBuffer.releaseTemporaryRT(tempRTId);
   *
   * // Commit the command buffer
   * this.scene.commitCommandBuffer(cmdBuffer);;
   *
   * @example <caption>Advanced Usage: Brush Rendering Pipeline</caption>
   * // Initialize CommandBuffers
   * const blitCB = new CommandBuffer();
   * const brushCB = new CommandBuffer();
   * const clearCB = new CommandBuffer();
   *
   * // ... (Initialize textures, materials, matrices) ...
   *
   * // 1. Blit custom material to a render texture
   * blitCB.clearAll();
   * blitCB.setRenderTexture(customMatBlitTexture);
   * blitCB.drawMesh(quadMesh, transformMatrix, customMaterial, 0, 0, null);
   *
   * // 2. Draw brush strokes
   * brushCB.clearAll();
   * brushCB.setRenderTexture(brushTexture);
   * brushCB.setGlobalMatrix('u_View', viewMatrix);
   * brushCB.setGlobalMatrix('u_Projection', projMat);
   * brushCB.drawMesh(quadMesh, transformMatrix, brushMaterial, 0, 0, null);
   *
   * // 3. Clear brush texture (if needed)
   * clearCB.clearAll();
   * clearCB.setRenderTexture(brushTexture);
   * clearCB.clearRenderTexture(true, true, new Color(0, 0, 0, 0), 0);
   *
   * // Commit CommandBuffers
   * this.scene.commitCommandBuffer(blitCB);
   * this.scene.commitCommandBuffer(brushCB);
   * this.scene.commitCommandBuffer(clearCB);
   *
   * @see Material
   * @see Mesh
   * @see Texture
   * @see RenderTextureCreateDesc
   */
  class CommandBuffer extends AObject {
    /**
     * @constructor
     * @param rtti - An optional native command buffer object. If not provided, a new one will be created.
     */
    constructor();
    /**
     * @description Adds a command to copy a texture to another.
     *
     * @param src - The source texture or temporary render texture ID.
     * @param dest - The destination texture or temporary render texture ID.
     */
    blit(src: Texture | number, dest: Texture | number): void;
    /**
     * @description Adds a command to copy a texture to another using a material.
     *
     * @param src - The source texture or temporary render texture ID.
     * @param dest - The destination texture or temporary render texture ID.
     * @param material - The material to use for the blit operation.
     * @param shaderPass - The shader pass to use.
     * @param isCache - Whether to cache the blit operation.
     * @param properties - An optional block of material properties to apply.
     */
    blitWithMaterial(src: Texture | number, dest: Texture | number, material: Material, shaderPass: number, isCache: boolean, properties?: MaterialPropertyBlock): void;
    /**
     * @description Clears all commands from the buffer.
     */
    clearAll(): void;
    /**
     * @description Adds a command to clear a render target.
     *
     * @param clearColor - Whether to clear the color buffer.
     * @param clearDepth - Whether to clear the depth buffer.
     * @param backgroundColor - The color to clear with.
     * @param depth - The depth value to clear with.
     */
    clearRenderTexture(clearColor: boolean, clearDepth: boolean, backgroundColor: Color, depth: number): void;
    /**
     * @description Adds a command to draw a mesh.
     *
     * @param mesh - The mesh to draw.
     * @param matrix - The transformation matrix to use.
     * @param material - The material to use.
     * @param submeshIndex - The index of the submesh to render.
     * @param shaderPass - The shader pass to use. Use -1 to render all passes.
     * @param properties - Optional material properties to apply for this draw call.
     * @param isCache - Whether to cache the draw operation.
     */
    drawMesh(mesh: Mesh, matrix: Matrix4x4f, material: Material, submeshIndex: number, shaderPass: number, properties?: MaterialPropertyBlock | undefined, isCache?: boolean): void;
    /**
     * @description Adds a command to set a global shader color property.
     *
     * @param name - The name of the color property.
     * @param color - The color value to set.
     */
    setGlobalColor(name: string, color: Color): void;
    /**
     * @description Adds a command to set a global shader float property.
     *
     * @param name - The name of the float property.
     * @param value - The float value to set.
     */
    setGlobalFloat(name: string, value: number): void;
    /**
     * @description Adds a command to set a global shader vector property.
     *
     * @param name - The name of the vector property.
     * @param value - The vector value to set.
     */
    setGlobalVector(name: string, value: Vector4f): void;
    /**
     * @description Adds a command to set a global shader matrix property.
     *
     * @param name - The name of the matrix property.
     * @param value - The matrix value to set.
     */
    setGlobalMatrix(name: string, value: Matrix4x4f): void;
    /**
     * @description Adds a command to set a global shader texture property.
     *
     * @param name - The name of the texture property.
     * @param texture - The texture to set, or a temporary render texture ID.
     */
    setGlobalTexture(name: string, texture: number | Texture): void;
    /**
     * @description Adds a command to set the active render target.
     *
     * @param target - The render target texture or a temporary render texture ID.
     */
    setRenderTexture(target: Texture | number): void;
  }
  /**
   * @class Component
   * @description
   * Base class for everything attached to a SceneObject.
   * <br/> Note that your code will never directly create a Component. Instead, you write script code, and attach the script to a SceneObject.
   * <br/> use SceneObject.addComponent("MeshRenderer");
   * @example let renderCom = currSceneObj.addComponent("MeshRenderer");
   */
  class Component extends AObject {
    protected constructor();
    /**
     * @description Gets whether the component is enabled. True if the component is enabled, false otherwise.
     */
    get enabled(): boolean;
    /**
     * @description Sets whether the component is enabled. True to enable the component, false to disable it.
     */
    set enabled(value: boolean);
    /**
     * @description Checks if the component is inheritedEnabled.
     * @returns True if the component is inherited and enabled, false otherwise.
     */
    isInheritedEnabled(): boolean;
    /**
     * @description Gets the scene object this component is attached to.
     * @returns The scene object this component is attached to.
     */
    getSceneObject(): SceneObject;
  }
  /**
   * @class ConstantForce2D
   * @description Represents a constant force and torque to be applied to a RigidBody2D.
   */
  class ConstantForce2D {
    readonly worldForce: Vector2f;
    readonly worldTorque: number;
    constructor(worldForce: Vector2f, worldTorque: number);
  }
  /**
   * @class ConstantForce3D
   * @description Represents a constant force and torque to be applied to a RigidBody.
   */
  class ConstantForce3D {
    readonly worldForce: Vector3f;
    readonly worldTorque: Vector3f;
    constructor(worldForce: Vector3f, torque: Vector3f);
  }
  /**
   * @description Defines the culling mode for rendering.
   * @enum
   */
  enum CullMode {
    /** No faces are culled. */
    None,
    /** Front-facing faces are culled. */
    Front,
    /** Back-facing faces are culled. */
    Back,
    /** Both front and back-facing faces are culled. */
    FrontAndBack
  }
  /**
   * @description Defines the depth comparison function used for depth testing.
   * @enum
   */
  enum DepthFunction {
    /** Depth test never passes. */
    Never,
    /** Depth test passes if the incoming depth value is less than the stored depth value. */
    Less,
    /** Depth test passes if the incoming depth value is equal to the stored depth value. */
    Equal,
    /** Depth test passes if the incoming depth value is less than or equal to the stored depth value. */
    LessOrEqual,
    /** Depth test passes if the incoming depth value is greater than the stored depth value. */
    Greater,
    /** Depth test passes if the incoming depth value is not equal to the stored depth value. */
    NotEqual,
    /** Depth test passes if the incoming depth value is greater than or equal to the stored depth value. */
    GreaterOrEqual,
    /** Depth test always passes. */
    Always
  }
  /**
   * @namespace DeviceInfo
   * @description Get information of current device.
   */
  namespace DeviceInfo {
    /**
     * @description Gets the operating system of the current device.
     * @returns The operating system type of the device.
     */
    function getOS(): OS;
    /**
     * @description Gets the camera facing type of the device.
     * @returns The camera facing type identifier.
     */
    function getCameraFacingType(): number;
    /**
     * @memberof DeviceInfo
     * @description Get the resolution of the device camera input texture.
     */
    function getDeviceCameraResolution(): Vector2f;
  }
  /**
   * @class DirectionalLight
   * @description Represents a directional light source in the scene.
   */
  class DirectionalLight extends Light {
    protected constructor();
    /**
     * @description Gets specifies whether this light casts shadows.
     */
    get castShadow(): boolean;
    /**
     * @description Sets specifies whether this light casts shadows.
     */
    set castShadow(value: boolean);
    /**
     * @description Gets the resolution of the shadow map.
     */
    get shadowResolution(): Vector2f;
    /**
     * @description Sets the resolution of the shadow map.
     */
    set shadowResolution(value: Vector2f);
    /**
     * @description Gets the shadow bias to prevent shadow acne (self-shadowing artifacts).
     */
    get shadowBias(): number;
    /**
     * @description Sets the shadow bias to prevent shadow acne (self-shadowing artifacts).
     */
    set shadowBias(value: number);
    /**
     * @description Gets the strength of the shadows.
     */
    get shadowStrength(): number;
    /**
     * @description Gets the strength of the shadows.
     */
    set shadowStrength(value: number);
    /**
     * @description Get specifies whether to use soft shadows.
     */
    get softShadow(): boolean;
    /**
     * @description Get specifies whether to use soft shadows.
     */
    set softShadow(value: boolean);
    /**
     * @description Gets the softness of the shadows when soft shadows are enabled.
     */
    get shadowSoftness(): number;
    /**
     * @description Sets the softness of the shadows when soft shadows are enabled.
     */
    set shadowSoftness(value: number);
    /**
     * @description Gets the color of the shadows cast by this light.
     */
    get shadowColor(): Color;
    /**
     * @description Sets the color of the shadows cast by this light.
     */
    set shadowColor(value: Color);
    /**
     * @description Gets the area of the shadow frustum.
     */
    get shadowFrustumArea(): number;
    /**
     * @description Sets the area of the shadow frustum.
     */
    set shadowFrustumArea(value: number);
    /**
     * @description Gets specifies whether the shadow frustum should be calculated automatically.
     */
    get shadowAutoFrustum(): boolean;
    /**
     * @description Sets specifies whether the shadow frustum should be calculated automatically.
     */
    set shadowAutoFrustum(value: boolean);
    /**
     * @description Gets the near plane of the shadow frustum.
     */
    get shadowFrustumNear(): number;
    /**
     * @description Sets the near plane of the shadow frustum.
     */
    set shadowFrustumNear(value: number);
    /**
     * @description Gets the far plane of the shadow frustum.
     */
    get shadowFrustumFar(): number;
    /**
     * @description Sets the far plane of the shadow frustum.
     */
    set shadowFrustumFar(value: number);
  }
  /**
   * @class DistanceJoint2D
   * @description A 2D distance joint.
   */
  class DistanceJoint2D extends Joint2D {
    protected constructor();
  }
  /**
   * @class DynamicBitset
   * @description A set of bits that can be dynamically resized.
   */
  class DynamicBitset {
    /**
     * @constructor
     * @description Constructs a new instance of the DynamicBitset class.
     */
    constructor();
    /**
     * @constructor
     * @description Constructs a new DynamicBitset with a specified number of bits.
     * @param num_bits - The initial number of bits. All bits are initialized to 0.
     * @param value - The initial value for all bits.
     */
    constructor(num_bits: number, value: number);
    /**
     * @description Compares this DynamicBitset with another for equality.
     * @param v - The DynamicBitset to compare with.
     * @returns `true` if the two bitsets are equal, `false` otherwise.
     */
    equals(v: DynamicBitset): boolean;
    /**
     * @description Returns a string representation of the DynamicBitset.
     * @returns A string representing the current state of the DynamicBitset.
     */
    toString(): string;
    /**
     * @description Tests if a bit is set.
     * @param v - The index of the bit to test.
     * @returns `true` if the bit at index `v` is set, `false` otherwise.
     */
    test(v: number): boolean;
    /**
     * @description Checks if no bits are set to 1.
     * @returns `true` if at least one bit is set, `false` otherwise.
     */
    any(): boolean;
    /**
     * @description Checks if no bits are set to 1.
     * @returns true` if no bits are set, `false` otherwise.
     */
    none(): boolean;
    /**
     * @description Resets the bitset to a specified value.
     * @param v - The value to reset the bitset to.
     * @returns The modified DynamicBitset instance.
     */
    reset(v: number): DynamicBitset;
    /**
     * @description Set the value in the dynamic bitset.
     * If no arguments are provided, sets the default value.
     * If one argument is provided, sets the value at the specified index.
     * If two arguments are provided, sets the range of values from the start index to the end index.
     * @param v - The index or start index for setting the value.
     * @param v1 - The end index for setting a range of values.
     */
    set(v?: number, v1?: number): void;
    /**
     * @description Compares two DynamicBitset instances for equality.
     * @param a - The first bitset to compare.
     * @param b - The second bitset to compare.
     * @returns `true` if the two bitsets are equal, `false` otherwise.
     */
    static equals(v0: DynamicBitset, v1: DynamicBitset): boolean;
  }
  /**
   * @class DynamicChain
   */
  class DynamicChain extends DynamicComponent {
    protected constructor();
    /**
     * @description Gets the damping value of the dynamic chain which controls how quickly the chain movement slows down.
     * @returns The damping value of the dynamic chain.
     */
    get damping(): number;
    /**
     * @description Sets the damping value of the dynamic chain which controls how quickly the chain movement slows down.
     * @param value - The damping value of the dynamic chain.
     */
    set damping(value: number);
    /**
     * @description Gets the elasticity value of the dynamic chain which controls how bouncy the chain is.
     */
    get elasticity(): number;
    /**
     * @description Sets the elasticity value of the dynamic chain which controls how bouncy the chain is.
     * @param value - The elasticity value of the dynamic chain.
     */
    set elasticity(value: number);
    /**
     * @description Gets the stiffness value of the dynamic chain which controls how stiff the chain is.
     */
    get stiffness(): number;
    /**
     * @description Sets the stiffness value of the dynamic chain which controls how stiff the chain is.
     * @param value - The stiffness value of the dynamic chain.
     */
    set stiffness(value: number);
    /**
     * @description Gets the total inertia of the dynamic chain which controls how fast the chain moves.
     */
    get inertia(): number;
    /**
     * @description Sets the total inertia of the dynamic chain which controls how fast the chain moves.
     * @param value - The total inertia of the dynamic chain.
     */
    set inertia(value: number);
    /**
     * @description the consistent external force applied to the dynamic chain
     */
    get force(): Vector3f;
    /**
     * @description Sets the consistent external force applied to the dynamic chain.
     * @param value - The consistent external force applied to the dynamic chain.
     */
    set force(value: Vector3f);
    /**
     * @description Gets whether the force applied to the dynamic chain is local or not.
     */
    get isLocalForce(): boolean;
    /**
     * @description Sets whether the force applied to the dynamic chain is local or not.
     */
    set isLocalForce(value: boolean);
    /**
     * @description Gets whether the force applied to the dynamic chain is relative to another object.
     */
    get isRelative(): boolean;
    /**
     * @description Sets whether the force applied to the dynamic chain is relative to another object.
     * @param value - Whether the force applied to the dynamic chain is relative to another object.
     */
    set isRelative(value: boolean);
    /**
     * @description Gets whether animation physics blending is enabled for the dynamic chain.
     */
    get physicsAnimation(): boolean;
    /**
     * @description Sets whether animation physics blending is enabled for the dynamic chain.
     */
    set physicsAnimation(value: boolean);
    /**
     * @description Gets the animation physics blending value for the dynamic chain.
     */
    get physicsAnimationRate(): number;
    /**
     * @description Sets the animation physics blending value for the dynamic chain.
     */
    set physicsAnimationRate(value: number);
  }
  /**
   * @class DynamicComponent
   */
  class DynamicComponent extends Component {
    protected constructor();
  }
  /**
   * @class EdgeCollider2D
   */
  class EdgeCollider2D extends Collider2D {
    protected constructor();
    /**
     * @description Gets or sets the points that define the edge collider.
     * The points are connected in sequence to form the edge. At least two points are required
     * to create a valid edge collider. An array of Vector2f points defining the edge
     */
    get points(): Vector2f[];
    /**
     * @description Sets the points that define the edge collider.
     * @param value An array of Vector2f points defining the edge
     */
    set points(value: Vector2f[]);
  }
  /**
   * @class EnvironmentLight
   * @description Represents an environment light component.
   */
  class EnvironmentLight extends Component {
    protected constructor();
    /**
     * @description Gets the render layer of the environment light.
     */
    get renderLayer(): LayerSet;
    /**
     * @description Sets the render layer of the environment light.
     */
    set renderLayer(value: LayerSet);
    /**
     * @description Sets the environment map (cubemap) for specular reflections.
     * **Only supports TextureCube.**
     */
    set environmentMap(value: Texture);
    /**
     * @description Gets the environment map (cubemap) for specular reflections.
     */
    get environmentMap(): Texture;
    /**
     * @description Sets the intensity of the environment light.
     */
    set intensity(value: number);
    /**
     * @description Gets the intensity of the environment light.
     */
    get intensity(): number;
    /**
     * @description Sets the rotation of the environment light in degrees.
     */
    set rotation(value: number);
    /**
     * @description Gets the rotation of the environment light in degrees.
     */
    get rotation(): number;
    /**
     * @description The tint color of the environment light.
     */
    set color(color: Color);
    /**
     * @description The tint color of the environment light.
     */
    get color(): Color;
  }
  /**
   * @namespace
   * EventManager
   */
  namespace EventManager {
    /**
     * @description Defines a user-defined event type.
     * This method allows you to create and register a custom event type with a unique identifier,
     * which can be used to trigger and handle events in your application.
     *
     * @param eventName - The unique identifier for the user event type. Can be either a number or a string.
     * @returns The newly defined or existing UserEventType associated with the provided identifier.
     *
     * @example
     * ```ts
     * const USER_EVENT_01: UserEventType = APJS.EventManager.defineUserEventType(42);
     * const USER_EVENT_02: UserEventType = APJS.EventManager.defineUserEventType('foo');
     * ```
     */
    function defineUserEventType(eventName: number | string): UserEventType;
    /**
     * @description Creates and returns a new event instance based on the provided event type.
     * @param eventType - The type of the event, which can be either a numeric code or a predefined UserEventType enum value.
     * @returns An IEvent object representing the created event.
     * @example
     * ```ts
     * const event = APJS.EventManager.createEvent(myEventType);
     * ```
     */
    function createEvent(eventType: number | UserEventType): IEvent;
    /**
     * @description Retrieves the global event emitter instance. If it doesn't exist, it creates a new one.
     * @returns The global event emitter instance.
     * @example
     * ```ts
     * const emitter = APJS.EventManager.getGlobalEmitter();
     * emitter.emit(myEvent);
     * ```
     */
    function getGlobalEmitter(): IEventEmitter;
    /**
     * @description Retrieves the event emitter associated with a given object.
     * @param obj - The object for which to get the event emitter. This can be an AObject.
     * @returns The event emitter for the specified object, or undefined if the object is invalid or not supported.
     * @example
     * ```ts
     * const emitter = APJS.EventManager.getObjectEmitter(myObject);
     * emitter.emit(myEvent);
     * ```
     */
    function getObjectEmitter(obj: AObject): IEventEmitter;
    /**
     * @description Retrieves the event emitter associated with gesture.
     * @returns The event emitter for the gesture, which can be used to subscribe to gesture events defined in GestureType.
     * @example
     * const emitter = APJS.EventManager.getGestureEmitter();
     * const callback = (event:APJS.IEvent) => {
     *   const gestureInfo = event.args[0] as APJS.GestureInfo;
     *   const offset = gestureInfo.endPoint - gestureInfo.startPoint;
     *   // Do something with drag offset
     * }
     * emitter.on(GestureType.Drag, callback)
     */
    function getGestureEmitter(): IEventEmitter;
  }
  /**
   * @description Event type
   * @enum
   * @example
   *  let callback = (event:IEvent) => {
   *    const touchInfo = event.args[0] as APJS.TouchData;
   *    const touchPhase = touchInfo.phase;
   *    ...
   *
   *  }
   *
   *  const globalEmitter = APJS.EventManager.getGlobalEmitter();
   *  globalEmitter.on(APJS.EventType.Touch, callback);
   */
  enum EventType {
    /**
     * @description Touch event, the event args is [TouchData, ]
     */
    Touch,
    /**
     * @description Record start event, the event args is empty
     */
    RecordStart,
    /**
     * @description Record end event, the event args is empty
     */
    RecordEnd
  }
  /**
   * @interface
   * Face106Interface
   */
  interface Face106Interface {
    /**
     * @readonly
     * @description Each detected face has a unique faceID. When a face that was lost during tracking is detected again, it will have a new faceID.
     */
    readonly ID: number;
    /**
     * @readonly
     * @description Eye distance
     */
    readonly eyeDistance: number;
    /**
     * @readonly
     * @description Pitch angle, in radians
     */
    readonly pitch: number;
    /**
     * @readonly
     * @description Vector2f **Flat Array** <br/>Array of 106 key points of the human face.
     */
    readonly pointsArray: Float32Array;
    /**
     * @readonly
     * @description The rectangular area of the face
     */
    readonly rect: Rect;
    /**
     * @readonly
     * @description Rotation angle, in radians
     */
    readonly roll: number;
    /**
     * @readonly
     * @description score
     */
    readonly score: number;
    /**
     * @readonly
     * @description Visibility of corresponding points. The point is not occluded: 1.0, and occluded: 0.0
     */
    readonly visibilityArray: Float32Array;
    /**
     * @readonly
     * @description Horizontal rotation angle, in radians
     */
    readonly yaw: number;
    /**
     * @description Action check
     * @param action - action
     */
    hasAction(action: number | FaceAction): boolean;
  }
  /**
   * @description Enum representing various facial actions that face can perform.
   * @enum
   * @property BrowJump Causes the face eyebrows to jump.
   * @property EyeBlink Makes the face blink both eyes.
   * @property EyeBlinkLeft Makes the face blink only the left eye.
   * @property EyeBlinkRight Makes the face blink only the right eye.
   * @property HeadPitch Tilts the face head up and down.
   * @property HeadYaw Turns the face head side to side.
   * @property MouthAh Opens the face mouth in an "ah" shape.
   * @property MouthPout Puts the face mouth into a pouting position.
   * @property SideNod Nods the face head from side to side.
   */
  enum FaceAction {
    BrowJump,
    EyeBlink,
    EyeBlinkLeft,
    EyeBlinkRight,
    HeadPitch,
    HeadYaw,
    MouthAh,
    MouthPout,
    SideNod
  }
  /**
   * @description Enum representing different facial expressions.
   * @enum
   * @property Unknown Unknown expression.
   * @property Angry Angry expression.
   * @property Disgust Disgusted expression.
   * @property Fear Fearful expression.
   * @property Happy Happy expression.
   * @property Sad Sad expression.
   * @property Surprise Surprised expression.
   * @property Neutral Neutral expression.
   */
  enum FaceAttrExpression {
    Unknown,
    Angry,
    Disgust,
    Fear,
    Happy,
    Sad,
    Surprise,
    Neutral
  }
  /**
   * @description Gender attribute of a face.
   * @enum
   * @property Unknown The gender is unknown.
   * @property Male The gender is male.
   * @property Female The gender is female.
   */
  enum FaceAttrGender {
    Unknown,
    Male,
    Female
  }
  /**
   * @interface
   * FaceAttributeInterface
   */
  interface FaceAttributeInterface {
    /**
     * @readonly
     * @description age
     */
    readonly age: number;
    /**
     * @readonly
     * @description attractiveness score
     */
    readonly attractive: number;
    /**
     * @readonly
     * @description Probability of being male
     */
    readonly boyProbability: number;
    /**
     * @readonly
     * @description The probabilities of facial expression types
     */
    readonly expressionProbabilities: Float32Array;
    /**
     * @readonly
     * @description Expression type
     */
    readonly expressionType: FaceAttrExpression;
    /**
     * @readonly
     * @description gender
     */
    readonly gender: FaceAttrGender;
    /**
     * @readonly
     * @description Degree of happiness
     */
    readonly happyScore: number;
  }
  /**
   * @interface
   * FaceFaceMaskInterface
   */
  interface FaceFaceMaskInterface {
    /**
     * @readonly
     * @description Each detected face has a unique faceID. When a face that was lost during tracking is detected again, it will have a new faceID.
     */
    readonly ID: number;
    /**
     * @readonly
     * @description Face mask. size = faceMaskSize * faceMaskSize
     */
    readonly faceMask: Uint8Array;
    /**
     * @readonly
     * @description Face mask size.
     */
    readonly faceMaskSize: number;
  }
  /**
   * @class FaceMakeup
   * @description Represents a face makeup component that handles facial makeup rendering with customizable properties such as texture, opacity, and color.
   */
  class FaceMakeup extends Component {
    protected constructor();
    /**
     * @description Gets the intensity level of the face makeup component
     */
    get intensity(): number;
    /**
     * @description Sets the intensity level of the face makeup component
     */
    set intensity(value: number);
    /**
     * @description Gets the main texture applied to the face makeup component
     */
    get makeupTexture(): Texture | null;
    /**
     * @description Sets the main texture applied to the face makeup component
     */
    set makeupTexture(value: Texture | null);
    /**
     * @description Gets whether the opacity effect is enabled for the face makeup component
     */
    get opacityEnabled(): boolean;
    /**
     * @description Sets whether the opacity effect is enabled for the face makeup component
     */
    set opacityEnabled(value: boolean);
    /**
     * @description Gets the texture used for opacity control in the face makeup component
     */
    get opacityTexture(): Texture | null;
    /**
     * @description Sets the texture used for opacity control in the face makeup component
     */
    set opacityTexture(value: Texture | null);
    /**
     * @description Gets the base color applied to the face makeup component
     */
    get color(): Color;
    /**
     * @description Sets the base color applied to the face makeup component
     */
    set color(value: Color);
    /**
     * @description Sets a material property for a specific face index
     * @param key - The uniform key to set
     * @param face - The face index to apply the property to
     * @param value - The value to set
     */
    setMaterialPropertyByIndex(key: string, face: number, value: number): void;
    /**
     * @description Sets a uniform property for all face indexes, handling different value types appropriately
     * @param key - The uniform key to set
     * @param value - The value to set, which can be a number, Vector4f, Matrix4x4f, or Texture
     */
    setMaterialProperty(key: string, value: number | Vector4f | Matrix4x4f | Texture): void;
  }
  /**
   * @interface
   * FaceMouthMaskInterface
   */
  interface FaceMouthMaskInterface {
    /**
     * @readonly
     * @description Each detected face has a unique faceID. When a face that was lost during tracking is detected again, it will have a new faceID.
     */
    readonly ID: number;
    /**
     * @readonly
     * @description Face mask. size = faceMaskSize * faceMaskSize
     */
    readonly faceMask: Uint8Array;
    /**
     * @readonly
     * @description Face mask size.
     */
    readonly faceMaskSize: number;
  }
  /**
   * @interface
   * FacePetInfoInterface
   */
  interface FacePetInfoInterface {
    /**
     * @readonly
     * @description Each detected pet face has a unique faceID. When a pet face that was lost during tracking is detected again, it will have a new faceID.
     */
    readonly ID: number;
    /**
     * @readonly
     * @description Action type <br/>
     The 1st, 2nd, and 3rd digits are respectively encoded as: left eye open/close, right eye open/close, mouth open/close
     */
    readonly action: number;
    /**
     * @readonly
     * @description Ear status <br/>
     0 indicates the ears are upright, and 1 indicates the ears are drooping.
     */
    readonly earType: number;
    /**
     * @readonly
     * @description Pet face types (cat, dog, human)
     */
    readonly facePetType: FacePetType;
    /**
     * @readonly
     * @description Pitch angle, with the real measurement being negative above and positive below, in radians
     */
    readonly pitch: number;
    /**
     * @readonly
     * @description Vector2f **Flat Array**. Normalized, 2D key point coordinates.
     */
    readonly pointsArray: Float32Array;
    /**
     * @readonly
     * @description The rectangular area of the pet face
     */
    readonly rect: Rect;
    /**
     * @readonly
     * @description Rotation angle, with the true measurement being negative on the left and positive on the right, in radians
     */
    readonly roll: number;
    /**
     * @readonly
     * @description score
     */
    readonly score: number;
    /**
     * @readonly
     * @description Horizontal rotation angle, with the true measurement being negative on the left and positive on the right, in radians
     */
    readonly yaw: number;
  }
  /**
   * @description Represents different types of face pets.
   * @enum
   * @property Cat Represents a cat face pet.
   * @property Dog Represents a dog face pet.
   * @property Human Represents a human face pet.
   * @property Others Represents other types of face pets.
   */
  enum FacePetType {
    Cat,
    Dog,
    Human,
    Others
  }
  /**
   * @class FaceReshapeRenderer
   * @description Represents a face reshape renderer that provides advanced facial reshaping capabilities.
   * It supports precise control over facial features with pre-defined warp configurations,
   * enabling both large-scale adjustments (e.g., face slimming) and fine-grained operations (e.g., eye shape refinement).
   * The renderer supports multiple face indexes and provides methods to manage feature weights dynamically.
   *
   * ### Usage Examples
   * @example <caption>Face Index Switching</caption>
   * // Switch between tracked faces on touch
   * const reshapeRenderer = sceneObject.getComponent('FaceReshapeRenderer') as APJS.FaceReshapeRenderer;
   * const faceIndexes = reshapeRenderer.faceIndexes;
   * let currentIndex = 0;
   * function onTouch() {
   *   currentIndex = (currentIndex + 1) % faceIndexes.length;
   *   reshapeRenderer.faceIndexes = [faceIndexes[currentIndex]];
   * }
   *
   * @example <caption>Feature Weight Control</caption>
   * // Activate specific reshape feature on touch
   * const reshapeRenderer = sceneObject.getComponent('FaceReshapeRenderer') as APJS.FaceReshapeRenderer;
   * const features = reshapeRenderer.getFeatureNames();
   * let currentIndex = 0;
   * function onTouch() {
   *   features.forEach((feature, index) => {
   *     reshapeRenderer.setFeatureWeight(feature, index === currentIndex ? 1.0 : 0);
   *   });
   *   currentIndex = (currentIndex + 1) % features.length;
   * }
   * @extends Renderer
   */
  class FaceReshapeRenderer extends Renderer {
    protected constructor();
    /**
     * @description indexes of faces to apply reshaping, start from 0
     * @type {number[]}
     */
    get faceIndexes(): number[];
    set faceIndexes(value: number[]);
    /**
     * @description Gets the list of face reshape feature names
     * @returns {string[]} Array of face reshape feature names
     */
    getFeatureNames(): string[];
    /**
     * @description Gets the weight value of the face reshape feature with the specified name or index.
     * Returns 0 if no corresponding organ slider is found or if the feature is out of bounds.
     * @param feature The name (string) or index (number) of the face reshape feature
     * @returns The weight value of the face reshape feature
     */
    getFeatureWeight(feature: string | number): number;
    /**
     * @description Sets the weight value of the face reshape feature with the specified name or index.
     * Clamps weight between 0 and 1. Updates both organ and boundary sliders if they exist.
     * @param feature The name (string) or index (number) of the face reshape feature
     * @param weight The weight value to set for the face reshape feature
     */
    setFeatureWeight(feature: string | number, weight: number): void;
  }
  /**
   * @interface
   * FaceTeethMaskInterface
   */
  interface FaceTeethMaskInterface {
    /**
     * @readonly
     * @description Each detected face has a unique faceID. When a face that was lost during tracking is detected again, it will have a new faceID.
     */
    readonly ID: number;
    /**
     * @readonly
     * @description Face mask. size = faceMaskSize * faceMaskSize
     */
    readonly faceMask: Uint8Array;
    /**
     * @readonly
     * @description Face mask size.
     */
    readonly faceMaskSize: number;
  }
  /**
   * @description Mipmap filtering mode for a texture.
   * @enum
   */
  enum FilterMipmapMode {
    /** No mipmap filtering. */
    None,
    /** Selects the nearest mipmap level. */
    Nearest,
    /** Selects the two nearest mipmap levels and linearly interpolates between them. */
    Linear
  }
  /**
   * @description Texture filtering mode.
   * @enum
   */
  enum FilterMode {
    /** Point filtering - selects the nearest pixel. */
    Nearest,
    /** Bilinear filtering - interpolates between 4 nearest pixels. */
    Linear
  }
  /**
   * @class FixedJoint
   */
  class FixedJoint extends Joint3D {
    protected constructor();
  }
  /**
   * @class FixedJoint2D
   */
  class FixedJoint2D extends Joint2D {
    protected constructor();
  }
  /**
   * @enum ForceMode
   * @description Defines how force is applied to a rigid body.
   */
  enum ForceMode2D {
    /** Continuous force, uses mass (a = F/m). Persistent in this implementation. */
    Force = 0,
    /** Continuous acceleration, ignores mass (a = F). Persistent. */
    Acceleration = 1,
    /** Instantaneous impulse, uses mass (dv = F/m). One-time application. */
    Impulse = 2,
    /** Instantaneous velocity change, ignores mass (dv = F). One-time application. */
    VelocityChange = 3
  }
  /**
   * @enum ForceMode3D
   * @description Enumeration of force modes for applying forces to rigid bodies in 3D physics.
   */
  enum ForceMode3D {
    Force = 0,
    Acceleration = 1,
    Impulse = 2,
    VelocityChange = 3
  }
  /**
   * @class GestureInfo
   * @description The gesture info is carried by gesture event, record the info of one gesture.
   * @example
   * const emitter = APJS.EventManager.getGestureEmitter();
   * const callback = (event:APJS.IEvent) => {
   *   const gestureInfo = event.args[0] as APJS.GestureInfo;
   *   const point = gestureInfo.endPoint;
   *   ...
   * }
   * emitter.on(GestureType.LongTap, callback)
   * @extends AObject
   */
  class GestureInfo extends AObject {
    protected constructor();
    /**
     * @readonly
     * @description The gesture type of this gesture.
     */
    get type(): GestureType;
    /**
     * @readonly
     * @description The gesture start position of this gesture. Only valid when gesture type is Drag or Drop. The value is 0 - 1. 0 is the top-left corner of the screen. 1 is the bottom-right corner of the screen.
     */
    get startPoint(): Vector2f;
    /**
     * @readonly
     * @description The gesture end position of this gesture. Valid for all gesture types. The value is 0 - 1. 0 is the top-left corner of the screen. 1 is the bottom-right corner of the screen.
     */
    get endPoint(): Vector2f;
    /**
     * @readonly
     * @description Start dragging. When a drag-and-drop action occurs, a series of Drag events will be received. This flag can be used to obtain the event that triggered the drag-and-drop action. Only valid when gesture type is Drag.
     * @example Control the position of an object by drag gesture.
     * const gestureEmitter = APJS.EventManager.getGestureEmitter();
     * const dragCallback = (event:APJS.IEvent) => {
     *   const gestureInfo = event.args[0] as APJS.GestureInfo;
     *   if (gestureInfo.firstTrigger) {
     *     this.currentDragStartPoint = gestureInfo.startPoint;
     *     this.startAnchoredPosition = this.imageTransform.anchoredPosition;
     *   }
     *   const offset = gestureInfo.endPoint.subtract(this.currentDragStartPoint);
     *   this.imageTransform.anchoredPosition = offset.multiply(new APJS.Vector2f(screenResolution.x, -screenResolution.y)).add(this.startAnchoredPosition);
     * }
     * gestureEmitter.on(APJS.GestureType.Drag, dragCallback);
     */
    get firstTrigger(): boolean;
    /**
     * @readonly
     * @description The duration of long-tap gesture. Only valid for LongTap gesture. The value is in milliseconds.
     */
    get duration(): number;
  }
  /**
   * @description GestureType
   * @enum
   * @property Tap - A tap gesture.
   * @property LongTap - A long tap gesture.
   * @property Drag - A drag gesture.
   * @property Drop - A drop gesture.
   */
  enum GestureType {
    Tap,
    LongTap,
    Drag,
    Drop
  }
  /**
   * @enum GifEvent
   * @property {number} playBeginEventType
   * @property {number} playEndEventType
   * @property {number} pauseEventType
   * @property {number} resumeEventType
   * @property {number} playKeyFrameEventType
   * @example
   * const imageComponent = this.getSceneObject().getComponent('Image') as APJS.Image;
   * const tex = imageComponent.texture;
   * const emitter = APJS.EventManager.getObjectEmitter(tex);
   * emitter.on(APJS.GifEvent.playEndEventType, this.onPlayEnd, this);
   */
  enum GifEvent {
    playBeginEventType,
    playEndEventType,
    pauseEventType,
    resumeEventType,
    playKeyFrameEventType
  }
  /**
   * @class GifTextureProvider
   */
  class GifTextureProvider extends TextureDelegateProvider {
    /**
     * @description Gets the loop count of the GIF asset.
     */
    get loopCount(): number;
    /**
     * @description Sets the loop count of the GIF asset.
     * @param value - The loop count of the GIF asset.
     */
    set loopCount(value: number);
    /**
     * @description Gets the frames per second (fps) of the GIF asset.
     */
    get fps(): number;
    /**
     * @description Sets the frames per second (fps) of the GIF asset.
     * @param value - The frames per second (fps) of the GIF asset.
     */
    set fps(value: number);
    /**
     * @description Gets the duration of the GIF asset.
     */
    get duration(): number;
    /**
     * @description Sets the duration of the GIF asset.
     * @param value - The duration of the GIF asset.
     */
    set duration(value: number);
    /**
     * @description Gets the frame count of the GIF asset.
     * @returns The frame count of the GIF asset.
     */
    getFrameCount(): number;
    /**
     * @description Gets the current playing frame index of the GIF asset.
     * @returns The current playing frame index of the GIF asset.
     */
    getCurrentPlayingFrame(): number;
    /**
     * @description Plays the GIF asset from the start.
     */
    playFromStart(): void;
    /**
     * @description Pauses the GIF asset.
     */
    pause(): void;
    /**
     * @description Resumes the GIF asset.
     */
    resume(): void;
    /**
     * @description Seeks to the specified frame index.
     * @param frameIndex - The index of the frame to seek to.
     */
    seek(frameIndex: number): void;
  }
  /**
   * @class GSplatCollider
   */
  class GSplatCollider extends Collider {
    protected constructor();
    /**
     * @description Whether the collider is tangible.
     * @type {boolean}
     */
    get isTangible(): boolean;
    set isTangible(value: boolean);
    /**
     * @description Whether the collider is interactable.
     * @type {boolean}
     */
    get interactable(): boolean;
    set interactable(value: boolean);
  }
  /**
   * @description Represents different hand actions that can be performed.
   * @enum
   * @property HeartA Represents a heart shape with one finger.
   * @property HeartB Represents a heart shape with two fingers.
   * @property HeartC Represents a heart shape with three fingers.
   * @property HeartD Represents a heart shape with four fingers.
   * @property OK Represents an "OK" gesture.
   * @property HandOpen Represents an open hand gesture.
   * @property ThumbUp Represents a thumbs up gesture.
   * @property ThumbDown Represents a thumbs down gesture.
   * @property Rock Represents a rock gesture.
   * @property Namaste Represents a namaste gesture.
   * @property PlamUp Represents a palm up gesture.
   * @property Fist Represents a fist gesture.
   * @property IndexFingerUp Represents an index finger up gesture.
   * @property DoubleFingerUp Represents a double finger up gesture.
   * @property Victory Represents a victory gesture.
   * @property BigV Represents a big "V" gesture.
   * @property Phonecall Represents a phone call gesture.
   * @property Beg Represents a beg gesture.
   * @property Thanks Represents a thanks gesture.
   * @property Unknown Represents an unknown hand action.
   * @property Cabbage Represents a cabbage gesture.
   * @property Three Represents a three-finger gesture.
   * @property Four Represents a four-finger gesture.
   * @property Pistol Represents a pistol gesture.
   * @property Rock2 Represents another rock gesture.
   * @property Swear Represents a swear gesture.
   * @property Holdface Represents a hold face gesture.
   * @property Salute Represents a salute gesture.
   * @property Spread Represents a spread gesture.
   * @property Pray Represents a pray gesture.
   * @property Pistol2 Represents another pistol gesture.
   * @property Undetect Represents an undetectable hand action.
   */
  enum HandAction {
    Beg,
    BigV,
    Cabbage,
    DoubleFingerUp,
    Fist,
    Four,
    HandOpen,
    HeartA,
    HeartB,
    HeartC,
    HeartD,
    Holdface,
    IndexFingerUp,
    Namaste,
    OK,
    Phonecall,
    Pistol,
    Pistol2,
    PlamUp,
    Pray,
    Rock,
    Rock2,
    Salute,
    Spread,
    Swear,
    Thanks,
    Three,
    ThumbDown,
    ThumbUp,
    Unknown,
    Undetect,
    Victory
  }
  /**
   * @interface
   * HandInfo
   */
  interface HandInfo {
    /**
     * @readonly
     * @description ID
     * @type {number}
     */
    readonly ID: number;
    /**
     * @readonly
     * @description action
     * @type {HandAction}
     */
    readonly action: HandAction;
    /**
     * @readonly
     * @description rect
     * @type {Rect}
     */
    readonly rect: Rect;
    /**
     * @readonly
     * @description rot_angle
     * @type {number}
     */
    readonly rotation: number;
    /**
     * @description getHandType
     * @returns {string}
     */
    getHandType(): string;
  }
  /**
   * @namespace
   * HapticsModule
   * @description Provides haptic feedback related functionality
   */
  namespace HapticsModule {
    /**
     * Triggers device vibration
     * @param duration Vibration duration in milliseconds, range 10-200, default 30
     * @param strength Vibration strength (0-1), default 0.7
     * @param frequency Vibration frequency (0-1), default 0.5
     */
    function triggerVibration(duration?: number, strength?: number, frequency?: number): void;
  }
  /**
   * @class HingeJoint
   */
  class HingeJoint extends Joint3D {
    protected constructor();
    /**
     * @description Whether the joint uses limits.
     * @type {boolean}
     */
    get useLimits(): boolean;
    set useLimits(value: boolean);
    /**
     * @description The minimum angle of the joint.
     * @type {number}
     */
    get minAngle(): number;
    set minAngle(value: number);
    /**
     * @description The maximum angle of the joint.
     * @type {number}
     */
    get maxAngle(): number;
    set maxAngle(value: number);
  }
  /**
   * @class HingeJoint2D
   */
  class HingeJoint2D extends Joint2D {
    protected constructor();
    /**
     * @description Whether to use angle limits for the hinge joint.
     * @type {boolean}
     */
    get useLimits(): boolean;
    set useLimits(value: boolean);
    /**
     * @description The maximum angle of the hinge joint.
     * @type {number}
     */
    get maxAngle(): number;
    set maxAngle(value: number);
    /**
     * @description The minimum angle of the hinge joint.
     * @type {number}
     */
    get minAngle(): number;
    set minAngle(value: number);
  }
  /**
   * @description Defines local horizontal alignment types for text typesetting, which refers to the horizontal alignment relative to the writing direction. Specifically, when the text is written horizontally, this alignment corresponds to the visually horizontal direction. Conversely, in vertical writing mode, this alignment translates to the visually vertical direction.
   * @enum
   */
  enum HorizontalAlignment {
    /** Align to left edge. */
    Left,
    /** Center horizontally. */
    Center,
    /** Align to right edge. */
    Right,
    /** Stretch to fill container. */
    Flush
  }
  /**
   * @interface IAudioComponent
   * @description The interface for audio component to get the audio clip player.
   */
  interface IAudioComponent {
  }
  /**
   * @interface IAudioDetector
   * @description The interface for audio detector to get the enabled property.
   */
  interface IAudioDetector {
    /**
     * @description Whether the detector is enabled.
     */
    enabled: boolean;
  }
  /**
   * @interface
   * @description Represents an event.
   */
  interface IEvent {
    /**
     * @description The type of the event, which can be either a number or a UserEventType.
     */
    get type(): number | UserEventType;
    /**
     * @description Sets the type of the event, which can be a number or a UserEventType.
     */
    set type(value: number | UserEventType);
    /**
     * @description Arguments passed to the event.
     */
    get args(): any[];
    /**
     * @description The arguments to be set for the event.
     * @param args - The arguments to be set for the event.
     */
    set args(args: any[]);
  }
  /**
   * @interface
   * @description Provides an interface for emitting and listening to events.
   */
  interface IEventEmitter {
    /**
     * @description Registers an event listener for a specified event type.
     * @param eventType - The type of event to listen for.
     * @param callback - The callback function to be invoked when the event is triggered.
     * @param context - The execution context for the callback function.
     * @example
     * ```ts
     * emitter.on(myEventType, this.onMyEventType, this);
     * ```
     */
    on(eventType: number | UserEventType, callback: (event: IEvent) => void, context?: object): void;
    /**
     * @description Registers a one-time event listener for a specified event type.
     * @param eventType - The type of event to listen for.
     * @param callback - The callback function to be invoked when the event is triggered.
     * @param context - The execution context for the callback function.
     * @example
     * ```ts
     * emitter.once(myEventType, this.onMyEventType, this);
     * ```
     */
    once(eventType: number | UserEventType, callback: (event: IEvent) => void, context?: object): void;
    /**
     * @description Unregisters an event listener for a specified event type.
     * @param eventType - The type of event to unregister.
     * @param callback - The callback function that was previously registered.
     * @param context - The execution context that was used when registering the callback.
     * @example
     * ```ts
     * emitter.off(myEventType, this.onMyEventType, this);
     * ```
     */
    off(eventType: number | UserEventType, callback: (event: IEvent) => void, context?: object): void;
    /**
     * Emits a specified event.
     * @param event - The event object to be emitted.
     * @example
     * ```ts
     * emitter.emit(APJS.EventManager.createEvent(MY_EVENT_TYPE));
     * ```
     */
    emit(event: IEvent): void;
  }
  /**
   * @class Image
   */
  class Image extends Renderer {
    protected constructor();
    /**
     * @description The main texture of the Image component.
     */
    get texture(): Texture;
    set texture(value: Texture);
    /**
     * @description The opacity of the image.
     */
    get opacity(): number;
    set opacity(value: number);
    /**
     * @description The base color of the current material.
     */
    get color(): Color;
    set color(value: Color);
    /**
     * @description The size of the image, takes effect according to the stretch mode
     */
    get size(): Vector2f;
    set size(value: Vector2f);
    /**
     * @description The pivot point of the Image, the typical range is [0, 1]
     */
    get pivot(): Vector2f;
    set pivot(value: Vector2f);
    /**
     * @description  Determine whether to flip the image horizontally
     */
    get flipX(): boolean;
    set flipX(value: boolean);
    /**
     * @description Determine whether to flip the image vertically
     */
    get flipY(): boolean;
    set flipY(value: boolean);
    /**
     * @description Determine how the image is stretched to the required size
     */
    get stretchMode(): StretchMode;
    set stretchMode(value: StretchMode);
    /**
     * @description Get the specified material property value by key
     * @param key - The key of the material property to get.
     * @returns The value of the specified material property.
     */
    getMaterialProperty(key: string): number | Vector2f | Vector3f | Vector4f | Texture | Matrix4x4f;
    /**
     * @description Set a material property for the current Image.
     *
     * Note: Image DrawMode cannot be changed via script API. You must set the
     * Image DrawMode (for example, switch to "Filled") in the editor.
     *
     * When the Image DrawMode is set to "Filled", you can use this API to control
     * the following fill-related parameters:
     *
     * 1. Fill type: key = "_filledType", number
     *    - 0: Horizontal fill, the fill area grows from left to right
     *    - 1: Vertical fill, the fill area grows from top to bottom
     *
     * 2. Fill start point: key = "_startPoint", number, in the range [0, 1]
     *    - For horizontal fill: the starting position from left to right
     *    - For vertical fill: the starting position from top to bottom
     *    For example: 0 means start from the very left/top, 0.5 means start from the center.
     *
     * 3. Fill range (progress): key = "_filledRange", number, in the range [0, 1]
     *    - Represents the current fill percentage: 0 is 0%, 1 is 100%
     *    For example: 0.5 means filled to 50%.
     *
     * Example:
     * ```ts
     * // Horizontal fill, starting from the left, currently filled to 50%
     * image.setMaterialProperty("_filledType", 0);
     * image.setMaterialProperty("_startPoint", 0.0);
     * image.setMaterialProperty("_filledRange", 0.5);
     * ```
     * @param {string} key
     * @param {number | Vector2f | Vector3f | Vector4f | Texture | Matrix4x4f} arg1
     * @returns {void}
     */
    setMaterialProperty(key: string, arg1: number | Vector2f | Vector3f | Vector4f | Texture | Matrix4x4f): void;
  }
  /**
   * @description Pinch event information includes scale and angle.
   * @enum
   */
  interface IPinchInfo {
    /** Pinch scale. */
    scale: number;
    /** Pinch angle. */
    angle: number;
  }
  /**
   * @class Joint2D
   */
  class Joint2D extends DynamicComponent {
    protected constructor();
    /**
     * @description The local anchor point on this body.
     * @type {Vector2f}
     */
    get anchor(): Vector2f;
    set anchor(value: Vector2f);
    /**
     * @description The local anchor point on the connected body.
     * @type {Vector2f}
     */
    get connectedAnchor(): Vector2f;
    set connectedAnchor(value: Vector2f);
    /**
     * @description Whether the joint is breakable.
     * @type {boolean}
     */
    get breakable(): boolean;
    set breakable(value: boolean);
    /**
     * @description The maximum force that can be exerted on the connected body.
     * @type {number}
     */
    get breakingForce(): number;
    set breakingForce(value: number);
    /**
     * @description The maximum torque that can be exerted on the connected body.
     * @type {number}
     */
    get breakingTorque(): number;
    set breakingTorque(value: number);
  }
  /**
   * @class Joint3D
   */
  class Joint3D extends DynamicComponent {
    protected constructor();
    /**
     * @description The force at which the joint breaks.
     * @type {number}
     */
    get breakingForce(): number;
    set breakingForce(value: number);
    /**
     * @description The torque at which the joint breaks.
     * @type {number}
     */
    get breakingTorque(): number;
    set breakingTorque(value: number);
    /**
     * @description The anchor point of the joint.
     * @type {Vector3f}
     */
    get anchor(): Vector3f;
    set anchor(value: Vector3f);
    /**
     * @description The anchor point of the connected body.
     * @type {Vector3f}
     */
    get connectedAnchor(): Vector3f;
    set connectedAnchor(value: Vector3f);
  }
  /**
   * @class
   */
  class JsonAsset {
    protected constructor();
    /**
     * @readonly
     * @description Get the parsed JSON structured data
     * @type {any}
     */
    get json(): any;
  }
  /**
   * @class LayerSet
   */
  class LayerSet {
    /**
     * @description Constructs a LayerSet instance.
     * @param bitset - Optional parameter that can be:
     *   - A number representing the count of bits for a new DynamicBitset
     *   - Undefined/null, in which case a new DynamicBitset with 64 bits is created
     * @param mask - Optional parameter representing the mask value for the DynamicBitset. Defaults to 0 if not provided.
     */
    constructor(bitset?: number, mask?: number);
    /**
     * @description Clears the layer set by setting all bits to false.
     * @param bitsNum - Optional parameter specifying the number of bits to clear.
     *                  If not provided or 0, defaults to 64 bits.
     * @returns This LayerSet instance for chaining.
     */
    clear(bitsNum?: number): this;
    /**
     * @description Retrieves the value of a specific layer.
     * @param layerIndex - The index of the layer to retrieve.
     * @returns A boolean indicating whether the specified layer is active or not.
     * @example
     * if (camera.renderLayer.get(sceneObject.layer)) {
     *   // Do something.
     * }
     */
    get(layerIndex: number): boolean;
    /**
     * @description Sets the value of a specific layer.
     * @param layer - The index of the layer to set.
     * @param value - The boolean value to assign to the layer.
     * @returns This LayerSet instance for chaining.
     * @example
     *
     * const LAYER_DEFAULT = 0;
     * const LAYER_1 = 1;
     * camera.renderLayer = camera.renderLayer.set(DEFAULT_LAYER, true);
     * camera.renderLayer = camera.renderLayer.set(LAYER_1, true);
     */
    set(layer: number, value: boolean): this;
    /**
     * @description Checks if the layer set is empty (all bits are false).
     * @returns A boolean indicating whether all layers are inactive.
     */
    isEmpty(): boolean;
    /**
     * @description Compares the current LayerSet with another LayerSet for equality.
     * @param v - The LayerSet to compare against.
     * @returns A boolean indicating whether the two LayerSets have identical bit patterns.
     */
    equals(v: LayerSet): boolean;
    /**
     * @description Returns a string representation of the LayerSet object.
     * @returns A string representing the LayerSet object.
     */
    toString(): string;
  }
  /**
   * @class Light
   * @description Represents a light source in the scene.
   */
  class Light extends Component {
    protected constructor();
    /**
     * @description Gets the color of the light.
     */
    get color(): Color;
    /**
     * @description Sets the color of the light.
     */
    set color(value: Color);
    /**
     * @description Gets the intensity of the light.
     */
    get intensity(): number;
    /**
     * @description Sets the intensity of the light.
     */
    set intensity(value: number);
    /**
     * @description Gets the layers that are affected by this light.
     */
    get renderLayer(): LayerSet;
    /**
     * @description Sets the layers that are affected by this light.
     */
    set renderLayer(value: LayerSet);
  }
  /**
   * @class LookAt
   * @description A component that makes the current object's orientation follow a target's position or orientation.
   */
  class LookAt extends Component {
    protected constructor();
    /**
     * @description Gets the transform of the target object to look at.
     */
    get target(): Transform | null;
    /**
     * @description Sets the transform of the target object to look at.
     */
    set target(value: Transform | null);
    /**
     * @description Gets the mode for the look-at calculation.
     */
    get mode(): LookAtMode;
    /**
     * @description Sets the mode for the look-at calculation.
     */
    set mode(value: LookAtMode);
    /**
     * @description Gets the world-up vector for the look-at calculation.
     */
    get worldUp(): LookAtWorldUp;
    /**
     * @description Sets the world-up vector for the look-at calculation.
     */
    set worldUp(value: LookAtWorldUp);
    /**
     * @description Gets the direction of the object that will point to the target.
     */
    get directionAim(): LookAtDirection;
    /**
     * @description Sets the direction of the object that will point to the target.
     */
    set directionAim(value: LookAtDirection);
    /**
     * @description Gets the direction of the object that will be aligned with the world up direction.
     */
    get directionUp(): LookAtDirection;
    /**
     * @description Sets the direction of the object that will be aligned with the world up direction.
     */
    set directionUp(value: LookAtDirection);
    /**
     * @description Gets An additional rotation applied after the look-at calculation. The value is in Euler angles.
     */
    get offsetRotation(): Vector3f;
    /**
     * @description Sets An additional rotation applied after the look-at calculation. The value is in Euler angles.
     */
    set offsetRotation(value: Vector3f);
  }
  /**
   * @description Specifies the forward direction of a transform.
   * @enum
   */
  enum LookAtDirection {
    X,
    Y,
    Z,
    NegativeX,
    NegativeY,
    NegativeZ
  }
  /**
   * @description Specifies the mode of LookAt.
   * @enum
   */
  enum LookAtMode {
    /** The object will look towards a specified direction. */
    LookAtDirection,
    /** The object will look at a specified point in world space. */
    LookAtPoint
  }
  /**
   * @description Defines the world-up vector for the look-at calculation.
   * @enum
   */
  enum LookAtWorldUp {
    /** Use the scene's positive Y-axis as the world up vector. */
    SceneY,
    /** Use the target's positive Y-axis as the world up vector. */
    TargetY,
    /** Use the object's positive X-axis as the world up vector. */
    ObjectX,
    /** Use the object's positive Y-axis as the world up vector. */
    ObjectY,
    /** Use the object's positive Z-axis as the world up vector. */
    ObjectZ,
    /** Use the scene's positive X-axis as the world up vector. */
    SceneX,
    /** Use the scene's positive Z-axis as the world up vector. */
    SceneZ,
    /** Use the target's positive X-axis as the world up vector. */
    TargetX,
    /** Use the target's positive Z-axis as the world up vector. */
    TargetZ
  }
  /**
   * @class Material
   * @description Material. This class exposes all properties from a material, allowing you to animate them. You can also use it to set custom shader properties that can't be accessed through the inspector.
   */
  class Material extends AObject {
    protected constructor();
    /**
     * @description Gets the render queue for the material.
     */
    get renderQueue(): number;
    /**
     * @description Sets the render queue for the material.
     */
    set renderQueue(value: number);
    /**
     * @description Gets the passes for the material.
     */
    get passes(): Pass[];
    /**
     * @description Sets the passes for the material.
     */
    set passes(value: Pass[]);
    /**
     * @description Check if a macro is enabled.
     * @param value - The name of the macro.
     * @returns True if the macro is enabled, false otherwise.
     */
    isMacroEnabled(value: string): boolean;
    /**
     * @description Create a clone of this material.
     * @returns A new Material instance that is a clone of this material.
     */
    clone(): Material;
    /**
     * @description Sets a named float value.
     * @param name - The name of the float property.
     * @param value - The float value to set.
     */
    setFloat(name: string, value: number): void;
    /**
     * @description Get a named float value from the material.
     * @param name - The name of the float property.
     * @returns The float value if found, undefined otherwise.
     */
    getFloat(name: string): number | undefined;
    /**
     * @description Sets a named matrix value.
     * @param name - The name of the matrix property.
     * @param m - The matrix value to set.
     */
    setMatrix(name: string, m: Matrix4x4f): void;
    /**
     * @description Gets a named matrix value.
     * @param name - The name of the matrix property.
     * @returns The matrix value if found, undefined otherwise.
     */
    getMatrix(name: string): Matrix4x4f | undefined;
    /**
     * @description Sets a named texture value.
     * @param name - The name of the texture property.
     * @param texture - The texture value to set.
     */
    setTexture(name: string, texture: Texture): void;
    /**
     * @description Gets a named texture value from the material.
     * @param name - The name of the texture property.
     * @returns The texture value if found, null otherwise.
     */
    getTexture(name: string): Texture | null;
    /**
     * @description Sets a named integer value.
     * @param name - The name of the integer property.
     * @param value - The integer value to set.
     */
    setInt(name: string, value: number): void;
    /**
     * @description Gets a named integer value.
     * @param name - The name of the integer property.
     */
    getInt(name: string): number | undefined;
    /**
     * @description Sets a shader macro that is enabled by this material.
     * @param macro - The name of the shader macro.
     * @param value - The value to set for the shader macro.
     */
    enableMacro(macro: string, value: number): void;
    /**
     * @description Unset a shader macro.
     * @param macro - The name of the shader macro.
     */
    disableMacro(macro: string): void;
    /**
     * @description Gets the main pass of the material. If no passes exist, a new one is created and returned.
     * @returns The main Pass object for the material.
     */
    get mainPass(): Pass;
    /**
     * @description Sets the main pass for the material.
     * @param value - The Pass object to set as the main pass.
     */
    set mainPass(value: Pass);
    /**
     * @description Checks if the material has a float key.
     * @param key - The key to check for in the float map.
     * @returns A boolean indicating whether the float key exists.
     */
    hasFloatKey(key: string): boolean;
    /**
     * @description Checks if the material has a Vector4 key.
     * @param key - The key to check for in the Vector4 map.
     * @returns A boolean indicating whether the key exists in the Vector4 map.
     */
    hasVector4Key(key: string): boolean;
    /**
     * @description Checks if the material has a Vector3 key.
     * @param key - The key to check for in the Vector3 map.
     * @returns A boolean indicating whether the key exists in the Vector3 map.
     */
    hasVector3Key(key: string): boolean;
    /**
     * @description Checks if the material has a Vector2 key.
     * @param key - The key to check for in the Vector2 map.
     * @returns A boolean indicating whether the key exists in the Vector2 map.
     */
    hasVector2Key(key: string): boolean;
    /**
     * @description Checks if the material has a matrix key.
     * @param key - The key to check for in the material's matrix map.
     * @returns A boolean indicating whether the material has the specified matrix key.
     */
    hasMatrixKey(key: string): boolean;
    /**
     * @description Checks if the material has a texture with the specified key.
     * @param key - The key of the texture to check for.
     * @returns A boolean indicating whether the material has a texture with the given key.
     */
    hasTextureKey(key: string): boolean;
    /**
     * @description Checks if the material has an integer key.
     * @param key - The key to check for in the integer map.
     * @returns A boolean indicating whether the key exists in the integer map.
     */
    hasIntKey(key: string): boolean;
    /**
     * @description Sets a vector value in the material by its name.
     * @param name - The name of the vector property to set.
     * @param value - The vector value to set, which can be of type Vector2f, Vector3f, or Vector4f.
     */
    setVector(name: string, value: Vector2f | Vector3f | Vector4f): void;
    /**
     * @description Retrieves a vector property by name from the material.
     * @param name - The name of the vector property to retrieve.
     * @returns A Vector2f, Vector3f, or Vector4f object if found; otherwise, undefined.
     */
    getVector(name: string): Vector2f | Vector3f | Vector4f | undefined;
    /**
     * @description Sets the color of a material property by name.
     * @param name - The name of the material property to set the color for.
     * @param color - The Color object containing the RGBA values to be set.
     */
    setColor(name: string, color: Color): void;
    /**
     * @description Retrieves the color associated with a given name from the material's properties.
     * @param name - The name of the property to retrieve the color from.
     * @returns A Color object if the property exists and is a Vector4f, otherwise undefined.
     */
    getColor(name: string): Color | undefined;
  }
  /**
   * @class MaterialPropertyBlock
   * @extends AObject
   * @description A container for material properties that can be applied to materials or renderers.
   * Allows dynamic modification of material properties without creating new materials.
   *
   * ### Core Features
   * - Enables dynamic modification of material properties
   * - Reduces material duplication by allowing per-instance property overrides
   * - Supports various property types including floats, vectors, matrices, and textures
   * - Can be applied to multiple materials or renderers
   * - Efficiently batches property changes
   *
   * ### Usage Examples
   * @example <caption>Basic Usage: Changing Material Color</caption>
   * // Create a property block
   * const props = new MaterialPropertyBlock();
   *
   * // Set a color property
   * const color = new Color(1, 0, 0, 1); // Red color
   * props.setVector('u_Color', new Vector4f(color.r, color.g, color.b, color.a));
   *
   * // Apply to a renderer
   * renderer.properties = props;
   *
   * @example <caption>Advanced Usage: Per-Instance Properties</caption>
   * // Create multiple property blocks for different instances
   * const props1 = new MaterialPropertyBlock();
   * const props2 = new MaterialPropertyBlock();
   *
   * // Set different colors for each instance
   * props1.setVector('u_Color', new Vector4f(1, 0, 0, 1)); // Red
   * props2.setVector('u_Color', new Vector4f(0, 1, 0, 1)); // Green
   *
   * // Apply to different renderers
   * renderer1.properties = props1;
   * renderer2.properties = props2;
   *
   * @example <caption>Using Textures</caption>
   * // Create a property block
   * const props = new MaterialPropertyBlock();
   *
   * // Load a texture
   * const texture = await assetManager.loadTexture('path/to/texture.png');
   *
   * // Set the texture property
   * props.setTexture('u_MainTexture', texture);
   *
   * // Apply to a renderer
   * renderer.properties = props;
   *
   * @see Material
   * @see Texture
   * @see Vector2f
   * @see Vector3f
   * @see Vector4f
   * @see Matrix4x4f
   */
  class MaterialPropertyBlock extends AObject {
    /**
     * @constructor
     * @param rtti - Optional parameter for initializing the block with existing RTTI data.
     */
    constructor();
    /**
     * @description Sets a float property value in the material property block.
     * @param name - The name of the float property to set.
     * @param val - The float value to assign to the property.
     */
    setFloat(name: string, val: number): void;
    /**
     * @description Sets a float array property in the material property block.
     * @param name - The name of the property to set.
     * @param data - An array of numbers or a Float32Array containing the float values.
     */
    setFloatArray(name: string, data: number[] | Float32Array): void;
    /**
     * @description Sets a vector2 array property in the material property block.
     * @param name - The name of the property to set.
     * @param data - An array of Vector2f objects or a Float32Array containing the vector2 data.
     */
    setVector2Array(name: string, data: Vector2f[] | Float32Array): void;
    /**
     * @description Sets a vector3 array property in the material property block.
     * @param name - The name of the property to set.
     * @param data - An array of Vector3f objects or a Float32Array containing the vector data.
     */
    setVector3Array(name: string, data: Vector3f[] | Float32Array): void;
    /**
     * @description Sets a texture property in the material property block.
     * @param name - The name of the texture property to set.
     * @param texture - The Texture object to assign to the property.
     * @returns {void}
     */
    setTexture(name: string, texture: Texture): void;
    /**
     * @description Sets a vector4 array property in the material property block.
     * @param name - The name of the property to set.
     * @param data - An array of Vector4f objects or a Float32Array containing the vector data.
     */
    setVector4Array(name: string, data: Vector4f[] | Float32Array): void;
    /**
     * @description Sets a matrix property in the material property block.
     * @param name - The name of the matrix property to set.
     * @param mat - The Matrix4x4f value to assign to the property.
     * @returns {void}
     */
    setMatrix(name: string, mat: Matrix4x4f): void;
    /**
     * @description Sets a vector property in the material with the specified name.
     * @param name - The name of the vector property to set.
     * @param value - The vector value to assign, which can be of type Vector2f, Vector3f, or Vector4f.
     */
    setVector(name: string, value: Vector2f | Vector3f | Vector4f): void;
  }
  /**
   * @class Matrix3x3f
   * A standard 3x3 transformation matrix.（<b>column major</b>]
   */
  class Matrix3x3f {
    /**
     * @constructor
     */
    constructor();
    /**
     * @constructor
     * @param m0 - The value at position (0,0).
     * @param m1 - The value at position (0,1).
     * @param m2 - The value at position (0,2).
     * @param m3 - The value at position (1,0).
     * @param m4 - The value at position (1,1).
     * @param m5 - The value at position (1,2).
     * @param m6 - The value at position (2,0).
     * @param m7 - The value at position (2,1).
     * @param m8 - The value at position (2,2).
     */
    constructor(m0?: number, m1?: number, m2?: number, m3?: number, m4?: number, m5?: number, m6?: number, m7?: number, m8?: number);
    /**
     * @description Retrieves the value at the specified row and column in the 3x3 matrix.
     * @param row - The row index (0-based) of the element to retrieve.
     * @param column - The column index (0-based) of the element to retrieve.
     * @returns The value at the specified row and column.
     */
    get(row: number, column: number): number;
    /**
     * @description Sets the value at a specified row and column in the matrix.
     * @param row - The row index (0-based).
     * @param column - The column index (0-based).
     * @param value - The value to set at the specified position.
     * @returns This instance of Matrix3x3f for method chaining.
     */
    set(row: number, column: number, value: number): this;
    /**
     * @description The first column of the matrix.
     */
    get column0(): Vector3f;
    /**
     * @description Sets the values of column 0 in the Matrix3x3f using a Vector3f.
     */
    set column0(value: Vector3f);
    /**
     * @description The second column of the matrix.
     */
    get column1(): Vector3f;
    /**
     * @description Sets the values of the first column in the 3x3 matrix.
     */
    set column1(value: Vector3f);
    /**
     * @description The third column of the matrix.
     */
    get column2(): Vector3f;
    /**
     * @description Sets the values of the second column in the 3x3 matrix.
     */
    set column2(value: Vector3f);
    /**
     * @description Compares this matrix with another matrix for equality.
     * This method performs a direct value comparison of the elements in both matrices.
     * @param other - The Matrix3x3f object to compare with this matrix.
     * @returns A boolean indicating whether the two matrices are equal.
     */
    equals(other: Matrix3x3f): boolean;
    /**
     * @description Returns a clone of the current Matrix3x3f instance.
     * @returns A new Matrix3x3f object with the same data as the original.
     */
    clone(): Matrix3x3f;
    /**
     * @description Returns a string representation of the Matrix3x3f, with each element formatted to five decimal places.
     * @returns The string representation of the matrix.
     */
    toString(): string;
    /**
     * @description Adds the specified matrix to this matrix and returns the result.
     * @param other - The matrix to add to this matrix.
     * @returns This matrix after addition.
     */
    add(other: Matrix3x3f): this;
    /**
     * @description Returns the result of subtracting another 3x3 matrix from this matrix.
     * @param other - The matrix to be subtracted from this matrix.
     * @returns This matrix after performing the subtraction.
     */
    subtract(other: Matrix3x3f): this;
    /**
     * @description Multiplies the current matrix by another matrix or a scalar.
     * @param other - The matrix or scalar to multiply with.
     * @returns The modified instance of the current matrix after multiplication.
     */
    multiply(other: Matrix3x3f | number): this;
    /**
     * @description Multiplies each element of the matrix by a given scalar.
     * @param scalar - The scalar value to multiply with each element of the matrix.
     * @returns This instance of Matrix3x3f after performing the scalar multiplication.
     */
    multiplyScalar(scalar: number): this;
    /**
     * @description Divides each element of the current matrix by the corresponding element of another matrix.
     * @param other - The matrix to divide by.
     * @returns This matrix after performing the division.
     */
    divide(other: Matrix3x3f): this;
    /**
     * @description Returns the inverse of the matrix.
     * @returns The current instance with its values set to the inverse of the original matrix.
     */
    inverse(): this;
    /**
     * @description Returns the transpose of this matrix.
     * @returns The transposed matrix.
     */
    transpose(): this;
  }
  /**
   * @class Matrix4x4f
   * A standard 4x4 transformation matrix.（<b>column major</b>]
   * A transformation matrix can perform arbitrary linear 3D transformations
   * (i.e. translation, rotation, scale, shear etc.) and perspective transformations using homogenous coordinates.
   */
  class Matrix4x4f {
    /**
     * @constructor
     */
    constructor();
    /**
     * @constructor
     * @param m0 - Value at row 0, column 0 of the matrix.
     * @param m1 - Value at row 0, column 1 of the matrix.
     * @param m2 - Value at row 0, column 2 of the matrix.
     * @param m3 - Value at row 0, column 3 of the matrix.
     * @param m4 - Value at row 1, column 0 of the matrix.
     * @param m5 - Value at row 1, column 1 of the matrix.
     * @param m6 - Value at row 1, column 2 of the matrix.
     * @param m7 - Value at row 1, column 3 of the matrix.
     * @param m8 - Value at row 2, column 0 of the matrix.
     * @param m9 - Value at row 2, column 1 of the matrix.
     * @param m10 - Value at row 2, column 2 of the matrix.
     * @param m11 - Value at row 2, column 3 of the matrix.
     * @param m12 - Value at row 3, column 0 of the matrix.
     * @param m13 - Value at row 3, column 1 of the matrix.
     * @param m14 - Value at row 3, column 2 of the matrix.
     * @param m15 - Value at row 3, column 3 of the matrix.
     */
    constructor(m0?: number, m1?: number, m2?: number, m3?: number, m4?: number, m5?: number, m6?: number, m7?: number, m8?: number, m9?: number, m10?: number, m11?: number, m12?: number, m13?: number, m14?: number, m15?: number);
    /**
     * @description Retrieves the value at the specified row and column in the matrix.
     * @param row - The row index of the desired element (0-based).
     * @param column - The column index of the desired element (0-based).
     * @returns The value at the specified row and column.
     */
    get(row: number, column: number): number;
    /**
     * @description Sets the value at a specified row and column in the matrix.
     * @param row - The row index (0-based).
     * @param column - The column index (0-based).
     * @param value - The value to set at the specified position.
     * @returns This instance of Matrix4x4f for method chaining.
     */
    set(row: number, column: number, value: number): this;
    /**
     * @description Sets the values of a specified row in the matrix using a Vector4f.
     * @param row - The index of the row to set [0-3].
     * @param v - A Vector4f containing the values (c0, c1, c2, c3) for the row.
     * @returns This instance of Matrix4x4f with the updated row values.
     */
    setRow(row: number, v: Vector4f): this;
    /**
     * @description Sets the values of a specified column in the matrix.
     * @param col - The index of the column to set (0-3).
     * @param v - A Vector4f object containing the new values for the column (r0, r1, r2, r3).
     * @returns This instance of Matrix4x4f with the updated column values.
     */
    setColumn(col: number, v: Vector4f): this;
    /**
     * @description The first column of the matrix.
     */
    get column0(): Vector4f;
    /**
     * @description Sets the first column of the 4x4 matrix with the provided Vector4f values.
     */
    set column0(value: Vector4f);
    /**
     * @description The second column of the matrix.
     */
    get column1(): Vector4f;
    /**
     * @description Sets the values of the first column in the 4x4 matrix.
     */
    set column1(value: Vector4f);
    /**
     * @description The third column of the matrix.
     */
    get column2(): Vector4f;
    /**
     * @description Sets the second column of the 4x4 matrix with the provided Vector4f values.
     */
    set column2(value: Vector4f);
    /**
     * @description The fourth column of the matrix.
     * @returns {Vector4f} A Vector4f representing the fourth column of the matrix.
     */
    get column3(): Vector4f;
    /**
     * @description Sets the third column of the 4x4 matrix with the provided Vector4f values.
     */
    set column3(value: Vector4f);
    /**
     * @description Compares this matrix with another matrix for equality.
     * This method performs a direct value comparison of the elements in both matrices.
     * @param other - The Matrix4x4f object to compare with this matrix.
     * @returns A boolean indicating whether the two matrices are equal.
     */
    equals(other: Matrix4x4f): boolean;
    /**
     * @description Returns a clone of the current Matrix4x4f instance.
     * @returns - A new Matrix4x4f object with the same data as the original.
     */
    clone(): Matrix4x4f;
    /**
     * @description Returns a formatted string representation of the matrix showing all 16 elements.
     * @returns A string representation of the matrix with elements arranged in a 4x4 grid.
     */
    toString(): string;
    /**
     * @description Performs element-wise addition of another matrix to this matrix.
     * @param other - The matrix to add to this matrix.
     * @returns This matrix instance after performing the addition operation.
     */
    add(other: Matrix4x4f): this;
    /**
     * @description Performs element-wise subtraction of another matrix from this matrix.
     * @param other - The matrix to subtract from this matrix.
     * @returns This matrix instance after performing the subtraction operation.
     */
    subtract(other: Matrix4x4f): this;
    /**
     * @description Multiplies this matrix by another matrix using standard matrix multiplication (this * other).
     * @param other - The matrix to multiply this matrix by.
     * @returns This matrix instance after performing the multiplication operation.
     */
    multiply(other: Matrix4x4f | number): this;
    /**
     * @description Multiplies each element of the matrix by a scalar value.
     * @param scalar - The scalar value to multiply each element of the matrix by.
     * @returns This matrix instance after performing the scalar multiplication.
     */
    multiplyScalar(scalar: number): this;
    /**
     * @description Divides each element of the current matrix by the corresponding element of another matrix.
     * @param other - The matrix to divide by.
     * @returns This matrix after performing the division.
     */
    divide(other: Matrix4x4f): this;
    /**
     * @description Returns an Euler angle representation of this matrix's rotation.
     * @returns - A vector containing the Euler angles (pitch, yaw, roll) in radians.
     */
    getEulerAngles(): Vector3f;
    /**
     * @description Computes and sets this matrix to its inverse.
     * @returns This matrix instance after computing the inverse.
     */
    inverse(): this;
    /**
     * @description Multiplies the given direction vector by this matrix and returns the resulting vector.
     * @param dir - The direction vector to be multiplied.
     * @returns A new Vector3f representing the result of the multiplication.
     */
    multiplyDirection(dir: Vector3f): Vector3f;
    /**
     * @description Multiplies the given 3D point by this 4x4 matrix and returns the resulting point.
     * @param point - The 3D point to be multiplied by the matrix.
     * @returns A new Vector3f representing the result of the multiplication.
     */
    multiplyPoint(point: Vector3f): Vector3f;
    /**
     * @description Multiplies the given vector by this 4x4 matrix and returns the resulting vector.
     * @param vec - A 4-dimensional vector (Vector4f) to be multiplied by the matrix.
     * @returns The resulting 4-dimensional vector after multiplication.
     */
    multiplyVector(vec: Vector4f): Vector4f;
    /**
     * @description Computes and sets this matrix to its transpose.
     * @returns This matrix instance after computing the transpose.
     */
    transpose(): this;
    /**
     * @description Sets the translation component of the matrix using a Vector3f.
     * @param v - The translation vector to be applied.
     * @returns This instance of Matrix4x4f with the updated translation.
     */
    setTranslate(v: Vector3f): this;
    /**
     * @description Applies a translation to this matrix by multiplying it with a translation matrix.
     * @param vec - The translation vector to apply to this matrix.
     * @returns This matrix instance after applying the translation transformation.
     */
    translate(vec: Vector3f): this;
    /**
     * @description Sets this matrix to a scaling matrix using the specified scaling factors.
     * @param v - A Vector3f representing the scaling factors along the x, y, and z axes.
     * @returns This matrix instance after setting it to the scaling matrix.
     */
    setScale(v: Vector3f): this;
    /**
     * @description Scales the matrix by the components of the given vector.
     * @param vec - A Vector3f object representing the scaling factors along each axis.
     * @returns The modified Matrix4x4f instance.
     */
    scale(vec: Vector3f): this;
    /**
     * @description Sets the matrix to a rotation that aligns the vector `from` to the vector `to`.
     * @param from - The initial vector.
     * @param to - The target vector.
     * @returns This matrix with the applied rotation.
     */
    setFromToRotation(from: Vector3f, to: Vector3f): this;
    /**
     * @description Retrieves the X-axis vector from the matrix.
     * @returns - The X-axis vector represented as a 3D vector.
     */
    getAxisX(): Vector3f;
    /**
     * @description Retrieves the Y-axis vector from the matrix.
     * @returns - The Y-axis vector represented as a 3D vector.
     */
    getAxisY(): Vector3f;
    /**
     * @description Retrieves the Z-axis vector from the matrix.
     * @returns - The Z-axis vector represented as a 3D vector.
     */
    getAxisZ(): Vector3f;
    /**
     * @description Sets this matrix to the identity matrix.
     * @returns This matrix instance after setting it to the identity matrix.
     */
    setIdentity(): this;
    /**
     * @description Decomposes the matrix into its translation, rotation, and scale components.
     * @param translation - The vector to store the translation component.
     * @param rotation - The quaternion to store the rotation component.
     * @param scale - The vector to store the scale component.
     */
    getDecompose(translation: Vector3f, rotation: Quaternionf, scale: Vector3f): void;
    /**
     * @description Composes the matrix by setting its translation, rotation, and scale (TRS).
     * @param translation - The translation vector to apply.
     * @param rotation - The quaternion representing the rotation to apply.
     * @param scale - The scaling vector to apply.
     * @returns This instance of Matrix4x4f with the applied transformations.
     */
    compose(translation: Vector3f, rotation: Quaternionf, scale: Vector3f): this;
    /**
     * @description Approximate comparison of the two Matrix4x4f matrices by comparing the value of each dimension with a specified tolerance.
     * @param mat1 - The first Matrix4x4f to compare.
     * @param mat2 - The second Matrix4x4f to compare.
     * @param dist - The tolerance value for comparison.
     * @returns A boolean indicating whether the two matrices are approximately equal within the given tolerance.
     */
    static compareApproximately(mat1: Matrix4x4f, mat2: Matrix4x4f, dist: number): boolean;
    /**
     * @description Generates a new transformation matrix that orients an object to look at a specified target.
     * @param eye - The position of the viewer/camera.
     * @param center - The position of the target to look at.
     * @param up - The upward direction in the world, typically (0, 1, 0).
     * @returns A new Matrix4x4f representing the transformation that orients an object to look from 'eye' towards 'center'.
     */
    static lookAt(eye: Vector3f, center: Vector3f, up: Vector3f): Matrix4x4f;
    /**
     * @description Returns a new 4x4 matrix with the specified Euler angles (in radians).
     * @param euler - A Vector3f representing the Euler angles.
     * @returns A new Matrix4x4f instance constructed from the given Euler angles.
     */
    static makeFromEulerAngles(euler: Vector3f): Matrix4x4f;
    /**
     * @description Returns a new 4x4 matrix with the specified rotation.
     * @param rotation - A Quaternionf representing the desired rotation.
     * @returns A new Matrix4x4f instance with the applied rotation.
     */
    static makeFromRotation(rotation: Quaternionf): Matrix4x4f;
    /**
     * @description Returns a new 4x4 matrix with the specified scaling factors.
     * @param scale - A Vector3f representing the scaling factors along the x, y, and z axes.
     * @returns A new Matrix4x4f instance with the applied scaling.
     */
    static makeFromScale(scale: Vector3f): Matrix4x4f;
    /**
     * @description Returns a new 4x4 matrix with the specified translation applied.
     * @param translation - A Vector3f representing the translation to apply.
     * @returns A new Matrix4x4f with the given translation.
     */
    static makeFromTranslation(translation: Vector3f): Matrix4x4f;
    /**
     * @description Generates a new orthographic projection matrix using the provided arguments.
     * @param left - The coordinate for the left vertical clipping plane.
     * @param right - The coordinate for the right vertical clipping plane.
     * @param bottom - The coordinate for the bottom horizontal clipping plane.
     * @param top - The coordinate for the top horizontal clipping plane.
     * @param zNear - The distance to the near depth clipping plane. This value is negative if the plane is behind the viewer.
     * @param zFar - The distance to the far depth clipping plane. This value is negative if the plane is behind the viewer.
     * @returns A new orthographic projection matrix as a Matrix4x4f object.
     */
    static orthographic(left: number, right: number, bottom: number, top: number, zNear: number, zFar: number): Matrix4x4f;
    /**
     * @description Generates a perspective projection matrix using the provided field of view, aspect ratio, and near/far clipping planes.
     * @param fovY - The vertical field of view angle in degrees.
     * @param aspect - The aspect ratio (width divided by height) of the viewport.
     * @param zNear - The distance to the near clipping plane.
     * @param zFar - The distance to the far clipping plane.
     * @returns A new Matrix4x4f representing the perspective projection matrix.
     */
    static perspective(fovY: number, aspect: number, zNear: number, zFar: number): Matrix4x4f;
  }
  /**
   * @class Mesh
   * @description Represents a 3D mesh, containing vertices, indices, and other geometric data.
   * @remarks The constructor is protected for internal use.
   */
  class Mesh extends AObject {
    protected constructor();
    /**
     * @description Gets the axis-aligned bounding box (AABB) of the mesh.
     */
    get boundingBox(): AABB;
    /**
     * @description Sets the axis-aligned bounding box (AABB) of the mesh.
     */
    set boundingBox(aabb: AABB);
    /**
     * @description Gets the vertex attributes of the mesh.
     * @returns An array of vertex attribute descriptors.
     */
    getVertexAttributes(): VertexAttributeDesc[];
    /**
     * @description Gets the number of vertices in the mesh.
     * @returns The vertex count.
     */
    getVertexCount(): number;
    /**
     * @description Gets the topology of the mesh.
     * @returns The mesh topology.
     */
    getTopology(): MeshTopology;
    /**
     * @description Gets the vertex data of the mesh.
     * @returns A Float32Array containing the vertex positions.
     */
    getVertices(): Float32Array;
    /**
     * @description Gets the triangle indices of the mesh as a 16-bit array.
     * @returns A Uint16Array of vertex indices forming the triangles.
     */
    getTriangles(): Uint16Array;
  }
  /**
   * @class MeshCollider
   */
  class MeshCollider extends Collider {
    protected constructor();
    /**
     * @description Gets whether to use a convex hull for collision detection.
     * When enabled, the mesh is simplified to its convex hull which improves performance
     * but may be less accurate for complex meshes.
     */
    get convex(): boolean;
    /**
     * @description Sets whether to use a convex hull for collision detection.
     * When enabled, the mesh is simplified to its convex hull which improves performance
     * but may be less accurate for complex meshes.
     */
    set convex(value: boolean);
  }
  /**
   * @class MeshRenderer
   * @description class for the mesh renderer
   */
  class MeshRenderer extends Renderer {
    protected constructor();
    /**
     * @description Retrieves the mesh associated with the MeshRenderer.
     * @returns The mesh object.
     */
    get mesh(): Mesh;
    /**
     * @description Set the mesh for the renderer.
     * @param value - The mesh to set for the renderer.
     */
    set mesh(value: Mesh);
    /**
     * @description Get the first shared material used by the MeshRenderer.
     * @returns The first shared material used by the MeshRenderer, or null if none is assigned.
     */
    get mainMaterial(): Material | null;
    /**
     * @description Sets the main material for the MeshRenderer.
     * @param value - The material to set as the main material.
     */
    set mainMaterial(value: Material | null);
    /**
     * @description Retrieves the main pass from the object's shared material.
     * @returns The first pass of the shared material, or null if no passes are available.
     */
    get mainPass(): Pass | null;
    /**
     * @description Retrieves the axis-aligned bounding box (AABB) for this mesh renderer.
     * @returns The axis-aligned bounding box representing the bounds of the mesh.
     */
    getBoundingBox(): AABB;
  }
  /**
   * @description Represents the topology of a mesh, defining how vertices are connected to form primitives.
   * @enum
   */
  enum MeshTopology {
    /** Each vertex is a separate point. */
    Points,
    /** Each pair of consecutive vertices forms a line segment. */
    Lines,
    /** A series of lines where each vertex connects to the next and the last vertex connects back to the first. */
    LineLoop,
    /** A series of connected line segments where each vertex (except the first) uses the previous vertex as an endpoint. */
    LineStrip,
    /** Each set of three consecutive vertices forms a triangle. */
    Triangles,
    /** A series of triangles where each new vertex (after the first two) forms a triangle with the previous two vertices. */
    TriangleStrip,
    /** A series of triangles where each new vertex (after the first two) forms a triangle with the first vertex and the previous vertex. */
    TriangleFan,
    /** The mesh topology is unknown or not specified. */
    Unknown
  }
  /**
   * @class MorpherComponent
   * @description morpher component
   */
  class MorpherComponent extends Component {
    constructor();
    /**
     * @description Gets or sets whether to calculate normals for the morphed mesh.
     * When true, normals are calculated to ensure proper lighting on the morphed mesh.
     * When false, performance may be better but lighting may appear incorrect.
     */
    get calculateNormal(): boolean;
    set calculateNormal(value: boolean);
    /**
     * @description Checks if this component has a weight for the blend shape with the specified name.
     * @param name The name of the blend shape to check
     * @returns True if a weight exists for the blend shape, false otherwise
     */
    hasBlendShapeWeight(name: string): boolean;
    /**
     * @description Gets the weight value of the blend shape channel with the specified name.
     * Returns 0 if no weight is found for the given name.
     * @param name The name of the blend shape channel
     * @returns The weight value of the blend shape channel
     */
    getBlendShapeWeight(name: string): number;
    /**
     * @description Sets the weight value of the blend shape channel with the specified name.
     * If no channel exists with the given name, one will be created.
     * @param name The name of the blend shape channel
     * @param weight The weight value to set for the blend shape channel
     */
    setBlendShapeWeight(name: string, weight: number): void;
    /**
     * @description Resets all blend shape weights to 0, effectively clearing all morphing effects.
     * This returns the mesh to its base state without any blend shape deformations.
     */
    clearBlendShapeWeights(): void;
  }
  /**
   * @enum Mp4Event
   * @property {number} PlayBegin
   * @property {number} PlayEnd
   * @property {number} Pause
   * @property {number} Resume
   * @property {number} KeyFrameInSecond
   * @property {number} Stop
   * @example
   * const imageComponent = this.getSceneObject().getComponent('Image') as APJS.Image;
   * const tex = imageComponent.texture;
   * const emitter = APJS.EventManager.getObjectEmitter(tex);
   * emitter.on(APJS.Mp4Event.PlayEnd, this.onPlayEnd, this);
   */
  enum Mp4Event {
    PlayBegin,
    PlayEnd,
    Pause,
    Resume,
    KeyFrameInSecond,
    Stop
  }
  /**
   * @class Mp4TextureProvider
   */
  class Mp4TextureProvider extends TextureDelegateProvider {
    /**
     * @description Gets the number of times the video will loop. -1 means infinite loop.
     */
    get loopCount(): number;
    /**
     * @description Sets the number of times the video will loop.
     */
    set loopCount(value: number);
    /**
     * @readonly
     * @description duration
     * @type {number}
     */
    get duration(): number;
    /**
     * @readonly
     * @description currentTime
     * @type {number}
     */
    get currentTime(): number;
    /**
     * @description Starts video playback from the beginning.
     */
    play(): void;
    /**
     * @description Pauses video playback at the current position.
     */
    pause(): void;
    /**
     * @description Resumes paused video playback.
     */
    resume(): void;
    /**
     * @description Stops video playback and resets to initial state.
     */
    stop(): void;
  }
  /**
   * @class OnsetDetector
   * @description An onset detector implementation.
   * @example
   * OnInit() {
   *     const builder = APJS.AudioDetectionModule.getAudioDetectionBuilder(APJS.AudioDetectionType.Onset) as APJS.OnsetDetectorBuilder;
   *     builder.setDetectorSource(APJS.AudioSourceType.Microphone, null);
   *     builder.setThreshold(20);
   *     this.detector = builder.build();
   * }
   * OnUpdate(dt: number) {
   *     if (this.detector) {
   *         const result = this.detector.getResult();
   *         console.log(result);
   *     }
   * }
   */
  class OnsetDetector extends BaseAudioDetector {
    protected constructor();
    /**
     * @description Get the result of the onset detection.
     * @returns [40, 767] The result of the onset detection.
     */
    getResult(): number;
  }
  /**
   * @class OnsetDetectorBuilder
   * @description A builder for onset detector to set the source of the detector and build the detector.
   * @example
   * OnInit() {
   *     const builder = APJS.AudioDetectionModule.getAudioDetectionBuilder(APJS.AudioDetectionType.Onset);
   *     builder.setDetectorSource(APJS.AudioSourceType.Microphone, null);
   *     const detector = builder.build();
   * }
   */
  class OnsetDetectorBuilder extends AudioDetectorBuilder<OnsetDetector> {
    protected constructor();
    /**
     * @description Set the source of the detector.
     * @param type - The type of audio source. Default is None. When the type is ExternalFile, the audioComponent must be provided.
     * @param audioComponent - The audio component which plays the external audio file.
     * @example
     * audioDetectorBuilder
     *     .setDetectorSource(APJS.AudioSourceType.ExternalFile, audioComponent)
     *     .build();
     * @returns Builder instance for chaining.
     */
    setDetectorSource(type: AudioSourceType, audioComponent: IAudioComponent | null): this;
    /**
     * @description Set the threshold of the onset detection.
     * @param threshold - The threshold of the onset detection. value range [0, 160]. default value is 10.
     */
    setThreshold(threshold: number): this;
    /**
     * @description Build the onset detector. Note that the detector should be built in OnInit, otherwise it will return null.
     */
    build(): OnsetDetector | null;
  }
  /**
   * @description Device OS
   * @enum
   * @property Android - Android system.
   * @property IOS - IOS system.
   * @property Windows - Windows system
   * @property MacOS - MacOS system.
   * @property Linux - Linux system.
   * @property HarmonyOS - HarmonyOS system.
   */
  enum OS {
    Android = 0,
    IOS = 1,
    Windows = 2,
    MacOS = 3,
    Linux = 4,
    HarmonyOS = 5
  }
  /**
   * @class Pass
   * @description Pass
   */
  class Pass extends AObject {
    protected constructor();
    /**
     * @description Indicates whether depth testing is enabled for the pass.
     * @returns True if depth testing is enabled, false otherwise.
     */
    get depthTest(): boolean;
    /**
     * @description Sets the depth test state for the render pass.
     * @param value - True to enable depth testing, false otherwise.
     */
    set depthTest(value: boolean);
    /**
     * @description Indicates whether depth writing is enabled for the pass.
     * @returns True if depth writing is enabled, false otherwise.
     */
    get depthWrite(): boolean;
    /**
     * @description Sets the depth write state for the pass.
     * @param value - True to enable depth writing, false otherwise.
     */
    set depthWrite(value: boolean);
    /**
     * @description The depth function used for depth comparison in the rendering pass.
     * @returns The depth function.
     */
    get depthFunction(): DepthFunction;
    /**
     * @description Sets the depth function for the pass.
     * @param value - The depth function to set.
     */
    set depthFunction(value: DepthFunction);
    /**
     * @description The stencil state of the pass.
     * @returns The stencil state.
     */
    get stencilState(): StencilState;
    /**
     * @description Sets the stencil state for the pass.
     * @param value - The stencil state to set.
     */
    set stencilState(value: StencilState);
    /**
     * @description The blend state of the pass, which defines how colors are blended during rendering.
     * @returns The blend state.
     */
    get blendState(): BlendState;
    /**
     * @description Sets the blend state for the pass.
     * @param value - The blend state to set.
     */
    set blendState(value: BlendState);
    /**
     * @description The color mask for the first attachment in the render state's color blend settings.
     * @returns The color mask.
     */
    get colorMask(): ColorMask;
    /**
     * @description Sets the color mask for the pass.
     * @param value - The color mask to set.
     */
    set colorMask(value: ColorMask);
    /**
     * @description The culling mode for the rendering pass, which determines how triangles are culled based on their orientation.
     * @returns The cull mode.
     */
    get cullMode(): CullMode;
    /**
     * @description Sets the cull mode for the pass.
     * @param value - The cull mode to set.
     */
    set cullMode(value: CullMode);
  }
  /**
   * @class Physic2D
   */
  class Physics2D {
    /**
     * 2d world gravity
     * @description gravity acceleration
     * @default new Vector2f(0, -9.8)
     * @type {Vector2f}
     */
    static get gravity(): Vector2f;
    static set gravity(value: Vector2f);
    /**
     * 2d world time speed
     * @description time speed of 2d world
     * @default 1.0
     * @type {number}
     */
    static get timeSpeed(): number;
    static set timeSpeed(value: number);
    /**
     * @description Casts a ray in 2D space and returns information about the hits.
     * @param ray The ray to cast.
     * @param maxDistance The maximum distance the ray should cast.
     * @param nearest Whether to return the nearest hit or all hits.
     * @param layerMask The layer mask to filter hits.
     * @returns An array of RaycastHit2D objects representing the hits.
     */
    static raycast2D(ray: Ray, maxDistance: number, nearest: boolean, layerMask?: LayerSet): RaycastHit2D[];
  }
  /**
   * @class Physics3D
   */
  class Physics3D {
    /**
     * @description 3d world gravity
     */
    static get gravity(): Vector3f;
    static set gravity(value: Vector3f);
    /**
     * @description gravity multiplayer
     */
    static get gravityFactor(): number;
    static set gravityFactor(value: number);
    /**
     * @description 3d physics simulation timeScale
     */
    static get timeScale(): number;
    static set timeScale(value: number);
    static raycast(ray: Ray, maxDistance: number, nearest: boolean, layerMask?: LayerSet): RaycastHit3D[];
  }
  /**
   * @class PhysicsMaterial
   * @description physics material
   */
  class PhysicsMaterial extends AObject {
    protected constructor();
    /**
     * @description Set the Static Friction
     * @type {number}
     */
    get staticFriction(): number;
    set staticFriction(value: number);
    /**
     * @description Set the Dynamic Friction
     * @type {number}
     */
    get dynamicFriction(): number;
    set dynamicFriction(value: number);
    /**
     * @description Set the Bounciness(also elasticity)
     * @type {number}
     */
    get bounciness(): number;
    set bounciness(value: number);
  }
  /**
   * @class PitchDetector
   * @description A pitch detector implementation.
   * @example
   * OnInit() {
   *     const builder = APJS.AudioDetectionModule.getAudioDetectionBuilder(APJS.AudioDetectionType.Pitch);
   *     builder.setDetectorSource(APJS.AudioSourceType.Microphone, null);
   *     this.detector = builder.build();
   * }
   * OnUpdate(dt: number) {
   *     if (this.detector) {
   *         const result = this.detector.getResult();
   *         console.log(result);
   *     }
   * }
   */
  class PitchDetector extends BaseAudioDetector {
    protected constructor();
    /**
     * @description Get the result of the pitch detection.
     * @returns [40, 650] The result of the pitch detection.
     */
    getResult(): number;
  }
  /**
   * @class PitchDetectorBuilder
   * @description A builder for pitch detector to set the source of the detector and build the detector.
   * @example
   * OnInit() {
   *     const builder = APJS.AudioDetectionModule.getAudioDetectionBuilder(APJS.AudioDetectionType.Pitch);
   *     builder.setDetectorSource(APJS.AudioSourceType.Microphone, null);
   *     const detector = builder.build();
   * }
   */
  class PitchDetectorBuilder extends AudioDetectorBuilder<PitchDetector> {
    protected constructor();
    /**
     * @description Set the source of the detector.
     * @param type - The type of audio source. Default is None. When the type is ExternalFile, the audioComponent must be provided.
     * @param audioComponent - The audio component which plays the external audio file.
     * @example
     * audioDetectorBuilder
     *     .setDetectorSource(APJS.AudioSourceType.ExternalFile, audioComponent)
     *     .build();
     * @returns Builder instance for chaining.
     */
    setDetectorSource(type: AudioSourceType, audioComponent: IAudioComponent | null): this;
    /**
     * @description Build the pitch detector. Note that the detector should be built in OnInit, otherwise it will return null.
     */
    build(): PitchDetector | null;
  }
  /**
   * @class PointJoint
   */
  class PointJoint extends Joint3D {
    protected constructor();
  }
  /**
   * @class PointLight
   * @description Represents a point light source in 3D space.
   */
  class PointLight extends Light {
    protected constructor();
    /**
     * @description Gets the attenuation range of the point light.
     */
    get attenuationRange(): number;
    /**
     * @description Sets the attenuation range of the point light.
     */
    set attenuationRange(value: number);
  }
  /**
   * @class PolygonCollider2D
   * @description Represents a 2D polygon collider component for physics simulation.
   * The polygon can be convex or concave. For concave polygons, it will be decomposed into convex sub-polygons.
   */
  class PolygonCollider2D extends Collider2D {
    protected constructor();
  }
  /**
   * @class PolylineCollider2D
   * @description A collider that generates a polyline shape for physics and rendering.
   * * ### Core Features
   * - Generates a ribbon-like polyline collider from a list of Vector2f points
   * - Automatically synchronizes the physics collider shape with the visual mesh
   * - Supports dynamic updates of width, points, and resolution (pixelPerUnit) at runtime
   * * ### Physics & Rendering Integration
   * Unlike standard colliders, PolylineCollider2D automatically generates a renderable mesh based on its shape.
   * - **Rendering:** To make the line visible, you must assign the `.renderMesh` property to a `MeshRenderer` component on the same or different object.
   * - **Physics:** Internally, it creates a composite PolygonCollider. It requires a `RigidBody2D` to function in the physics simulation (it will auto-attach to one if available, or create a static one).
   * * ### Usage Examples
   * @example Basic Usage: Creating a V-Shape Line
   * // @input Component.PolylineCollider2D polyline
   * * // 1. Configure visual properties
   * script.polyline.width = 20.0;
   * script.polyline.pixelPerUnit = 32.0;
   * * // 2. Define points (e.g. a V-shape)
   * const points = [
   * new Vector2f(-100, 100),
   * new Vector2f(0, 0),
   * new Vector2f(100, 100)
   * ];
   * * // 3. Set positions (This triggers Mesh generation and Physics update)
   * script.polyline.positions = points;
   * * // 4. Visualize it (Optional)
   * // Assign the generated mesh to a MeshRenderer to see it
   * const meshRenderer = script.getSceneObject().getComponent("MeshRenderer");
   * if (meshRenderer) {
   * meshRenderer.mesh = script.polyline.getRenderMesh();
   * }
   */
  class PolylineCollider2D extends Collider2D {
    constructor();
    /**
     * @property positions
     * @description Set or Get the center positions of points in the polyline collider.
     * * **Note:** Setting this property will trigger a regeneration of the collider geometry.
     */
    get positions(): Array<Vector2f>;
    set positions(value: Array<Vector2f>);
    /**
     * @property width
     * @description Set or Get the width of the polyline collider.
     * * **Note:** Setting this property will trigger a regeneration of the collider geometry.
     */
    get width(): number;
    set width(value: number);
    /**
     * @property pixelPerUnit
     * @description Set or Get the pixel per unit scale for the polyline collider.
     * * **Note:** Setting this property will trigger a regeneration of the collider geometry.
     */
    get pixelPerUnit(): number;
    set pixelPerUnit(value: number);
    /**
     * @description Get the visual mesh.
     * If the polyline shape is changed, it updates.
     * to ensure you get the valid state.
     */
    getRenderMesh(): Mesh | null;
  }
  /**
   * @class Prefab
   * @description
   * This is the type of Prefab
   * <br/>Prefabs allow you to create reusable SceneObject instances
   */
  class Prefab extends AObject {
    protected constructor();
    /**
     * @description Instantiates a scene object.
     * @param parent - The parent scene object of the instantiated scene object.
     * @returns The instantiated scene object, or null if instantiation fails.
     */
    instantiate(parent: SceneObject): SceneObject | null;
  }
  /**
   * @class Provider
   * @description base Provider for texture and mesh
   * @inheritdoc
   */
  class Provider {
  }
  /**
   * @class Quaternionf
   * <br/> Quaternions are used to represent rotations.
   * <br/> A quaternion is a four-tuple of real numbers {x,y,z,w}.
   * <br/> A quaternion is a mathematically convenient alternative to the euler angle representation.
   * <br/> You can interpolate a quaternion without experiencing gimbal lock.
   * <br/> You can also use a quaternion to concatenate a series of rotations into a single representation.
   * @example
   * print(Quaternionf.dot(transform.localRotation, Quaternionf.identity()));
   */
  class Quaternionf {
    /**
     * @description Represents the x component of the quaternion, which is a part of the Quaternionf object used to describe rotations in 3D space.
     */
    x: number;
    /**
     * @description Represents the y component of the quaternion in a Quaternionf object.
     */
    y: number;
    /**
     * @description Represents the z component of the quaternion in a Quaternionf object.
     */
    z: number;
    /**
     * @description The w component of the quaternion, representing the scalar part in a 4-dimensional space.
     */
    w: number;
    /**
     * @constructor
     */
    constructor();
    /**
     * @constructor
     * @param x - The x component of the quaternion (optional).
     * @param y - The y component of the quaternion (optional).
     * @param z - The z component of the quaternion (optional).
     * @param w - The w component of the quaternion (optional).
     */
    constructor(x?: number, y?: number, z?: number, w?: number);
    /**
     * @description Sets the quaternion data with the specified x, y, z, and w components.
     * @param x - The x component of the quaternion.
     * @param y - The y component of the quaternion.
     * @param z - The z component of the quaternion.
     * @param w - The w component of the quaternion.
     * @returns This instance of Quaternionf with updated values.
     */
    set(x: number, y: number, z: number, w: number): this;
    /**
     * @description Creates and returns a clone of the current Quaternionf instance.
     * @returns A new Quaternionf object with the same values as the original.
     */
    clone(): Quaternionf;
    /**
     * @description Returns the dot product of the current quaternion with another quaternion.
     * @param other - The quaternion to calculate the dot product with.
     * @returns The dot product as a number.
     */
    dot(other: Quaternionf): number;
    /**
     * @description Returns whether this quaternion is equal to the specified quaternion.
     * @param other - The quaternion to compare with.
     * @returns A boolean indicating whether the two quaternions are equal.
     */
    equals(other: Quaternionf): boolean;
    /**
     * @description Returns the rotation angle of the quaternion.
     * @returns The rotation angle in radians.
     */
    getAngle(): number;
    /**
     * @description Returns the rotation axis of the quaternion.
     * @returns The rotation axis as a Vector3f object.
     */
    getAxis(): Vector3f;
    /**
     * @description Returns an inverted version of the Quaternionf by negating its x, y, and z components.
     * @returns The current instance of Quaternionf with inverted values.
     */
    inverse(): this;
    /**
     * @description Multiplies this quaternion by another quaternion `other` and updates the current quaternion with the result.
     * @param other - The quaternion to multiply with.
     * @returns This quaternion after multiplication.
     */
    multiply(other: Quaternionf): Quaternionf;
    /**
     * @description Returns the result of rotating direction vector `other` by this quaternion.
     * @param other - The vector to be rotated.
     * @returns A new `Vector3f` representing the rotated vector.
     */
    multiplyVector(other: Vector3f): Vector3f;
    /**
     * @description Normalizes the quaternion, ensuring it has a unit length.
     * If the quaternion's length is zero, it sets the quaternion to (0, 0, 0, 1).
     * Otherwise, it scales the quaternion components so that its length becomes one.
     * @returns The quaternion instance after normalization.
     */
    normalize(): Quaternionf;
    /**
     * @description Converts the quaternion to an Euler angle representation in radians.
     * @returns A vector containing the Euler angles (pitch, yaw, roll) in radians.
     */
    toEulerAngles(): Vector3f;
    /**
     * @description Returns a string representation of the quaternion.
     * @returns A string representation of the quaternion in the format "Quaternionf(x, y, z, w)".
     */
    toString(): string;
    /**
     * @description Returns a new quaternion with the specified angle and axis.
     * @param angle - The rotation angle in radians.
     * @param axis - The axis of rotation as a Vector3f object.
     * @returns A new Quaternionf representing the rotation.
     */
    static makeFromAngleAxis(angle: number, axis: Vector3f): Quaternionf;
    /**
     * @description Returns a new quaternion using the Euler angles provided in `eulerVec` (in radians).
     * @param eulerVec - A Vector3f representing the Euler angles in radians.
     * @returns A new Quaternionf created from the given Euler angles.
     */
    static makeFromEulerAngles(eulerVec: Vector3f): Quaternionf;
    /**
     * @description Returns the identity quaternion.
     * @returns The identity quaternion represented as a Quaternionf object.
     */
    static identity(): Quaternionf;
    /**
     * @description Returns a new quaternion linearly interpolated between two quaternions.
     * @param a The first quaternion.
     * @param b The second quaternion.
     * @param t The interpolation factor, typically ranging from 0 to 1.
     * @returns A new quaternion representing the linear interpolation.
     */
    static lerp(a: Quaternionf, b: Quaternionf, t: number): Quaternionf;
    /**
     * @description Returns a new Quaternionf that represents the rotation needed to look in the direction of the `forward` vector with the specified `up` vector.
     * @param forward - The forward direction vector.
     * @param up - The upward direction vector.
     * @returns A new Quaternionf representing the orientation.
     */
    static lookAt(forward: Vector3f, up: Vector3f): Quaternionf;
    /**
     * @description Returns a rotation quaternion that represents the shortest arc rotation from one direction vector to another.
     * @param from The initial direction vector.
     * @param to The target direction vector.
     * @returns A quaternion representing the rotation.
     */
    static rotationFromTo(from: Vector3f, to: Vector3f): Quaternionf;
    /**
     * @description Returns a new Quaternionf spherically linearly interpolated between `a` and `b`.
     * @param a - The starting Quaternionf.
     * @param b - The ending Quaternionf.
     * @param t - The interpolation factor, typically ranging from 0 to 1.
     * @returns A new Quaternionf representing the spherical linear interpolation between `a` and `b`.
     */
    static slerp(a: Quaternionf, b: Quaternionf, t: number): Quaternionf;
    /**
     * @description Returns the angle between two quaternions `a` and `b`.
     * @param a - The first quaternion.
     * @param b - The second quaternion.
     * @returns The angle in radians between the two quaternions.
     */
    static angleBetween(a: Quaternionf, b: Quaternionf): number;
  }
  /**
   * @class Ray
   */
  class Ray {
    /**
     * @constructor
     */
    constructor();
    /**
     * @constructor
     * @param min - The starting point of the ray as a 3D vector.
     * @param max - (Optional) The endpoint of the ray as a 3D vector. If not provided, the ray is considered to be infinite in length from the starting point.
     */
    constructor(min: Vector3f, max?: Vector3f);
    /**
     * @description Gets the origin point of the ray.
     * @returns The origin point of the ray.
     */
    get origin(): Vector3f;
    /**
     * @description Sets the origin of the ray to the specified Vector3f value.
     * @param value - The Vector3f value to set as the origin of the ray.
     */
    set origin(value: Vector3f);
    /**
     * @description Gets the normalized vector representing the direction of the ray.
     * @returns The direction vector of the ray.
     */
    get direction(): Vector3f;
    /**
     * @description Sets the direction of the ray using a 3D vector.
     * @param value - The 3D vector to set as the direction of the ray.
     */
    set direction(value: Vector3f);
    /**
     * @description Creates and returns a deep copy of the current ray.
     * @returns A new instance of Ray with the same origin and direction as the original.
     */
    clone(): Ray;
    /**
     * @description Compares this ray with another ray for equality.
     * @param other - The ray to compare with.
     * @returns A boolean indicating whether the two rays are equal.
     */
    equals(other: Ray): boolean;
    /**
     * @description Returns a string representation of the Ray object.
     * @returns A string describing the Ray object.
     */
    toString(): string;
  }
  class RaycastHit2D {
    /**
     * @description The point of contact in world space.
     * @type {Vector2f}
     */
    readonly point: Vector2f;
    /**
     * @description The normal of contact in world space.
     * @type {Vector2f}
     */
    readonly normal: Vector2f;
    /**
     * @description The collider involved in the collision.
     * @type {Collider2D | null}
     */
    readonly collider: Collider2D | null;
    /**
     * @description The other object involved in the collision.
     * @type {SceneObject | null}
     */
    readonly colliderObject: SceneObject | null;
    constructor(point: Vector2f, normal: Vector2f, collider: Collider2D | null, colliderObject: SceneObject | null);
  }
  class RaycastHit3D {
    /**
     * @description The point of contact in world space.
     * @type {Vector3f}
     */
    readonly point: Vector3f;
    /**
     * @description The normal of contact in world space.
     * @type {Vector3f}
     */
    readonly normal: Vector3f;
    /**
     * @description The collider involved in the collision.
     * @type {Collider | null}
     */
    readonly collider: Collider | null;
    /**
     * @description The object that the collider belongs to.
     * @type {SceneObject | null}
     */
    readonly colliderObject: SceneObject | null;
    constructor(point: Vector3f, normal: Vector3f, collider: Collider | null, colliderObject: SceneObject | null);
  }
  /**
   * @class Rect
   */
  class Rect {
    /**
     * @description The x-coordinate of the rectangle's position.
     */
    x: number;
    /**
     * @description The y-coordinate of the rectangle's position.
     */
    y: number;
    /**
     * @description The width of the rectangle.
     */
    width: number;
    /**
     * @description The height of the rectangle.
     */
    height: number;
    /**
     * @constructor
     * @param x - The x-coordinate of the rectangle or another Rect instance to clone.
     * @param y - The y-coordinate of the rectangle. Defaults to 0 if not provided.
     * @param width - The width of the rectangle. Defaults to 0 if not provided.
     * @param height - The height of the rectangle. Defaults to 0 if not provided.
     */
    constructor(x?: number, y?: number, width?: number, height?: number);
    /**
     * @description Creates and returns a deep copy of the current rectangle.
     * @returns A new instance of Rect with the same properties as the original.
     */
    clone(): Rect;
    /**
     * @description Determines if this rectangle is equal to another rectangle.
     * @param other - The rectangle to compare with.
     * @returns Whether the rectangles are equal.
     */
    equals(other: Rect): boolean;
    /**
     * @description Returns a string representation of the rectangle.
     * @returns A formatted string describing the rectangle.
     */
    toString(): string;
  }
  /**
   * @class Renderer
   */
  class Renderer extends Component {
    protected constructor();
    /**
     * @description Retrieves the shared materials used by the Renderer.
     */
    get materials(): Material[];
    /**
     * @description Sets the materials for rendering.
     */
    set materials(value: Material[]);
    /**
     * @description Gets the shadow mode of the renderer.
     */
    get shadowMode(): ShadowMode;
    /**
     * @description Sets the shadow mode for the Renderer. This determines whether the object casts and/or receives shadows.
     */
    set shadowMode(value: ShadowMode);
  }
  /**
   * @class RenderTextureProvider
   */
  class RenderTextureProvider extends TextureProvider {
    protected constructor();
    /**
     * @description Gets the clear type for the render texture.
     * @returns The camera clear type used for this render texture.
     */
    get clearType(): CameraClearType;
    /**
     * @description Sets the clear type for the render texture.
     * @param ct The camera clear type to use for this render texture.
     */
    set clearType(ct: CameraClearType);
    /**
     * @description Gets the color used to clear the render texture when inputTexture is null.
     * @default Color(0,0,0,1)
     * @returns The clear color for the render texture.
     */
    get clearColor(): Color;
    /**
     * @description Sets the color used to clear the render texture when inputTexture is null.
     * @param color The clear color to use for the render texture.
     */
    set clearColor(color: Color);
    /**
     * @description Gets the input texture for this render texture.
     * @returns The input texture or undefined if none is set.
     */
    get inputTexture(): Texture | undefined;
    /**
     * @description Sets the input texture for this render texture.
     * @param value The input texture to use for this render texture.
     */
    set inputTexture(value: Texture | undefined);
    /**
     * @description Sets the width of the render texture.
     * @param value The width to set for the render texture.
     */
    setWidth(value: number): void;
    /**
     * @description Sets the height of the render texture.
     * @param value The height to set for the render texture.
     */
    setHeight(value: number): void;
  }
  /**
   * @class RigidBody
   */
  class RigidBody extends DynamicComponent {
    protected constructor();
    /**
     * @description Gets or sets the mass of the rigid body in kilograms.
     * Mass must be positive and greater than zero. Changing mass during simulation affects the body's inertia and response to forces.
     * @default 1.0
     */
    get mass(): number;
    set mass(value: number);
    /**
     * @description Gets or sets the linear damping coefficient that reduces linear velocity over time.
     * Value typically ranges from 0 (no damping) to 1 (maximum damping). Higher values cause the body to slow down faster.
     * @default 0.0
     */
    get damping(): number;
    set damping(value: number);
    /**
     * @description Gets or sets the angular damping coefficient that reduces angular velocity over time.
     * Value typically ranges from 0 (no damping) to 1 (maximum damping). Higher values cause the body to stop rotating faster.
     * @default 0.0
     */
    get angularDamping(): number;
    set angularDamping(value: number);
    /**
     * @description Gets or sets the continuous force applied to the rigid body in world space.
     * Force is measured in Newtons and is applied continuously during physics simulation.
     * Note: Directly setting this property overrides any previously applied forces.
     * For temporary forces, consider using the addForce method instead.
     * @default Vector3f(0, 0, 0)
     */
    get force(): Vector3f;
    set force(value: Vector3f);
    /**
     * @description Gets or sets the continuous torque applied to the rigid body in world space.
     * Torque is measured in Newton-meters and is applied continuously during physics simulation.
     * Note: Directly setting this property overrides any previously applied torques.
     * For temporary torques, consider using the addTorque method instead.
     * @default Vector3f(0, 0, 0)
     */
    get torque(): Vector3f;
    set torque(value: Vector3f);
    /**
     * @description Gets or sets whether movement along the X-axis is frozen.
     * When frozen, the rigid body cannot move along the X-axis but can still rotate freely.
     * Constraint is applied during the next physics simulation step.
     * @default false
     */
    get freezeX(): boolean;
    set freezeX(value: boolean);
    /**
     * @description Gets or sets whether movement along the Y-axis is frozen.
     * When frozen, the rigid body cannot move along the Y-axis but can still rotate freely.
     * Constraint is applied during the next physics simulation step.
     * @default false
     */
    get freezeY(): boolean;
    set freezeY(value: boolean);
    /**
     * @description Gets or sets whether movement along the Z-axis is frozen.
     * When frozen, the rigid body cannot move along the Z-axis but can still rotate freely.
     * Constraint is applied during the next physics simulation step.
     * @default false
     */
    get freezeZ(): boolean;
    set freezeZ(value: boolean);
    /**
     * @description Gets or sets whether the rigid body is static (immovable).
     * Static bodies are not affected by forces or collisions and are typically used for environment geometry.
     * Changing this property affects performance characteristics of the physics simulation.
     * @default false
     */
    get static(): boolean;
    set static(value: boolean);
    /**
     * @description Gets or sets whether physics animation is enabled for this rigid body.
     * When enabled, the rigid body combines physics simulation with animation, allowing for hybrid behavior.
     * This feature creates additional internal constraints and may impact performance.
     * @default false
     */
    get physicsAnimation(): boolean;
    set physicsAnimation(value: boolean);
    /**
     * @description Gets or sets the rate at which physics animation is applied, controlling the blend between animation and physics.
     * Value typically ranges from 0 (full animation) to 1 (full physics). Intermediate values create a blend effect.
     * Higher values give more influence to physics simulation over animation.
     * @default 0.0
     */
    get physicsAnimationRate(): number;
    set physicsAnimationRate(value: number);
    /**
     * @description Gets or sets whether gravity affects this rigid body.
     * When enabled, the rigid body is affected by the scene's gravity settings, typically pulling it downward.
     * Gravity is applied continuously during physics simulation alongside other forces.
     * @default true
     */
    get useGravity(): boolean;
    set useGravity(value: boolean);
    /**
     * @description Gets or sets the world space position of the rigid body.
     * Position is represented as a Vector3f in world coordinates.
     * Setting this property directly moves the body immediately, bypassing physics simulation.
     * For physics-consistent movement, consider applying forces instead.
     * @default Vector3f(0, 0, 0)
     */
    get position(): Vector3f;
    set position(value: Vector3f);
    /**
     * @description Gets or sets the rotation of the rigid body as a quaternion.
     * Rotation is represented as a Quaternionf in world space.
     * Setting this property directly rotates the body immediately, bypassing physics simulation.
     * For physics-consistent rotation, consider applying torques instead.
     * @default Quaternionf(0, 0, 0, 1)
     */
    get rotation(): Quaternionf;
    set rotation(value: Quaternionf);
    /**
     * @description Gets or sets the rotation of the rigid body as Euler angles in degrees.
     * Angles are represented as a Vector3f with rotation order XYZ.
     * Note that Euler angles can suffer from gimbal lock; consider using the rotation property for more robust rotation handling.
     * @default Vector3f(0, 0, 0)
     */
    get eulerAngles(): Vector3f;
    set eulerAngles(value: Vector3f);
    /**
     * @description Gets or sets the linear velocity of the rigid body in world space.
     * Velocity is measured in meters per second as a Vector3f.
     * Setting this property directly changes the body's velocity immediately, overriding physics calculations.
     * For physics-consistent velocity changes, consider applying forces instead.
     * @default Vector3f(0, 0, 0)
     */
    get velocity(): Vector3f;
    set velocity(value: Vector3f);
    /**
     * @description Gets or sets the angular velocity of the rigid body in world space.
     * Angular velocity is measured in radians per second as a Vector3f.
     * Setting this property directly changes the body's angular velocity immediately, overriding physics calculations.
     * For physics-consistent angular velocity changes, consider applying torques instead.
     * @default Vector3f(0, 0, 0)
     */
    get angularVelocity(): Vector3f;
    set angularVelocity(value: Vector3f);
    /**
     * @description Gets or sets the inertia tensor of the rigid body.
     * The inertia tensor represents the body's resistance to rotational acceleration around different axes.
     * Values are typically calculated automatically based on mass and shape, but can be overridden for custom behavior.
     * @default Vector3f(1, 1, 1)
     */
    get inertiaTensor(): Vector3f;
    set inertiaTensor(value: Vector3f);
    /**
     * @description Add a force to the RigidBody's center of mass.
     * * ### Force Modes
     * - **Force:** Continuous force, dependent on mass.
     * - **Acceleration:** Continuous acceleration, independent of mass.
     * - **Impulse:** Instant force, dependent on mass (e.g. Explosion, Collision).
     * - **VelocityChange:** Instant velocity change, independent of mass.
     * @example Applying an instantaneous force
     * const explosionForce = new Vector3f(0, 100, 0);
     * rigidBody.addForce(explosionForce, Physics3D.ForceMode.Impulse);
     * @param force - The force vector to apply (World Space).
     * @param mode - The type of force application. Defaults to `Physics3D.ForceMode.Force`.
     * @returns {void}
     */
    addForce(force: Vector3f, mode?: ForceMode3D): void;
    /**
     * @description Add a torque to the RigidBody's center of mass.
     * * ### Force Modes
     * - **Force:** Continuous force, dependent on mass.
     * - **Acceleration:** Continuous acceleration, independent of mass.
     * - **Impulse:** Instant force, dependent on mass (e.g. Explosion, Collision).
     * - **VelocityChange:** Instant velocity change, independent of mass.
     * @example Applying an instantaneous torque
     * const explosionTorque = new Vector3f(0, 100, 0);
     * rigidBody.addTorque(explosionTorque, Physics3D.ForceMode.Impulse);
     * @param torque - The torque vector to apply (World Space).
     * @param mode - The type of torque application. Defaults to `Physics3D.ForceMode.Force`.
     * @returns {void}
     */
    addTorque(torque: Vector3f, mode?: ForceMode3D): void;
    /**
     * @description Add a force at a specific position, potentially generating torque.
     * @example push something at a specific point
     * // Apply a push at the edge of the object (1 unit to the right) to make it swing
     * const pushForce = new Vector3f(0, 0, 10); // Push forward
     * const pushPoint = new Vector3f(1, 0, 0);  // Right edge
     * rigidBody.addForceAt(pushForce, pushPoint, true, Physics3D.ForceMode.Impulse);
     * @param force - The force vector to apply.
     * @param position - The position at which to apply the force.
     * @param isLocal - If true, interprets `force` and `position` in local space. Defaults to false.
     * @param mode - The mode of the force (Force, Impulse, etc.). Defaults to Force.
     * @returns {ConstantForce3D | null} - Returns force/torque if the mode is continuous (Force/Acceleration), enabling later removal.
     */
    addForceAt(force: Vector3f, position: Vector3f, isLocal?: boolean, mode?: ForceMode3D): ConstantForce3D | null;
  }
  /**
   * @class RigidBody2D
   * @description A 2D physics rigid body component that can be attached to scene objects to enable physics simulation.
   * This component handles physical properties like mass, velocity, forces, and constraints.
   */
  class RigidBody2D extends DynamicComponent {
    protected constructor();
    /**
     * @description Gets whether the RigidBody2D is static. Static bodies don't move under physics simulation but can collide with other bodies.
     */
    get static(): boolean;
    /**
     * @description Sets whether the RigidBody2D is static. Static bodies don't move under physics simulation but can collide with other bodies.
     * Changing this property will immediately update the physics simulation type.
     */
    set static(value: boolean);
    /**
     * @description Gets whether the RigidBody2D is affected by gravity.
     * When enabled, the body will accelerate downward according to the scene's gravity settings.
     */
    get useGravity(): boolean;
    /**
     * @description Sets whether the RigidBody2D is affected by gravity.
     * When enabled, the body will accelerate downward according to the scene's gravity settings.
     */
    set useGravity(value: boolean);
    /**
     * @description Gets the mass of the RigidBody2D in kilograms.
     * Mass affects how forces impact the body's acceleration and how it interacts with other bodies during collisions.
     */
    get mass(): number;
    /**
     * @description Sets the mass of the RigidBody2D in kilograms.
     * Mass affects how forces impact the body's acceleration and how it interacts with other bodies during collisions.
     */
    set mass(value: number);
    /**
     * @description Gets the position of the RigidBody2D in world coordinates.
     * Position represents the center of mass of the body in 2D space.
     */
    get position(): Vector2f;
    /**
     * @description Sets the position of the RigidBody2D in world coordinates.
     * Position represents the center of mass of the body in 2D space.
     */
    set position(value: Vector2f);
    /**
     * @description Gets the rotation of the RigidBody2D in radians.
     * Rotation is measured counter-clockwise from the positive X-axis.
     */
    get rotation(): number;
    /**
     * @description Sets the rotation of the RigidBody2D in radians.
     * Rotation is measured counter-clockwise from the positive X-axis.
     */
    set rotation(value: number);
    /**
     * @description Gets the linear damping coefficient of the RigidBody2D.
     * Linear damping reduces the body's linear velocity over time, simulating air resistance or friction.
     */
    get damping(): number;
    /**
     * @description Sets the linear damping coefficient of the RigidBody2D.
     * Linear damping reduces the body's linear velocity over time, simulating air resistance or friction.
     */
    set damping(value: number);
    /**
     * @description Gets the angular damping coefficient of the RigidBody2D.
     * Angular damping reduces the body's angular velocity over time.
     */
    get angularDamping(): number;
    /**
     * @description Sets the angular damping coefficient of the RigidBody2D.
     * Angular damping reduces the body's angular velocity over time.
     */
    set angularDamping(value: number);
    /**
     * @description Gets whether the RigidBody2D is frozen on the X-axis.
     * When frozen, the body cannot move along the X-axis but can still move along other axes.
     */
    get freezeX(): boolean;
    /**
     * @description Sets whether the RigidBody2D is frozen on the X-axis.
     * When frozen, the body cannot move along the X-axis but can still move along other axes.
     */
    set freezeX(value: boolean);
    /**
     * @description Gets whether the RigidBody2D is frozen on the Y-axis.
     * When frozen, the body cannot move along the Y-axis but can still move along other axes.
     */
    get freezeY(): boolean;
    /**
     * @description Sets whether the RigidBody2D is frozen on the Y-axis.
     */
    set freezeY(value: boolean);
    /**
     * @description Gets whether the RigidBody2D's rotation is frozen.
     * When frozen, the body cannot rotate but can still translate in 2D space.
     */
    get freezeZ(): boolean;
    /**
     * @description Sets whether the RigidBody2D's rotation is frozen.
     * When frozen, the body cannot rotate but can still translate in 2D space.
     */
    set freezeZ(value: boolean);
    /**
     * @description Gets the accumulated external force applied to the RigidBody2D.
     * Forces affect the body's acceleration according to Newton's second law (F = ma).
     */
    get force(): Vector2f;
    /**
     * @description Sets the accumulated external force applied to the RigidBody2D.
     * Forces affect the body's acceleration according to Newton's second law (F = ma).
     */
    set force(value: Vector2f);
    /**
     * @description Gets the accumulated external torque applied to the RigidBody2D.
     * Torque causes angular acceleration around the body's center of mass.
     */
    get torque(): number;
    /**
     * @description Sets the accumulated external torque applied to the RigidBody2D.
     * Torque causes angular acceleration around the body's center of mass.
     */
    set torque(value: number);
    /**
     * @description Gets the gravity scale factor for the RigidBody2D.
     * This multiplier affects how much gravity influences the body (0 = no gravity, 1 = normal gravity, 2 = double gravity).
     */
    get gravityScale(): number;
    /**
     * @description Sets the gravity scale factor for the RigidBody2D.
     * This multiplier affects how much gravity influences the body (0 = no gravity, 1 = normal gravity, 2 = double gravity).
     */
    set gravityScale(value: number);
    /**
     * @description Gets the linear velocity of the RigidBody2D.
     * Velocity represents the rate of change of position over time.
     */
    get velocity(): Vector2f;
    /**
     * @description Sets the linear velocity of the RigidBody2D.
     * Velocity represents the rate of change of position over time.
     */
    set velocity(value: Vector2f);
    /**
     * @description Gets the angular velocity of the RigidBody2D in radians per second.
     * Positive values indicate counter-clockwise rotation.
     */
    get angularVelocity(): number;
    /**
     * @description Sets the angular velocity of the RigidBody2D in radians per second.
     * Positive values indicate counter-clockwise rotation.
     */
    set angularVelocity(value: number);
    /**
     * @description Adds a force to the RigidBody2D's accumulated forces.
     * The force will be applied during the next physics simulation step.
     * @param force - The force vector (x, y) in Newtons to add
     */
    addForce(force: Vector2f, mode?: ForceMode2D): void;
    /**
     * @description Adds a torque to the RigidBody2D's accumulated torque.
     * The torque will be applied during the next physics simulation step.
     * @param torque - The torque in Newton-meters to add
     */
    addTorque(torque: number, mode?: ForceMode2D): void;
    /**
     * @description Add a force at a specific position in 2D space, potentially generating rotation (torque).
     * * @example Pushing a 2d squre at the corner to spin it
     * // Apply a force at the top-right corner relative to the object
     * const pushForce = new Vector2f(10, 0); // Push right
     * const cornerPos = new Vector2f(0.5, 0.5); // Top-right corner in local space
     * rigidBody2D.addForceAt(pushForce, cornerPos, true, Physics2D.ForceMode.Impulse);
     * @param force - The force vector to apply.
     * @param position - The position at which the force is applied.
     * @param isLocal - If true, interprets inputs in local space. Defaults to false.
     * @param mode - The force mode (Force, Impulse, etc.). Defaults to Force.
     * @returns {ConstantForce2D | null} - Returns force/torque if the mode is continuous (Force/Acceleration), enabling later removal.
     */
    addForceAt(force: Vector2f, position: Vector2f, isLocal?: boolean, mode?: ForceMode2D): ConstantForce2D | null;
  }
  /**
   * @class Scene
   * @description <b>runtime</b> can on script with [this.scene] get one scene
   * @example
   * let currScene = this.scene;
   */
  class Scene extends AObject {
    protected constructor();
    /**
     * @description Create and add a scene object to this scene
     * @param name - the name of sceneObject
     * @returns the created SceneObject
     * @example
     * let newObj = this.scene.createSceneObject('newObj');
     */
    createSceneObject(name: string): SceneObject;
    /**
     * @description remove scene object from the scene
     * <br/> (if obj does not belong to the scene or is invalid return false)
     * @param obj - Object that need to be removed from the scene
     * @returns remove is success?
     * @example
     * let foundObj = this.scene.findSceneObject('newObj');
     * if (foundObj) {
     *   this.scene.removeSceneObject(foundObj);
     * }
     */
    removeSceneObject(obj: SceneObject): boolean;
    /**
     * @description
     * get all the root scene objects in the Scene.
     */
    getRootSceneObjects(): SceneObject[];
    /**
     * @description
     * get all the sceneObject in the Scene.
     * @example
     * var sceneObjects = this.scene.getAllSceneObjects();
     * sceneObjects.forEach(obj => {
     *   // TODO
     * })
     */
    getAllSceneObjects(): SceneObject[];
    /**
     * @description Finds a scene object by name from a scene object tree or subtree in the scene.
     * @param name - The name of the scene object to find.
     * @param root - The root scene object of the scene object tree or subtree.
     * @returns The found scene object, or null if not found.
     * @example
     * let foundObj = this.scene.findSceneObject('newObj');
     * if (foundObj) {
     *   this.scene.removeSceneObject(foundObj);
     * }
     */
    findSceneObject(name: string, root?: SceneObject): SceneObject | null;
    /**
     * @description Post a reset event which will take effects next frame. The reset result is the same as "reset on record" feature. This feature works only if the "Reset on Record" setting is "on," which is the default setting.
     * @example
     * export class NewScriptComponent extends APJS.BasicScriptComponent {
     *   private currentScore: number;
     *   onStart() {
     *     // the score should be reset when record start
     *     let callback = (event:IEvent) => {
     *       this.currentScore = 0;
     *       ...
     *     }
     *
     *     const globalEmitter = APJS.EventManager.getGlobalEmitter();
     *     globalEmitter.on(APJS.EventType.RecordStart, callback);
     *   }
     *   onUpdate(deltaTime: number) {
     *     // When the score exceeds the limit, a manual reset can be triggered, which will activate all reset logic for the record event.
     *     if (this.currentScore > 100) {
     *       this.getSceneObject().scene.postResetEvent();
     *     }
     *   }
     * }
     */
    postResetEvent(): void;
    /**
     * @description commitCommandBuffer
     * @param buffer - command buffer
     */
    commitCommandBuffer(buffer: CommandBuffer): void;
  }
  /**
   * @class SceneObject
   * @description
   * <br/>SceneObject is the base class for all SceneObjects in Scenes.
   * <br/>can use scene.createSceneObject() to create one SceneObject
   */
  class SceneObject extends AObject {
    protected constructor();
    /**
     * @description The enabled status of the SceneObject itself.
     */
    get enabled(): boolean;
    /**
     * @description Sets whether the SceneObject is enabled, which affects its visibility and interaction in the scene.
     * If need to enable child SceneObject, use '**setEnabledInHierarchy**' instead.
     */
    set enabled(enabled: boolean);
    /**
     * @description Layers can be used for selective rendering from cameras.
     */
    get layer(): number;
    /**
     * @description Sets the layer of the SceneObject.
     */
    set layer(value: number);
    /**
     * @readonly
     * @tsd_constant
     * @description The scene to which this scene object belongs.
     */
    get scene(): Scene;
    /**
     * @tsd_constant
     * @description The parent of the scene object.
     * <br/> Changing the parent will modify the parent-relative position,
     * <br/> scale and rotation but keep the world space position, rotation and scale the same.
     */
    get parent(): SceneObject | null;
    /**
     * @description Sets the parent of the SceneObject. If a new parent is provided, it reassigns the object's transform to the new parent.
     *              If no parent is provided (null), it removes the object from its current parent.
     */
    set parent(parent: SceneObject | null);
    /**
     * @description Gets whether the scene object is enabled in the hierarchy.
     * This property determines if the scene object and its components are visible and active.
     * @returns True if the scene object is enabled in the hierarchy, false otherwise.
     */
    isEnabledInHierarchy(): boolean;
    /**
     * @description Sets whether the scene object is enabled in the hierarchy.
     * @param enabled - True to enable the scene object in the hierarchy, false to disable it.
     */
    setEnabledInHierarchy(enabled: boolean): void;
    /**
     * @description Finds a child by name and returns it.
     * @param name - The name of the sceneObject to find.
     * @returns The found child SceneObject, or null if no child with matching name is found.
     */
    getChild(name: string): SceneObject | null;
    /**
     * @description Gets all children scene objects of the scene object.
     * @returns An array of child SceneObjects.
     */
    getChildren(): SceneObject[];
    /**
     * @description Adds a component of the specified type to the scene object.
     * @param type - The type of component to add.
     * @returns The added component, or null if the component could not be added.
     */
    addComponent(type: string): Component | null;
    /**
     * @description Gets a component of the specified type from the scene object.
     * @param type The type of component to get.
     * @returns The component of the specified type, or null if not found.
     */
    getComponent(type: string): Component | null;
    /**
     * @description Gets all components of the specified type from the scene object.
     * @param type - Optional the type of components to get.
     * @returns An array of components of the specified type or all components for no type input.
     */
    getComponents(type?: string): Component[];
    /**
     * @param type - Component's typename
     * @description getComponentsRecursive
     * @returns components
     */
    getComponentsRecursive(type: string): Component[];
    /**
     * @description Clones the scene object.
     * @returns A cloned scene object.
     */
    clone(): SceneObject;
    /**
     * @description Gets the transform component of the scene object.
     * @returns The transform component.
     */
    getTransform(): Transform;
    /**
     * @description Removes a component of the specified type from the scene object.
     * @param type - The type of component to remove.
     * @returns True if the component was successfully removed, false otherwise.
     */
    removeComponent(comp: Component): boolean;
  }
  /**
   * @class ScreenTextureProvider
   */
  class ScreenTextureProvider extends RenderTextureProvider {
    protected constructor();
    /**
     * @description Get size mode for screen texture sizing.
     * @returns The size mode for screen texture sizing.
     */
    get sizeMode(): ScreenTextureSizeMode;
    /**
     * @description Sets the size mode for screen texture sizing.
     * @param value The size mode for screen texture sizing.
     */
    set sizeMode(value: ScreenTextureSizeMode);
  }
  /**
   * @description Defines the size modes for screen textures.
   * @enum {number}
   * @property FollowScreen Represents that the screen texture size follows the screen size.
   * @property FollowInput Represents that the screen texture size follows the input size.
   * @property Custom Represents that the screen texture size is custom.
   */
  enum ScreenTextureSizeMode {
    FollowScreen,
    FollowInput,
    Custom
  }
  /**
   * @class ScreenTransform
   * Manages screen space transformations for UI elements, including positioning, sizing, and anchoring.
   * Extends the base Transform class to provide UI-specific layout functionality such as anchor points,
   * pivot positioning, and screen space rect calculations.
   */
  class ScreenTransform extends Transform {
    constructor();
    /**
     * @description Gets or sets the position of the UI element relative to its anchors.
     * This position is calculated from the element's pivot point and adjusted based on anchor positions.
     * Values are in screen space coordinates.
     */
    get anchoredPosition(): Vector2f;
    set anchoredPosition(value: Vector2f);
    /**
     * @description Gets or sets the size difference between the UI element and its parent's rect.
     * Positive values expand the element beyond the parent's bounds, negative values shrink it.
     * Values are in screen space coordinates.
     */
    get sizeDelta(): Vector2f;
    set sizeDelta(value: Vector2f);
    /**
     * @description Gets or sets the pivot point of the UI element, normalized to [0,1] range.
     * (0,0) represents the bottom-left corner, (1,1) represents the top-right corner.
     * Determines the origin point for rotation, scaling, and positioning calculations.
     */
    get pivot(): Vector2f;
    set pivot(value: Vector2f);
    /**
     * @description Gets or sets the anchor points that define how the UI element is positioned relative to its parent.
     * Format: [minX, minY, maxX, maxY], each in [0,1] range relative to parent's rect.
     * Common configurations include (0,0,1,1) for stretching to fill parent, (0.5,0.5,0.5,0.5) for centering, etc.
     */
    get anchors(): Vector4f;
    set anchors(value: Vector4f);
    /**
     * @description Gets or sets the offset values from the anchors, defining the element's position within the anchor bounds.
     * Format: [left, bottom, right, top] offsets in pixels.
     */
    get offsets(): Vector4f;
    set offsets(value: Vector4f);
    /**
     * @description Gets or sets the 2D scaling factor applied to the UI element.
     */
    get scale(): Vector2f;
    set scale(value: Vector2f);
    /**
     * @description Gets or sets the 2D rotation angle in degrees applied to the UI element.
     * Rotation is performed around the element's pivot point.
     */
    get rotation(): number;
    set rotation(value: number);
  }
  /**
   * @description Defines the shadow casting and receiving modes for a renderable object.
   * @enum
   */
  enum ShadowMode {
    /** The object casts shadows but does not receive them. */
    Caster = 1,
    /** The object receives shadows but does not cast them. */
    Receiver = 2,
    /** The object neither casts nor receives shadows. */
    None = 0
  }
  /**
   * @class SkinMeshRenderer
   * @description A renderer component specifically designed for rendering skinned meshes with skeletal animation support.
   */
  class SkinMeshRenderer extends Renderer {
    protected constructor();
    /**
     * @description Gets the mesh with the SkinMeshRenderer.
     */
    get mesh(): Mesh;
    /**
     * @description Sets the mesh for the SkinMeshRenderer.
     */
    set mesh(value: Mesh);
    /**
     * @description Gets the main material for the SkinMeshRenderer.
     */
    get mainMaterial(): Material | null;
    /**
     * @description Sets the main material for the SkinMeshRenderer.
     */
    set mainMaterial(value: Material | null);
    /**
     * @description Gets the main rendering pass from the object's main material.
     */
    get mainPass(): Pass | null;
    /**
     * @description Gets the axis-aligned bounding box (AABB) for the skin mesh renderer.
     */
    getBoundingBox(): AABB;
  }
  /**
   * @class SoundEventDetector
   * @description Sound event detector.
   * @example
   * OnInit() {
   *     const builder = APJS.AudioDetectionModule.getAudioDetectionBuilder(APJS.AudioDetectionType.SoundEvent);
   *     builder.setDetectorSource(APJS.AudioSourceType.Microphone, null);
   *     this.detector = builder.build();
   * }
   * OnUpdate(dt: number) {
   *     if (this.detector) {
   *         const results = this.detector.getResult();
   *         for (const result of results) {
   *             console.log(result.type, result.similarity);
   *         }
   *     }
   * }
   */
  class SoundEventDetector implements IAudioDetector {
    protected constructor();
    /**
     * @description Whether the detector is enabled.
     * @example
     * this.audioEventDetector.enabled = false;
     */
    enabled: boolean;
    /**
     * @description get sound event detection result
     * @example
     * const results = this.audioEventDetector.getResult();
     * for (const result of results) {
     *   console.log(result.type, result.similarity);
     * }
     */
    getResult(): SoundEventResult[];
    /**
     * @description get similarity of specific sound event type
     * @example
     * const catResult = this.audioEventDetector.getSimilarityByType(APJS.SoundEventType.Cat);
     * console.log(catResult);
     */
    getSimilarityByType(type: SoundEventType): number;
  }
  /**
   * @class SoundEventDetectorBuilder
   * @description Builder for SoundEventDetector.
   * @example
   * OnInit() {
   *     const builder = APJS.AudioDetectionModule.getAudioDetectionBuilder(APJS.AudioDetectionType.SoundEvent);
   *     builder.setDetectorSource(APJS.AudioSourceType.Microphone, null);
   *     const detector = builder.build();
   * }
   */
  class SoundEventDetectorBuilder extends AudioDetectorBuilder<SoundEventDetector> {
    protected constructor();
    /**
     * @description Build the SoundEventDetector. Note that the detector should be built in OnInit, otherwise it will return null.
     */
    build(): SoundEventDetector | null;
  }
  /**
   * @class SoundEventResult
   * @description Result of sound event detection.
   * @example
   * const results = this.audioEventDetector.getResult();
   * for (const result of results) {
   *   console.log(result.type, result.similarity);
   * }
   */
  class SoundEventResult {
    constructor(type: SoundEventType, similarity: number);
    /**
     * @description sound event type
     */
    type: SoundEventType;
    /**
     * @description sound event similarity
     */
    similarity: number;
  }
  /**
   * @enum SoundEventType
   * @description Audio sound event type.
   * @example
   * const catResult = this.audioEventDetector.getSimilarityByType(APJS.SoundEventType.Cat);
   */
  enum SoundEventType {
    Speech = "Speech",
    Singing = "Singing",
    Whispering = "Whispering",
    Laughter = "Laughter",
    CryingAndSobbing = "CryingAndSobbing",
    Yell = "Yell",
    Whistling = "Whistling",
    Breathing = "Breathing",
    Snoring = "Snoring",
    Cough = "Cough",
    Sneeze = "Sneeze",
    Hiccup = "Hiccup",
    Fart = "Fart",
    FingerSnapping = "FingerSnapping",
    Clapping = "Clapping",
    HeartSoundsAndHeartbeat = "HeartSoundsAndHeartbeat",
    Cheering = "Cheering",
    Applause = "Applause",
    Dog = "Dog",
    Cat = "Cat",
    Moo = "Moo",
    Pig = "Pig",
    Sheep = "Sheep",
    CrowingAndCockADoodleDoo = "CrowingAndCockADoodleDoo",
    Duck = "Duck",
    ChirpAndTweet = "ChirpAndTweet",
    Crow = "Crow",
    FlyAndHousefly = "FlyAndHousefly",
    Frog = "Frog",
    Snake = "Snake",
    MusicBGM = "MusicBGM",
    EmergencyVehicle = "EmergencyVehicle",
    Doorbell = "Doorbell",
    Knock = "Knock",
    Typing = "Typing",
    Alarm = "Alarm",
    TelephoneBellRinging = "TelephoneBellRinging",
    AlarmClock = "AlarmClock",
    GunshotAndGunfire = "GunshotAndGunfire",
    WhiteNoise = "WhiteNoise"
  }
  /**
   * @class SpectrumDetector
   * @description A spectrum detector implementation.
   * @example
   * OnInit() {
   *     const builder = APJS.AudioDetectionModule.getAudioDetectionBuilder(APJS.AudioDetectionType.Spectrum);
   *     builder.setDetectorSource(APJS.AudioSourceType.Microphone, null);
   *     this.detector = builder.build();
   * }
   * OnUpdate(dt: number) {
   *     if (this.detector) {
   *         const result = this.detector.getResult();
   *         for (const value of result) {
   *             console.log(value);
   *         }
   *     }
   * }
   */
  class SpectrumDetector extends BaseAudioDetector {
    protected constructor();
    /**
     * @description Get the result of the spectrum detection.
     * @returns db:[-100, -30] The result of the spectrum detection.
     */
    getResult(): Array<number>;
  }
  /**
   * @class SpectrumDetectorBuilder
   * @description A builder for spectrum detector to set the source of the detector and build the detector.
   * @example
   * OnInit() {
   *     const builder = APJS.AudioDetectionModule.getAudioDetectionBuilder(APJS.AudioDetectionType.Spectrum);
   *     builder.setDetectorSource(APJS.AudioSourceType.Microphone, null);
   *     const detector = builder.build();
   * }
   */
  class SpectrumDetectorBuilder extends AudioDetectorBuilder<SpectrumDetector> {
    protected constructor();
    /**
     * @description Set the source of the detector.
     * @param type - The type of audio source. Default is None. When the type is ExternalFile, the audioComponent must be provided.
     * @param audioComponent - The audio component which plays the external audio file.
     * @example
     * audioDetectorBuilder
     *     .setDetectorSource(APJS.AudioSourceType.ExternalFile, audioComponent)
     *     .build();
     * @returns Builder instance for chaining.
     */
    setDetectorSource(type: AudioSourceType, audioComponent: IAudioComponent | null): this;
    /**
     * @description Build the spectrum detector. Note that the detector should be built in OnInit, otherwise it will return null.
     * @returns Detector instance of the spectrum detector.
     */
    build(): SpectrumDetector | null;
  }
  /**
   * @class SphereCollider
   */
  class SphereCollider extends Collider {
    protected constructor();
    /**
     * @description Gets or sets the radius of the sphere collider.
     * The radius determines the size of the spherical collision boundary.
     * Larger values result in a larger collision area around the object.
     */
    get radius(): number;
    set radius(value: number);
  }
  /**
   * @class
   * @description Represents a spot light, which emits light from a single point in a cone shape.
   */
  class SpotLight extends Light {
    protected constructor();
    /**
     * @description Gets the attenuation range of the spot light. This determines how far the light can reach.
     */
    get attenuationRange(): number;
    /**
     * @description Sets the attenuation range of the spot light. This determines how far the light can reach.
     */
    set attenuationRange(value: number);
    /**
     * @description Gets the inner angle of the spot light's cone, in degrees. Within this angle, the light is at its full intensity.
     */
    get innerAngle(): number;
    /**
     * @description Sets the inner angle of the spot light's cone, in degrees. Within this angle, the light is at its full intensity.
     */
    set innerAngle(value: number);
    /**
     * @description Gets the outer angle of the spot light's cone, in degrees. The light intensity gradually falls off from the inner angle to this outer angle.
     */
    get outerAngle(): number;
    /**
     * @description Sets the outer angle of the spot light's cone, in degrees. The light intensity gradually falls off from the inner angle to this outer angle.
     */
    set outerAngle(value: number);
  }
  /**
   * @class SpringJoint
   */
  class SpringJoint extends Joint3D {
    protected constructor();
    /**
     * @description The damping of the spring joint.
     * @type {number}
     */
    get damping(): number;
    set damping(value: number);
    /**
     * @description The tolerance of the spring joint.
     * @type {number}
     */
    get tolerance(): number;
    set tolerance(value: number);
  }
  /**
   * @class SpringJoint2D
   */
  class SpringJoint2D extends Joint2D {
    protected constructor();
    /**
     * @description The damping factor of the spring joint.
     * @type {number}
     */
    get damping(): number;
    set damping(value: number);
    /**
     * @description The tolerance of the spring joint.
     * @type {number}
     */
    get tolerance(): number;
    set tolerance(value: number);
  }
  /**
   * @description Stencil function used for comparing stencil values.
   * @enum
   */
  enum StencilFunction {
    /** The comparison never passes. */
    Never,
    /** The comparison passes if the reference value is less than the stored stencil value. */
    Less,
    /** The comparison passes if the reference value is equal to the stored stencil value. */
    Equal,
    /** The comparison passes if the reference value is less than or equal to the stored stencil value. */
    LessOrEqual,
    /** The comparison passes if the reference value is greater than the stored stencil value. */
    Greater,
    /** The comparison passes if the reference value is not equal to the stored stencil value. */
    NotEqual,
    /** The comparison passes if the reference value is greater than or equal to the stored stencil value. */
    GreaterOrEqual,
    /** The comparison always passes. */
    Always
  }
  /**
   * @description Defines the operations that can be performed on the stencil buffer.
   * @enum
   */
  enum StencilOperation {
    /** the current value of the stencil buffer. */
    Keep,
    /** the stencil buffer to zero. */
    Zero,
    /** the current stencil buffer value with a reference value. */
    Replace,
    /** the current stencil buffer value and clamps it to the maximum representable unsigned integer. */
    IncrementAndClamp,
    /** Decrements the current stencil buffer value and clamps it to zero. */
    DecrementAndClamp,
    /** Bitwise inverts the current stencil buffer value. */
    Invert,
    /** Increments the current stencil buffer value and wraps it around if necessary. */
    IncrementAndWrap,
    /** Decrements the current stencil buffer value and wraps it around if necessary. */
    DecrementAndWrap
  }
  /**
   * @class DepthStencilState
   * @description depth stencil state
   */
  class StencilState extends AObject {
    protected constructor();
    /**
     * @description Indicates whether stencil testing is enabled.
     * @returns True if stencil testing is enabled, false otherwise.
     */
    get enable(): boolean;
    /**
     * @description Enables or disables the stencil test for the StencilState.
     * @param value - True to enable the stencil test, false to disable it.
     */
    set enable(value: boolean);
    /**
     * @description Get the operation to perform when the stencil test fails.
     * @returns The stencil operation to perform when the stencil test fails.
     */
    get failOperation(): StencilOperation;
    /**
     * @description Set the operation to perform when the stencil test fails for both front and back faces.
     * @param value - The stencil operation to set.
     */
    set failOperation(value: StencilOperation);
    /**
     * @description Get the operation to perform when the stencil test passes.
     * @returns The stencil operation to perform when the stencil test passes.
     */
    get passOperation(): StencilOperation;
    /**
     * @description Set the operation to perform when the stencil test passes for both front and back faces.
     * @param value - The stencil operation to set.
     */
    set passOperation(value: StencilOperation);
    /**
     * @description The comparison function used for the stencil test.
     * @returns The stencil function used for the stencil test.
     */
    get compareFunction(): StencilFunction;
    /**
     * @description Sets the compare function for the stencil state.
     * @param value - The stencil function to set.
     */
    set compareFunction(value: StencilFunction);
    /**
     * @description The mask applied to the stencil buffer for reading operations.
     * @returns The mask applied to the stencil buffer for reading operations.
     */
    get readMask(): number;
    /**
     * @description Sets the read mask for the stencil state.
     * @param value - The mask value to set for reading operations.
     */
    set readMask(value: number);
    /**
     * @description The write mask for the stencil state, which determines which bits can be written to the stencil buffer.
     * @returns The mask applied to the stencil buffer for writing operations.
     */
    get writeMask(): number;
    /**
     * @description Sets the write mask for both front and back stencil states.
     * @param value - The mask value to set for writing operations.
     */
    set writeMask(value: number);
    /**
     * @description The reference value for the stencil state.
     * @returns The reference value used for stencil testing.
     */
    get referenceValue(): number;
    /**
     * @description Sets the reference value for both front and back stencil operations.
     * @param value - The reference value to set for stencil testing.
     */
    set referenceValue(value: number);
  }
  /**
   * @description Defines how an element should be stretched to fit a container.
   * @enum
   */
  enum StretchMode {
    /** Scales the content to fit the container while maintaining its aspect ratio. The content is not cropped. */
    Fit = 0,
    /** Scales the content to fit the container's width while maintaining its aspect ratio. */
    FitWidth = 1,
    /** Scales the content to fit the container's height while maintaining its aspect ratio. */
    FitHeight = 2,
    /** Stretches the content to fill the container, which may not preserve the aspect ratio. */
    Stretch = 3,
    /** Scales the content to fill the container while maintaining its aspect ratio. The content may be cropped. */
    Fill = 4,
    /** Alias for Fill. Scales the content to fill the container and crops if necessary. */
    FillAndCut = 5,
    /** The content is not scaled and its original size is used. */
    TextureSize = 6
  }
  /**
   * @class Text
   * @description Represents a text component in the scene, used to display strings of text.
   * This class provides properties to control the text's appearance, such as font, color, and alignment.
   */
  class Text extends Renderer {
    protected constructor();
    /**
     * @description Gets the font size.
     */
    get fontSize(): number;
    /**
     * @description Sets the font size.
     */
    set fontSize(value: number);
    /**
     * @description Gets the spacing between letters, with the unit being the single line height.
     */
    get letterSpacing(): number;
    /**
     * @description Sets the spacing between letters, with the unit being the single line height.
     */
    set letterSpacing(value: number);
    /**
     * @description Gets the spacing between lines, with the unit being the single line height.
     */
    get lineSpacing(): number;
    /**
     * @description Sets the spacing between lines, with the unit being the single line height.
     */
    set lineSpacing(value: number);
    /**
     * @description Gets the plain text content of the text component.
     */
    get text(): string;
    /**
     * @description Sets the plain text content of the text component.
     */
    set text(value: string);
    /**
     * @description Gets the global opacity of the text, its styles, and the background.
     */
    get opacity(): number;
    /**
     * @description Sets the global opacity of the text, its styles, and the background.
     */
    set opacity(value: number);
    /**
     * @description Gets the current bold state based on font style.
     */
    get bold(): boolean;
    /**
     * @description Sets the current bold state based on font style.
     */
    set bold(enable: boolean);
    /**
     * @description Gets the current italic state based on font style.
     */
    get italic(): boolean;
    /**
     * @description Sets the current italic state based on font style.
     */
    set italic(enable: boolean);
    /**
     * @description Gets the local horizontal alignment, which refers to the horizontal alignment relative to the writing direction. The actual alignment value depends on the typesetting kind (horizontal or vertical).
     */
    get horizontalAlignment(): HorizontalAlignment;
    /**
     * @description Sets the local horizontal alignment, which refers to the horizontal alignment relative to the writing direction. Handles special cases for RTL characters and adjusts typesetting alignment accordingly based on the current typesetting kind.
     */
    set horizontalAlignment(value: HorizontalAlignment);
    /**
     * @description Gets the local vertical alignment, which refers to the vertical alignment relative to the writing direction.
     */
    get verticalAlignment(): VerticalAlignment;
    /**
     * @description Sets the local vertical alignment, which refers to the vertical alignment relative to the writing direction.
     */
    set verticalAlignment(value: VerticalAlignment);
    /**
     * @description Gets the color used for letter fill styling.
     */
    get color(): Color;
    /**
     * @description Sets the color used for letter fill styling.
     */
    set color(value: Color);
    /**
     * @description Gets the color of the text outline at index.
     *
     * Note: Outline of text component cannot be created or removed via script API. You must add
     * or remove outlines in the editor.
     *
     * Example:
     * ```ts
     * // Gets the color of the first outline
     * const color = text.getOutlineColorAtIndex(0);
     * ```
     * @param {number} index The index of the outline to get the color.
     * @returns {Color | undefined} The color of the outline at the specified index.
     */
    getOutlineColorAtIndex(index: number): Color | undefined;
    /**
     * @description Sets the color of the text outline at index.
     *
     * Note: Outline of text component cannot be created or removed via script API. You must add
     * or remove outlines in the editor.
     *
     * Example:
     * ```ts
     * // Sets the color of the first outline
     * const color = new Color(1, 1, 1, 1);
     * text.setOutlineColorAtIndex(0, color);
     * ```
     * @param {number} index The index of the outline to set the color.
     * @param {Color} color The color to set for the outline at the specified index.
     * @returns {void}
     */
    setOutlineColorAtIndex(index: number, color: Color): void;
    /**
     * @description Gets the color of the text shadow at index.
     *
     * Note: Shadow of text component cannot be created or removed via script API. You must add
     * or remove shadows in the editor.
     *
     * Example:
     * ```ts
     * // Gets the color of the first shadow
     * const color = text.getShadowColorAtIndex(0);
     * ```
     * @param {number} index The index of the shadow to get the color.
     * @returns {Color | undefined} The color of the shadow at the specified index.
     */
    getShadowColorAtIndex(index: number): Color | undefined;
    /**
     * @description Sets the color of the text shadow at index.
     *
     * Note: Shadow of text component cannot be created or removed via script API. You must add
     * or remove shadows in the editor.
     *
     * Example:
     * ```ts
     * // Sets the color of the first shadow
     * const color = new Color(1, 1, 1, 1);
     * text.setShadowColorAtIndex(0, color);
     * ```
     * @param {number} index The index of the shadow to set the color.
     * @param {Color} color The color to set for the shadow at the specified index.
     * @returns {void}
     */
    setShadowColorAtIndex(index: number, color: Color): void;
    /**
     * @description Gets the count of outlines for the text component.
     * @returns {number} The value of count of outlines.
     */
    getOutlineCount(): number;
    /**
     * @description Gets the count of shadows for the text component.
     * @returns {number} The value of count of shadows.
     */
    getShadowCount(): number;
  }
  /**
   * @class Texture
   */
  class Texture extends AObject {
    protected constructor();
    /**
     * @description Gets whether mipmap is enabled for the texture.
     * @returns Whether mipmap is enabled.
     */
    get enableMipmap(): boolean;
    /**
     * @description Enables or disables mipmapping for the texture.
     * @param value - Whether to enable mipmapping.
     */
    set enableMipmap(value: boolean);
    /**
     * @description Gets the minimization filter mode of the texture.
     * @returns The current minimization filter mode.
     */
    get filterMin(): FilterMode;
    /**
     * @description Sets the minimum filter mode for the texture.
     * @param value - The filter mode to set for minimization.
     */
    set filterMin(value: FilterMode);
    /**
     * @description Gets the magnification filter mode of the texture.
     * @returns The current magnification filter mode.
     */
    get filterMag(): FilterMode;
    /**
     * @description Sets the magnification filter mode for the texture.
     * @param value - The filter mode to set for magnification.
     */
    set filterMag(value: FilterMode);
    /**
     * @description Gets the mipmap mode for the texture.
     * @returns The current mipmap mode.
     */
    get filterMipmap(): FilterMipmapMode;
    /**
     * @description Sets the mipmap filtering mode for the texture.
     * @param value - The mipmap filtering mode to set.
     */
    set filterMipmap(value: FilterMipmapMode);
    /**
     * @description Get the wrap mode of the S dimension.
     * @returns The current wrap mode for the S dimension.
     */
    get wrapModeS(): WrapMode;
    /**
     * @description Sets the wrap mode for the S coordinate of the texture.
     * @param value - The wrap mode to set for the S dimension.
     */
    set wrapModeS(value: WrapMode);
    /**
     * @description Get the wrap mode of the T dimension.
     * @returns The current wrap mode for the T dimension.
     */
    get wrapModeT(): WrapMode;
    /**
     * @description Sets the vertical wrapping mode of the texture.
     * @param value - The wrap mode to set for the T dimension.
     */
    set wrapModeT(value: WrapMode);
    /**
     * @description Gets the wrap mode of the R dimension.
     * @returns The current wrap mode for the R dimension.
     */
    get wrapModeR(): WrapMode;
    /**
     * @description Sets the wrap mode for the red component of the texture.
     * @param value - The wrap mode to set for the R dimension.
     */
    set wrapModeR(value: WrapMode);
    /**
     * @description Gets the maximum anisotropy level of the current texture.
     * @returns The maximum anisotropy level as a number.
     */
    get maxAnisotropy(): number;
    /**
     * @description Sets the maximum anisotropy for the texture, which improves texture quality when viewed at oblique angles.
     * @param value - The maximum anisotropy level to set.
     */
    set maxAnisotropy(value: number);
    /**
     * @description Retrieves the width of the texture.
     * @returns The width of the texture as a number.
     */
    getWidth(): number;
    /**
     * @description Retrieves the height of the texture.
     * @returns The height of the texture as a number.
     */
    getHeight(): number;
    /**
     * @description Retrieves the depth of the source texture.
     * @returns The depth of the texture as a number.
     */
    getDepth(): number;
    /**
     * @description Retrieves the control associated with the texture.
     *              In runtime, it checks and loads the JS asset if necessary,
     *              then retrieves the JS asset by GUID from the map. If the JS asset is found,
     *              it returns the asset as a TextureProvider; otherwise, it returns the internal __control property.
     * @returns The control associated with the texture, either as a TextureProvider or the internal __control property.
     */
    getControl(): TextureProvider;
  }
  /**
   * @class Texture2DProvider
   * @description
   * <br/><b>new Texture2DProvider() is an invalid constructor</b>
   * <br/>If you need a 2D texture, you can get an texture by calling TextureUtil.createTexture2D()
   * @example
   * let provider = tex.getControl() as Texture2DProvider;
   */
  class Texture2DProvider extends TextureProvider {
    protected constructor();
    /**
     * @description Whether to initialize the memory data for transparency premultiplication.
     * @default false
     */
    get alphaPremul(): boolean;
    /**
     * @description Sets whether to initialize the memory data for transparency premultiplication.
     * @param value - Whether to enable alpha premultiplication.
     */
    set alphaPremul(value: boolean);
  }
  /**
   * @class TextureDelegateProvider
   * @description
   * <br/><b>new TextureDelegateProvider() is an invalid constructor</b>
   * <br/>If you need a Delegate texture, you can get an texture by calling TextureUtil.createTextureDelegate()
   */
  class TextureDelegateProvider extends TextureProvider {
    protected constructor();
  }
  /**
   * @class TextureProvider
   * @description
   * TextureProvider. Basic properties and functionality of all TextureProviders
   * <br/>then you can use TextureUtil to create texture.
   */
  class TextureProvider extends Provider {
    protected constructor();
  }
  /**
   * @class TouchData
   * @description The touch data is carried by touch event, record the info of one touch point.
   */
  class TouchData extends AObject {
    protected constructor();
    /**
     * @readonly
     * @description The touch phase of this touch.
     * @returns The current phase of the touch as a TouchPhase enum value.
     */
    get phase(): TouchPhase;
    /**
     * @readonly
     * @description Get the position of the touch in screen coordinates.
     * @returns The position of the touch as a Vector2f object.
     */
    get position(): Vector2f;
    /**
     * @readonly
     * @description Get the force of the touch.
     * @returns The force of the touch, typically a normalized value between 0 and 1.
     */
    get force(): number;
    /**
     * @readonly
     * @description Get the unique identifier for this touch.
     * @returns The unique ID of the touch, useful for tracking individual touches in multi-touch scenarios.
     */
    get touchId(): number;
    /**
     * @readonly
     * @description Get the number of active touches.
     * @returns The total number of active touches on the screen.
     */
    get touchCount(): number;
  }
  /**
   * @description TouchPhase
   * @enum
   * @property Began - Touch screen began.
   * @property Moved - Touch screen moved.
   * @property Ended - Touch was lifted from the screen, This is the final phase of a touch.
   * @property Canceled - The device cancelled tracking for touch.
   */
  enum TouchPhase {
    Began,
    Moved,
    Ended,
    Canceled
  }
  /**
   * @namespace TouchUtils
   * @description Utility class for handling touch events, e.g. detecting whether a touch is on an image.
   */
  namespace TouchUtils {
    /**
     * @description Whether a screen touch is on an image.
     * @param {Vector2f} screenPoint The screen touch point. value range: [0, 1]
     * @param {Image} image The image component to judge. The image should be enabled and have a valid screen transform component. It should be rendered by a camera with the Orthographic type.
     * @returns {boolean} True if the screen touch is on the image, otherwise false.
     * @example
     * let callback = (event:APJS.IEvent) => {
     *     const touchInfo = event.args[0] as APJS.TouchData;
     *     if (touchInfo.phase === APJS.TouchPhase.Began && APJS.TouchUtils.isScreenPointOnImage(touchInfo.position, this.imageComponent)) {
     *         ...
     *     }
     * }
     * const globalEmitter = APJS.EventManager.getGlobalEmitter();
     * globalEmitter.on(APJS.EventType.Touch, callback);
     */
    function isScreenPointOnImage(screenPoint: Vector2f, image: Image): boolean;
    /**
     * @description Retrieves the event emitter associated with pinch.
     * @returns The event emitter for the pinch, which can be used to subscribe to pinch events defined in PinchInfo.
     * @example
     * const emitter = APJS.TouchUtils.getPinchEmitter();
     * const callback = (event: APJS.IEvent) => {
     *   const pinchInfo = event.args[0] as APJS.IPinchInfo;
     *   const { scale, angle } = pinchInfo;
     *   // Do something with scale and angle, e.g. scale and rotate the image.
     *   this.imageTransform.localScale = new APJS.Vector3f(scale, scale, 1);
     *   this.imageTransform.rotation = angle * 180 / Math.PI;
     * }
     * emitter.on(0, callback); // evenName can use any number.
     */
    function getPinchEmitter(): IEventEmitter;
  }
  /**
   * @class Transform
   * @description
   * Position, rotation and scale of an object.
   * <br/>Every object in a Scene has a Transform. It's used to store and manipulate the position, rotation and scale of the object.
   * <br/>Every Transform can have a parent, which allows you to apply position, rotation and scale hierarchically.
   * <br/>This is the hierarchy seen in the Hierarchy pane. They also support enumerators so you can loop through children using:
   * <br/>
   * @example let transform = currObj.getTransform();
   */
  class Transform extends Component {
    protected constructor();
    /**
     * @description Get the Transform's position relative to its parent.
     * @returns The local position of the Transform.
     */
    get localPosition(): Vector3f;
    /**
     * @description Sets the local position of the transform using a Vector3f value.
     * @param value - The Vector3f value to set as the local position.
     */
    set localPosition(value: Vector3f);
    /**
     * @description Gets the Transform's rotation relative to its parent.
     * @returns The local rotation as a Quaternionf.
     */
    get localRotation(): Quaternionf;
    /**
     * @description Sets the local rotation of the transform using a quaternion.
     * @param value - The Quaternionf value to set as the local rotation.
     */
    set localRotation(value: Quaternionf);
    /**
     * @description Gets the Transform's local euler angles in degrees.
     * @returns The local Euler angles of the Transform.
     */
    get localEulerAngles(): Vector3f;
    /**
     * @description Sets the local Euler angles of the transform in degrees.
     * @param value - The Vector3f value to set as the local Euler angles.
     */
    set localEulerAngles(value: Vector3f);
    /**
     * @description Gets the Transform's scale relative to its parent.
     * @returns The local scale of the Transform.
     */
    get localScale(): Vector3f;
    /**
     * @description Sets the local scale of the transform using a Vector3f value.
     * @param value - The Vector3f value to set as the local scale.
     */
    set localScale(value: Vector3f);
    /**
     * @description Gets the local transformation matrix of the Transform.
     * @returns The local matrix representing the object's position, rotation, and scale relative to its parent.
     */
    get localMatrix(): Matrix4x4f;
    /**
     * @description Sets the local transformation matrix of the object.
     * @param value - The Matrix4x4f value to set as the local matrix.
     */
    set localMatrix(value: Matrix4x4f);
    /**
     * @description Get the world transformation matrix of this object.
     * <br/>Retrieving the world matrix may involve a matrix transformation operation.
     * @returns The world matrix representing the object's position, rotation, and scale in world space.
     */
    getWorldMatrix(): Matrix4x4f;
    /**
     * @description Sets the world transformation matrix for the object.
     * @param matrix - The 4x4 matrix representing the new world transformation.
     */
    setWorldMatrix(matrix: Matrix4x4f): void;
    /**
     * @description Returns the Transform's position relative to the world.
     * <br/>Obtaining the rotation in world space may trigger a matrix transformation operation.
     * @returns The position of the Transform in world space.
     */
    getWorldPosition(): Vector3f;
    /**
     * @description Sets the Transform's position in world space.
     * <br/> Modifying the world position may result in a matrix transformation operation.
     * @param worldPosition - The desired world space position as a Vector3f.
     */
    setWorldPosition(worldPosition: Vector3f): void;
    /**
     * @description Returns the Transform's rotation relative to the world.
     * <br/>Obtaining the rotation in world space may trigger a matrix transformation operation.
     * @returns The rotation of the transform in world space.
     */
    getWorldRotation(): Quaternionf;
    /**
     * @description Sets the Transform's rotation relative to the world.
     * <br/> Setting the world space rotation may trigger a matrix transformation operation.
     * @param worldRotation - The world space rotation as a Quaternionf.
     */
    setWorldRotation(worldRotation: Quaternionf): void;
    /**
     * @description Returns the Transform's Euler angles relative to the world.
     * <br/>Obtaining the rotation in world space may trigger a matrix transformation operation.
     * @returns The world space Euler angles.
     */
    getWorldEulerAngles(): Vector3f;
    /**
     * @description Sets the Transform's Euler angles relative to the world.
     * <br/> Setting the world space rotation may trigger a matrix transformation operation.
     * @param euler - The world space Euler angles.
     */
    setWorldEulerAngles(euler: Vector3f): void;
    /**
     * @description Returns the Transform's scale relative to the world.
     * <br/>Obtaining the scale in world space may trigger a matrix transformation operation.
     * @returns The scale of the transform in world space.
     */
    getWorldScale(): Vector3f;
    /**
     * @description Sets the Transform's scale relative to the world.
     * <br/>This may produce lossy results when parent objects are rotated, so use `setLocalScale()` instead if possible.
     * @param worldScale - the world space Scale as a Vector3f
     */
    setWorldScale(worldScale: Vector3f): void;
  }
  /**
   * @description Represents the event type for a user action, encoded as a number.
   */
  type UserEventType = number;
  /**
   * @class Vector2f
   * A two dimensional vector.
   * @example
   * let zero_p = new Vector2f();
   * let custom_p = new Vector2f(88, 88);
   */
  class Vector2f {
    /**
     * @description Represents the x-coordinate in a 2-dimensional vector.
     */
    x: number;
    /**
     * @description Represents the y-coordinate in a 2-dimensional vector.
     */
    y: number;
    /**
     * @constructor
     */
    constructor();
    /**
     * @constructor
     * @param x - The x-coordinate of the vector (optional).
     * @param y - The y-coordinate of the vector (optional).
     */
    constructor(x?: number, y?: number);
    /**
     * @description Determines if this vector is equal to the specified vector.
     * @param vec - The vector to compare with.
     * @returns True if the vectors are equal, false otherwise.
     */
    equals(vec: Vector2f): boolean;
    /**
     * @description Sets the two-dimensional coordinates of this vector.
     * @param x - The x-coordinate to set.
     * @param y - The y-coordinate to set.
     * @returns This vector with updated coordinates.
     */
    set(x: number, y: number): this;
    /**
     * @description Creates and returns a clone of the current Vector2f.
     * @returns A new Vector2f with the same x and y values as the original.
     */
    clone(): Vector2f;
    /**
     * @description Adds the components of `vec` to this vector.
     * @param vec - The vector whose components will be added to this vector.
     * @returns This vector with updated components after addition.
     */
    add(vec: Vector2f): this;
    /**
     * @description Subtracts the components of `vec` from this vector.
     * @param vec - The vector to subtract from this vector.
     * @returns This vector after subtraction.
     */
    subtract(vec: Vector2f): this;
    /**
     * @description Returns the angle in radians between the current vector and the specified vector `vec`.
     * @param vec - The target vector to calculate the angle against.
     * @returns The angle in radians between the two vectors.
     */
    angleTo(vec: Vector2f): number;
    /**
     * @description Returns the squared length (magnitude) of the vector.
     * @returns The square of the vector's magnitude.
     */
    sqrMagnitude(): number;
    /**
     * @description Calculates and returns the magnitude (length) of the vector.
     * @returns The magnitude of the vector.
     */
    magnitude(): number;
    /**
     * @description Clamps the length of this vector to the specified `length` and returns this vector.
     * @param length - The maximum length to clamp the vector to.
     * @returns This vector with its length clamped to the specified value.
     */
    clampLength(length: number): this;
    /**
     * @description Calculates and returns the Euclidean distance between the current vector and another vector `vec`.
     * @param vec - The target vector to which the distance is calculated.
     * @returns The distance between the two vectors.
     */
    distance(vec: Vector2f): number;
    /**
     * @description Divides the current vector by another vector `vec` component-wise.
     * @param vec - The vector to divide by, where each component is used to divide the corresponding component of the current vector.
     * @returns This vector after performing the division.
     */
    divide(vec: Vector2f): this;
    /**
     * @description Returns the dot product of the vector and `vec`.
     * @param vec - The vector to compute the dot product with.
     * @returns The dot product of the two vectors.
     */
    dot(vec: Vector2f): number;
    /**
     * @description Performs component-wise multiplication of the vector with the given `value`.
     * If `value` is a number, multiplies both x and y components by that number.
     * If `value` is another Vector2f, multiplies each component of this vector by the corresponding component of `value`.
     * @param value - A number or another Vector2f to multiply with.
     * @returns This vector after performing the multiplication.
     */
    multiply(value: number | Vector2f): this;
    /**
     * @description Multiplies the x and y components of the vector by a given scalar value.
     * @param scale - The scalar value to multiply the vector's components by.
     * @returns This vector with updated components.
     */
    multiplyScalar(scale: number): this;
    /**
     * @description Scales the vector to have a length of 1 and returns the normalized vector.
     * @returns This vector after normalization.
     */
    normalize(): this;
    /**
     * @description Projects the current vector onto the given vector `vec` and returns the result.
     * @param vec - The vector to project onto.
     * @returns The current vector after being projected onto `vec`.
     */
    project(vec: Vector2f): this;
    /**
     * @description Reflects the vector across the plane defined by the normal `vec` and returns this.
     * @param vec - The normal vector defining the reflection plane.
     * @returns This vector after being reflected.
     */
    reflect(vec: Vector2f): this;
    /**
     * @description Inverts the components of the vector by computing 1/x and 1/y.
     * @returns This vector with inverted x and y values.
     */
    inverse(): this;
    /**
     * @description Returns a string representation of the vector.
     * @returns A string in the format "Vector2f(x, y)" where x and y are fixed to 5 decimal places.
     */
    toString(): string;
    /**
     * @description Approximate comparison of the two vectors by the value of each dimension with a specified distance threshold.
     * @param vec1 - The first vector to compare.
     * @param vec2 - The second vector to compare.
     * @param dist - The maximum allowed difference between corresponding dimensions for the vectors to be considered approximately equal.
     * @returns A boolean indicating whether the two vectors are approximately equal within the given distance threshold.
     * @example
     * let a = new Vector2f(0.0000001, 0.0000001);
     * let b = new Vector2f(0.0000000, 0.0000000);
     * Vector2f.compareApproximately(a, b, 0.0001); // true
     */
    static compareApproximately(vec1: Vector2f, vec2: Vector2f, dist: number): boolean;
    /**
     * @description Linearly interpolates between the two vectors `vecA` and `vecB` by the factor `t`.
     * @param vecA - The starting vector.
     * @param vecB - The ending vector.
     * @param t - The interpolation factor, typically ranging from 0 to 1.
     * @returns A new Vector2f representing the interpolated position between `vecA` and `vecB`.
     */
    static lerp(vecA: Vector2f, vecB: Vector2f, t: number): Vector2f;
    /**
     * @description Returns a new vector containing the largest value of each component from the two input vectors.
     * @param vecA - The first vector to compare.
     * @param vecB - The second vector to compare.
     * @returns A new Vector2f with components set to the maximum values from vecA and vecB.
     */
    static max(vecA: Vector2f, vecB: Vector2f): Vector2f;
    /**
     * @description Returns a new vector containing the smallest value of each component from the two input vectors.
     * @param vecA - The first vector to compare.
     * @param vecB - The second vector to compare.
     * @returns A new Vector2f with components set to the minimum values from vecA and vecB.
     */
    static min(vecA: Vector2f, vecB: Vector2f): Vector2f;
  }
  /**
   * @class Vector3f
   * A three dimensional vector.
   * @example
   * let zero_p = new Vector3f();
   * let custom_p = new Vector3f(88.8, 88.8, 88.8);
   */
  class Vector3f {
    /**
     * @description Represents the x-coordinate in a 3-dimensional vector.
     */
    x: number;
    /**
     * @description Represents the y-coordinate in a 3-dimensional vector.
     */
    y: number;
    /**
     * @description Represents the z-coordinate in a 3-dimensional vector.
     */
    z: number;
    /**
     * @constructor
     */
    constructor();
    /**
     * @constructor
     * @param x - The X component of the vector (optional).
     * @param y - The Y component of the vector (optional).
     * @param z - The Z component of the vector (optional).
     */
    constructor(x?: number, y?: number, z?: number);
    /**
     * @description Calculates and returns the magnitude (length) of the vector.
     * @returns The magnitude of the vector.
     */
    magnitude(): number;
    /**
     * @description Returns the squared magnitude (length) of the vector.
     * @returns The squared magnitude of the vector.
     */
    sqrMagnitude(): number;
    /**
     * @description Determines if this vector is equal to the specified vector.
     * @param other - The vector to compare with.
     * @returns A boolean indicating whether the vectors are equal.
     */
    equals(other: Vector3f): boolean;
    /**
     * @description Returns a string representation of the vector.
     * @returns A string in the format "Vector3f(x, y, z)" where x, y, and z are fixed to 5 decimal places.
     */
    toString(): string;
    /**
     * @description Sets the three-dimensional coordinates of this vector.
     * @param x - The x-coordinate value to set.
     * @param y - The y-coordinate value to set.
     * @param z - The z-coordinate value to set.
     * @returns This instance with updated coordinates.
     */
    set(x: number, y: number, z: number): this;
    /**
     * @description Returns the angle in radians between the current vector and another specified vector.
     * @param other - The target vector to calculate the angle against.
     * @returns The angle in radians between the two vectors.
     */
    angleTo(other: Vector3f): number;
    /**
     * @description Clamps the length of this vector to the specified `length` and returns this vector.
     * @param length - The length to which the vector's length should be clamped.
     * @returns This vector with its length clamped to the specified value.
     */
    clampLength(length: number): this;
    /**
     * @description Creates and returns a new Vector3f with the same x, y, and z values as the current vector.
     * @returns A new Vector3f that is a clone of the current vector.
     */
    clone(): Vector3f;
    /**
     * @description Computes the cross product of the current vector with another vector and updates the current vector with the result.
     * @param other - The vector to compute the cross product with.
     * @returns This vector after computing the cross product.
     */
    cross(other: Vector3f): this;
    /**
     * @description Calculates and returns the Euclidean distance between the current vector and another vector.
     * @param other - The target vector to calculate the distance to.
     * @returns The distance between the two vectors.
     */
    distance(other: Vector3f): number;
    /**
     * @description Divides the current vector by another vector or a scalar.
     * @param value - The divisor, which can be either a Vector3f or a number.
     * @returns This vector after division.
     */
    divide(value: number | Vector3f): this;
    /**
     * @description Returns the dot product of the vector and another vector.
     * @param other - The vector to compute the dot product with.
     * @returns The dot product of the two vectors.
     */
    dot(other: Vector3f): number;
    /**
     * @description Performs component-wise multiplication of the vector with the given value.
     * If the value is a Vector3f, it multiplies each component (x, y, z) of the current vector by the corresponding component of the given vector.
     * If the value is a number, it multiplies each component (x, y, z) of the current vector by that number.
     * @param value - A Vector3f or a number to multiply with the vector's components.
     * @returns This vector after multiplication.
     */
    multiply(value: number | Vector3f): this;
    /**
     * @description Multiplies each component (x, y, z) of the vector by a given scalar.
     * @param scalar - The number to multiply each component of the vector by.
     * @returns This vector with updated components.
     */
    multiplyScalar(scalar: number): this;
    /**
     * @description Scales the vector to have a length of 1 and returns the modified vector.
     * @returns This vector after normalization.
     */
    normalize(): this;
    /**
     * @description Projects the current vector onto the specified vector and modifies the current vector to be the result.
     * @param other - The vector onto which the current vector is projected.
     * @returns This vector after projection.
     */
    project(other: Vector3f): this;
    /**
     * @description Projects the current vector onto the plane defined by the given normal vector.
     * @param normal - The normal vector of the plane to project onto.
     * @returns This vector after being projected onto the specified plane.
     */
    projectOnPlane(normal: Vector3f): this;
    /**
     * @description Reflects this vector across the plane defined by the normal 'normal' and returns this.
     * @param normal - The normal vector defining the reflection plane.
     * @returns This vector after being reflected.
     */
    reflect(normal: Vector3f): this;
    /**
     * @description Adds the components of another vector to this vector.
     * @param other - The vector whose components will be added to this vector.
     * @returns This vector with updated components after addition.
     */
    add(other: Vector3f): this;
    /**
     * @description Subtracts the components of the given vector from this vector and returns this vector.
     * @param other - The vector to subtract from this vector.
     * @returns This vector after subtraction.
     */
    subtract(other: Vector3f): this;
    /**
     * @description Inverts the components of this vector by computing 1/x, 1/y, and 1/z.
     * @returns This vector with inverted x, y, and z values.
     */
    inverse(): this;
    /**
     * @description Linearly interpolates between the two vectors `vecA` and `vecB` by the factor `t`.
     * @param vecA - The starting vector.
     * @param vecB - The ending vector.
     * @param t - The interpolation factor, typically ranging from 0 to 1.
     * @returns A new `Vector3f` that represents the interpolated position between `vecA` and `vecB`.
     */
    static lerp(vecA: Vector3f, vecB: Vector3f, t: number): Vector3f;
    /**
     * @description Approximately compares two vectors by the value of each component with a specified tolerance.
     * @param vec1 - The first vector to compare.
     * @param vec2 - The second vector to compare.
     * @param dist - The maximum allowed difference between corresponding components for the vectors to be considered approximately equal.
     * @returns True if the vectors are approximately equal within the given tolerance, false otherwise.
     * @example
     * let a = new Vector3f(0.0000001, 0.0000001, 0.0000001);
     * let b = new Vector3f(0.0000000, 0.0000000, 0.0);
     * Vector3f.compareApproximately(a, b, 0.0001); // true
     */
    static compareApproximately(vec1: Vector3f, vec2: Vector3f, dist: number): boolean;
    /**
     * @description Returns a new vector containing the largest value of each component from the two input vectors.
     * @param vecA - The first vector to compare.
     * @param vecB - The second vector to compare.
     * @returns A new Vector3f instance with components set to the maximum values from vecA and vecB.
     */
    static max(vecA: Vector3f, vecB: Vector3f): Vector3f;
    /**
     * @description Returns a new vector containing the smallest value of each component from the two input vectors.
     * @param vecA - The first vector to compare.
     * @param vecB - The second vector to compare.
     * @returns A new Vector3f instance with components set to the minimum values from vecA and vecB.
     */
    static min(vecA: Vector3f, vecB: Vector3f): Vector3f;
  }
  /**
   * @class Vector4f
   * A four dimensional vector.
   * @example
   * let zero_p = new Vector4f();
   * let custom_p = new Vector4f(88.8, 88.8, 88.8, 88.8);
   */
  class Vector4f {
    /**
     * @description Represents the x-coordinate in a four-dimensional vector.
     */
    x: number;
    /**
     * @description Represents the y-coordinate in a four-dimensional vector.
     */
    y: number;
    /**
     * @description Represents the z-coordinate in a four-dimensional vector.
     */
    z: number;
    /**
     * @description Represents the w component of a four-dimensional vector.
     */
    w: number;
    /**
     * @constructor
     */
    constructor();
    /**
     * @constructor
     * @param x - The x component of the vector (optional).
     * @param y - The y component of the vector (optional).
     * @param z - The z component of the vector (optional).
     * @param w - The w component of the vector (optional).
     */
    constructor(x?: number, y?: number, z?: number, w?: number);
    /**
     * @constructor
     * @param x - A 3-dimensional vector representing the first three components of the new vector. The fourth component is assumed to be 0.
     */
    constructor(x: Vector3f);
    /**
     * @constructor
     * @param x - An instance of Vector4f to initialize the new object with.
     */
    constructor(x: Vector4f);
    /**
     * @description Sets the four-dimensional components of this vector.
     * @param x - The value for the x component.
     * @param y - The value for the y component.
     * @param z - The value for the z component.
     * @param w - The value for the w component.
     * @returns This instance with updated components.
     */
    set(x: number, y: number, z: number, w: number): this;
    /**
     * @description Calculates and returns the Euclidean length (magnitude) of the vector.
     * @returns The length (magnitude) of the vector.
     */
    magnitude(): number;
    /**
     * @description Calculates and returns the squared magnitude of the vector, which is the dot product of the vector with itself.
     * @returns The squared magnitude (length) of the vector.
     */
    sqrMagnitude(): number;
    /**
     * @description Adds the components of `other` to this Vector4f.
     * @param other - The Vector4f whose components will be added to this vector.
     * @returns This Vector4f after addition.
     */
    add(other: Vector4f): this;
    /**
     * @description Subtracts the components of the given vector from this vector and returns this vector.
     * @param other - The vector to subtract from this vector.
     * @returns This vector after subtraction.
     */
    subtract(other: Vector4f): this;
    /**
     * @description Clamps the length of this vector to the specified `length` and returns this vector.
     * @param length - The length to which the vector's length should be clamped.
     * @returns This vector with its length clamped to the specified value.
     */
    clampLength(length: number): this;
    /**
     * @description Returns a clone of the current Vector4f instance.
     * @returns A new Vector4f with the same values as the original.
     */
    clone(): Vector4f;
    /**
     * @description Calculates and returns the Euclidean distance between this vector and another vector in 4-dimensional space.
     * @param other - The target vector to calculate the distance to.
     * @returns The calculated distance
     */
    distance(other: Vector4f): number;
    /**
     * @description Divides each component of the vector by the corresponding component of the given vector.
     * @param other - The vector to divide by.
     * @returns This vector after division.
     */
    divide(other: Vector4f): this;
    /**
     * @description Returns the dot product of the vector and another vector.
     * @param other - The vector to calculate the dot product with.
     * @returns The dot product.
     */
    dot(other: Vector4f): number;
    /**
     * @description Determines if this Vector4f is equal to another Vector4f.
     * @param other - The Vector4f to compare with.
     * @returns True if the two vectors are equal, false otherwise.
     */
    equals(other: Vector4f): boolean;
    /**
     * @description Returns the dimension-wise multiplication product of the vector and another vector or a scalar.
     * @param other - The vector or scalar to multiply with. If it's a Vector4f, performs element-wise multiplication. If it's a number, multiplies each component of the vector by this number.
     * @returns This vector after performing the multiplication.
     */
    multiply(other: Vector4f | number): this;
    /**
     * @description Performs component-wise multiplication of the vector with another vector or a scalar.
     * @param other - The vector or scalar to multiply with. If it's a Vector4f, performs element-wise multiplication. If it's a number, multiplies each component of the vector by this number.
     * @returns This vector after performing the multiplication.
     */
    multiplyScalar(scalar: number): this;
    /**
     * @description Scales the vector to have a length of 1 and returns the modified vector.
     * @returns This vector after normalization.
     */
    normalize(): this;
    /**
     * @description Inverts the components of this Vector4f by computing 1/x, 1/y, 1/z, and 1/w.
     * @returns This vector with inverted components.
     */
    inverse(): this;
    /**
     * @description Returns a string representation of the vector.
     * @returns A string in the format "Vector4f(x, y, z, w)" where x, y, z, and w are fixed to 5 decimal places.
     */
    toString(): string;
    /**
     * @description Approximate comparison of the two vectors by the value of each component within a specified distance.
     * @param vec1 - The first vector to compare.
     * @param vec2 - The second vector to compare.
     * @param dist - The maximum allowed difference between corresponding components of the vectors for them to be considered approximately equal.
     * @returns A boolean indicating whether the vectors are approximately equal within the given distance.
     * @example
     * let a = new Vector4f(0.0000001, 0.0000001, 0.0000001, 0.0);
     * let b = new Vector4f(0.0000000, 0.0000000, 0.0, 0.0);
     * Vector4f.compareApproximately(a, b, 0.0001); // true
     */
    static compareApproximately(vec1: Vector4f, vec2: Vector4f, dist: number): boolean;
    /**
     * @description Linearly interpolates between the two vectors 'vecA' and 'vecB' by the factor 't'.
     * @param vecA - The starting vector.
     * @param vecB - The ending vector.
     * @param t - The interpolation factor, typically ranging from 0 to 1.
     * @returns A new Vector4f that represents the interpolated position between 'vecA' and 'vecB'.
     */
    static lerp(vecA: Vector4f, vecB: Vector4f, t: number): Vector4f;
    /**
     * @description Returns a new vector containing the largest value of each component from the two input vectors.
     * @param vecA - The first vector to compare.
     * @param vecB - The second vector to compare.
     * @returns A new Vector4f with components being the maximum values from vecA and vecB.
     */
    static max(vecA: Vector4f, vecB: Vector4f): Vector4f;
    /**
     * @description Returns a new vector containing the smallest value of each component from the two input vectors.
     * @param vecA - The first vector to compare.
     * @param vecB - The second vector to compare.
     * @returns A new Vector4f instance with components set to the minimum values from vecA and vecB.
     */
    static min(vecA: Vector4f, vecB: Vector4f): Vector4f;
  }
  /**
   * @class VertexAttributeDesc
   * @description Describes the attributes of a vertex in a mesh.
   * @example
   * ```ts
   * let desc = new VertexAttributeDesc();
   * desc.attribute = VertexAttributeType.Position;
   * desc.name = "position";
   * ```
   */
  class VertexAttributeDesc {
    /**
     * @description The vertex attribute type.
     */
    attribute?: VertexAttributeType;
    /**
     * @description The name of the attribute.
     */
    name?: string;
    /**
     * @description The number of components of the attribute.
     */
    componentCount?: number;
  }
  /**
   * @description Types of vertex attributes used in rendering.
   * @enum
   */
  enum VertexAttributeType {
    /** Represents the position attribute of a vertex. */
    Position,
    /** Represents the normal attribute of a vertex. */
    Normal,
    /** Represents the tangent attribute of a vertex. */
    Tangent,
    /** Represents the binormal attribute of a vertex. */
    BiNormal,
    /** Represents the color attribute of a vertex. */
    Color,
    /** Represents the weight attribute of a vertex, often used for skinning. */
    Weight,
    /** Represents the first texture coordinate attribute of a vertex. */
    TexCoord0,
    /** Represents the second texture coordinate attribute of a vertex. */
    TexCoord1,
    /** Represents the third texture coordinate attribute of a vertex. */
    TexCoord2,
    /** Represents the fourth texture coordinate attribute of a vertex. */
    TexCoord3,
    /** Represents the fifth texture coordinate attribute of a vertex. */
    TexCoord4,
    /** Represents the sixth texture coordinate attribute of a vertex. */
    TexCoord5,
    /** Represents the seventh texture coordinate attribute of a vertex. */
    TexCoord6,
    /** Represents the eighth texture coordinate attribute of a vertex. */
    TexCoord7,
    /** Represents a user-defined attribute of a vertex. */
    UserDefine0,
    /** Represents another user-defined attribute of a vertex. */
    UserDefine1,
    /** Represents the indices attribute of a vertex, typically used for bone indices in skinning. */
    Indices,
    /** Represents an offset to the position attribute of a vertex. */
    PositionOffset,
    /** Represents an offset to the normal attribute of a vertex. */
    NormalOffset,
    /** Represents an offset to the tangent attribute of a vertex. */
    TangentOffset,
    /** Represents an unknown or undefined vertex attribute type. */
    Unknown
  }
  /**
   * @description Defines local vertical alignment types for text typesetting, which refers to the vertical alignment relative to the writing direction. Specifically, when the text is written horizontally, this alignment corresponds to the visually vertical direction. Conversely, in vertical writing mode, this alignment translates to the visually horizontal direction.
   * @enum
   */
  enum VerticalAlignment {
    /** Align to top edge. */
    Top,
    /** Center vertically. */
    Center,
    /** Align to bottom edge. */
    Bottom
  }
  /**
   * @description VFXStopBehavior
   * @enum
   * @property StopEmittingAndClear - Stop emitting and clear all particles.
   * @property StopEmitting - Stop emitting but keep existing particles.
   */
  enum VFXStopBehavior {
    StopEmittingAndClear = 0,
    StopEmitting = 1
  }
  /**
   * @class VFXEffectBlock
   * @description Component that controls a visual effect instance, including playback, seed, camera binding, and exposed slot values.
   */
  class VisualEffect extends Component {
    protected constructor();
    /**
     * @description The VFX profile asset used by this effect.
     */
    get asset(): VisualEffectAsset;
    set asset(value: VisualEffectAsset);
    /**
     * @description Stop the visual effect playback.
     * @param behavior Stop behavior, default is StopEmittingAndClear,
     *                 StopEmittingAndClear will stop the effect and clear all particles,
     *                 StopEmitting will stop the effect but keep existing particles.
     * @example
     * export class NewScriptComponent extends APJS.BasicScriptComponent {
     *   ......
     *   onUpdate(deltaTime: number) {
     *     if (this.visualEffectComponent.isEmitting && otherCondition) {
     *       this.visualEffectComponent.stop(APJS.VFXStopBehavior.StopEmitting);
     *     } else if (this.visualEffectComponent.isPlaying && otherCondition) {
     *       this.visualEffectComponent.stop(); // StopEmittingAndClear by default
     *     }
     *   }
     * }
     */
    stop(behavior?: VFXStopBehavior): void;
    /**
     * @description Set the random seed for the VFX simulation.
     * @param seed Random seed value
     */
    setStartSeed(seed: number): void;
    /**
     * @description Reset the visual effect to its initial state.
     * @returns {void}
     */
    reset(): void;
    /**
     * @description Start or resume the visual effect playback.
     */
    play(): void;
    /**
     * @description Pause the visual effect playback.
     */
    pause(): void;
    /**
     * @description Emit particles immediately.
     * @example
     * export class NewScriptComponent extends APJS.BasicScriptComponent {
     *   ......
     *   onUpdate(deltaTime: number) {
     *     if (this.visualEffectComponent.isEmitting && otherCondition) {
     *       this.visualEffectComponent.emit();
     *     }
     *   }
     * }
     */
    emit(): void;
    /**
     * @description Whether the visual effect is currently playing.
     */
    get isPlaying(): boolean;
    /**
     * @description Whether the visual effect is currently emitting particles.
     * @returns {boolean} True if emitting, false otherwise
     */
    get isEmitting(): boolean;
    /**
     * @description Current alive particle counts for each system in the effect.
     */
    get aliveParticleCounts(): number[];
    /**
     * @description Enable or disable tracking of alive particle counts.
     */
    get enableAliveParticleCount(): boolean;
    set enableAliveParticleCount(value: boolean);
  }
  /**
   * @class VisualEffectAsset
   * @description Represents a VFX profile resource.
   * It stores graph structure, point caches, attribute maps,
   * and simulation settings (such as instancing and prewarm).
   * Used as the asset backing a VisualEffect component.
   */
  class VisualEffectAsset extends AObject {
    protected constructor();
    /**
     * @description Checks if the VFX profile has a texture key.
     * @param name - The name to check for in the boolean map.
     * @returns A boolean indicating whether the property exists in the VFX Profile.
     */
    hasBoolKey(name: string): boolean;
    /**
     * @description Gets a named texture value from VFX Profile.
     * @param name - The name of the texture property.
     * @returns The value of the texture property or null.
     */
    getBool(name: string): boolean | undefined;
    /**
     * @description Sets a named texture value to VFX Profile.
     * @param name - The name of the texture property.
     * @param value - The texture value to set.
     * @example
     * export class NewScriptComponent extends APJS.BasicScriptComponent {
     *   ......
     *   onUpdate(deltaTime: number) {
     *     if (conditions) {
     *       // Set specific property to true
     *       const asset = this.visualEffectComponent.asset;
     *       if (asset.hasBoolKey('Bool_0_0') && !asset.getBool('Bool_0_0')) {
     *         asset.setBool('Bool_0_0', true);
     *       }
     *     }
     *   }
     * }
     */
    setBool(name: string, value: boolean): void;
    /**
     * @description Checks if the VFX profile has an integer key.
     * @param key - The key to check for in the integer map.
     * @returns A boolean indicating whether the key exists in the VFX Profile.
     */
    hasIntKey(name: string): boolean;
    /**
     * @description Gets a named integer value from VFX Profile.
     * @param name - The name of the integer property.
     * @returns The value of the integer property or undefined.
     */
    getInt(name: string): number | undefined;
    /**
     * @description Sets a named integer value to VFX Profile.
     * @param name - The name of the integer property.
     * @param value - The integer value to set.
     * @example
     * export class NewScriptComponent extends APJS.BasicScriptComponent {
     *   ......
     *   onUpdate(deltaTime: number) {
     *     if (conditions) {
     *       // Set specific property to 10
     *       const asset = this.visualEffectComponent.asset;
     *       if (asset.hasIntKey('Int_0_0') && asset.getInt('Int_0_0') !== 10) {
     *         asset.setInt('Int_0_0', 10);
     *       }
     *     }
     *   }
     * }
     */
    setInt(name: string, value: number): void;
    /**
     * @description Checks if the VFX profile has a float key.
     * @param key - The key to check for in the float map.
     * @returns A boolean indicating whether the property exists in the VFX Profile.
     */
    hasFloatKey(name: string): boolean;
    /**
     * @description Gets a named float value from VFX Profile.
     * @param name - The name of the float property.
     * @returns The value of the float property or undefined.
     */
    getFloat(name: string): number | undefined;
    /**
     * @description Sets a named float value to VFX Profile.
     * @param name - The name of the float property.
     * @param value - The float value to set.
     * @example
     * export class NewScriptComponent extends APJS.BasicScriptComponent {
     *   ......
     *   onUpdate(deltaTime: number) {
     *     if (conditions) {
     *       // Set specific property to 100.0
     *       const asset = this.visualEffectComponent.asset;
     *       if (asset.hasFloatKey('Float_0_0') && asset.getFloat('Float_0_0') < 100.0) {
     *         asset.setFloat('Float_0_0', 100.0);
     *       }
     *     }
     *   }
     * }
     */
    setFloat(name: string, value: number): void;
    /**
     * @description Checks if the VFX profile has a texture key.
     * @param key - The key to check for in the texture map.
     * @returns A boolean indicating whether the property exists in the VFX Profile.
     */
    hasTextureKey(name: string): boolean;
    /**
     * @description Gets a named texture value from VFX Profile.
     * @param name - The name of the texture property.
     * @returns The value of the texture property or null.
     */
    getTexture(name: string): Texture | null;
    /**
     * @description Sets a named texture value to VFX Profile.
     * @param name - The name of the texture property.
     * @param value - The texture value to set.
     * @example
     * export class NewScriptComponent extends APJS.BasicScriptComponent {
     *   ......
     *   onUpdate(deltaTime: number) {
     *     .....
     *     if (conditions) {
     *       // Set Texture to newTexture
     *       const asset = this.visualEffectComponent.asset;
     *       if (asset.hasTextureKey('Texture_0_0') && !asset.getTexture('Texture_0_0')) {
     *         asset.setTexture('Texture_0_0', newTexture);
     *       }
     *     }
     *   }
     * }
     */
    setTexture(name: string, value: Texture): void;
    /**
     * @description Checks if the VFX profile has a vector key.
     * @param key - The key to check for in the vector map.
     * @returns A boolean indicating whether the property exists in the VFX Profile.
     */
    hasVectorKey(name: string): boolean;
    /**
     * @description Gets a named vector value from VFX Profile.
     * @param name - The name of the vector property.
     * @returns The value of the vector property or null.
     */
    getVector(name: string): Vector2f | Vector3f | Vector4f | null;
    /**
     * @description Sets a named vector value to VFX Profile.
     * @param name - The name of the vector property.
     * @param value - The vector value to set.
     * @example
     * export class NewScriptComponent extends APJS.BasicScriptComponent {
     *   ......
     *   onUpdate(deltaTime: number) {
     *     if (conditions) {
     *       // Set Vector3f to (1.0, 0, 0)
     *       const asset = this.visualEffectComponent.asset;
     *       const value = new APJS.Vector3f(1.0, 0, 0);
     *       if (asset.hasVectorKey('Vector3f_0_0') && !asset.getVector('Vector3f_0_0').equals(value)) {
     *         asset.setVector('Vector3f_0_0', value);
     *       }
     *     }
     *   }
     * }
     */
    setVector(name: string, value: Vector2f | Vector3f | Vector4f): void;
    /**
     * @description Checks if the VFX profile has a color key.
     * @param key - The key to check for in the color map.
     * @returns A boolean indicating whether the property exists in the VFX Profile.
     */
    hasColorKey(name: string): boolean;
    /**
     * @description Gets a named color value from VFX Profile.
     * @param name - The name of the color property.
     * @returns The value of the color property or null.
     */
    getColor(name: string): Color | null;
    /**
     * @description Sets a named color value to VFX Profile.
     * @param name - The name of the color property.
     * @param value - The color value to set.
     * @example
     * export class NewScriptComponent extends APJS.BasicScriptComponent {
     *   ......
     *   onUpdate(deltaTime: number) {
     *     if (conditions) {
     *       // Set Color to red
     *       const asset = this.visualEffectComponent.asset;
     *       const red = new APJS.Color(1.0, 0, 0, 1.0);
     *       if (asset.hasColorKey('Color_0_0') && !asset.getColor('Color_0_0').equals(red)) {
     *         asset.setColor('Color_0_0', red);
     *       }
     *     }
     *   }
     * }
     */
    setColor(name: string, value: Color): void;
  }
  /**
   * @class VolumeDetector
   * @description A volume detector implementation.
   * @example
   * OnInit() {
   *     const builder = APJS.AudioDetectionModule.getAudioDetectionBuilder(APJS.AudioDetectionType.Volume);
   *     builder.setDetectorSource(APJS.AudioSourceType.Microphone, null);
   *     this.detector = builder.build();
   * }
   * OnUpdate(dt: number) {
   *     if (this.detector) {
   *         const result = this.detector.getResult();
   *         console.log(result);
   *     }
   * }
   */
  class VolumeDetector extends BaseAudioDetector {
    protected constructor();
    /**
     * @description Get the result of the volume detection.
     * @returns [0, 1] The result of the volume detection.
     */
    getResult(): number;
  }
  /**
   * @class VolumeDetectorBuilder
   * @description A builder for volume detector to set the source of the detector and build the detector.
   * @example
   * OnInit() {
   *     const builder = APJS.AudioDetectionModule.getAudioDetectionBuilder(APJS.AudioDetectionType.Volume);
   *     builder.setDetectorSource(APJS.AudioSourceType.Microphone, null);
   *     const detector = builder.build();
   * }
   */
  class VolumeDetectorBuilder extends AudioDetectorBuilder<VolumeDetector> {
    protected constructor();
    /**
     * @description Set the source of the detector.
     * @param type - The type of audio source. Default is None. When the type is ExternalFile, the audioComponent must be provided.
     * @param audioComponent - The audio component which plays the external audio file.
     * @example
     * audioDetectorBuilder
     *     .setDetectorSource(APJS.AudioSourceType.ExternalFile, audioComponent)
     *     .build();
     * @returns Builder instance for chaining.
     */
    setDetectorSource(type: AudioSourceType, audioComponent: IAudioComponent | null): this;
    /**
     * @description Build the volume detector. Note that the detector should be built in OnInit, otherwise it will return null.
     * @returns Detector instance of the volume detector.
     */
    build(): VolumeDetector | null;
  }
  /**
   * @description Texture coordinate wrapping mode.
   * @enum
   */
  enum WrapMode {
    /** Tiles the texture, creating a repeating pattern. */
    Repeat,
    /** Clamps the texture to the last pixel at the edge. */
    Clamp,
    /** Tiles the texture, creating a repeating pattern by mirroring it at every integer boundary. */
    Mirror
  }
  interface UserGlobalType {
      [key: string]: any;
  }
  /**
   * Global
   * <br/>Global is a global object that can be used to store global variables.
   * <br/>You can use Global to store global variables that are used in multiple scripts.
   */
  const Global: UserGlobalType;
}
