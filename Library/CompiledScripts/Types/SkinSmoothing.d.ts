declare namespace APJS {
  /**
   * @namespace FaceRetouch
   * @extends DynamicComponent
   * @description FaceRetouch component, convert SmoothV12.js to dynamic component.
   */
  class FaceRetouch extends DynamicComponent {
    protected constructor();
  
    /**
       * @description dark circles intensity, range [0, 1], default is 0.5.
       * @type {number}
       */
    darkCirclesIntensity: number;
  
    /**
       * @description eye brilliance intensity, range [0, 1], default is 0.5.
       * @type {number}
       */
    eyeBrillianceIntensity: number;
  
    /**
       * @description skin texture intensity, range [0, 1], default is 0.5.
       * @type {number}
       */
    skinTextureIntensity: number;
  
    /**
       * @description smile lines intensity, range [0, 1], default is 0.5.
       * @type {number}
       */
    smileLinesIntensity: number;
  }
}