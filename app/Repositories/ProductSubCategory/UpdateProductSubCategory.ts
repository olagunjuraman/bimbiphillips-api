/**
 * Handle update product category Activities
 *
 * @param {Object}
 *
 * @returns {Object}
 */

import ProductSubCategory from "App/Models/ProductSubCategory";
import errorResponse from "App/Utils/errorResponse";

export default class UpdateProductSubCategory {
  protected data;
  constructor(data) {
    this.data = data;
  }
  async updateProductSubCategory({ sub_category_id }) {
    const { name, status } = this.data;

    try {
      const productSubCategory = await ProductSubCategory.findBy(
        "id",
        sub_category_id
      );

      if (!productSubCategory) {
        return errorResponse({
          data: null,
          statusCode: 400,
          message: `Product category sub does not exist`,
        });
      }

      productSubCategory!.name = name;
      productSubCategory!.status = status;

      const updatedproductSubCategory = await productSubCategory!.save();

      return {
        data: updatedproductSubCategory,
        status: "Success",
        statusCode: 200,
        message: `Product sub category successfully updated`,
      };
    } catch (error) {
      //   console.log("err >> ", error.message);

      return errorResponse({
        data: null,
        error: error,
        statusCode: 400,
        message: `Unable to process update product sub category`,
      });
    }
  }
}
