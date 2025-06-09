"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicantsSchema = void 0;
const zod_1 = require("zod");
// Enum for Gender (based on Prisma model)
const GenderEnum = zod_1.z.enum(['MALE', 'FEMALE', 'OTHER']);
// Zod schema for Applicants model
exports.ApplicantsSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, { message: "Name is required" }),
    age: zod_1.z.string().min(1, { message: "Age is required" }).regex(/^\d+$/, { message: "Age must be a valid number" }),
    email: zod_1.z.string().email({ message: "Invalid email address" }).optional().or(zod_1.z.literal('')),
    phone: zod_1.z.string().regex(/^\d{10}$/, { message: "Phone number must be exactly 10 digits" }).optional().or(zod_1.z.literal('')),
    whatsapp: zod_1.z.string().regex(/^\d{10}$/, { message: "WhatsApp number must be exactly 10 digits" }).optional().or(zod_1.z.literal('')),
    gender: GenderEnum.default('MALE'),
    address: zod_1.z.string().min(1, { message: "Address is required" }),
});
