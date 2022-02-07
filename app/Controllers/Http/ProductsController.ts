// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import CreateProduct from "App/Repositories/Product/CreateProduct";
import DeleteProduct from "App/Repositories/Product/DeleteProductCategory";
import GetProduct from "App/Repositories/Product/GetProductCategory";
import UpdateProduct from "App/Repositories/Product/UpdateProductCategory";
import CreateProductValidator from "App/Validators/CreateProductValidator";

export default class ProductsController {
  public async createProduct({ request, auth, response }) {
    const get_product_data = await request.validate(CreateProductValidator);
    let createProductResponse = await new CreateProduct({
      ...get_product_data,
    }).createProduct({ auth });

    return response
      .status(createProductResponse.statusCode)
      .send(createProductResponse);
  }
  public async getProducts({ response }) {
    let getProductResponse = await new GetProduct({}).getProducts({});

    return response
      .status(getProductResponse.statusCode)
      .send(getProductResponse);
  }
  public async getProduct({ params: { product_id }, response }) {
    let getSingleProductResponse = await new GetProduct({}).getProduct({
      product_id,
    });

    return response
      .status(getSingleProductResponse.statusCode)
      .send(getSingleProductResponse);
  }
  public async updateProduct({ params: { product_id }, request, response }) {
    let updateProductResponse = await new UpdateProduct({
      ...request.post(),
    }).updateProduct({ product_id });

    return response
      .status(updateProductResponse.statusCode)
      .send(updateProductResponse);
  }
  public async deleteProduct({ params: { product_id }, response }) {
    let deleteProductResponse = await new DeleteProduct({}).deleteProduct({
      product_id,
    });

    return response
      .status(deleteProductResponse.statusCode)
      .send(deleteProductResponse);
  }
}
