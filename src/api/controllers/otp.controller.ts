import prisma from "../../config/prisma.js";
import { asyncHandler } from "../middlewares/error.middleware.js";
import { generateOtp, sendOtp } from "../utils/otp.utils.js";
import { ErrorResponse, SuccessResponse } from "../utils/response.util.js";
import { statusCode } from "../types/types.js";
import { z } from "zod";

// Validation schema
const generateOtpSchema = z.object({
  email: z.string().email(),
});

const verifyOtpSchema = z.object({
  email: z.string().email(),
  otp: z.union([z.string(), z.number()])
    .transform(val => val.toString())
    .refine(val => val.length === 4, "OTP must be 4 digits"),
});

// Generate OTP
export const requestOtp = asyncHandler(async (req, res) => {
  const { email } = generateOtpSchema.parse(req.body);

  const otp = email === "test@example.com" ? "1234" : generateOtp();
  const expiresAt = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes

  // Delete existing OTP
  await prisma.otp.deleteMany({ where: { email } });

  // Create new OTP in DB
  await prisma.otp.create({
    data: { email, otp, expiresAt },
  });

  await sendOtp(email, otp);

  // Return OTP in response for testing
  return SuccessResponse(
    res,
    "OTP generated successfully",
    { email, otp }, // include OTP for Postman
    statusCode.OK
  );
});

// Verify OTP
export const verifyOtp = asyncHandler(async (req, res) => {
  const { email, otp } = verifyOtpSchema.parse(req.body);

  const storedOtp = await prisma.otp.findFirst({
    where: { email, otp, expiresAt: { gt: new Date() } },
  });

  if (!storedOtp) {
    throw new ErrorResponse("Invalid or expired OTP", statusCode.Bad_Request);
  }

  // Delete OTP after successful verification
  await prisma.otp.delete({ where: { id: storedOtp.id } });

  // Optional: Create or fetch profile
  let profile = await prisma.profile.findUnique({ where: { email } });
  if (!profile) {
    profile = await prisma.profile.create({ data: { email } });
  }

  return SuccessResponse(
    res,
    "OTP verified successfully",
    {
      profile: {
        id: profile.id,
        name: profile.name,
        email: profile.email,
        phone: profile.phone,
      },
    },
    statusCode.OK
  );
});
