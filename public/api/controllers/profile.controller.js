"use strict";
// import { Request, Response, NextFunction } from "express";
// import asyncHandler from "../middlewares/asyncHandler"
// import  prisma  from "../../config/prisma" // Adjust path as needed
// import cloudinary from "../../config/cloudinary"; // Adjust path as needed
// import ErrorResponse from "../utils/errorResponse";
// import { SuccessResponse } from "../utils/successResponse";
// // import { updateProfileSchema } from "../validation/profile.schema"; 
// import { profileImageFields } from "../../constants/profileImageFields";
// import Profile from "../validators/profile.validator";
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
exports.deleteProfile = exports.getAllProfiles = exports.getprofileById = exports.updateprofile = void 0;
const prisma_1 = __importDefault(require("../../config/prisma"));
const asyncHandler_1 = __importDefault(require("../middlewares/asyncHandler"));
const errorResponse_1 = __importDefault(require("../utils/errorResponse"));
const successResponse_1 = require("../utils/successResponse");
const utils_1 = require("../utils/utils");
const profile_validator_1 = require("../validators/profile.validator");
const cloudinary_1 = require("../../config/cloudinary");
// Update profile with payment screenshots and approval status
exports.updateprofile = (0, asyncHandler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const profileId = Number(req.params.id);
    console.log("data comming");
    if (!profileId) {
        return next(new errorResponse_1.default("Profile ID is required", 400));
    }
    // Check if profile exists
    const existingProfile = yield prisma_1.default.profile.findUnique({
        where: { id: profileId }
    });
    if (!existingProfile) {
        return next(new errorResponse_1.default("Profile not found", 404));
    }
    // Parse and validate the request body (excluding files)
    const validatedData = profile_validator_1.updateProfileSchema.parse(req.body);
    // Get uploaded files
    const files = req.files;
    // Prepare update data
    const updateData = Object.assign({}, validatedData);
    // Handle image uploads for each payment screenshot field
    const imageUploadPromises = [];
    for (const fieldName of profile_validator_1.ScreenshotFields) {
        const file = (_a = files === null || files === void 0 ? void 0 : files[fieldName]) === null || _a === void 0 ? void 0 : _a[0]; // Get first file for this field
        if (file) {
            imageUploadPromises.push((0, utils_1.handleImageUpload)(file, fieldName, existingProfile[fieldName], profileId).then((imageData) => {
                if (imageData) {
                    updateData[fieldName] = imageData;
                }
            }));
        }
    }
    // Wait for all image uploads to complete
    try {
        yield Promise.all(imageUploadPromises);
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Failed to upload images";
        return next(new errorResponse_1.default(errorMessage, 500));
    }
    // Update the profile record
    const updatedProfile = yield prisma_1.default.profile.update({
        where: { id: profileId },
        data: updateData,
    });
    return (0, successResponse_1.SuccessResponse)(res, "Profile updated successfully", { data: updatedProfile }, 200);
}));
//GET PROFILE BY ID
exports.getprofileById = (0, asyncHandler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const profileId = Number(req.params.id);
    if (!profileId) {
        return next(new errorResponse_1.default("Profile ID is required", 400));
    }
    const profile = yield prisma_1.default.profile.findUnique({
        where: { id: profileId }
    });
    if (!profile) {
        return next(new errorResponse_1.default("Profile not found", 404));
    }
    return (0, successResponse_1.SuccessResponse)(res, "Profile retrieved successfully", profile, 200);
}));
//GET ALL PROFILES pagination
exports.getAllProfiles = (0, asyncHandler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const search = req.query.search;
    const status = req.query.status;
    const sortBy = req.query.sortBy || 'id';
    const sortOrder = req.query.sortOrder || 'desc';
    const skip = (page - 1) * limit;
    // Build where clause for filtering
    const whereClause = {};
    if (search) {
        whereClause.OR = [
            { email: { contains: search, mode: 'insensitive' } },
            { phone: { contains: search, mode: 'insensitive' } },
            { name: { contains: search, mode: 'insensitive' } },
            { id: isNaN(Number(search)) ? undefined : Number(search) },
        ].filter(condition => condition.id !== undefined || condition.email || condition.phone || condition.name);
    }
    if (status) {
        if (['PENDING', 'APPROVED', 'REJECTED'].includes(status.toUpperCase())) {
            whereClause.OR = [
                { carVefificationStatus: status.toUpperCase() },
                { hotelBookingStatus: status.toUpperCase() },
                { medicalKitStatus: status.toUpperCase() },
                { policeVerificationStatus: status.toUpperCase() },
                { nocChangeStatus: status.toUpperCase() },
                { locationVerificationChangeAreaStatus: status.toUpperCase() },
                { secretarySafetyChangeStatus: status.toUpperCase() },
                { enquiryVerificationChangeStatus: status.toUpperCase() },
                { incomeGstChangeStatus: status.toUpperCase() },
                { phoneVerificationVerifiedStatus: status.toUpperCase() },
                { joiningFromChangeStatus: status.toUpperCase() },
            ];
        }
    }
    const [profiles, totalCount] = yield Promise.all([
        prisma_1.default.profile.findMany({
            where: whereClause,
            skip,
            take: limit,
            orderBy: { [sortBy]: sortOrder },
            select: {
                id: true,
                email: true,
                name: true,
                phone: true,
                dateOfBirth: true,
                gender: true,
                state: true,
                address: true,
                website: true,
                upi: true,
                carVefificationStatus: true,
                hotelBookingStatus: true,
                medicalKitStatus: true,
                policeVerificationStatus: true,
                nocChangeStatus: true,
                locationVerificationChangeAreaStatus: true,
                secretarySafetyChangeStatus: true,
                enquiryVerificationChangeStatus: true,
                incomeGstChangeStatus: true,
                phoneVerificationVerifiedStatus: true,
                joiningFromChangeStatus: true,
            },
        }),
        prisma_1.default.profile.count({ where: whereClause }),
    ]);
    return (0, successResponse_1.SuccessResponse)(res, "Profiles retrieved successfully", {
        profiles,
        totalCount,
        totalPages: Math.ceil(totalCount / limit),
        currentPage: page,
        count: profiles.length,
    }, 200);
}));
// ✅ All JSON image fields in the Profile model
const imageFields = [
    "cardVerification",
    "hotelBooking",
    "medicalKit",
    "policeVerification",
    "nocChange",
    "locationVerificationChangeArea",
    "secretarySafetyChange",
    "enquiryVerificationChange",
    "incomeGstChange",
    "phoneVerification",
    "joiningFromChange",
];
// ✅ Delete profile and its associated Cloudinary images
exports.deleteProfile = (0, asyncHandler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const profileId = Number(req.params.id);
    // 🧩 Validate ID
    if (!profileId) {
        return next(new errorResponse_1.default("Profile ID is required", 400));
    }
    // 🧩 Check if profile exists
    const existingProfile = yield prisma_1.default.profile.findUnique({
        where: { id: profileId },
    });
    if (!existingProfile) {
        return next(new errorResponse_1.default("Profile not found", 404));
    }
    // 🧹 Prepare Cloudinary deletions
    const imageDeletePromises = [];
    for (const field of imageFields) {
        const data = existingProfile[field];
        if (!data)
            continue;
        try {
            // Parse JSON field (could be object or string)
            const parsed = typeof data === "string" ? JSON.parse(data) : data;
            if (Array.isArray(parsed)) {
                // Multiple images
                for (const img of parsed) {
                    if (img === null || img === void 0 ? void 0 : img.public_id) {
                        imageDeletePromises.push((0, cloudinary_1.deleteFromCloudinary)(img.public_id));
                    }
                }
            }
            else if (parsed === null || parsed === void 0 ? void 0 : parsed.public_id) {
                // Single image
                imageDeletePromises.push((0, cloudinary_1.deleteFromCloudinary)(parsed.public_id));
            }
        }
        catch (err) {
            console.error(`Failed to parse/delete Cloudinary image for ${field}:`, err);
        }
    }
    // ✅ Wait for all deletions
    try {
        yield Promise.all(imageDeletePromises);
    }
    catch (error) {
        console.error("One or more Cloudinary deletions failed:", error);
        // Don’t throw — still delete the DB record
    }
    // 🗑️ Delete profile record from DB
    const deletedProfile = yield prisma_1.default.profile.delete({
        where: { id: profileId },
    });
    // ✅ Send success response
    return (0, successResponse_1.SuccessResponse)(res, "Profile and associated images deleted successfully", { data: deletedProfile }, 200);
}));
