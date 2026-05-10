declare namespace APJS {
  /**
   * @description DyeHairMode
   * @enum {string}
   * @property Full - Full mode.
   * @property TwoTone - Two tone mode.
   * @property Streaks - Streaks mode.
   * @property CustomTexture - Custom texture mode.
   */
  enum DyeHairMode {
    Full,
    TwoTone,
    Streaks,
    CustomTexture,
  }
  
  /**
   * @description GradientType
   * @enum {string}
   * @property Horizontal - Horizontal gradient.
   * @property Vertical - Vertical gradient.
   */
  enum GradientType {
    Horizontal,
    Vertical,
  }
  
  /**
   * @description DyeHairPropertyKey
   *
   * DyeHair property keys type definition
   *
   * @property Mode - (Readonly) Dye hair mode.
   * @property Bleach - (Readonly) Whether to enable bleach. Available in Full, TwoTone and CustomTexture mode.
   * @property BleachIntensity - Bleach intensity. Available in all modes.
   * @property Coverage - Coverage. Available in all modes.
   * @property Color - Color. Available in Full mode.
   * @property Color1 - Color 1. Available in TwoTone and Streaks mode.
   * @property Color2 - Color 2. Available in TwoTone and Streaks mode.
   * @property Color3 - Color 3. Available in Streaks mode.
   * @property Color4 - Color 4. Available in Streaks mode.
   * @property GradientType - Gradient type. Available in TwoTone mode.
   * @property GradientArea - Gradient area. Available in TwoTone mode.
   * @property Flip - Whether to flip. Available in TwoTone mode.
   * @property Texture - Texture. Available in CustomTexture mode.
   * @property Opacity - Opacity. Available in CustomTexture mode.
   */
  type DyeHairPropertyKey = 'Mode' | 'Bleach' | 'BleachIntensity' | 'Coverage' | 'Color' | 'Color1' | 'Color2' | 'Color3' | 'Color4' | 'GradientType' | 'GradientArea' | 'Flip' | 'Texture' | 'Opacity';
  
  /**
   * @namespace DyeHair
   * @description Represents a dynamic component specifically designed for the DyeHair.
   */
  class DyeHair extends DynamicComponent {
    protected constructor();
  
    /**
     * Get property value.
     * @param type - Property name.
     * @returns Property value.
     */
    getProperty(type: DyeHairPropertyKey): any;
  
    /**
     * Set property value.
     * @param type - Property name.
     * @param value - Property value.
     * @returns Whether the property is set successfully.
     */
    setProperty(type: DyeHairPropertyKey, value: any): boolean;
  }
}