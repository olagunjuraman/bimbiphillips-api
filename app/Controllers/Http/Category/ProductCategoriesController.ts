import CreateProductCategory from "App/Repositories/ProductCategory/CreateProductCategory";
import DeleteProductCategory from "App/Repositories/ProductCategory/DeleteProductCategory";
import GetProductCategory from "App/Repositories/ProductCategory/GetProductCategory";
import UpdateProductCategory from "App/Repositories/ProductCategory/UpdateProductCategory";
import CreateCategoryValidator from "App/Validators/CreateCategoryValidator";

export default class ProductCategoriesController {
  public async createProductCategory({ request, response }) {
    const category = await request.validate(CreateCategoryValidator);
    let createProductCategoryResponse = await new CreateProductCategory({
      ...category,
    }).createProductCategory({});

    return response
      .status(createProductCategoryResponse.statusCode)
      .send(createProductCategoryResponse);
  }
  public async getProductCategories({ response }) {
    let getProductCategoryResponse = await new GetProductCategory(
      {}
    ).getProductCategories({});

    return response
      .status(getProductCategoryResponse.statusCode)
      .send(getProductCategoryResponse);
  }
  public async getProductCategory({
    params: { category_id },
    response,
  }) {
    let getSingleProductCategoryResponse = await new GetProductCategory(
      {}
    ).getProductCategory({ category_id });

    return response
      .status(getSingleProductCategoryResponse.statusCode)
      .send(getSingleProductCategoryResponse);
  }
  public async updateProductCategory({
    params: { category_id },
    request,
    response,
  }) {
    let updateProductCategoryResponse = await new UpdateProductCategory({
      ...request.post(),
    }).updateProductCategory({ category_id });

    console.log('ll');
    

    return response
      .status(updateProductCategoryResponse.statusCode)
      .send(updateProductCategoryResponse);
  }
  public async deleteProductCategory({ params: { category_id }, response }) {
    let deleteProductCategoryResponse = await new DeleteProductCategory(
      {}
    ).deleteProductCategory({ category_id });

    return response
      .status(deleteProductCategoryResponse.statusCode)
      .send(deleteProductCategoryResponse);
  }
}
