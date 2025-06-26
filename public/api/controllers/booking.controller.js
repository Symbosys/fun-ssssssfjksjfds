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
exports.deleteBooking = exports.getBookingById = exports.getALlBookings = exports.createBooking = void 0;
const config_1 = require("../../config");
const middlewares_1 = require("../middlewares");
const types_1 = require("../types/types");
const response_util_1 = require("../utils/response.util");
const validators_1 = require("../validators");
exports.createBooking = (0, middlewares_1.asyncHandler)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const validData = validators_1.bookingValidator.parse(req.body);
    // ✅ Check if model exists
    const model = yield config_1.prisma.model.findUnique({
        where: { id: Number(validData.modelId) },
    });
    console.log(model);
    if (!model) {
        return res.status(400).json({ success: false, message: "Invalid modelId: Model not found" });
    }
    const booking = yield config_1.prisma.booking.create({
        data: Object.assign(Object.assign({}, validData), { modelId: Number(validData.modelId) }),
    });
    return (0, response_util_1.SuccessResponse)(res, "Booking created successfully", booking, types_1.statusCode.Created);
}));
exports.getALlBookings = (0, middlewares_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const searchQuery = req.query.searchQuery || "";
    const modelId = Number(req.query.modelId) || undefined;
    const date = req.query.date || undefined;
    const skip = (page - 1) * limit;
    const where = {};
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
    if (date) {
        // Validate date format (YYYY-MM-DD)
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
        if (dateRegex.test(date)) {
            const parsedDate = new Date(`${date}T00:00:00.000Z`);
            if (!isNaN(parsedDate.getTime())) {
                const startDate = new Date(`${date}T00:00:00.000Z`);
                const endDate = new Date(`${date}T23:59:59.999Z`);
                where.createdAt = {
                    gte: startDate,
                    lte: endDate,
                };
            }
        }
    }
    const [booking, totalBooking] = yield Promise.all([
        config_1.prisma.booking.findMany({
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
        config_1.prisma.booking.count({ where })
    ]);
    return (0, response_util_1.SuccessResponse)(res, "Bookings retrieved successfully", {
        booking,
        currentPage: page,
        totalPages: Math.ceil(totalBooking / limit),
        totalBooking,
        count: booking.length,
    }, types_1.statusCode.OK);
}));
exports.getBookingById = (0, middlewares_1.asyncHandler)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const bookingId = Number(req.params.bookingId);
    if (!bookingId || isNaN(bookingId)) {
        return next(new response_util_1.ErrorResponse("Invalid booking id", types_1.statusCode.Bad_Request));
    }
    const booking = yield config_1.prisma.booking.findUnique({
        where: {
            id: bookingId,
        },
    });
    if (!booking) {
        return next(new response_util_1.ErrorResponse("Booking not found", types_1.statusCode.Not_Found));
    }
    return (0, response_util_1.SuccessResponse)(res, "Booking retrieved successfully", booking, types_1.statusCode.OK);
}));
exports.deleteBooking = (0, middlewares_1.asyncHandler)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const bookingId = Number(req.params.bookingId);
    if (!bookingId || isNaN(bookingId)) {
        return next(new response_util_1.ErrorResponse("Invalid booking id", types_1.statusCode.Bad_Request));
    }
    const booking = yield config_1.prisma.booking.findUnique({
        where: {
            id: bookingId,
        },
    });
    if (!booking) {
        return next(new response_util_1.ErrorResponse("Booking not found", types_1.statusCode.Not_Found));
    }
    yield config_1.prisma.booking.delete({
        where: {
            id: bookingId,
        },
    });
    return (0, response_util_1.SuccessResponse)(res, "Booking deleted successfully", null, types_1.statusCode.OK);
}));
