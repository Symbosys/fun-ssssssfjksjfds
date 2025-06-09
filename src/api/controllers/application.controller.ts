import { prisma } from "../../config";
import { asyncHandler } from "../middlewares";
import { ErrorResponse } from "../utils";
import { SuccessResponse } from "../utils/response.util";
import { ApplicantsSchema } from "../validators/application.validator";

export const createApplication = asyncHandler(async (req, res, next) => {
  const validData = ApplicantsSchema.parse(req.body);

  if (Number(validData.age) < 18) {
    return next(new ErrorResponse("Age must be greater than 18", 400));
  }

  const existingApplication = await prisma.applicants.findFirst({
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
    return next(
      new ErrorResponse(
        "Application already exists with this phone or email ",
        400
      )
    );
  }

  const application = await prisma.applicants.create({
    data: {
      name: validData.name,
      age: validData.age,
      gender: validData.gender as "MALE" | "FEMALE",
      email: validData.email,
      phone: validData.phone,
      whatsapp: validData.whatsapp,
      address: validData.address,
    },
  });

  return SuccessResponse(res, "applied fo successfully", application);
});

export const getApplications = asyncHandler(async (req, res, next) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const searchQuery = (req.query.searchQuery as string) || "";
  const gender = req.query.gender as "MALE" | "FEMALE";
  const skip = (page - 1) * limit;

  const where: any = {};

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

  const applications = await prisma.applicants.findMany({
    where,
    skip,
    take: limit,
  });

  const totalApplications = await prisma.applicants.count({ where });

  return SuccessResponse(res, "applications fetched successfully", {
    applications,
    currentPage: page,
    totalPages: Math.ceil(totalApplications / limit),
    totalApplications,
    count: applications.length,
  })
});

export const getApplicantsById = asyncHandler(async (req, res, next) => {
  const id = Number(req.params.id);
  if(!id || isNaN(id)){
    return next(new ErrorResponse("Invalid id or missing Id", 400))
  }
  const application = await prisma.applicants.findUnique({
    where: {
      id,
    },
  });

  if (!application) {
    return next(new ErrorResponse("Application not found", 404));
  }

  return SuccessResponse(res, "application fetched successfully", application);
})

export const deleteApplicantsById = asyncHandler(async (req, res, next) => {
  const id = Number(req.params.id);
  if(!id || isNaN(id)){
    return next(new ErrorResponse("Invalid id or missing Id", 400))
  }
  const application = await prisma.applicants.findUnique({
    where: {
      id,
    },
  });

  if (!application) {
    return next(new ErrorResponse("Application not found", 404));
  }

  await prisma.applicants.delete({
    where: {
      id,
    },
  });

  return SuccessResponse(res, "application deleted successfully", null);
})