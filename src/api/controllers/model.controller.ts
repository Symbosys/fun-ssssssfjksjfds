import { prisma } from "../../config";
import { deleteFromCloudinary, uploadMultipleToCloudinary } from "../../config/cloudinary";
import { asyncHandler } from "../middlewares";
import { statusCode } from "../types/types";
import { ErrorResponse } from "../utils";
import { SuccessResponse } from "../utils/response.util";
import { modelCreateSchema } from "../validators/model.validator";

interface CloudinaryUploadResult {
    public_id: string;
    secure_url: string;
  }

export const createModel = asyncHandler(async (req, res, next) => {
    // Validate request body against modelCreateSchema
    const validData = modelCreateSchema.parse(req.body);
  
    // Check for existing model by email or phone concurrently
    const [existingModelByEmail, existingModelByPhone] = await Promise.all([
      validData.email
        ? prisma.model.findUnique({ where: { email: validData.email } })
        : null,
      validData.phone
        ? prisma.model.findUnique({ where: { phone: validData.phone } })
        : null,
    ]);
  
    // Return error if model with email or phone already exists
    if (existingModelByEmail) {
      return next(
        new ErrorResponse('Model with this email already exists', statusCode.Bad_Request)
      );
    }
    if (existingModelByPhone) {
      return next(
        new ErrorResponse('Model with this phone already exists', statusCode.Bad_Request)
      );
    }
  
    // Handle image uploads to Cloudinary
    let uploadedImages: CloudinaryUploadResult[] = [];
    if (req.files && Array.isArray(req.files) && req.files.length > 0) {
        // Validate file types and sizes (already handled by multerUpload, but adding explicit check for clarity)
        for (const file of req.files) {
          if (!file.mimetype.startsWith('image/')) {
            return next(
              new ErrorResponse(
                `File ${file.originalname} is not a valid image (only JPEG, PNG, WEBP allowed)`,
                statusCode.Bad_Request
              )
            );
          }
          if (file.size > 10 * 1024 * 1024) {
            return next(
              new ErrorResponse(
                `File ${file.originalname} exceeds 10MB limit`,
                statusCode.Bad_Request
              )
            );
          }
        }
  
        // Upload multiple images to Cloudinary
        uploadedImages = await uploadMultipleToCloudinary(
          req.files.map((file) => file.buffer),
          'model_images' // Fallback to 'model_images' if ENV.cloud_folder is not set
        );
    }
  
    // Create new model with nested services and images
    const newModel = await prisma.model.create({
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
  
    return SuccessResponse(
      res,
      'Model created successfully',
      newModel,
      statusCode.Created
    );
});
  

export const getAllModels = asyncHandler(async (req, res, next) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const searchQuery = req.query.searchQuery || "";
  const isActive =
    req.query.isActive === "true" || req.query.isActive === "false"
      ? req.query.isActive === "true"
      : undefined;

  const skip = (page - 1) * limit;
  let models = [];
  let totalModel = 0;

  // Step 1: Try to fetch models based on search query and filters
  const where: any = {};
  if (searchQuery) {
      where.OR = [
          { name: { contains: searchQuery} }, // Case-insensitive search
          { email: { contains: searchQuery } },
          { phone: { contains: searchQuery } },
          { age: { contains: searchQuery} },
      ];
  }

  if (isActive !== undefined) {
      where.isActive = isActive;
  }

  // Fetch models based on the search query and filters
  [models, totalModel] = await Promise.all([
      prisma.model.findMany({
          where,
          skip,
          take: limit,
          orderBy: { createdAt: "desc" },
          include: { image: true },
      }),
      prisma.model.count({ where }),
  ]);

  // Step 2: If no models are found or search query is provided but doesn't match, fetch random models
  if (models.length === 0) {
      // Fetch total count of all models (ignoring search query and isActive filter for random selection)
      const totalAvailableModels = await prisma.model.count();

      if (totalAvailableModels > 0) {
          // Generate random skip value to fetch random models
          const randomSkip = Math.floor(Math.random() * totalAvailableModels);
          const adjustedSkip = Math.max(0, Math.min(randomSkip, totalAvailableModels - limit));

          // Fetch random models without the search query filter
          models = await prisma.model.findMany({
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

  return SuccessResponse(res, "Models fetched successfully", {
      models,
      currentPage: page,
      totalPages: Math.ceil(totalModel / limit),
      totalModel,
      count: models.length,
  }, statusCode.OK);
});

export const GetById = asyncHandler(
    async (req, res) => {
      const id = Number(req.params.id);
      if (!id || isNaN(id))
        throw new ErrorResponse("Invalid id", statusCode.Bad_Request);
      const models = await prisma.model.findUnique({where: {id}, include: {
        image: true,
      }});
      if (!models)
        throw new ErrorResponse("model not found", statusCode.Not_Found);
      return SuccessResponse(
        res,
        "model fetched successfully",
        models,
        statusCode.OK
      );
    }
);
  

export const deleteModel = asyncHandler(async (req, res, next) => {
  const id = Number(req.params.id);
  if (!id || isNaN(id))
    throw new ErrorResponse("Invalid id", statusCode.Bad_Request)

  // Fetch the model with associated images
  const model = await prisma.model.findUnique({
    where: { id },
    include: { image: true },
  });

  if (!model) {
    return next(new ErrorResponse('Model not found', statusCode.Not_Found));
  }

  // Delete images from Cloudinary if they exist
  if (model.image && model.image.length > 0) {
    const publicIds: string[] = [];
    
    // Safely extract public_ids
    for (const img of model.image) {
      try {
        // Ensure img.image is an object with public_id
        if (img.image && typeof img.image === 'object' && 'public_id' in img.image) {
          const publicId = (img.image as { public_id: string }).public_id;
          if (typeof publicId === 'string') {
            publicIds.push(publicId);
          }
        }
      } catch (error) {
        console.error('Error processing image:', img, error);
      }
    }

    // If we have public_ids, delete them from Cloudinary
    if (publicIds.length > 0) {
      try {
        await Promise.all(
          publicIds.map((publicId) => deleteFromCloudinary(publicId))
        );
      } catch (error) {
        return next(
          new ErrorResponse(
            'Failed to delete images from Cloudinary',
            statusCode.Internal_Server_Error
          )
        );
      }
    }
  }

  // Delete the model
  await prisma.model.delete({
    where: { id },
  });

  return SuccessResponse(res, 'Model deleted successfully', null, statusCode.OK);
});


export const updateModel = asyncHandler(async (req, res, next) => {
  const id = Number(req.params.id);
  if (!id || isNaN(id)) {
    throw new ErrorResponse("Invalid id", statusCode.Bad_Request);
  }

  // Validate request body against modelCreateSchema
  const validData = modelCreateSchema.partial().parse(req.body);

  // Fetch the existing model
  const existingModel = await prisma.model.findUnique({
    where: { id },
    include: { image: true },
  });

  if (!existingModel) {
    return next(new ErrorResponse('Model not found', statusCode.Not_Found));
  }

  // Check for email/phone conflicts with other models
  const [existingModelByEmail, existingModelByPhone] = await Promise.all([
    validData.email
      ? prisma.model.findFirst({
          where: { email: validData.email, id: { not: id } },
        })
      : null,
    validData.phone
      ? prisma.model.findFirst({
          where: { phone: validData.phone, id: { not: id } },
        })
      : null,
  ]);

  if (existingModelByEmail) {
    return next(
      new ErrorResponse('Model with this email already exists', statusCode.Bad_Request)
    );
  }
  if (existingModelByPhone) {
    return next(
      new ErrorResponse('Model with this phone already exists', statusCode.Bad_Request)
    );
  }

  // Handle image updates
  let uploadedImages: CloudinaryUploadResult[] = [];
  let imagesToDelete: string[] = [];

  if (req.files && Array.isArray(req.files) && req.files.length > 0) {
    // Validate file types and sizes
    for (const file of req.files) {
      if (!file.mimetype.startsWith('image/')) {
        return next(
          new ErrorResponse(
            `File ${file.originalname} is not a valid image (only JPEG, PNG, WEBP allowed)`,
            statusCode.Bad_Request
          )
        );
      }
      if (file.size > 5 * 1024 * 1024) {
        return next(
          new ErrorResponse(
            `File ${file.originalname} exceeds 5MB limit`,
            statusCode.Bad_Request
          )
        );
      }
    }

    // Collect public_ids of existing images to delete
    if (existingModel.image && existingModel.image.length > 0) {
      for (const img of existingModel.image) {
        try {
          if (img.image && typeof img.image === 'object' && 'public_id' in img.image) {
            const publicId = (img.image as { public_id: string }).public_id;
            if (typeof publicId === 'string') {
              imagesToDelete.push(publicId);
            }
          }
        } catch (error) {
          console.error('Error processing image for deletion:', img, error);
        }
      }
    }

    // Upload new images to Cloudinary
    uploadedImages = await uploadMultipleToCloudinary(
      req.files.map((file) => file.buffer),
      'model_images'
    );

    // Delete old images from Cloudinary
    if (imagesToDelete.length > 0) {
      try {
        await Promise.all(
          imagesToDelete.map((publicId) => deleteFromCloudinary(publicId))
        );
      } catch (error) {
        return next(
          new ErrorResponse(
            'Failed to delete old images from Cloudinary',
            statusCode.Internal_Server_Error
          )
        );
      }
    }
  }

  // Update the model
  const updatedModel = await prisma.model.update({
    where: { id },
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
      // If new images were uploaded, delete old images and create new ones
      ...(uploadedImages.length > 0 && {
        image: {
          deleteMany: {}, // Delete all existing images
          create: uploadedImages.map((img) => ({
            image: {
              public_id: img.public_id,
              secure_url: img.secure_url,
            },
          })),
        },
      }),
    },
    include: {
      image: true,
    },
  });

  return SuccessResponse(
    res,
    'Model updated successfully',
    updatedModel,
    statusCode.OK
  );
});


export const updateAllModelsContact = asyncHandler(async (req, res, next) => {
  // Validate that at least one field is provided
  const { email, phone, whatsapp } = req.body;
  if (email === undefined && phone === undefined && whatsapp === undefined) {
    return next(
      new ErrorResponse(
        "At least one of email, phone, or whatsapp must be provided",
        statusCode.Bad_Request
      )
    );
  }

  // Check for email/phone conflicts with existing models
  const [existingModelByEmail, existingModelByPhone] = await Promise.all([
    email !== undefined
      ? prisma.model.findFirst({
          where: { email },
        })
      : null,
    phone !== undefined
      ? prisma.model.findFirst({
          where: { phone },
        })
      : null,
  ]);

  if (existingModelByEmail && email !== null) {
    return next(
      new ErrorResponse(
        "The provided email is already in use",
        statusCode.Bad_Request
      )
    );
  }
  if (existingModelByPhone && phone !== null) {
    return next(
      new ErrorResponse(
        "The provided phone is already in use",
        statusCode.Bad_Request
      )
    );
  }

  // Prepare update data, only include provided fields
  const updateData: any = {};
  if (email !== undefined) updateData.email = email || null; // Allow explicit null to clear email
  if (phone !== undefined) updateData.phone = phone || null; // Allow explicit null to clear phone
  if (whatsapp !== undefined) updateData.whatsapp = whatsapp || null; // Allow explicit null to clear whatsapp

  // Count total models before updating
  const totalModels = await prisma.model.count();

  if (totalModels === 0) {
    return next(
      new ErrorResponse(
        "No models found to update",
        statusCode.Not_Found
      )
    );
  }

  // Update all models
  await prisma.model.updateMany({
    data: updateData,
  });


  return SuccessResponse(
    res,
    `Contact details updated successfully for ${totalModels} model(s)`,
    {
      count: totalModels
    },
    statusCode.OK
  );
});