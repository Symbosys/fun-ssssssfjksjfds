
// import { Request, Response, NextFunction } from "express";
// import asyncHandler from "../middlewares/asyncHandler"
// import  prisma  from "../../config/prisma" // Adjust path as needed
// import cloudinary from "../../config/cloudinary"; // Adjust path as needed
// import ErrorResponse from "../utils/errorResponse";
// import { SuccessResponse } from "../utils/successResponse";
// // import { updateProfileSchema } from "../validation/profile.schema"; 
// import { profileImageFields } from "../../constants/profileImageFields";
// import Profile from "../validators/profile.validator";

// // Cloudinary image upload helper
// const handleImageUpload = async (
//   file: Express.Multer.File
// ): Promise<any> => {
//   const result = await cloudinary.uploader.upload(file.path, {
//     folder: "profiles",
//   });

//   return {
//     url: result.secure_url,
//     public_id: result.public_id,
//     uploadedAt: new Date().toISOString(),
//     originalName: file.originalname,
//     mimeType: file.mimetype,
//     size: file.size,
//   };
// };

// // Controller to update a profile
// export const updateProfile = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
//   const ProfileId = Number(req.params.id);

//   console.log("Updating profile with data:", req.body);
//   console.log("Received files:", req.files);

//   if (!ProfileId) {
//     return next(new ErrorResponse("Profile ID is required", 400));
//   }

//   const existingProfile = await prisma.profile.findUnique({
//     where: { id: ProfileId },
//   });

//   if (!existingProfile) {
//     return next(new ErrorResponse("Profile not found", 404));
//   }

//   // Validate non-file form fields
//   let profileValidation;
//   try {
//     profileValidation = updateProfile.parse(req.body); // Optional: comment out if not using Zod
//   } catch (err) {
//     return next(new ErrorResponse("Invalid form data", 400));
//   }

//   const files = req.files as { [fieldname: string]: Express.Multer.File[] } | undefined;
//   const updateData: any = { ...profileValidation };

//   // Upload images and assign to updateData
//   const imageUploadPromises = profileImageFields.map(async (fieldName) => {
//     const file = files?.[fieldName]?.[0];
//     if (file) {
//       const imageData = await handleImageUpload(file);
//       updateData[fieldName] = imageData;
//     }
//   });

//   try {
//     await Promise.all(imageUploadPromises);
//   } catch (error) {
//     const errorMessage = error instanceof Error ? error.message : "Image upload failed";
//     return next(new ErrorResponse(errorMessage, 500));
//   }

//   const updatedProfile = await prisma.profile.update({
//     where: { id: ProfileId },
//     data: updateData,
//   });

//   return SuccessResponse(
//     res,
//     "Profile updated successfully",
//     { data: updatedProfile },
//     200
//   );
// });



import { Request } from "express";
import { deleteFromCloudinary, uploadToCloudinary } from "../../config/cloudinary";
import prisma from "../../config/prisma";
import asyncHandler from "../middlewares/asyncHandler";
import ErrorResponse from "../utils/errorResponse";
import { SuccessResponse } from "../utils/successResponse";
import { handleImageUpload } from "../utils/utils";
import { ScreenshotFields, updateProfileSchema } from "../validators/profile.validator";



export const createProfile = asyncHandler(async (req: Request, res, next) => {
  const { email, name, phone, dateOfBirth, state, gender, address } = req.body;

  if (!email || !name || !phone || !dateOfBirth || !state || !gender || !address) {
    return next(new ErrorResponse("All fields are required", 400));
  }

  // Check if profile exists first to avoid unnecessary image upload
  const existingProfile = await prisma.profile.findUnique({
    where: { email },
  });

  if (existingProfile) {
    return SuccessResponse(res, "Profile already exists", { data: existingProfile }, 200);
  }

  const customerImage = req.file;
  if (!customerImage) {
    return next(new ErrorResponse("Customer image is required", 400));
  }

  // upload customer image to cloudinary
  const customerImageUpload = await uploadToCloudinary(customerImage.buffer, "customerImage");

  // create profile
  const profile = await prisma.profile.create({
    data: {
      email,
      name,
      phone,
      dateOfBirth,
      state,
      gender,
      address,
      customerImage: customerImageUpload,
    },
  });

  return SuccessResponse(res, "Profile created successfully", { data: profile }, 201);
});



