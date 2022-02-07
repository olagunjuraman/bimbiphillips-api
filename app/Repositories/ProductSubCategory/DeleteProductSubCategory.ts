/**
 * Handle delete product category Activities
 *
 * @param {Object}
 *
 * @returns {Object}
 */

import ProductSubCategory from "App/Models/ProductSubCategory";
import errorResponse from "App/Utils/errorResponse";

export default class DeleteProductSubCategory {
  protected data;
  constructor(data) {
    this.data = data;
  }
  async deleteProductSubCategory({ sub_category_id }) {
    try {
      const productSubCategory = await ProductSubCategory.findBy(
        "id",
        sub_category_id
      );

      if (!productSubCategory) {
        return {
          data: null,
          statusCode: 400,
          message: `Product sub category does not exist`,
        };
      }

      await productSubCategory!.delete();

      return {
        data: {},
        status: "Success",
        statusCode: 200,
        message: `Product sub category successfully deleted`,
      };
    } catch (error) {
      //   console.log("err >> ", error.message);

      return errorResponse({
        data: null,
        error: error,
        statusCode: 400,
        message: `Unable to process delete product sub category`,
      });
    }
  }
}
