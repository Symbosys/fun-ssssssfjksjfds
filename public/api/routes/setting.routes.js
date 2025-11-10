"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const response_util_js_1 = require("../utils/response.util.js");
const types_js_1 = require("../types/types.js");
const error_middleware_js_1 = require("../middlewares/error.middleware.js");
const prisma_js_1 = __importDefault(require("../../config/prisma.js"));
const ContactRoute = (0, express_1.Router)();
/**
 * ✅ PUT /api/v1/contact
 * Create or update the contact information
 */
ContactRoute.put("/contact", (0, error_middleware_js_1.asyncHandler)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Incoming Contact Update:", req.body);
    const { email, phone, whatsapp } = req.body;
    // ✅ Validate: at least one field must be provided
    if (!email && !phone && !whatsapp) {
        return next(new response_util_js_1.ErrorResponse("At least one contact field (email, phone, or whatsapp) is required", types_js_1.statusCode.Bad_Request));
    }
    try {
        // 🔹 Step 1: Check if contact info already exists
        let contact = yield prisma_js_1.default.contact.findFirst();
        const updateData = {};
        // 🔹 Step 2: Prepare data dynamically
        if (email)
            updateData.email = email;
        if (phone)
            updateData.phone = phone;
        if (whatsapp)
            updateData.whatsapp = whatsapp;
        // 🔹 Step 3: Update or create record
        if (contact) {
            contact = yield prisma_js_1.default.contact.update({
                where: { id: contact.id },
                data: updateData,
            });
        }
        else {
            contact = yield prisma_js_1.default.contact.create({
                data: updateData,
            });
        }
        return (0, response_util_js_1.SuccessResponse)(res, "Contact information updated successfully", contact);
    }
    catch (error) {
        console.error("Contact update error:", error);
        return next(new response_util_js_1.ErrorResponse("Failed to update contact information", types_js_1.statusCode.Internal_Server_Error));
    }
})));
/**
 * ✅ GET /api/v1/contact
 * Fetch current contact information
 */
ContactRoute.get("/contact", (0, error_middleware_js_1.asyncHandler)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const contact = yield prisma_js_1.default.contact.findFirst();
        if (!contact) {
            return next(new response_util_js_1.ErrorResponse("Contact information not found", types_js_1.statusCode.Not_Found));
        }
        return (0, response_util_js_1.SuccessResponse)(res, "Contact information fetched successfully", contact);
    }
    catch (error) {
        console.error("Fetch contact error:", error);
        return next(new response_util_js_1.ErrorResponse("Failed to fetch contact information", types_js_1.statusCode.Internal_Server_Error));
    }
})));
exports.default = ContactRoute;
