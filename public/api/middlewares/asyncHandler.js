"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Wraps async route handlers and forwards errors to Express error middleware.
 * This prevents unhandled promise rejections.
 */
const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};
exports.default = asyncHandler;
