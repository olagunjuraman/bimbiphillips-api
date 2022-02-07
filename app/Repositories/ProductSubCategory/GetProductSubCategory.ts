/**
 * Handle create product category Activities
 *
 * @param {Object}
 *
 * @returns {Object}
 */

import ProductSubCategory from "App/Models/ProductSubCategory";
import errorResponse from "App/Utils/errorResponse";

export default class GetProductSubCategory {
  protected data;
  constructor(data) {
    this.data = data;
  }
  async getProductSubCategories({}) {
    try {
      const productSubCategories = await ProductSubCategory.all();

      return {
        data: productSubCategories,
        status: "Success",
        statusCode: 200,
        message: `Product sub category successfully fetched`,
      };
    } catch (error) {
      //   console.log("err >> ", error.message);

      return errorResponse({
        data: null,
        error: error,
        statusCode: 400,
        message: `Unable to process fetch product sub category`,
      });
    }
  }
  async getProductSubCategory({ sub_category_id }) {
    try {
      const productSubCategory = await ProductSubCategory.findBy(
        "id",
        sub_category_id
      );

      return {
        data: productSubCategory  ,
        status: "Success",
        statusCode: 200,
        message: `Product sub category successfully fetched`,
      };
    } catch (error) {
      //   console.log("err >> ", error.message);

      return errorResponse({
        data: null,
        error: error,
        statusCode: 400,
        message: `Unable to process fetch product sub category`,
      });
    }
  }
}
