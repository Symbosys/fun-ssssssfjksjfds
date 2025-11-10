import { Router } from "express";
import { ErrorResponse, SuccessResponse } from "../utils/response.util.js";
import { statusCode } from "../types/types.js";
import { asyncHandler } from "../middlewares/error.middleware.js";
import prisma from "../../config/prisma.js";
const ContactRoute = Router();

/**
 * ✅ PUT /api/v1/contact
 * Create or update the contact information
 */
ContactRoute.put(
  "/contact",
  asyncHandler(async (req, res, next) => {
    console.log("Incoming Contact Update:", req.body);

    const { email, phone, whatsapp } = req.body;

    // ✅ Validate: at least one field must be provided
    if (!email && !phone && !whatsapp) {
      return next(
        new ErrorResponse(
          "At least one contact field (email, phone, or whatsapp) is required",
          statusCode.Bad_Request
        )
      );
    }

    try {
      // 🔹 Step 1: Check if contact info already exists
      let contact = await prisma.contact.findFirst();
      const updateData: any = {};

      // 🔹 Step 2: Prepare data dynamically
      if (email) updateData.email = email;
      if (phone) updateData.phone = phone;
      if (whatsapp) updateData.whatsapp = whatsapp;

      // 🔹 Step 3: Update or create record
      if (contact) {
        contact = await prisma.contact.update({
          where: { id: contact.id },
          data: updateData,
        });
      } else {
        contact = await prisma.contact.create({
          data: updateData,
        });
      }

      return SuccessResponse(
        res,
        "Contact information updated successfully",
        contact
      );
    } catch (error) {
      console.error("Contact update error:", error);
      return next(
        new ErrorResponse(
          "Failed to update contact information",
          statusCode.Internal_Server_Error
        )
      );
    }
  })
);

/**
 * ✅ GET /api/v1/contact
 * Fetch current contact information
 */
ContactRoute.get(
  "/contact",
  asyncHandler(async (req, res, next) => {
    try {
      const contact = await prisma.contact.findFirst();

      if (!contact) {
        return next(
          new ErrorResponse(
            "Contact information not found",
            statusCode.Not_Found
          )
        );
      }

      return SuccessResponse(
        res,
        "Contact information fetched successfully",
        contact
      );
    } catch (error) {
      console.error("Fetch contact error:", error);
      return next(
        new ErrorResponse(
          "Failed to fetch contact information",
          statusCode.Internal_Server_Error
        )
      );
    }
  })
);

export default ContactRoute;
