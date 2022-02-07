/**
 * Handle create product category Activities
 *
 * @param {Object}
 *
 * @returns {Object}
 */

import Product from "App/Models/Product";
import errorResponse from "App/Utils/errorResponse";

export default class CreateProduct {
  protected data;
  constructor(data) {
    this.data = data;
  }
  async createProduct({ auth }) {
    const {
      product_category_id,
      product_sub_category_id,
      title,
      description,
      address,
    } = this.data;

    try {
      const newProduct = await Product.create({
        product_category_id,
        product_sub_category_id,
        title,
        description,
        address,
        user_id: auth.user.id,
      });

      return {
        data: newProduct,
        status: "Success",
        statusCode: 200,
        message: `Product successfully created`,
      };
    } catch (error) {
      //   console.log("err >> ", error.message);

      return errorResponse({
        data: null,
        error: error,
        statusCode: 400,
        message: `Unable to process create product`,
      });
    }
  }
}
