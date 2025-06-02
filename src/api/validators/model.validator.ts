import { z } from 'zod';

// Schema for ModelImage creation
const modelImageCreateSchema = z.object({
    image: z
    .object({
      mimetype: z.string().refine((val) => val.startsWith("image/"), {
        message: "File must be an image",
      }),
      size: z.number().max(2 * 1024 * 1024, "File size must be less than 2MB"),
    })
    .optional(),
}, {
  invalid_type_error: 'ModelImage must be an object',
  required_error: 'ModelImage is required',
});

// Schema for Service creation
export const serviceCreateSchema = z.object({
  name: z
    .string({ required_error: 'Service name is required' })
    .min(1, { message: 'Service name cannot be empty' })
    .max(255, { message: 'Service name must be at most 255 characters' }),
}, {
  invalid_type_error: 'Service must be an objects',
  required_error: 'Service is required',
});

export const addServicesSchema = z.object({
  services: z
    .array(serviceCreateSchema, {
      invalid_type_error: 'Services must be an array of Service objects',
      required_error: 'Services array is required',
    })
    .min(1, { message: 'At least one service must be provided' }),
}, {
  invalid_type_error: 'Request body must be an object',
  required_error: 'Request body is required',
});

// Schema for Model creation with nested Service and ModelImage
export const modelCreateSchema = z.object({
    name: z
      .string({ required_error: 'Name is required' })
      .min(1, { message: 'Name cannot be empty' })
      .max(255, { message: 'Name must be at most 255 characters' }),
    age: z
      .string({ required_error: 'Age is required' })
      .min(1, { message: 'Age cannot be empty' })
      .max(50, { message: 'Age must be at most 50 characters' })
      .refine((val) => !isNaN(parseInt(val)) && parseInt(val) >= 0, {
        message: 'Age must be a valid number greater than or equal to 0',
      }),
    email: z
      .string({ invalid_type_error: 'Email must be a string' })
      .email({ message: 'Email must be a valid email address' })
      .max(255, { message: 'Email must be at most 255 characters' })
      .nullable()
      .optional(),
    phone: z
      .string({ invalid_type_error: 'Phone must be a string' }).min(10, { message: 'Phone number must be at least 10 characters' })
      .max(10, { message: 'Phone number must be at most 10 characters' })
      .nullable()
      .optional(),
    whatsapp: z
      .string({ invalid_type_error: 'WhatsApp must be a string' })
      .max(20, { message: 'WhatsApp number must be at most 20 characters' })
      .nullable()
      .optional()
      .refine((val) => !val || /^\+?[1-9]\d{1,14}$/.test(val), {
        message: 'WhatsApp number must be a valid international format',
      }),
    address: z
      .string({ invalid_type_error: 'Address must be a string' })
      .max(500, { message: 'Address must be at most 500 characters' })
      .nullable()
      .optional(),
    isActive: z
      .boolean({ invalid_type_error: 'isActive must be a boolean' })
      .default(true),
    image: z
      .array(modelImageCreateSchema, {
        invalid_type_error: 'Images must be an array of ModelImage objects',
      })
      .optional(),
    service: z.string({required_error: "Service is required"})
  }, {
    invalid_type_error: 'Model must be an object',
    required_error: 'Model data is required',
  });