/**
 * Handle SignUp Activities
 *
 * @param {Object}
 *
 * @returns {Object}
 */

import User from "App/Models/User";
import errorResponse from "App/Utils/errorResponse";

export default class SignUp {
  protected data;
  constructor(data) {
    this.data = data;
  }
  async signUp({}) {
    const {
      first_name,
      last_name,
      email,
      contact_number,
      username,
      password,
      address,
    } = this.data;

    try {
      const newUser = await User.create({
        first_name,
        last_name,
        email,
        contact_number,
        username,
        password,
        address,
      });

      return {
        data: newUser,
        status: "Success",
        statusCode: 200,
        message: `User successfully registered`,
      };
    } catch (error) {
      //   console.log("err >> ", error.message);

      return errorResponse({
        data: null,
        error: error,
        statusCode: 400,
        message: `Unable to user sign up`,
      });
    }
  }
}
