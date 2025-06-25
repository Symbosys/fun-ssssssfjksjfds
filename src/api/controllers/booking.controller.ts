import { prisma } from "../../config";
import { asyncHandler } from "../middlewares";
import { statusCode } from "../types/types";
import { sendEmail } from "../utils/mailer";
import { ErrorResponse, SuccessResponse } from "../utils/response.util";
import { bookingValidator } from "../validators";

export const createBooking = asyncHandler(async (req, res, next) => {
  const validData = bookingValidator.parse(req.body);

   // ✅ Check if model exists
   const model = await prisma.model.findUnique({
    where: { id: Number(validData.modelId) },
  });

  console.log(model)

  if (!model) {
    return res.status(400).json({ success: false, message: "Invalid modelId: Model not found" });
  }

  const booking = await prisma.booking.create({
    data: {
      ...validData,
      modelId: Number(validData.modelId),
    },
  });

  return SuccessResponse(
    res,
    "Booking created successfully",
    booking,
    statusCode.Created
  );
});

export const getALlBookings = asyncHandler(async (req, res) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const searchQuery = (req.query.searchQuery as string) || "";
  const modelId = Number(req.query.modelId) || undefined;
  const date = req.query.date ? new Date(req.query.date as string) : undefined;
  const skip = (page - 1) * limit;

  const where: any = {};

  if (searchQuery) {
    where.OR = [
      { name: { contains: searchQuery } },
      { email: { contains: searchQuery } },
      { phone: { contains: searchQuery } },
    ];
  }

  if (modelId) {
    where.modelId = modelId;
  }

  if (date && !isNaN(date.getTime())) {
    const startDate = new Date(`${date}T00:00:00.000Z`);
    const endDate = new Date(`${date}T23:59:59.999Z`);
    where.createdAt = {
      gte: startDate,
      lte: endDate,
    };
  }

  const [booking, totalBooking] = await Promise.all([
    prisma.booking.findMany({
      where,
      skip,
      take: limit,
      include: {
        model: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    }),
    prisma.booking.count({ where })
  ])

  return SuccessResponse(res, "Bookings retrieved successfully", {
    booking,
    currentPage: page,
    totalPages: Math.ceil(totalBooking / limit),
    totalBooking,
    count: booking.length,
  }, statusCode.OK);
});

export const getBookingById = asyncHandler(async (req, res, next) => {
  const bookingId = Number(req.params.bookingId);

  if(!bookingId || isNaN(bookingId)) {
    return next(new ErrorResponse("Invalid booking id", statusCode.Bad_Request))
  }

  const booking = await prisma.booking.findUnique({
    where: {
      id: bookingId,
    },
  });

  if(!booking) {
    return next(new ErrorResponse("Booking not found", statusCode.Not_Found))
  }

  return SuccessResponse(res, "Booking retrieved successfully", booking, statusCode.OK);
});

export const deleteBooking = asyncHandler(async (req, res, next) => {
  const bookingId = Number(req.params.bookingId);

  if(!bookingId || isNaN(bookingId)) {
    return next(new ErrorResponse("Invalid booking id", statusCode.Bad_Request))
  }

  const booking = await prisma.booking.findUnique({
    where: {
      id: bookingId,
    },
  });

  if(!booking) {
    return next(new ErrorResponse("Booking not found", statusCode.Not_Found))
  }

  await prisma.booking.delete({
    where: {
      id: bookingId,
    },
  })

  return SuccessResponse(res, "Booking deleted successfully", null, statusCode.OK);
});
