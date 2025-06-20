"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHotelsByLocation = exports.deleteHotelById = exports.getHotelById = exports.getAllHotels = exports.createHotel = void 0;
const config_1 = require("../../config");
const middlewares_1 = require("../middlewares");
const types_1 = require("../types/types");
const utils_1 = require("../utils");
const response_util_1 = require("../utils/response.util");
const hotel_validator_1 = require("../validators/hotel.validator");
exports.createHotel = (0, middlewares_1.asyncHandler)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // Validate request body against hotelCreateSchema
    const validData = hotel_validator_1.hotelCreateSchema.parse(req.body);
    // Create new hotel
    const newHotel = yield config_1.prisma.hotels.create({
        data: validData
    });
    return (0, response_util_1.SuccessResponse)(res, "Hotel created successfully", newHotel, types_1.statusCode.Created);
}));
exports.getAllHotels = (0, middlewares_1.asyncHandler)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const searchQuery = req.query.searchQuery || "";
    const isActive = req.query.isActive === "true" || req.query.isActive === "false"
        ? req.query.isActive === "true"
        : undefined;
    const skip = (page - 1) * limit;
    const where = {};
    if (searchQuery) {
        where.OR = [
            { name: { contains: searchQuery } },
            { location: { contains: searchQuery } },
            { city: { contains: searchQuery } },
            { state: { contains: searchQuery } },
            { country: { contains: searchQuery } },
        ];
    }
    if (isActive !== undefined) {
        where.isActive = isActive;
    }
    const [hotels, totalHotels] = yield Promise.all([
        config_1.prisma.hotels.findMany({
            where,
            skip,
            take: limit,
            orderBy: { createdAt: "desc" },
        }),
        config_1.prisma.hotels.count({
            where,
        }),
    ]);
    return (0, response_util_1.SuccessResponse)(res, "Hotels fetched successfully", {
        hotels,
        currentPage: page,
        totalPages: Math.ceil(totalHotels / limit),
        totalHotels,
        count: hotels.length
    }, types_1.statusCode.OK);
}));
exports.getHotelById = (0, middlewares_1.asyncHandler)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // Validate and parse ID parameter
    const id = Number(req.params.id);
    if (isNaN(id) || !id)
        return next(new utils_1.ErrorResponse("Invalid ID", types_1.statusCode.Bad_Request));
    // Find hotel by ID
    const hotel = yield config_1.prisma.hotels.findUnique({
        where: { id },
    });
    // Check if hotel exists
    if (!hotel)
        return next(new utils_1.ErrorResponse("Hotel not found", types_1.statusCode.Not_Found));
    return (0, response_util_1.SuccessResponse)(res, "Hotel fetched successfully", hotel, types_1.statusCode.OK);
}));
exports.deleteHotelById = (0, middlewares_1.asyncHandler)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // Validate and parse ID parameter
    const id = Number(req.params.id);
    if (isNaN(id) || !id)
        return next(new utils_1.ErrorResponse("Invalid ID", types_1.statusCode.Bad_Request));
    // Delete hotel and check if successful
    const deletedHotel = yield config_1.prisma.hotels.delete({
        where: { id },
    });
    if (!deletedHotel)
        return next(new utils_1.ErrorResponse("Hotel not found", types_1.statusCode.Not_Found));
    return (0, response_util_1.SuccessResponse)(res, "Hotel deleted Successfully");
}));
exports.getHotelsByLocation = (0, middlewares_1.asyncHandler)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    // Extract location fields from query parameters
    const { locality, sublocality, administrative_area_level_3, neighborhood, } = req.query;
    // Validate that at least one location field is provided
    if (!locality &&
        !sublocality &&
        !administrative_area_level_3 &&
        !neighborhood) {
        return next(new utils_1.ErrorResponse("At least one location field is required", types_1.statusCode.Bad_Request));
    }
    const skip = (page - 1) * limit;
    const where = {
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
    locationFields.forEach((field) => {
        where.OR.push({ location: { contains: field } }, { city: { contains: field } }, { state: { contains: field } });
    });
    // If no location fields were provided, remove the OR condition
    if (where.OR.length === 0) {
        delete where.OR;
    }
    const [hotels, totalHotels] = yield Promise.all([
        config_1.prisma.hotels.findMany({
            where,
            skip,
            take: limit,
            orderBy: { createdAt: "desc" },
        }),
        config_1.prisma.hotels.count({
            where,
        }),
    ]);
    return (0, response_util_1.SuccessResponse)(res, "Hotels fetched successfully", {
        hotels,
        currentPage: page,
        totalPages: Math.ceil(totalHotels / limit),
        totalHotels,
        count: hotels.length,
    }, types_1.statusCode.OK);
}));
