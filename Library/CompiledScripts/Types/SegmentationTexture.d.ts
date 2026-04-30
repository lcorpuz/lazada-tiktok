declare namespace APJS {
  /**
   * @description Enum Segmentation type.
   * @enum {number}
   * @property Portrairt - Portrairt segmentation.
   * @property Hair - Hair segmentation.
   * @property Head - Head segmentation.
   * @property Hand - Hand segmentation.
   * @property Cloth - Cloth segmentation.
   * @property Sky - Sky segmentation.
   * @property Ground - Ground segmentation.
   * @property Building - Building segmentation.
   * @property Skin - Skin segmentation.
   * @property Pet - Pet segmentation.
   * @property Ear - Ear segmentation.
   * @property Lip - Lip segmentation.
   * @property Teeth - Teeth segmentation.
   * @property Eye - Eye segmentation.
   * @property Saliency - Saliency segmentation.
   * @property Face - Face segmentation.
   */
  enum SegmentationType {
    Portrairt,
    Hair,
    Head,
    Hand,
    Cloth,
    Sky,
    Ground,
    Building,
    Skin,
    Pet,
    Ear,
    Lip,
    Teeth,
    Eye,
    Saliency,
    Face,
  }
  
  /**
   * @description Enum Pet type.
   * @enum {number}
   * @property Cat - detect cat.
   * @property Dog - detect dog.
   */
  enum PetType {
    Cat,
    Dog,
  }
  
  /**
   * @namespace SegmentationTexture
   * @description Represents a provider specifically designed for the SegmentationTexture asset.
   */
  class SegmentationTextureProvider extends ScreenTextureProvider implements IDynamicAsset {
    protected constructor();
  
    get invertMask(): boolean;
  
    set invertMask(value: boolean);
  
    get petType(): PetType[];
  
    set petType(value: PetType[]);
  
    get segmentationType(): SegmentationType;
  
    set segmentationType(value: SegmentationType);
  
    get smoothness(): number;
  
    set smoothness(value: number);
  
    get trackIndex(): number[];
  
    set trackIndex(value: number[]);
  }
}