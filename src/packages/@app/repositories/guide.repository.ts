import { addRxPlugin } from "rxdb";
import { RxDBUpdatePlugin } from "rxdb/plugins/update";
import { RxDB } from "@app/database/database";

addRxPlugin(RxDBUpdatePlugin);

export class GuideRepository {
  static findOne: any;
  constructor() {}

  /**
   * @description - fetches single document
   * @param query - query to find event
   * @param data
   * @returns - found document
   */
  public insert = async (data) => {
    const document = await RxDB.getInstance().rxdb.guide.insert(data);
    return document;
  };

  /**
   * Finds a single document that matches the query.
   *
   * @param {Object} query - The query object used to find the document.
   * @returns {Promise<Object>} - A promise that resolves to the found document.
   */
  public findOne = async (query) => {
    return await RxDB.getInstance()
      .rxdb.guide.findOne({
        selector: query,
      })
      .exec();
  };

  /**
   * @param {Object} query - The query object used to find the document.
   * @param {Object} updateData - The data to update the found document with.
   * @returns {Promise<void>} - A promise that resolves when the update is complete.
   */
  public update = async (query, updateData) => {
    const rxCollection = RxDB.getInstance().rxdb.guide;
    const foundDocs = await rxCollection
      .findOne({
        selector: query,
      })
      .exec();

    await foundDocs.incrementalModify((value) => {
      return { ...value, ...updateData };
    });
  };
}
