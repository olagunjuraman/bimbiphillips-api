/**
 * Handle update product category Activities
 *
 * @param {Object}
 *
 * @returns {Object}
 */

import Product from "App/Models/Product";
import errorResponse from "App/Utils/errorResponse";

export default class UpdateProduct {
  protected data;
  constructor(data) {
    this.data = data;
  }
  async updateProduct({ product_id }) {
    const { title, description, price } = this.data;

    try {
      const product = await Product.findBy("id", product_id);

      if (!product) {
        return errorResponse({
          data: null,
          statusCode: 400,
          message: `Product category does not exist`,
        });
      }

      product!.title = title;
      product!.description = description;
      product!.address = price;

      const newUser = await product!.save();

      return {
        data: newUser,
        status: "Success",
        statusCode: 200,
        message: `Product successfully updated`,
      };
    } catch (error) {
      //   console.log("err >> ", error.message);

      return errorResponse({
        data: null,
        error: error,
        statusCode: 400,
        message: `Unable to process update product`,
      });
    }
  }
}
