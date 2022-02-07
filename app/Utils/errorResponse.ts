/**
 * Provides a response for an operation either successful or failed.
 * This method by default assumes the operation failed - a real pessimist.
 *
 * @param {Object}
 *
 * @returns {Object}
 */

export default function errorResponse({
  error = { message: "", status: "" },
  status = "Error",
  statusCode = 400,
  message,
  data,
}) {
  if (error && error.message)
  return {
    statusCode,
    status,
    message,
    data,
  };
}
