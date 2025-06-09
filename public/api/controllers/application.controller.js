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
exports.deleteApplicantsById = exports.getApplicantsById = exports.getApplications = exports.createApplication = void 0;
const config_1 = require("../../config");
const middlewares_1 = require("../middlewares");
const utils_1 = require("../utils");
const response_util_1 = require("../utils/response.util");
const application_validator_1 = require("../validators/application.validator");
exports.createApplication = (0, middlewares_1.asyncHandler)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const validData = application_validator_1.ApplicantsSchema.parse(req.body);
    if (Number(validData.age) < 18) {
        return next(new utils_1.ErrorResponse("Age must be greater than 18", 400));
    }
    const existingApplication = yield config_1.prisma.applicants.findFirst({
        where: {
            OR: [
                {
                    email: validData.email,
                },
                {
                    phone: validData.phone,
                },
            ],
        },
    });
    if (existingApplication) {
        return next(new utils_1.ErrorResponse("Application already exists with this phone or email ", 400));
    }
    const application = yield config_1.prisma.applicants.create({
        data: {
            name: validData.name,
            age: validData.age,
            gender: validData.gender,
            email: validData.email,
            phone: validData.phone,
            whatsapp: validData.whatsapp,
            address: validData.address,
        },
    });
    return (0, response_util_1.SuccessResponse)(res, "applied fo successfully", application);
}));
exports.getApplications = (0, middlewares_1.asyncHandler)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const searchQuery = req.query.searchQuery || "";
    const gender = req.query.gender;
    const skip = (page - 1) * limit;
    const where = {};
    if (searchQuery) {
        where.OR = [
            { name: { contains: searchQuery } },
            { email: { contains: searchQuery } },
            { phone: { contains: searchQuery } },
        ];
    }
    if (gender) {
        where.gender = gender;
    }
    const applications = yield config_1.prisma.applicants.findMany({
        where,
        skip,
        take: limit,
    });
    const totalApplications = yield config_1.prisma.applicants.count({ where });
    return (0, response_util_1.SuccessResponse)(res, "applications fetched successfully", {
        applications,
        currentPage: page,
        totalPages: Math.ceil(totalApplications / limit),
        totalApplications,
        count: applications.length,
    });
}));
exports.getApplicantsById = (0, middlewares_1.asyncHandler)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    if (!id || isNaN(id)) {
        return next(new utils_1.ErrorResponse("Invalid id or missing Id", 400));
    }
    const application = yield config_1.prisma.applicants.findUnique({
        where: {
            id,
        },
    });
    if (!application) {
        return next(new utils_1.ErrorResponse("Application not found", 404));
    }
    return (0, response_util_1.SuccessResponse)(res, "application fetched successfully", application);
}));
exports.deleteApplicantsById = (0, middlewares_1.asyncHandler)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    if (!id || isNaN(id)) {
        return next(new utils_1.ErrorResponse("Invalid id or missing Id", 400));
    }
    const application = yield config_1.prisma.applicants.findUnique({
        where: {
            id,
        },
    });
    if (!application) {
        return next(new utils_1.ErrorResponse("Application not found", 404));
    }
    yield config_1.prisma.applicants.delete({
        where: {
            id,
        },
    });
    return (0, response_util_1.SuccessResponse)(res, "application deleted successfully", null);
}));
