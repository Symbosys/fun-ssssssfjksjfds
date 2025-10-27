import { Request, Response, NextFunction, RequestHandler } from "express";

/**
 * Wraps async route handlers and forwards errors to Express error middleware.
 * This prevents unhandled promise rejections.
 */
const asyncHandler =
  (fn: (req: Request, res: Response, next: NextFunction) => Promise<any>): RequestHandler =>
  (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };

export default asyncHandler;
