/**
 * Handle create product category Activities
 *
 * @param {Object}
 *
 * @returns {Object}
 */

import ProductCategory from "App/Models/ProductCategory";
import errorResponse from "App/Utils/errorResponse";

export default class GetProductCategory {
  protected data;
  constructor(data) {
    this.data = data;
  }
  async getProductCategories({}) {
    try {
      console.log('yes');
      const productCategories = await ProductCategory.all();

      console.log('yes');
      

      return {
        data: productCategories,
        status: "Success",
        statusCode: 200,
        message: `Product category successfully fetched`,
      };
    } catch (error) {
      //   console.log("err >> ", error.message);

      return errorResponse({
        data: null,
        error: error,
        statusCode: 400,
        message: `Unable to process fetch product category`,
      });
    }
  }
  async getProductCategory({ category_id }) {
    try {
      const productCategory = await ProductCategory.findBy("id", category_id);

      return {
        data: productCategory,
        status: "Success",
        statusCode: 200,
        message: `Product category successfully fetched`,
      };
    } catch (error) {
      //   console.log("err >> ", error.message);

      return errorResponse({
        data: null,
        error: error,
        statusCode: 400,
        message: `Unable to process fetch product category`,
      });
    }
  }
}
