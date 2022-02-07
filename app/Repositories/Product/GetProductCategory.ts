/**
 * Handle create product category Activities
 *
 * @param {Object}
 *
 * @returns {Object}
 */

import Product from "App/Models/Product";
import errorResponse from "App/Utils/errorResponse";

export default class GetProduct {
  protected data;
  constructor(data) {
    this.data = data;
  }
  async getProducts({}) {
    try {
      let products = await Product.query()
        .preload("user")
        .preload("product_category")
        .preload("product_sub_category");

      return {
        data: products,
        status: "Success",
        statusCode: 200,
        message: `Product successfully fetched`,
      };
    } catch (error) {
      //   console.log("err >> ", error.message);

      return errorResponse({
        data: null,
        error: error,
        statusCode: 400,
        message: `Unable to process fetch product`,
      });
    }
  }
  async getProduct({ product_id }) {
    try {
      const product = await Product.query()
        .where("id", product_id)
        .preload("user")
        .preload("product_category")
        .preload("product_sub_category");

      return {
        data: product,
        status: "Success",
        statusCode: 200,
        message: `Product successfully fetched`,
      };
    } catch (error) {
      //   console.log("err >> ", error.message);

      return errorResponse({
        data: null,
        error: error,
        statusCode: 400,
        message: `Unable to process fetch product`,
      });
    }
  }
}
