import { z } from 'zod';

// Enum for Gender (based on Prisma model)
const GenderEnum = z.enum(['MALE', 'FEMALE', 'OTHER']);

// Zod schema for Applicants model
export const ApplicantsSchema = z.object({ // Auto-incremented in Prisma, optional for creation
  name: z.string().min(1, { message: "Name is required" }),
  age: z.string().min(1, { message: "Age is required" }).regex(/^\d+$/, { message: "Age must be a valid number" }),
  email: z.string().email({ message: "Invalid email address" }).optional().or(z.literal('')),
  phone: z.string().regex(/^\d{10}$/, { message: "Phone number must be exactly 10 digits" }).optional().or(z.literal('')),
  whatsapp: z.string().regex(/^\d{10}$/, { message: "WhatsApp number must be exactly 10 digits" }).optional().or(z.literal('')),
  gender: GenderEnum.default('MALE'),
  address: z.string().min(1, { message: "Address is required" }),
});

// TypeScript type inferred from the schema
export type Applicants = z.infer<typeof ApplicantsSchema>;