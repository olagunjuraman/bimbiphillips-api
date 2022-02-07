/**
 * Handle update product category Activities
 *
 * @param {Object}
 *
 * @returns {Object}
 */

import ProductCategory from "App/Models/ProductCategory";
import errorResponse from "App/Utils/errorResponse";

export default class UpdateProductCategory {
  protected data;
  constructor(data) {
    this.data = data;
  }
  async updateProductCategory({ category_id }) {
    const { name, status } = this.data;

    try {
      const productCategory = await ProductCategory.findBy("id", category_id);

      if (!productCategory) {
        return errorResponse({
          data: null,
          statusCode: 400,
          message: `Product category does not exist`,
        });
      }

      productCategory!.name = name;
      productCategory!.status = status;

      const updatedProductCategory = await productCategory!.save();

      return {
        data: updatedProductCategory,
        status: "Success",
        statusCode: 200,
        message: `Product category successfully updated`,
      };
    } catch (error) {
      //   console.log("err >> ", error.message);

      return errorResponse({
        data: null,
        error: error,
        statusCode: 400,
        message: `Unable to process update product category`,
      });
    }
  }
}
