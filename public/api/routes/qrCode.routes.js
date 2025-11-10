"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
const multer_middleware_js_1 = require("../middlewares/multer.middleware.js");
const error_middleware_js_1 = require("../middlewares/error.middleware.js");
const response_util_js_1 = require("../utils/response.util.js");
const types_js_1 = require("../types/types.js");
const prisma_js_1 = __importDefault(require("../../config/prisma.js"));
const cloudinary_js_1 = __importStar(require("../../config/cloudinary.js"));
const env_js_1 = __importDefault(require("../../config/env.js"));
const Qr = (0, express_1.Router)();
Qr.put("/add", multer_middleware_js_1.multerUpload.single("image"), (0, error_middleware_js_1.asyncHandler)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const phone = req.body.phone;
    const image = req.file;
    // ✅ Validate inputs
    if (!image && !phone) {
        return next(new response_util_js_1.ErrorResponse("Either phone or image is required", types_js_1.statusCode.Bad_Request));
    }
    if (image) {
        if (!image.mimetype.startsWith("image/")) {
            return next(new response_util_js_1.ErrorResponse("Only JPEG, PNG, and WEBP images are allowed", types_js_1.statusCode.Bad_Request));
        }
        if (image.size > 10 * 1024 * 1024) {
            return next(new response_util_js_1.ErrorResponse("File size must be less than 10MB", types_js_1.statusCode.Bad_Request));
        }
    }
    if (phone && phone.length !== 10) {
        return next(new response_util_js_1.ErrorResponse("Phone number must be exactly 10 digits", types_js_1.statusCode.Bad_Request));
    }
    try {
        // 🔹 Step 1: Find existing QR Code (only one record allowed)
        let qrCode = yield prisma_js_1.default.qRCode.findFirst();
        let oldPublicId = null;
        if (qrCode === null || qrCode === void 0 ? void 0 : qrCode.image) {
            const existingImage = qrCode.image;
            oldPublicId = (_a = existingImage === null || existingImage === void 0 ? void 0 : existingImage.public_id) !== null && _a !== void 0 ? _a : null;
        }
        // 🔹 Step 2: Upload new image to Cloudinary (if provided)
        let cloudinaryResult = null;
        if (image) {
            const uploaded = yield (0, cloudinary_js_1.uploadToCloudinary)(image.buffer, env_js_1.default.cloud_folder);
            if (!uploaded) {
                return next(new response_util_js_1.ErrorResponse("Failed to upload image to Cloudinary", types_js_1.statusCode.Internal_Server_Error));
            }
            // Only keep JSON-safe fields
            cloudinaryResult = {
                public_id: uploaded.public_id,
                secure_url: uploaded.secure_url,
            };
        }
        if (qrCode) {
            // 🔹 Step 3: Update existing QR code
            const updateData = { updatedAt: new Date() };
            if (phone)
                updateData.phone = phone;
            if (cloudinaryResult)
                updateData.image = cloudinaryResult;
            qrCode = yield prisma_js_1.default.qRCode.update({
                where: { id: qrCode.id },
                data: updateData,
            });
            // 🔹 Step 4: Delete old Cloudinary image if replaced
            if (oldPublicId && cloudinaryResult) {
                yield cloudinary_js_1.default.uploader.destroy(oldPublicId);
            }
        }
        else {
            // 🔹 Step 5: Create new QR code
            qrCode = yield prisma_js_1.default.qRCode.create({
                data: {
                    phone: phone !== null && phone !== void 0 ? phone : null,
                    image: cloudinaryResult ? cloudinaryResult : {},
                    updatedAt: new Date(),
                },
            });
        }
        return (0, response_util_js_1.SuccessResponse)(res, "QR code updated successfully", qrCode);
    }
    catch (error) {
        console.error(error);
        return next(new response_util_js_1.ErrorResponse("Failed to add QR code", types_js_1.statusCode.Internal_Server_Error));
    }
})));
Qr.get("/get", (0, error_middleware_js_1.asyncHandler)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const qrCode = yield prisma_js_1.default.qRCode.findFirst();
        if (!qrCode) {
            return next(new response_util_js_1.ErrorResponse("QR code not found", types_js_1.statusCode.Not_Found));
        }
        return (0, response_util_js_1.SuccessResponse)(res, "QR code fetched successfully", qrCode);
    }
    catch (error) {
        return next(new response_util_js_1.ErrorResponse("Failed to fetch QR code", types_js_1.statusCode.Internal_Server_Error));
    }
})));
exports.default = Qr;
