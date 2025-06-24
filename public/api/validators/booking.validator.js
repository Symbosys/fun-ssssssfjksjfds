"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingValidator = void 0;
const zod_1 = require("zod");
exports.bookingValidator = zod_1.z.object({
    name: zod_1.z.string()
        .min(2, 'Name must be at least 2 characters')
        .max(100, 'Name cannot exceed 100 characters')
        .trim().nonempty("Name is required"),
    email: zod_1.z.string()
        .email('Invalid email address')
        .toLowerCase()
        .trim().nonempty("Email is required"),
    userLocation: zod_1.z.string()
        .min(3, 'Location must be at least 3 characters')
        .max(200, 'Location cannot exceed 200 characters')
        .trim().nonempty("Location is required"),
    phone: zod_1.z.string()
        .min(10, 'Phone number must be at least 10 digits')
        .max(10, 'Phone number cannot exceed 10 digits').nonempty("Phone number is required"),
    date: zod_1.z.string(),
    time: zod_1.z.string(),
    modelId: zod_1.z.string({ required_error: "Model is required" }).nonempty("Model is required"),
    hotelName: zod_1.z.string()
        .max(200, 'Hotel name cannot exceed 200 characters')
        .trim()
        .optional(),
});
