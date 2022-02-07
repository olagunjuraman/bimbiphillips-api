/*
|--------------------------------------------------------------------------
| Caregory Routes
|--------------------------------------------------------------------------
*/

import Route from "@ioc:Adonis/Core/Route";

Route.group(() => {
  Route.post(
    "/create-product-category",
    "Category/ProductcategoriesController.createProductCategory"
  );
  Route.get(
    "/product-category",
    "Category/ProductcategoriesController.getProductCategories"
  );
  Route.get(
    "/product-category/:category_id",
    "Category/ProductcategoriesController.getProductCategory"
  );
  Route.put(
    "/product-category/:category_id",
    "Category/ProductcategoriesController.updateProductCategory"
  );
  Route.delete(
    "/product-category/:category_id",
    "Category/ProductcategoriesController.deleteProductCategory"
  );
  Route.post(
    "/create-product-sub-category",
    "Category/ProductsubcategoriesController.createProductSubCategory"
  );
  Route.get(
    "/product-sub-category",
    "Category/ProductsubcategoriesController.getProductSubCategories"
  );
  Route.get(
    "/product-sub-category/:sub_category_id",
    "Category/ProductsubcategoriesController.getProductSubCategory"
  );
  Route.put(
    "/product-sub-category/:sub_category_id",
    "Category/ProductsubcategoriesController.updateProductSubCategory"
  );
  Route.delete(
    "/product-sub-category/:sub_category_id",
    "Category/ProductsubcategoriesController.deleteProductSubCategory"
  );
})
  .middleware("auth")
  .prefix("/api/v1/category");
