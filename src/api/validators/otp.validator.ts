import { z } from "zod";

// ✅ Schema for generating OTP
export const generateOtpSchema = z.object({
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must be at most 15 digits")
    .regex(/^\d+$/, "Phone number must contain only digits"),
});

// ✅ Schema for verifying OTP
export const verifyOtpSchema = z.object({
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must be at most 15 digits")
    .regex(/^\d+$/, "Phone number must contain only digits"),
  otp: z
    .string()
    .length(4, "OTP must be exactly 4 digits")
    .regex(/^\d+$/, "OTP must contain only digits"),
});

// ✅ Schema for resending OTP
export const resendOtpSchema = z.object({
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must be at most 15 digits")
    .regex(/^\d+$/, "Phone number must contain only digits"),
});
export default generateOtpSchema;