// Update profile with payment screenshots and approval status
export const updateprofile = asyncHandler(async (req: Request, res, next) => {
  const profileId = Number(req.params.id);

    if (!profileId) {
        return next(new ErrorResponse("Profile ID is required", 400));
    }

    // Check if profile exists
    const existingProfile = await prisma.profile.findUnique({
        where: { id: profileId }
    });

    if (!existingProfile) {
        return next(new ErrorResponse("Profile not found", 404));
    }

    // Parse and validate the request body (excluding files)
    const validatedData = updateProfileSchema.parse(req.body);
    
    // Get uploaded files
    const files = req.files as { [fieldname: string]: Express.Multer.File[] } | undefined;
    
    // Prepare update data
    const updateData: any = { ...validatedData };
    
    // Handle image uploads for each payment screenshot field
    const imageUploadPromises: Promise<void>[] = [];
    
    for (const fieldName of ScreenshotFields) {
        const file = files?.[fieldName]?.[0]; // Get first file for this field
        
        if (file) {
            imageUploadPromises.push(
                handleImageUpload(
                    file,
                    fieldName,
                    existingProfile[fieldName as keyof typeof existingProfile],
                    profileId
                ).then((imageData) => {
                    if (imageData) {
                        updateData[fieldName] = imageData;
                    }
                })
            );
        }
    }

    // Wait for all image uploads to complete
    try {
        await Promise.all(imageUploadPromises);
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Failed to upload images";
        return next(new ErrorResponse(errorMessage, 500));
    }

    // Update the profile record
    const updatedProfile = await prisma.profile.update({
        where: { id: profileId },
        data: updateData,
    });

    return SuccessResponse(
        res,
        "Profile updated successfully",
        {data: updatedProfile},
        200
    );
});


//GET PROFILE BY ID

export const getprofileById = asyncHandler(async (req, res, next) => {
    const profileId = Number(req.params.id);
    
    if (!profileId) {
        return next(new ErrorResponse("Profile ID is required", 400));
    }

    const profile = await prisma.profile.findUnique({
        where: { id: profileId }
    });

    if (!profile) {
        return next(new ErrorResponse("Profile not found", 404));
    }

    
    return SuccessResponse(
        res,
        "Profile retrieved successfully",
        profile,
        200
    );
});


//GET ALL PROFILES pagination

