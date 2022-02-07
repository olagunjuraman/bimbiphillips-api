// import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

import SignIn from "App/Repositories/Authentication/SignIn";
import SignUp from "App/Repositories/Authentication/SignUp";
import RegisterValidator from "App/Validators/RegisterValidator";
import SignInValidator from "App/Validators/SignInValidator";

export default class AuthenticationController {
  public async register({ request, response }) {
    const signUpData = await request.validate(RegisterValidator);
    let signUpResponse = await new SignUp({
      ...signUpData,
    }).signUp({});

    return response.status(signUpResponse.statusCode).send(signUpResponse);
  }
  public async login({ request, response, auth }) {
    const loginInData = await request.validate(SignInValidator);
    
    let signInResponse = await new SignIn({
      ...loginInData,
    }).signIn({ auth });    

    return response.status(signInResponse.statusCode).send(signInResponse);
  }
}
