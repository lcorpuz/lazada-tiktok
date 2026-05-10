declare namespace APJS {
  type Eyelashes3DPropertyKey = 'UpperOffset' | 'LowerOffset' | 'BlinkRotation' | 'Length' | 'Curl' | 'Density' | 'Texture' | 'Color' | 'Opacity' | 'GradientColor' | 'GradientMode' | 'GradientFlip';
  
  type Eyelashes3DScopeKey = 'Both' | 'Left' | 'Right';
  
  /**
   * @namespace Eyelashes3D
   * @description Represents a dynamic component specifically designed for the Eyelashes3D.
   */
  class Eyelashes3D extends DynamicComponent {
    protected constructor();
  
    /**
     * @description Retrieves property values from the Eyelashes3D component
     * @param {Eyelashes3DPropertyKey} type - The property type key to retrieve
     * @param {Eyelashes3DScopeKey} scope - The scope to retrieve from ('Both'/'Left'/'Right')
     * @returns {any} Single value or array of two values when scope is 'Both'
     */
    getProperty(type: Eyelashes3DPropertyKey, scope: Eyelashes3DScopeKey): any;
  
    /**
     * @description Sets property values for the Eyelashes3D component
     * @param {Eyelashes3DPropertyKey} type - The property type key
     * @param {Eyelashes3DScopeKey} scope - The scope of application ('Both'/'Left'/'Right')
     * @param {any} value - The value to set. For 'Both' scope, provide an array of two values
     * @returns {void}
     */
    setProperty(type: Eyelashes3DPropertyKey, scope: Eyelashes3DScopeKey, value: any): void;
  }
}