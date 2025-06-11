import { prisma } from "../../config";
import { asyncHandler } from "../middlewares";
import { statusCode } from "../types/types";
import { ErrorResponse } from "../utils";
import { SuccessResponse } from "../utils/response.util";
import { hotelCreateSchema } from "../validators/hotel.validator";

export const createHotel = asyncHandler(async (req, res, next) => {
  // Validate request body against hotelCreateSchema
  const validData = hotelCreateSchema.parse(req.body);

  // Create new hotel
    const newHotel = await prisma.hotels.create({
        data: validData
    });

  return SuccessResponse(
    res,
    "Hotel created successfully",
    newHotel,
    statusCode.Created
  );
});

export const getAllHotels = asyncHandler(async (req, res, next) => {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const searchQuery = req.query.searchQuery || "";
    const isActive =
      req.query.isActive === "true" || req.query.isActive === "false"
        ? req.query.isActive === "true"
            : undefined;
    
    const skip = (page - 1) * limit;
    const where: any = {};

    if(searchQuery) {
        where.OR = [
            { name: { contains: searchQuery } },
            { location: { contains: searchQuery } },
            { city: { contains: searchQuery } },
            { state: { contains: searchQuery } },
            { country: { contains: searchQuery } },
        ];
    }

    if(isActive !== undefined) {
        where.isActive = isActive;
    }

    const [hotels, totalHotels] = await Promise.all([
        prisma.hotels.findMany({
            where,
            skip,
            take: limit,
            orderBy: { createdAt: "desc" },
        }),
        prisma.hotels.count({
            where,
        }),
    ])

    return SuccessResponse(
        res,
        "Hotels fetched successfully",
        {
            hotels,
            currentPage: page,
            totalPages: Math.ceil(totalHotels / limit),
            totalHotels,
            count: hotels.length
        },
        statusCode.OK
    );
});

export const getHotelById = asyncHandler(async (req, res, next) => {
  // Validate and parse ID parameter
  const id = Number(req.params.id);
  if (isNaN(id) || !id)
    return next(new ErrorResponse("Invalid ID", statusCode.Bad_Request));

  // Find hotel by ID
  const hotel = await prisma.hotels.findUnique({
    where: { id },
  });

  // Check if hotel exists
  if (!hotel)
    return next(new ErrorResponse("Hotel not found", statusCode.Not_Found));

  return SuccessResponse(
    res,
    "Hotel fetched successfully",
    hotel,
    statusCode.OK
  );
});

export const deleteHotelById = asyncHandler(async (req, res, next) => {
  // Validate and parse ID parameter
  const id = Number(req.params.id);
  if (isNaN(id) || !id)
    return next(new ErrorResponse("Invalid ID", statusCode.Bad_Request));

  // Delete hotel and check if successful
  const deletedHotel = await prisma.hotels.delete({
    where: { id },
  });
  if (!deletedHotel)
    return next(new ErrorResponse("Hotel not found", statusCode.Not_Found));
  return SuccessResponse(res, "Hotel deleted Successfully");
});


export const getHotelsByLocation = asyncHandler(async (req, res, next) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;

  // Extract location fields from query parameters
  const {
    locality,
    sublocality,
    administrative_area_level_3,
    neighborhood,
  } = req.query;

  // Validate that at least one location field is provided
  if (
    !locality &&
    !sublocality &&
    !administrative_area_level_3 &&
    !neighborhood
  ) {
    return next(
      new ErrorResponse(
        "At least one location field is required",
        statusCode.Bad_Request
      )
    );
  }

  const skip = (page - 1) * limit;
  const where: any = {
    isActive: true, // Only fetch active hotels
    OR: [],
  };

  // Build the OR conditions for matching location fields
  const locationFields = [
    locality,
    sublocality,
    administrative_area_level_3,
    neighborhood,
  ].filter(Boolean); // Filter out undefined/null/empty values

  locationFields.forEach((field: any) => {
    where.OR.push(
      { location: { contains: field} },
      { city: { contains: field} },
      { state: { contains: field} },
    );
  });

  // If no location fields were provided, remove the OR condition
  if (where.OR.length === 0) {
    delete where.OR;
  }

  const [hotels, totalHotels] = await Promise.all([
    prisma.hotels.findMany({
      where,
      skip,
      take: limit,
      orderBy: { createdAt: "desc" },
    }),
    prisma.hotels.count({
      where,
    }),
  ]);

  return SuccessResponse(
    res,
    "Hotels fetched successfully",
    {
      hotels,
      currentPage: page,
      totalPages: Math.ceil(totalHotels / limit),
      totalHotels,
      count: hotels.length,
    },
    statusCode.OK
  );

});