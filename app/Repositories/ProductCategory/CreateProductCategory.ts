/**
 * Handle create product category Activities
 *
 * @param {Object}
 *
 * @returns {Object}
 */

import ProductCategory from "App/Models/ProductCategory";
import errorResponse from "App/Utils/errorResponse";

export default class CreateProductCategory {
  protected data;
  constructor(data) {
    this.data = data;
  }
  async createProductCategory({}) {
    const { name, status } = this.data;

    try {
      const newProduct = await ProductCategory.create({
        name,
        status,
      });

      return {
        data: newProduct,
        status: "Success",
        statusCode: 200,
        message: `Product category successfully created`,
      };
    } catch (error) {
      //   console.log("err >> ", error.message);

      return errorResponse({
        data: null,
        error: error,
        statusCode: 400,
        message: `Unable to process create product category`,
      });
    }
  }
}
