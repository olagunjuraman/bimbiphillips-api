// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import CreateProductSubCategory from "App/Repositories/ProductSubCategory/CreateProductSubCategory";
import DeleteProductSubCategory from "App/Repositories/ProductSubCategory/DeleteProductSubCategory";
import GetProductSubCategory from "App/Repositories/ProductSubCategory/GetProductSubCategory";
import UpdateProductSubCategory from "App/Repositories/ProductSubCategory/UpdateProductSubCategory";
import CreateSubCategoryValidator from "App/Validators/CreateSubCategoryValidator";

export default class ProductSubCategoriesController {
  public async createProductSubCategory({ request, response }) {
    const get_sub_category_data = await request.validate(
      CreateSubCategoryValidator
    );
    let createProductSubCategoryResponse = await new CreateProductSubCategory({
      ...get_sub_category_data,
    }).createProductSubCategory({});

    return response
      .status(createProductSubCategoryResponse.statusCode)
      .send(createProductSubCategoryResponse);
  }
  public async getProductSubCategories({ response }) {
    let getProductSubCategoryResponse = await new GetProductSubCategory(
      {}
    ).getProductSubCategories({});

    return response
      .status(getProductSubCategoryResponse.statusCode)
      .send(getProductSubCategoryResponse);
  }
  public async getProductSubCategory({
    params: { sub_category_id },
    response,
  }) {
    let getSingleProductSubCategoryResponse = await new GetProductSubCategory(
      {}
    ).getProductSubCategory({ sub_category_id });

    return response
      .status(getSingleProductSubCategoryResponse.statusCode)
      .send(getSingleProductSubCategoryResponse);
  }
  public async updateProductSubCategory({
    params: { sub_category_id },
    request,
    response,
  }) {
    let updateProductSubCategoryResponse = await new UpdateProductSubCategory({
      ...request.post(),
    }).updateProductSubCategory({ sub_category_id });

    return response
      .status(updateProductSubCategoryResponse.statusCode)
      .send(updateProductSubCategoryResponse);
  }
  public async deleteProductSubCategory({
    params: { sub_category_id },
    response,
  }) {
    let deleteProductSubCategoryResponse = await new DeleteProductSubCategory(
      {}
    ).deleteProductSubCategory({ sub_category_id });

    return response
      .status(deleteProductSubCategoryResponse.statusCode)
      .send(deleteProductSubCategoryResponse);
  }
}
