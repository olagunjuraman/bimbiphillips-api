/*
|--------------------------------------------------------------------------
| Caregory Routes
|--------------------------------------------------------------------------
*/

import Route from "@ioc:Adonis/Core/Route";

Route.group(() => {
  Route.post("/create-product", "ProductsController.createProduct");
  Route.get("/products", "ProductsController.getProducts");
  Route.get("/products/:product_id", "ProductsController.getProduct");
  Route.put("/products/:product_id", "ProductsController.updateProduct");
  Route.delete(
    "/products/:product_id",
    "ProductsController.deleteProduct"
  );
})
  .middleware("auth")
  .prefix("/api/v1/product");
