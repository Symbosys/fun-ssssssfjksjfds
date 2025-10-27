"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A custom error class for consistent API error responses.
 * Extends the native Error object with a status code and optional data.
 */
class ErrorResponse extends Error {
    constructor(message, statusCode, data) {
        super(message);
        this.statusCode = statusCode;
        this.data = data;
        // Maintain proper prototype chain
        Object.setPrototypeOf(this, ErrorResponse.prototype);
        // Capture stack trace for debugging
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.default = ErrorResponse;
