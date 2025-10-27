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
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleImageUpload = void 0;
const cloudinary_js_1 = require("../../config/cloudinary.js");
// Helper function to handle image upload and replacement
const handleImageUpload = (file, fieldName, existingImageData, loanApplicationId) => __awaiter(void 0, void 0, void 0, function* () {
    if (!file)
        return null;
    try {
        // If there's an existing image, delete it from Cloudinary first
        if (existingImageData && existingImageData.public_id) {
            try {
                yield (0, cloudinary_js_1.deleteFromCloudinary)(existingImageData.public_id);
            }
            catch (deleteError) {
                console.error(`Failed to delete existing image for ${fieldName}:`, deleteError);
                // Continue with upload even if deletion fails
            }
        }
        // Upload new image to Cloudinary
        const folder = `loan-applications/${loanApplicationId}`;
        const uploadResult = yield (0, cloudinary_js_1.uploadToCloudinary)(file.buffer, folder);
        return {
            uploaded: true,
            public_id: uploadResult.public_id,
            url: uploadResult.secure_url
        };
    }
    catch (error) {
        console.log({ error });
        console.error(`Failed to upload image for ${fieldName}:`, error);
        throw new Error(`Failed to upload ${fieldName} image`);
    }
});
exports.handleImageUpload = handleImageUpload;
