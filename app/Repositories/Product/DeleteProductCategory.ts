/**
 * Handle delete product category Activities
 *
 * @param {Object}
 *
 * @returns {Object}
 */

import Product from "App/Models/Product";
import errorResponse from "App/Utils/errorResponse";

export default class DeleteProduct {
  protected data;
  constructor(data) {
    this.data = data;
  }
  async deleteProduct({ product_id }) {
    try {
      const product = await Product.findBy("id", product_id);

      if (!product) {
        return errorResponse({
          data: null,
          statusCode: 400,
          message: `Product does not exist`,
        });
      }

      await product!.delete();

      return {
        data: {},
        status: "Success",
        statusCode: 200,
        message: `Product successfully deleted`,
      };
    } catch (error) {
      //   console.log("err >> ", error.message);

      return errorResponse({
        data: null,
        error: error,
        statusCode: 400,
        message: `Unable to process delete product`,
      });
    }
  }
}
