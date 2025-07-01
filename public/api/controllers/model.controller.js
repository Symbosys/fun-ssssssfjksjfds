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
exports.updateContactDetails = exports.updateAllModelsContact = exports.updateModel = exports.deleteModel = exports.GetById = exports.getAllModels = exports.createModel = void 0;
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
            height: validData.height,
            weight: validData.weight,
            price: validData.price,
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
        throw new utils_1.ErrorResponse("model not found", types_1.statusCode.Not_Found);
    return (0, response_util_1.SuccessResponse)(res, "model fetched successfully", models, types_1.statusCode.OK);
}));
exports.deleteModel = (0, middlewares_1.asyncHandler)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    if (!id || isNaN(id))
        throw new utils_1.ErrorResponse("Invalid id", types_1.statusCode.Bad_Request);
    // Fetch the model with associated images
    const model = yield config_1.prisma.model.findUnique({
        where: { id },
        include: { image: true },
    });
    if (!model) {
        return next(new utils_1.ErrorResponse('Model not found', types_1.statusCode.Not_Found));
    }
    // Delete images from Cloudinary if they exist
    if (model.image && model.image.length > 0) {
        const publicIds = [];
        // Safely extract public_ids
        for (const img of model.image) {
            try {
                // Ensure img.image is an object with public_id
                if (img.image && typeof img.image === 'object' && 'public_id' in img.image) {
                    const publicId = img.image.public_id;
                    if (typeof publicId === 'string') {
                        publicIds.push(publicId);
                    }
                }
            }
            catch (error) {
                console.error('Error processing image:', img, error);
            }
        }
        // If we have public_ids, delete them from Cloudinary
        if (publicIds.length > 0) {
            try {
                yield Promise.all(publicIds.map((publicId) => (0, cloudinary_1.deleteFromCloudinary)(publicId)));
            }
            catch (error) {
                return next(new utils_1.ErrorResponse('Failed to delete images from Cloudinary', types_1.statusCode.Internal_Server_Error));
            }
        }
    }
    // Delete the model
    yield config_1.prisma.model.delete({
        where: { id },
    });
    return (0, response_util_1.SuccessResponse)(res, 'Model deleted successfully', null, types_1.statusCode.OK);
}));
exports.updateModel = (0, middlewares_1.asyncHandler)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    if (!id || isNaN(id)) {
        throw new utils_1.ErrorResponse("Invalid id", types_1.statusCode.Bad_Request);
    }
    // Validate request body against modelCreateSchema
    const validData = model_validator_1.modelCreateSchema.partial().parse(req.body);
    // Fetch the existing model
    const existingModel = yield config_1.prisma.model.findUnique({
        where: { id },
        include: { image: true },
    });
    if (!existingModel) {
        return next(new utils_1.ErrorResponse('Model not found', types_1.statusCode.Not_Found));
    }
    // Check for email/phone conflicts with other models
    const [existingModelByEmail, existingModelByPhone] = yield Promise.all([
        validData.email
            ? config_1.prisma.model.findFirst({
                where: { email: validData.email, id: { not: id } },
            })
            : null,
        validData.phone
            ? config_1.prisma.model.findFirst({
                where: { phone: validData.phone, id: { not: id } },
            })
            : null,
    ]);
    if (existingModelByEmail) {
        return next(new utils_1.ErrorResponse('Model with this email already exists', types_1.statusCode.Bad_Request));
    }
    if (existingModelByPhone) {
        return next(new utils_1.ErrorResponse('Model with this phone already exists', types_1.statusCode.Bad_Request));
    }
    // Handle image updates
    let uploadedImages = [];
    let imagesToDelete = [];
    if (req.files && Array.isArray(req.files) && req.files.length > 0) {
        // Validate file types and sizes
        for (const file of req.files) {
            if (!file.mimetype.startsWith('image/')) {
                return next(new utils_1.ErrorResponse(`File ${file.originalname} is not a valid image (only JPEG, PNG, WEBP allowed)`, types_1.statusCode.Bad_Request));
            }
            if (file.size > 5 * 1024 * 1024) {
                return next(new utils_1.ErrorResponse(`File ${file.originalname} exceeds 5MB limit`, types_1.statusCode.Bad_Request));
            }
        }
        // Collect public_ids of existing images to delete
        if (existingModel.image && existingModel.image.length > 0) {
            for (const img of existingModel.image) {
                try {
                    if (img.image && typeof img.image === 'object' && 'public_id' in img.image) {
                        const publicId = img.image.public_id;
                        if (typeof publicId === 'string') {
                            imagesToDelete.push(publicId);
                        }
                    }
                }
                catch (error) {
                    console.error('Error processing image for deletion:', img, error);
                }
            }
        }
        // Upload new images to Cloudinary
        uploadedImages = yield (0, cloudinary_1.uploadMultipleToCloudinary)(req.files.map((file) => file.buffer), 'model_images');
        // Delete old images from Cloudinary
        if (imagesToDelete.length > 0) {
            try {
                yield Promise.all(imagesToDelete.map((publicId) => (0, cloudinary_1.deleteFromCloudinary)(publicId)));
            }
            catch (error) {
                return next(new utils_1.ErrorResponse('Failed to delete old images from Cloudinary', types_1.statusCode.Internal_Server_Error));
            }
        }
    }
    // Update the model
    const updatedModel = yield config_1.prisma.model.update({
        where: { id },
        data: Object.assign({ name: validData.name, age: validData.age, email: validData.email, phone: validData.phone, whatsapp: validData.whatsapp, address: validData.address, isActive: validData.isActive, service: validData.service, height: validData.height, weight: validData.weight, price: validData.price }, (uploadedImages.length > 0 && {
            image: {
                deleteMany: {}, // Delete all existing images
                create: uploadedImages.map((img) => ({
                    image: {
                        public_id: img.public_id,
                        secure_url: img.secure_url,
                    },
                })),
            },
        })),
        include: {
            image: true,
        },
    });
    return (0, response_util_1.SuccessResponse)(res, 'Model updated successfully', updatedModel, types_1.statusCode.OK);
}));
exports.updateAllModelsContact = (0, middlewares_1.asyncHandler)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // Validate that at least one field is provided
    const { email, phone, whatsapp } = req.body;
    if (email === undefined && phone === undefined && whatsapp === undefined) {
        return next(new utils_1.ErrorResponse("At least one of email, phone, or whatsapp must be provided", types_1.statusCode.Bad_Request));
    }
    // Check for email/phone conflicts with existing models
    const [existingModelByEmail, existingModelByPhone] = yield Promise.all([
        email !== undefined
            ? config_1.prisma.model.findFirst({
                where: { email },
            })
            : null,
        phone !== undefined
            ? config_1.prisma.model.findFirst({
                where: { phone },
            })
            : null,
    ]);
    if (existingModelByEmail && email !== null) {
        return next(new utils_1.ErrorResponse("The provided email is already in use", types_1.statusCode.Bad_Request));
    }
    if (existingModelByPhone && phone !== null) {
        return next(new utils_1.ErrorResponse("The provided phone is already in use", types_1.statusCode.Bad_Request));
    }
    // Prepare update data, only include provided fields
    const updateData = {};
    if (email !== undefined)
        updateData.email = email || null; // Allow explicit null to clear email
    if (phone !== undefined)
        updateData.phone = phone || null; // Allow explicit null to clear phone
    if (whatsapp !== undefined)
        updateData.whatsapp = whatsapp || null; // Allow explicit null to clear whatsapp
    // Count total models before updating
    const totalModels = yield config_1.prisma.model.count();
    if (totalModels === 0) {
        return next(new utils_1.ErrorResponse("No models found to update", types_1.statusCode.Not_Found));
    }
    // Update all models
    yield config_1.prisma.model.updateMany({
        data: updateData,
    });
    return (0, response_util_1.SuccessResponse)(res, `Contact details updated successfully for ${totalModels} model(s)`, {
        count: totalModels
    }, types_1.statusCode.OK);
}));
exports.updateContactDetails = (0, middlewares_1.asyncHandler)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, phone, whatsapp, registrationFee } = req.body;
    // Validate that at least one field is provided
    if (email === undefined && phone === undefined && whatsapp === undefined && registrationFee === undefined) {
        return next(new utils_1.ErrorResponse('At least one of email, phone, whatsapp, or registrationFee must be provided', types_1.statusCode.Bad_Request));
    }
    // Prepare update/create data, only include provided fields
    const updateData = {};
    if (email !== undefined)
        updateData.email = email || null;
    if (phone !== undefined)
        updateData.phone = phone || null;
    if (whatsapp !== undefined)
        updateData.whatsapp = whatsapp || null;
    if (registrationFee !== undefined)
        updateData.registrationFee = registrationFee || null;
    // Check for email/phone conflicts with existing contacts
    const [existingContactByEmail, existingContactByPhone] = yield Promise.all([
        email !== undefined
            ? config_1.prisma.contact.findFirst({
                where: { email },
            })
            : null,
        phone !== undefined
            ? config_1.prisma.contact.findFirst({
                where: { phone },
            })
            : null,
    ]);
    if (existingContactByEmail && email !== null) {
        return next(new utils_1.ErrorResponse('The provided email is already in use', types_1.statusCode.Bad_Request));
    }
    if (existingContactByPhone && phone !== null) {
        return next(new utils_1.ErrorResponse('The provided phone is already in use', types_1.statusCode.Bad_Request));
    }
    // Check if a contact exists
    const existingContact = yield config_1.prisma.contact.findFirst();
    if (!existingContact) {
        // Create new contact
        const newContact = yield config_1.prisma.contact.create({
            data: updateData,
        });
        return (0, response_util_1.SuccessResponse)(res, 'Contact created successfully', { contact: newContact }, types_1.statusCode.Created);
    }
    // Update existing contact
    const updatedContact = yield config_1.prisma.contact.update({
        where: { id: existingContact.id },
        data: updateData,
    });
    return (0, response_util_1.SuccessResponse)(res, 'Contact details updated successfully', { contact: updatedContact }, types_1.statusCode.OK);
}));
