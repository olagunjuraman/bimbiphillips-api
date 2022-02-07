/*
|--------------------------------------------------------------------------
| Authentication Routes
|--------------------------------------------------------------------------
*/

import Route from "@ioc:Adonis/Core/Route";

Route.group(() => {
  Route.post("/signup", "Authentication/AuthenticationController.register");
  Route.post("/signin", "Authentication/AuthenticationController.login");
}).prefix("/api/v1/auth");
