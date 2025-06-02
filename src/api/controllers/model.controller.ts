import { ENV, prisma } from "../../config";
import { uploadMultipleToCloudinary } from "../../config/cloudinary";
import { asyncHandler } from "../middlewares";
import { statusCode } from "../types/types";
import { ErrorResponse } from "../utils";
import { SuccessResponse } from "../utils/response.util";
import { addServicesSchema, modelCreateSchema } from "../validators/model.validator";

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
    const where: any = {};

    if(searchQuery) {
        where.OR = [
            { name: { contains: searchQuery} },
            { email: { contains: searchQuery } },
            { phone: { contains: searchQuery } },
            {age: { contains: searchQuery } },
        ];
    }

    if (isActive !== undefined) {
        where.isActive = isActive;
    }

    const [models, totalModel] = await Promise.all([
        prisma.model.findMany({
            where,
            skip,
            take: limit,
            orderBy: { createdAt: "desc" },
            include: {
                image: true,
            }
        }),
        prisma.model.count({ where })
    ])

  
    return SuccessResponse(res, "model fetched successfully", {
        models,
        currentPage: page,
        totalPages: Math.ceil(totalModel / limit),
        totalModel,
        count: models.length
    }, statusCode.OK)
    
})

export const GetById = asyncHandler(
    async (req, res) => {
      const id = Number(req.params.id);
      if (!id || isNaN(id))
        throw new ErrorResponse("Invalid id", statusCode.Bad_Request);
      const models = await prisma.model.findUnique({where: {id}, include: {
        image: true,
      }});
      if (!models)
        throw new ErrorResponse("Employee not found", statusCode.Not_Found);
      return SuccessResponse(
        res,
        "Employee fetched successfully",
        models,
        statusCode.OK
      );
    }
);
  

  
