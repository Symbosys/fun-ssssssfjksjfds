"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuccessResponse = void 0;
/**
 * Sends a standardized success response
 * @param res Express Response object
 * @param message Optional success message
 * @param data Optional payload
 * @param statusCode
 */
const SuccessResponse = (res, message = "Success", data = {}, statusCode = 200) => {
    return res.status(statusCode).json({
        success: true,
        message,
        data,
    });
};
exports.SuccessResponse = SuccessResponse;
