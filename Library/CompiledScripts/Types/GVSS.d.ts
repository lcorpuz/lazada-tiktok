declare namespace APJS {
  /**
   * @class EffectUsageInfo
   * @description Contains usage statistics for the current effect, including
   *   aggregate user/post counts and per-user engagement metrics.
   */
  export class EffectUsageInfo {
    constructor();
    /**
     * @description The total number of unique users who have used this effect.
     */
    public userCount: number;
    /**
     * @description The total number of video posts created using this effect.
     */
    public postCount: number;
    /**
     * @description The number of times the current user has used this effect.
     */
    public userUsageCount: number;
    /**
     * @description The number of distinct days the current user has used this effect.
     */
    public userUsageDays: number;
    /**
     * @description The number of consecutive days the current user has used this effect.
     */
    public userConsecutiveUsageDays: number;
  }

  /**
   * @class CloudDataManager
   * @description Manages persistent cloud data storage for user scripts.
   *   Provides methods to save and load key-value data that is synchronized
   *   to the cloud on mobile and persisted to disk in the editor.
   *
   *   The data structure is defined once at construction time via a schema object.
   *   The schema keys determine which fields are persisted, and the schema values
   *   serve as initial defaults. Only `number` and `string` values are supported.
   *   The manager maintains an internal cache that is updated on each save/load,
   *   so missing keys always resolve to the most recently known value rather than
   *   the original default.
   *
   *   **Note:** The total serialized data size must not exceed **1 KB** due to
   *   cloud storage server-side limits. A save will fail if the data exceeds
   *   this limit.
   *
   * @example
   * ```typescript
   * const cloudData = new CloudDataManager({ score: 0, level: 1, name: '' });
   *
   * cloudData.loadData((data) => {
   *   console.log(data.score, data.level, data.name);
   * });
   *
   * cloudData.saveData({ score: 42 });
   * ```
   */
  export class CloudDataManager {
    /**
     * Creates a new CloudDataManager with a defined data schema.
     * @param schema - An object whose keys define the persisted fields and
     *   whose values provide the initial defaults. Only `number` and `string`
     *   values are supported. Only keys present in this schema will be saved
     *   and loaded. The total serialized data must not exceed 1 KB.
     *   Example: `new CloudDataManager({ score: 0, level: 1, name: '' })`
     */
    constructor(schema: {[key: string]: number | string});

    /**
     * Returns the current effect's usage statistics.
     * The data is populated by the system after initialization; values may
     * be zero if called before the cloud data has finished loading.
     * @returns An {@link EffectUsageInfo} instance with the latest usage stats.
     */
    public getEffectUsageInfo(): EffectUsageInfo;

    /**
     * Saves data to cloud storage. Only keys defined in the constructor
     * schema are persisted; any extra keys in `data` are ignored. For schema
     * keys not present in `data`, the last cached value is used.
     * The internal cache is updated with the provided values.
     * Only `number` and `string` values are accepted. The total serialized
     * data size must not exceed **1 KB**; the save will fail otherwise.
     * @param data - An object containing the key-value pairs to save.
     *   Keys must match the schema defined in the constructor.
     *   Values must be of type `number` or `string`.
     * @param onSuccess - Optional. Called when the data has been successfully
     *   written to the storage cache (the system syncs it to cloud/disk automatically).
     * @param onFailure - Optional. Called with an error message string if the
     *   save fails (e.g. data exceeds 1 KB or contains invalid value types).
     */
    public saveData(
      data: {[key: string]: number | string},
      onSuccess?: () => void,
      onFailure?: (error: string) => void
    ): void;

    /**
     * Loads data from cloud storage. Waits for the cloud data to be available
     * (fetched from network on mobile, or read from disk in the editor), then
     * returns an object matching the constructor schema structure.
     * Stored values override cached values; keys not yet persisted retain
     * their last known cached value. The internal cache is updated with
     * the loaded values.
     * @param onSuccess - Called with the loaded data object. The object
     *   contains exactly the keys defined in the constructor schema, with
     *   values of type `number` or `string`.
     * @param onFailure - Optional. Called with an error message string if the
     *   load fails (e.g. network failure or timeout).
     */
    public loadData(
      onSuccess: (data: {[key: string]: number | string}) => void,
      onFailure?: (error: string) => void
    ): void;
  }
}
