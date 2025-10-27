/**
 * A custom error class for consistent API error responses.
 * Extends the native Error object with a status code and optional data.
 */
export default class ErrorResponse extends Error {
  public statusCode: number;
  public data?: unknown;

  constructor(message: string, statusCode: number, data?: unknown) {
    super(message);
    this.statusCode = statusCode;
    this.data = data;

    // Maintain proper prototype chain
    Object.setPrototypeOf(this, ErrorResponse.prototype);

    // Capture stack trace for debugging
    Error.captureStackTrace(this, this.constructor);
  }
}
