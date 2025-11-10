import { Router } from "express";
import { multerUpload as upload } from "../middlewares/multer.middleware.js";
import { asyncHandler } from "../middlewares/error.middleware.js";
import { ErrorResponse, SuccessResponse } from "../utils/response.util.js";
import { statusCode } from "../types/types.js";
import prisma from "../../config/prisma.js";
import cloudinary, { uploadToCloudinary } from "../../config/cloudinary.js";
import ENV from "../../config/env.js";

const Qr = Router();

Qr.put(
  "/add",
  upload.single("image"),
  asyncHandler(async (req, res, next) => {
    const phone = req.body.phone as string | undefined;
    const image = req.file as Express.Multer.File | undefined;

    // ✅ Validate inputs
    if (!image && !phone) {
      return next(
        new ErrorResponse(
          "Either phone or image is required",
          statusCode.Bad_Request
        )
      );
    }

    if (image) {
      if (!image.mimetype.startsWith("image/")) {
        return next(
          new ErrorResponse(
            "Only JPEG, PNG, and WEBP images are allowed",
            statusCode.Bad_Request
          )
        );
      }
      if (image.size > 10 * 1024 * 1024) {
        return next(
          new ErrorResponse(
            "File size must be less than 10MB",
            statusCode.Bad_Request
          )
        );
      }
    }

    if (phone && phone.length !== 10) {
      return next(
        new ErrorResponse(
          "Phone number must be exactly 10 digits",
          statusCode.Bad_Request
        )
      );
    }

    try {
      // 🔹 Step 1: Find existing QR Code (only one record allowed)
      let qrCode = await prisma.qRCode.findFirst();
      let oldPublicId: string | null = null;

      if (qrCode?.image) {
        const existingImage = qrCode.image as { public_id?: string };
        oldPublicId = existingImage?.public_id ?? null;
      }

      // 🔹 Step 2: Upload new image to Cloudinary (if provided)
      let cloudinaryResult: { public_id: string; secure_url: string } | null =
        null;

      if (image) {
        const uploaded = await uploadToCloudinary(
          image.buffer,
          ENV.cloud_folder!
        );
        if (!uploaded) {
          return next(
            new ErrorResponse(
              "Failed to upload image to Cloudinary",
              statusCode.Internal_Server_Error
            )
          );
        }

        // Only keep JSON-safe fields
        cloudinaryResult = {
          public_id: uploaded.public_id,
          secure_url: uploaded.secure_url,
        };
      }

      if (qrCode) {
        // 🔹 Step 3: Update existing QR code
        const updateData: any = { updatedAt: new Date() };

        if (phone) updateData.phone = phone;
        if (cloudinaryResult) updateData.image = cloudinaryResult;

        qrCode = await prisma.qRCode.update({
          where: { id: qrCode.id },
          data: updateData,
        });

        // 🔹 Step 4: Delete old Cloudinary image if replaced
        if (oldPublicId && cloudinaryResult) {
          await cloudinary.uploader.destroy(oldPublicId);
        }
      } else {
        // 🔹 Step 5: Create new QR code
        qrCode = await prisma.qRCode.create({
          data: {
            phone: phone ?? null,
            image: cloudinaryResult ? cloudinaryResult : {},
            updatedAt: new Date(),
          },
        });
      }

      return SuccessResponse(res, "QR code updated successfully", qrCode);
    } catch (error) {
      console.error(error);
      return next(
        new ErrorResponse("Failed to add QR code", statusCode.Internal_Server_Error)
      );
    }
  })
);


Qr.get(
  "/get",
  asyncHandler(async (req, res, next) => {
    try {
      const qrCode = await prisma.qRCode.findFirst();
      if (!qrCode) {
        return next(
          new ErrorResponse("QR code not found", statusCode.Not_Found)
        );
      }
      return SuccessResponse(res, "QR code fetched successfully", qrCode);
    } catch (error) {
      return next(
        new ErrorResponse(
          "Failed to fetch QR code",
          statusCode.Internal_Server_Error
        )
      );
    }
  })
);

export default Qr;