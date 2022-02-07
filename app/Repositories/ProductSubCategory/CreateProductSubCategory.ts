/**
 * Handle create product category Activities
 *
 * @param {Object}
 *
 * @returns {Object}
 */

import ProductSubCategory from "App/Models/ProductSubCategory";
import errorResponse from "App/Utils/errorResponse";

export default class CreateProductSubCategory {
  protected data;
  constructor(data) {
    this.data = data;
  }
  async createProductSubCategory({}) {
    const { name, status, product_category_id } = this.data;

    try {
      const newProductSubCategory = await ProductSubCategory.create({
        name,
        status,
        product_category_id,
      });

      return {
        data: newProductSubCategory,
        status: "Success",
        statusCode: 200,
        message: `Product sub category successfully created`,
      };
    } catch (error) {
      //   console.log("err >> ", error.message);
      return errorResponse({
        data: null,
        error: error,
        statusCode: 400,
        message: `Unable to process create product sub category`,
      });
    }
  }
}
