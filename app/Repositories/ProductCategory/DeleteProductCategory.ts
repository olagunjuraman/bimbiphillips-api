/**
 * Handle delete product category Activities
 *
 * @param {Object}
 *
 * @returns {Object}
 */

import ProductCategory from "App/Models/ProductCategory";
import errorResponse from "App/Utils/errorResponse";

export default class DeleteProductCategory {
  protected data;
  constructor(data) {
    this.data = data;
  }
  async deleteProductCategory({ category_id }) {
    try {
      const productCategory = await ProductCategory.findBy("id", category_id);

      if (!productCategory) {
        return errorResponse({
          data: null,
          statusCode: 400,
          message: `Product category does not exist`,
        });
      }

      await productCategory!.delete();

      return {
        data: {},
        status: "Success",
        statusCode: 200,
        message: `Product category successfully deleted`,
      };
    } catch (error) {
      //   console.log("err >> ", error.message);

      return errorResponse({
        data: null,
        error: error,
        statusCode: 400,
        message: `Unable to process delete product category`,
      });
    }
  }
}
