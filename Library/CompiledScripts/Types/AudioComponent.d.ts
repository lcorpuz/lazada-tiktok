declare namespace APJS {
  /**
   * @class AudioComponent
   * @extends DynamicComponent
   * @description Audio component. Component that plays back audio.
   * @apjs_protected_constructor
   */
  class AudioComponent extends DynamicComponent {
    protected constructor();
    /**
     * @description The number of times the audio should loop.
     */
    loopCount: number;
    /**
     * @description The volume level (0-100) of the audio.
     */
    volume: number;

    /**
     * @readonly
     * @description Gets the duration of the audio in seconds.
     */
    get duration(): number;

    /**
     * @readonly
     * @description Whether the audio has finished playing.
     */
    get isFinished(): boolean;
    /**
     * @description Pause audio playback.
     */
    pause(): void;
  
    /**
     * @description Start audio playback.
     */
    play(): void;
  
    /**
     * @description Resume audio playback.
     */
    resume(): void;
  
    /**
     * @description Stop audio playback.
     */
    stop(): void;
  }
  /**
   * @enum AudioDetectionType
   * @property Pitch Detect the pitch of the audio source in real time.
   * @property Beat Detect the rhythm pattern of a piece of music and output the beat in real time. All types of rhythm pattern will be quantified to 3/4 time or 4/4 time. The output value 1 represents the onset beat, which is usually the first beat of each measure. For example, music in 4/4 time will return 1, 2, 3, 4 in sequence, and music in 3/4 time will return 1, 2, 3 in sequence. Beats Detection is in the Audio category.
   * @property Onset Detect the onsets of notes in the musical audio in realtime based on a certain threshold.
   * @property Spectrum Divide the audio spectrum range (0 Hz to 22050 Hz) into 8 output bands, and detect the magnitude of each band in a range between 0 and 255.
   * @property Volume Detect the volume of the audio source in realtime.
   * @property SoundEvent Detect the sound events in the audio source in realtime.
   * @property Keyword Monitor an audio stream in real time and identify whether one or more specified keywords are present.
   */
  enum AudioDetectionType {
    Pitch = 0,
    Beat = 1,
    Onset = 2,
    Spectrum = 3,
    Volume = 4,
    SoundEvent = 5,
    Keyword = 6,
  }

  /**
   * @class AudioDetectionModule
   * @description The module for audio detection to get the builder for the specified audio detection type.
   */
  namespace AudioDetectionModule {
    /**
     * @description Get the builder for the specified audio detection type. Should be called in the onInit method.
     * @param type The audio detection type.
     * @returns The builder for the specified audio detection type.
     * @example
     * onInit(): void {
     *    const audioDetectionBuilder = APJS.AudioDetectionModule.getOrCreateAudioDetectionBuilder(APJS.AudioDetectionType.SoundEvent);
     *    audioEventDetector = audioDetectionBuilder.build();
     * }
     */
    function getOrCreateAudioDetectionBuilder(type: AudioDetectionType): AudioDetectorBuilder<any> | null;
  }

  /**
   * @version UNKNOWN
   * @enum KeywordEventType
   * @description Keyword event type.
   */
  enum KeywordEventType {
      KeywordHit,
      KeywordMiss,
  }

  /**
   * @version UNKNOWN
   * @class KeywordDetector
   * @description Keyword detector.
   * @apjs_protected_constructor
   * @example
   * onInit() {
   *   // 1. Get the KeywordDetectorBuilder
   *   const builder = APJS.AudioDetectionModule.getOrCreateAudioDetectionBuilder(APJS.AudioDetectionType.Keyword) as APJS.KeywordDetectorBuilder;
   * 
   *   // 2. Configure the builder (e.g., set keyword type, source type)
   *   // If using external file, you need an AudioComponent:
   *   // builder.setDetectorSource(APJS.AudioSourceType.ExternalFile, this.audioComponent);
   *   // Or for microphone (default):
   *   // builder.setDetectorSource(APJS.AudioSourceType.Microphone, null);
   * 
   *   // 3. Build the KeywordDetector
   *   this.keywordDetector = builder.build();
   * 
   *   // 4. Set target keywords
   *   if (this.keywordDetector) {
   *     this.keywordDetector.targetKeywords = ["hello", "world"];
   *     
   *     // 5. Listen to events
   *     this.keywordDetector.eventEmitter.on(APJS.KeywordEventType.KeywordHit, this.onKeywordHit);
   *     this.keywordDetector.eventEmitter.on(APJS.KeywordEventType.KeywordMiss, this.onKeywordMiss);
   *   }
   * }
   * 
   * onKeywordHit(event: APJS.IEvent) {
   *   const detectedWords = event.args[0] as string[];
   *   console.log("KeywordDetector", "Hit: " + detectedWords.join(", "));
   * }
   * 
   * onKeywordMiss(event: APJS.IEvent) {
   *   console.log("KeywordDetector", "Miss");
   * }
   * 
   * onDestroy() {
   *   if (this.keywordDetector) {
   *     this.keywordDetector.eventEmitter.off(APJS.KeywordEventType.KeywordHit, this.onKeywordHit);
   *     this.keywordDetector.eventEmitter.off(APJS.KeywordEventType.KeywordMiss, this.onKeywordMiss);
   *   }
   * }
   */
  class KeywordDetector implements IAudioDetector {
    /**
     * @description Whether the detector is enabled.
     */
    enabled: boolean;
    
    /**
     * @description The target keywords.
     * @example
     * this.keywordDetector.targetKeywords = ["start", "stop"];
     */
    targetKeywords: string[];

    /**
     * @description The event emitter.
     * @example
     * this.keywordDetector.eventEmitter.on(APJS.KeywordEventType.KeywordHit, (e) => {
     *   const words = e.args[0];
     *   console.log("Detected:", words);
     * });
     */
    readonly eventEmitter: IEventEmitter;
  }

  /**
   * @version UNKNOWN
   * @class KeywordDetectorBuilder
   * @description Keyword detector builder.
   * @apjs_protected_constructor
   * @example
   * const builder = APJS.AudioDetectionModule.getOrCreateAudioDetectionBuilder(APJS.AudioDetectionType.Keyword) as APJS.KeywordDetectorBuilder;
   * builder.setDetectorSource(APJS.AudioSourceType.Microphone, null);
   * const detector = builder.build();
   */
  class KeywordDetectorBuilder extends AudioDetectorBuilder<KeywordDetector> {
    /**
     * @description Build the KeywordDetector. Note that the detector should be built in OnInit, otherwise it will return null.
     * @returns {KeywordDetector | null}
     * @example
     * const detector = builder.build();
     */
    build(): KeywordDetector | null;
  }
}
