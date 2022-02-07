/**
 * Handle SignIn Activities
 *
 * @param {Object}
 *
 * @returns {Object}
 */

import Hash from "@ioc:Adonis/Core/Hash";

import User from "App/Models/User";
import errorResponse from "App/Utils/errorResponse";

export default class SignIn {
  protected data;
  constructor(data) {
    this.data = data;
  }
  async signIn({ auth }) {

    const { username, email, password } = this.data;

    try {
      if (!username && !email) {  
        return errorResponse({
          data: null,
          statusCode: 400,
          message: `Email or username is required`,
        });
      }
      let get_user_prom = User.query();

      if (email) {
        
       const user = await get_user_prom.where("email", email);
       console.log(user);
       
      }
      if (username && !email) {
   
        
        get_user_prom.where("username", username);
      }

      const get_user = await get_user_prom.first();

      

      if (!get_user) {
        return errorResponse({
          data: null,
          statusCode: 400,
          message: `User does not exist`,
        });
      }

      const passwords_match = await Hash.verify(get_user.password, password);

      if (!passwords_match) {
        
        return errorResponse({
          data: null,
          statusCode: 400,
          message: `Invalid login credentials. Please try again`,
        });
      }
    
      const token = await auth.use("api").generate(get_user);

      return ({
        data: {
          token,
          user: get_user,
        },
        status: "Success",
        statusCode: 200,
        message: `User successfully signed in`,
      });
    } catch (error) {
      //   console.log("err >> ", error.message);

      return errorResponse({
        data: null,
        error: error,
        statusCode: 400,
        message: `Unable to  sign in`,
      });
    }
  }
}
