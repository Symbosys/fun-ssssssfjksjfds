"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hotelCreateSchema = void 0;
const zod_1 = require("zod");
// Schema for Hotel creation
exports.hotelCreateSchema = zod_1.z.object({
    name: zod_1.z
        .string({ required_error: 'Name is required' })
        .min(1, { message: 'Name cannot be empty' })
        .max(255, { message: 'Name must be at most 255 characters' }),
    location: zod_1.z
        .string({ required_error: 'Location is required' })
        .min(1, { message: 'Location cannot be empty' })
        .max(500, { message: 'Location must be at most 500 characters' }),
    description: zod_1.z
        .string({ invalid_type_error: 'Description must be a string' })
        .max(1000, { message: 'Description must be at most 1000 characters' })
        .nullable()
        .optional(),
    city: zod_1.z
        .string({ required_error: 'City is required' })
        .min(1, { message: 'City cannot be empty' })
        .max(255, { message: 'City must be at most 255 characters' }),
    state: zod_1.z
        .string({ required_error: 'State is required' })
        .min(1, { message: 'State cannot be empty' })
        .max(255, { message: 'State must be at most 255 characters' }),
    country: zod_1.z
        .string({ invalid_type_error: 'Country must be a string' })
        .max(255, { message: 'Country must be at most 255 characters' })
        .nullable()
        .optional(),
    longitude: zod_1.z
        .number({ invalid_type_error: 'Longitude must be a number' })
        .min(-180, { message: 'Longitude must be between -180 and 180' })
        .max(180, { message: 'Longitude must be between -180 and 180' })
        .nullable()
        .optional(),
    latitude: zod_1.z
        .number({ invalid_type_error: 'Latitude must be a number' })
        .min(-90, { message: 'Latitude must be between -90 and 90' })
        .max(90, { message: 'Latitude must be between -90 and 90' })
        .nullable()
        .optional(),
    isActive: zod_1.z
        .boolean({ invalid_type_error: 'isActive must be a boolean' })
        .default(true),
}, {
    invalid_type_error: 'Hotel must be an object',
    required_error: 'Hotel data is required',
});
