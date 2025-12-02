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
const PaymentFeeRoute = (0, express_1.Router)();
/**
 * ✅ PUT /api/v1/payment-fees
 * Create or update the global payment fee configuration
 */
PaymentFeeRoute.put("/payment-fees", (0, error_middleware_js_1.asyncHandler)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Request body:", req.body);
    // Extract fees from request body
    const { phoneNumber, email, whatsapp1, whatsapp2, whatsapp3, whatsapp4, registrationFee, cardVerificationFee, hotelBookingFee, medicalKitFee, policeVerificationFee, nocFee, locationVerificationFee, secretarySafetyFee, enquiryVerificationFee, incomeGstFee, phoneVerificationFee, joiningFromFee, } = req.body;
    // ✅ Validate: At least one fee must be provided
    if (!phoneNumber &&
        !email &&
        !whatsapp1 &&
        !whatsapp2 &&
        !whatsapp3 &&
        !whatsapp4 &&
        !registrationFee &&
        !cardVerificationFee &&
        !hotelBookingFee &&
        !medicalKitFee &&
        !policeVerificationFee &&
        !nocFee &&
        !locationVerificationFee &&
        !secretarySafetyFee &&
        !enquiryVerificationFee &&
        !incomeGstFee &&
        !phoneVerificationFee &&
        !joiningFromFee) {
        return next(new response_util_js_1.ErrorResponse("At least one fee is required", types_js_1.statusCode.Bad_Request));
    }
    try {
        // 🔹 Step 1: Find existing PaymentFee record (only one is expected)
        let paymentFee = yield prisma_js_1.default.paymentFee.findFirst();
        const updateData = {};
        if (phoneNumber)
            updateData.phoneNumber = phoneNumber;
        if (email)
            updateData.email = email;
        if (whatsapp1)
            updateData.whatsapp1 = whatsapp1;
        if (whatsapp2)
            updateData.whatsapp2 = whatsapp2;
        if (whatsapp3)
            updateData.whatsapp3 = whatsapp3;
        if (whatsapp4)
            updateData.whatsapp4 = whatsapp4;
        if (registrationFee)
            updateData.registrationFee = registrationFee;
        // 🔹 Step 2: Prepare update/create data dynamically
        if (cardVerificationFee)
            updateData.cardVerificationFee = cardVerificationFee;
        if (hotelBookingFee)
            updateData.hotelBookingFee = hotelBookingFee;
        if (medicalKitFee)
            updateData.medicalKitFee = medicalKitFee;
        if (policeVerificationFee)
            updateData.policeVerificationFee = policeVerificationFee;
        if (nocFee)
            updateData.nocFee = nocFee;
        if (locationVerificationFee)
            updateData.locationVerificationFee = locationVerificationFee;
        if (secretarySafetyFee)
            updateData.secretarySafetyFee = secretarySafetyFee;
        if (enquiryVerificationFee)
            updateData.enquiryVerificationFee = enquiryVerificationFee;
        if (incomeGstFee)
            updateData.incomeGstFee = incomeGstFee;
        if (phoneVerificationFee)
            updateData.phoneVerificationFee = phoneVerificationFee;
        if (joiningFromFee)
            updateData.joiningFromFee = joiningFromFee;
        // 🔹 Step 3: Update or create the record
        if (paymentFee) {
            paymentFee = yield prisma_js_1.default.paymentFee.update({
                where: { id: paymentFee.id },
                data: updateData,
            });
        }
        else {
            paymentFee = yield prisma_js_1.default.paymentFee.create({
                data: updateData,
            });
        }
        return (0, response_util_js_1.SuccessResponse)(res, "Payment fee configuration updated successfully", paymentFee);
    }
    catch (error) {
        console.error("Update error:", error);
        return next(new response_util_js_1.ErrorResponse("Failed to update payment fee configuration", types_js_1.statusCode.Internal_Server_Error));
    }
})));
/**
 * ✅ GET /api/v1/payment-fees
 * Fetch current payment fee configuration
 */
PaymentFeeRoute.get("/payment-fees", (0, error_middleware_js_1.asyncHandler)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const paymentFees = yield prisma_js_1.default.paymentFee.findFirst();
        if (!paymentFees) {
            return next(new response_util_js_1.ErrorResponse("Payment fee configuration not found", types_js_1.statusCode.Not_Found));
        }
        return (0, response_util_js_1.SuccessResponse)(res, "Payment fee configuration fetched successfully", paymentFees);
    }
    catch (error) {
        console.error("Fetch error:", error);
        return next(new response_util_js_1.ErrorResponse("Failed to fetch payment fee configuration", types_js_1.statusCode.Internal_Server_Error));
    }
})));
exports.default = PaymentFeeRoute;
