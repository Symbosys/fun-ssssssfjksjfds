"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resendOtpSchema = exports.verifyOtpSchema = exports.generateOtpSchema = void 0;
const zod_1 = require("zod");
// ✅ Schema for generating OTP
exports.generateOtpSchema = zod_1.z.object({
    phone: zod_1.z
        .string()
        .min(10, "Phone number must be at least 10 digits")
        .max(15, "Phone number must be at most 15 digits")
        .regex(/^\d+$/, "Phone number must contain only digits"),
});
// ✅ Schema for verifying OTP
exports.verifyOtpSchema = zod_1.z.object({
    phone: zod_1.z
        .string()
        .min(10, "Phone number must be at least 10 digits")
        .max(15, "Phone number must be at most 15 digits")
        .regex(/^\d+$/, "Phone number must contain only digits"),
    otp: zod_1.z
        .string()
        .length(4, "OTP must be exactly 4 digits")
        .regex(/^\d+$/, "OTP must contain only digits"),
});
// ✅ Schema for resending OTP
exports.resendOtpSchema = zod_1.z.object({
    phone: zod_1.z
        .string()
        .min(10, "Phone number must be at least 10 digits")
        .max(15, "Phone number must be at most 15 digits")
        .regex(/^\d+$/, "Phone number must contain only digits"),
});
exports.default = exports.generateOtpSchema;
