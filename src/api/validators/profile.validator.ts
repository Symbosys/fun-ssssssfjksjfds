import { url } from "inspector";
import { z } from "zod";
import { Gender } from "../../../generated/prisma";

// Cloudinary image schema
const cloudinaryImageSchema = z.object({
  public_id: z.string(),
  url: z.string().url()
});

export const profileValidation = z.object({
  url: z.string().url(),
  name: z.string(),
  dateOfBirth: z.string(),
  Gender: z.nativeEnum(Gender),
  state: z.string(),
  phone: z.string().min(10),
  address: z.string().optional(),
  website: z.string().url().optional(),
  upi: z.string().optional(),
});

const statusEnum = z.enum(["PENDING", "APPROVED", "REJECTED"]);

export const updateProfileSchema = z.object({
  // Personal information updates
  url: z.string().url().optional(),
  name: z.string().optional(),
  dateOfBirth: z.string().optional(),
  gender: z.nativeEnum(Gender).optional(),
  state: z.string().optional(),
  phone: z.string().min(10).optional(),
  address: z.string().optional(),
  website: z.string().url().optional(),
  upi: z.string().optional(),
  bankAccountNumber: z.string().optional(),
  ifscCode: z.string().optional(),
  bankName: z.string().optional(),


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
  currentStep: z.preprocess((val) => (val === undefined ? undefined : parseInt(val as string, 10)), z.number().int().optional()),
})

// Schema for payment screenshot fields (for file uploads)
export const ScreenshotFields = [
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
] as const;

export type ScreenshotField = typeof ScreenshotFields[number];
