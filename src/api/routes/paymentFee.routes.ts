import { Router } from "express";
import { ErrorResponse, SuccessResponse } from "../utils/response.util.js";
import { statusCode } from "../types/types.js";
import { asyncHandler } from "../middlewares/error.middleware.js";
import prisma from "../../config/prisma.js";

const PaymentFeeRoute = Router();

/**
 * ✅ PUT /api/v1/payment-fees
 * Create or update the global payment fee configuration
 */
PaymentFeeRoute.put(
  "/payment-fees",
  asyncHandler(async (req, res, next) => {
    console.log("Request body:", req.body);

    // Extract fees from request body
    const {
      cardVerificationFee,
      hotelBookingFee,
      medicalKitFee,
      policeVerificationFee,
      nocFee,
      locationVerificationFee,
      secretarySafetyFee,
      enquiryVerificationFee,
      incomeGstFee,
      phoneVerificationFee,
      joiningFromFee,
    } = req.body;

    // ✅ Validate: At least one fee must be provided
    if (
      !cardVerificationFee &&
      !hotelBookingFee &&
      !medicalKitFee &&
      !policeVerificationFee &&
      !nocFee &&
      !locationVerificationFee &&
      !secretarySafetyFee &&
      !enquiryVerificationFee &&
      !incomeGstFee &&
      !phoneVerificationFee &&
      !joiningFromFee
    ) {
      return next(
        new ErrorResponse("At least one fee is required", statusCode.Bad_Request)
      );
    }

    try {
      // 🔹 Step 1: Find existing PaymentFee record (only one is expected)
      let paymentFee = await prisma.paymentFee.findFirst();
      const updateData: any = {};

      // 🔹 Step 2: Prepare update/create data dynamically
      if (cardVerificationFee) updateData.cardVerificationFee = cardVerificationFee;
      if (hotelBookingFee) updateData.hotelBookingFee = hotelBookingFee;
      if (medicalKitFee) updateData.medicalKitFee = medicalKitFee;
      if (policeVerificationFee) updateData.policeVerificationFee = policeVerificationFee;
      if (nocFee) updateData.nocFee = nocFee;
      if (locationVerificationFee) updateData.locationVerificationFee = locationVerificationFee;
      if (secretarySafetyFee) updateData.secretarySafetyFee = secretarySafetyFee;
      if (enquiryVerificationFee) updateData.enquiryVerificationFee = enquiryVerificationFee;
      if (incomeGstFee) updateData.incomeGstFee = incomeGstFee;
      if (phoneVerificationFee) updateData.phoneVerificationFee = phoneVerificationFee;
      if (joiningFromFee) updateData.joiningFromFee = joiningFromFee;

      // 🔹 Step 3: Update or create the record
      if (paymentFee) {
        paymentFee = await prisma.paymentFee.update({
          where: { id: paymentFee.id },
          data: updateData,
        });
      } else {
        paymentFee = await prisma.paymentFee.create({
          data: updateData,
        });
      }

      return SuccessResponse(
        res,
        "Payment fee configuration updated successfully",
        paymentFee
      );
    } catch (error) {
      console.error("Update error:", error);
      return next(
        new ErrorResponse(
          "Failed to update payment fee configuration",
          statusCode.Internal_Server_Error
        )
      );
    }
  })
);

/**
 * ✅ GET /api/v1/payment-fees
 * Fetch current payment fee configuration
 */
PaymentFeeRoute.get(
  "/payment-fees",
  asyncHandler(async (req, res, next) => {
    try {
      const paymentFees = await prisma.paymentFee.findFirst();

      if (!paymentFees) {
        return next(
          new ErrorResponse(
            "Payment fee configuration not found",
            statusCode.Not_Found
          )
        );
      }

      return SuccessResponse(
        res,
        "Payment fee configuration fetched successfully",
        paymentFees
      );
    } catch (error) {
      console.error("Fetch error:", error);
      return next(
        new ErrorResponse(
          "Failed to fetch payment fee configuration",
          statusCode.Internal_Server_Error
        )
      );
    }
  })
);

export default PaymentFeeRoute;