export const getAllProfiles = asyncHandler(async (req, res, next) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const search = req.query.search as string;
  const status = req.query.status as string;
  const sortBy = req.query.sortBy as string || 'id';
  const sortOrder = req.query.sortOrder as 'asc' | 'desc' || 'desc';

  const skip = (page - 1) * limit;

  // Build where clause for filtering
  const whereClause: any = {};

  if (search) {
    whereClause.OR = [
      { email: { contains: search, mode: 'insensitive' } },
      { phone: { contains: search, mode: 'insensitive' } },
      { name: { contains: search, mode: 'insensitive' } },
      { id: isNaN(Number(search)) ? undefined : Number(search) },
    ].filter(condition => condition.id !== undefined || condition.email || condition.phone || condition.name);
  }

  if (status) {
    if (['PENDING', 'APPROVED', 'REJECTED'].includes(status.toUpperCase())) {
      whereClause.OR = [
        { carVefificationStatus: status.toUpperCase() },
        { hotelBookingStatus: status.toUpperCase() },
        { medicalKitStatus: status.toUpperCase() },
        { policeVerificationStatus: status.toUpperCase() },
        { nocChangeStatus: status.toUpperCase() },
        { locationVerificationChangeAreaStatus: status.toUpperCase() },
        { secretarySafetyChangeStatus: status.toUpperCase() },
        { enquiryVerificationChangeStatus: status.toUpperCase() },
        { incomeGstChangeStatus: status.toUpperCase() },
        { phoneVerificationVerifiedStatus: status.toUpperCase() },
        { joiningFromChangeStatus: status.toUpperCase() },
      ];
    }
  }

  const [profiles, totalCount] = await Promise.all([
    prisma.profile.findMany({
      where: whereClause,
      skip,
      take: limit,
      orderBy: { [sortBy]: sortOrder },
      select: {
        id: true,
        email: true,
        name: true,
        phone: true,
        dateOfBirth: true,
        gender: true,
        state: true,
        address: true,
        website: true,
        upi: true,
        carVefificationStatus: true,
        hotelBookingStatus: true,
        medicalKitStatus: true,
        policeVerificationStatus: true,
        nocChangeStatus: true,
        locationVerificationChangeAreaStatus: true,
        secretarySafetyChangeStatus: true,
        enquiryVerificationChangeStatus: true,
        incomeGstChangeStatus: true,
        phoneVerificationVerifiedStatus: true,
        joiningFromChangeStatus: true,
      },
    }),
    prisma.profile.count({ where: whereClause }),
  ]);

  return SuccessResponse(
    res,
    "Profiles retrieved successfully",
    {
      profiles,
      totalCount,
      totalPages: Math.ceil(totalCount / limit),
      currentPage: page,
      count: profiles.length,
    },
    200
  );
});




// ✅ All JSON image fields in the Profile model
const imageFields = [
  "cardVerification",
  "hotelBooking",
  "medicalKit",
  "policeVerification",
  "nocChange",
  "locationVerificationChangeArea",
  "secretarySafetyChange",
  "enquiryVerificationChange",
  "incomeGstChange",
  "phoneVerification",
  "joiningFromChange",
];

// ✅ Delete profile and its associated Cloudinary images
export const deleteProfile = asyncHandler(async (req, res, next) => {
  const profileId = Number(req.params.id);

  // 🧩 Validate ID
  if (!profileId) {
    return next(new ErrorResponse("Profile ID is required", 400));
  }

  // 🧩 Check if profile exists
  const existingProfile = await prisma.profile.findUnique({
    where: { id: profileId },
  });

  if (!existingProfile) {
    return next(new ErrorResponse("Profile not found", 404));
  }

  // 🧹 Prepare Cloudinary deletions
  const imageDeletePromises: Promise<void>[] = [];

  for (const field of imageFields) {
    const data = existingProfile[field as keyof typeof existingProfile];
    if (!data) continue;

    try {
      // Parse JSON field (could be object or string)
      const parsed = typeof data === "string" ? JSON.parse(data) : (data as any);

      if (Array.isArray(parsed)) {
        // Multiple images
        for (const img of parsed) {
          if (img?.public_id) {
            imageDeletePromises.push(deleteFromCloudinary(img.public_id));
          }
        }
      } else if (parsed?.public_id) {
        // Single image
        imageDeletePromises.push(deleteFromCloudinary(parsed.public_id));
      }
    } catch (err) {
      console.error(`Failed to parse/delete Cloudinary image for ${field}:`, err);
    }
  }

  // ✅ Wait for all deletions
  try {
    await Promise.all(imageDeletePromises);
  } catch (error) {
    console.error("One or more Cloudinary deletions failed:", error);
    // Don’t throw — still delete the DB record
  }

  // 🗑️ Delete profile record from DB
  const deletedProfile = await prisma.profile.delete({
    where: { id: profileId },
  });

  // ✅ Send success response
  return SuccessResponse(
    res,
    "Profile and associated images deleted successfully",
    { data: deletedProfile },
    200
  );
});