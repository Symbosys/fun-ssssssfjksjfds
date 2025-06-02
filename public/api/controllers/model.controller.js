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
exports.GetById = exports.getAllModels = exports.createModel = void 0;
const config_1 = require("../../config");
const cloudinary_1 = require("../../config/cloudinary");
const middlewares_1 = require("../middlewares");
const types_1 = require("../types/types");
const utils_1 = require("../utils");
const response_util_1 = require("../utils/response.util");
const model_validator_1 = require("../validators/model.validator");
exports.createModel = (0, middlewares_1.asyncHandler)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // Validate request body against modelCreateSchema
    const validData = model_validator_1.modelCreateSchema.parse(req.body);
    // Check for existing model by email or phone concurrently
    const [existingModelByEmail, existingModelByPhone] = yield Promise.all([
        validData.email
            ? config_1.prisma.model.findUnique({ where: { email: validData.email } })
            : null,
        validData.phone
            ? config_1.prisma.model.findUnique({ where: { phone: validData.phone } })
            : null,
    ]);
    // Return error if model with email or phone already exists
    if (existingModelByEmail) {
        return next(new utils_1.ErrorResponse('Model with this email already exists', types_1.statusCode.Bad_Request));
    }
    if (existingModelByPhone) {
        return next(new utils_1.ErrorResponse('Model with this phone already exists', types_1.statusCode.Bad_Request));
    }
    // Handle image uploads to Cloudinary
    let uploadedImages = [];
    if (req.files && Array.isArray(req.files) && req.files.length > 0) {
        // Validate file types and sizes (already handled by multerUpload, but adding explicit check for clarity)
        for (const file of req.files) {
            if (!file.mimetype.startsWith('image/')) {
                return next(new utils_1.ErrorResponse(`File ${file.originalname} is not a valid image (only JPEG, PNG, WEBP allowed)`, types_1.statusCode.Bad_Request));
            }
            if (file.size > 10 * 1024 * 1024) {
                return next(new utils_1.ErrorResponse(`File ${file.originalname} exceeds 10MB limit`, types_1.statusCode.Bad_Request));
            }
        }
        // Upload multiple images to Cloudinary
        uploadedImages = yield (0, cloudinary_1.uploadMultipleToCloudinary)(req.files.map((file) => file.buffer), 'model_images' // Fallback to 'model_images' if ENV.cloud_folder is not set
        );
    }
    // Create new model with nested services and images
    const newModel = yield config_1.prisma.model.create({
        data: {
            name: validData.name,
            age: validData.age,
            email: validData.email,
            phone: validData.phone,
            whatsapp: validData.whatsapp,
            address: validData.address,
            isActive: validData.isActive,
            service: validData.service,
            image: uploadedImages.length > 0
                ? {
                    create: uploadedImages.map((img) => ({
                        image: {
                            public_id: img.public_id,
                            secure_url: img.secure_url,
                        },
                    })),
                }
                : undefined,
        },
        include: {
            image: true,
        }
    });
    return (0, response_util_1.SuccessResponse)(res, 'Model created successfully', newModel, types_1.statusCode.Created);
}));
exports.getAllModels = (0, middlewares_1.asyncHandler)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const searchQuery = req.query.searchQuery || "";
    const isActive = req.query.isActive === "true" || req.query.isActive === "false"
        ? req.query.isActive === "true"
        : undefined;
    const skip = (page - 1) * limit;
    let models = [];
    let totalModel = 0;
    // Step 1: Try to fetch models based on search query and filters
    const where = {};
    if (searchQuery) {
        where.OR = [
            { name: { contains: searchQuery } }, // Case-insensitive search
            { email: { contains: searchQuery } },
            { phone: { contains: searchQuery } },
            { age: { contains: searchQuery } },
        ];
    }
    if (isActive !== undefined) {
        where.isActive = isActive;
    }
    // Fetch models based on the search query and filters
    [models, totalModel] = yield Promise.all([
        config_1.prisma.model.findMany({
            where,
            skip,
            take: limit,
            orderBy: { createdAt: "desc" },
            include: { image: true },
        }),
        config_1.prisma.model.count({ where }),
    ]);
    // Step 2: If no models are found or search query is provided but doesn't match, fetch random models
    if (models.length === 0) {
        // Fetch total count of all models (ignoring search query and isActive filter for random selection)
        const totalAvailableModels = yield config_1.prisma.model.count();
        if (totalAvailableModels > 0) {
            // Generate random skip value to fetch random models
            const randomSkip = Math.floor(Math.random() * totalAvailableModels);
            const adjustedSkip = Math.max(0, Math.min(randomSkip, totalAvailableModels - limit));
            // Fetch random models without the search query filter
            models = yield config_1.prisma.model.findMany({
                skip: adjustedSkip,
                take: limit,
                orderBy: { id: "asc" }, // Order by ID to ensure consistent randomization
                include: { image: true },
            });
            // Update totalModel to reflect all available models since we're returning random ones
            totalModel = totalAvailableModels;
        }
    }
    // Step 3: Shuffle the models array to ensure randomness in the response
    if (models.length > 0) {
        models = models.sort(() => Math.random() - 0.5); // Fisher-Yates shuffle alternative
    }
    return (0, response_util_1.SuccessResponse)(res, "Models fetched successfully", {
        models,
        currentPage: page,
        totalPages: Math.ceil(totalModel / limit),
        totalModel,
        count: models.length,
    }, types_1.statusCode.OK);
}));
exports.GetById = (0, middlewares_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    if (!id || isNaN(id))
        throw new utils_1.ErrorResponse("Invalid id", types_1.statusCode.Bad_Request);
    const models = yield config_1.prisma.model.findUnique({ where: { id }, include: {
            image: true,
        } });
    if (!models)
        throw new utils_1.ErrorResponse("Employee not found", types_1.statusCode.Not_Found);
    return (0, response_util_1.SuccessResponse)(res, "Employee fetched successfully", models, types_1.statusCode.OK);
}));
