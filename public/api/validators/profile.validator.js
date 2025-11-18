"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScreenshotFields = exports.updateProfileSchema = exports.profileValidation = void 0;
const zod_1 = require("zod");
const prisma_1 = require("../../../generated/prisma");
// Cloudinary image schema
const cloudinaryImageSchema = zod_1.z.object({
    public_id: zod_1.z.string(),
    url: zod_1.z.string().url()
});
exports.profileValidation = zod_1.z.object({
    url: zod_1.z.string().url(),
    name: zod_1.z.string(),
    dateOfBirth: zod_1.z.string(),
    Gender: zod_1.z.nativeEnum(prisma_1.Gender),
    state: zod_1.z.string(),
    phone: zod_1.z.string().min(10),
    address: zod_1.z.string().optional(),
    website: zod_1.z.string().url().optional(),
    upi: zod_1.z.string().optional(),
});
const statusEnum = zod_1.z.enum(["PENDING", "APPROVED", "REJECTED"]);
exports.updateProfileSchema = zod_1.z.object({
    // Personal information updates
    url: zod_1.z.string().url().optional(),
    name: zod_1.z.string().optional(),
    dateOfBirth: zod_1.z.string().optional(),
    gender: zod_1.z.nativeEnum(prisma_1.Gender).optional(),
    state: zod_1.z.string().optional(),
    phone: zod_1.z.string().min(10).optional(),
    address: zod_1.z.string().optional(),
    website: zod_1.z.string().url().optional(),
    upi: zod_1.z.string().optional(),
    bankAccountNumber: zod_1.z.string().optional(),
    ifscCode: zod_1.z.string().optional(),
    bankName: zod_1.z.string().optional(),
    // Status updates
    carVefificationStatus: statusEnum.optional(),
    hotelBookingStatus: statusEnum.optional(),
    medicalKitStatus: statusEnum.optional(),
    policeVerificationStatus: statusEnum.optional(),
    nocChangeStatus: statusEnum.optional(),
    locationVerificationChangeAreaStatus: statusEnum.optional(),
    secretarySafetyChangeStatus: statusEnum.optional(),
    enquiryVerificationChangeStatus: statusEnum.optional(),
    incomeGstChangeStatus: statusEnum.optional(),
    phoneVerificationStatus: statusEnum.optional(),
    joiningFromChangeStatus: statusEnum.optional(),
});
// Schema for payment screenshot fields (for file uploads)
exports.ScreenshotFields = [
    "customerImage",
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
    "joiningFromChange"
];
