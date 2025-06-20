import { z } from "zod";

export const bookingValidator = z.object({
    name: z.string()
        .min(2, 'Name must be at least 2 characters')
        .max(100, 'Name cannot exceed 100 characters')
        .trim().nonempty("Name is required"),
    email: z.string()
        .email('Invalid email address')
        .toLowerCase()
        .trim().nonempty("Email is required"),
    userLocation: z.string()
        .min(3, 'Location must be at least 3 characters')
        .max(200, 'Location cannot exceed 200 characters')
        .trim().nonempty("Location is required"),
    phone: z.string()
        .min(10, 'Phone number must be at least 10 digits')
        .max(10, 'Phone number cannot exceed 15 digits').nonempty("Phone number is required"),
    date: z.string(),
    time: z.string(),
    modelId: z.string({required_error: "Model is required"}).nonempty("Model is required"),
    hotelName: z.string()
        .max(200, 'Hotel name cannot exceed 200 characters')
        .trim()
        .optional(),
});

export type BookingType = z.infer<typeof bookingValidator>;

