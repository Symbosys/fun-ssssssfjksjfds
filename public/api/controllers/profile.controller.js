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
exports.getAllProfiles = exports.getprofileById = exports.updateprofile = void 0;
const prisma_1 = __importDefault(require("../../config/prisma"));
const asyncHandler_1 = __importDefault(require("../middlewares/asyncHandler"));
const errorResponse_1 = __importDefault(require("../utils/errorResponse"));
const successResponse_1 = require("../utils/successResponse");
const utils_1 = require("../utils/utils");
const profile_validator_1 = require("../validators/profile.validator");
// Update profile with payment screenshots and approval status
exports.updateprofile = (0, asyncHandler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const profileId = Number(req.params.id);
    console.log("update profile payload", req.body);
    console.log('Received req.files:', req.files);
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
