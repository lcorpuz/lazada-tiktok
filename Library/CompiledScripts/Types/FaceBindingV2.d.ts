declare namespace APJS {
  /**
   * @description Enumeration of face binding anchor types with corresponding vertex indices in the standard face mesh.
   * @enum
   */
  enum FaceBindingAnchorType {
    FaceCenter,
    LeftEye,
    RightEye,
    Forehead,
    MouthCenter,
    Chin,
    LeftEarlobe,
    RightEarlobe,
    Custom,
  }
  
  /**
   * @namespace FaceBinding
   * @description Class responsible for binding 3D objects to specific points on a detected face.
   *               Supports various anchor points like eyes, forehead, mouth, etc.
   */
  class FaceBinding extends DynamicComponent {
    protected constructor();
  
    /**
     * @description The anchor type, default is FaceCenter.
     */
    anchorType: FaceBindingAnchorType;
  
    /**
     * @description The custom anchor point, only valid when anchorType is Custom.
     */
    customAnchorPoint: Vector3f;
  
    /**
     * @description Gets the face ID of the face binding, must be between 1 and 5.
     */
    get faceID(): number;
  
    /**
     * @description Sets the face ID for the face binding, must be between 1 and 5.
     */
    set faceID(value: number);
  }
}