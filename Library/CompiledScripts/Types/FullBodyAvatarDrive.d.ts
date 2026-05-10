declare namespace APJS {
  /**
   * @description Enum representing the names of bones in a robot's skeletal structure.
   * @enum {string}
   * @property Pelvis - The pelvis bone.
   * @property Spine1 - The first spine bone.
   * @property Spine2 - The second spine bone.
   * @property Spine3 - The third spine bone.
   * @property Neck - The neck bone.
   * @property Head - The head bone.
   * @property LeftShoulder - The left shoulder bone.
   * @property LeftUpperArm - The left upper arm bone.
   * @property LeftForeArm - The left forearm bone.
   * @property LeftHand - The left hand bone.
   * @property RightShoulder - The right shoulder bone.
   * @property RightUpperArm - The right upper arm bone.
   * @property RightForeArm - The right forearm bone.
   * @property RightHand - The right hand bone.
   * @property LeftThigh - The left thigh bone.
   * @property LeftShin - The left shin bone.
   * @property LeftFoot - The left foot bone.
   * @property RightThigh - The right thigh bone.
   * @property RightShin - The right shin bone.
   * @property RightFoot - The right foot bone.
   */
  enum FullBodyBoneName {
    Pelvis,
    Spine1,
    Spine2,
    Spine3,
    Neck,
    Head,
    LeftShoulder,
    LeftUpperArm,
    LeftForeArm,
    LeftHand,
    RightShoulder,
    RightUpperArm,
    RightForeArm,
    RightHand,
    LeftThigh,
    LeftShin,
    LeftFoot,
    RightThigh,
    RightShin,
    RightFoot,
  }
  
  /**
   * @namespace FullBodyAvatarDriveComponent
   * @description Represents a dynamic component specifically designed for the FullBodyAvatarDriveComponent.
   */
  class FullBodyAvatarDrive extends DynamicComponent {
    protected constructor();
  
    /**
     * @description Indicates whether the robot should follow the body's movements.
     */
    followBody: boolean;
  
    /**
     * @description Retrieves the scene object associated with a specified bone name.
     * @param boneName - The name of the bone to retrieve the scene object for.
     * @returns The scene object associated with the specified bone, or null if not found.
     */
    getBone(boneName: FullBodyBoneName): SceneObject | null;
  }
}