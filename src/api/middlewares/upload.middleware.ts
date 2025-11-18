import multer from "multer";
import type { Request } from "express";

// Configure multer for in-memory storage
const storage = multer.memoryStorage();

// File filter to only allow images
const fileFilter = (req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
    if (file.mimetype.startsWith('image/')) {
        cb(null, true);
    } else {
        cb(new Error('Only image files are allowed!'));
    }
};

// Configure multer
const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 5 * 1024 * 1024, // 5MB limit
    },
});

// Middleware for handling multiple payment screenshot uploads
export const uploadPaymentScreenshots = upload.fields([
    {name: "customerImage", maxCount: 1},
    { name: 'cardVerification', maxCount: 1 },
    { name: 'hotelBooking', maxCount: 1 },
    { name: 'medicalKit', maxCount: 1 },
    { name: 'policeVerification', maxCount: 1 },
    { name: 'nocChange', maxCount: 1 },
    { name: 'locationVerificationChangeArea', maxCount: 1 },
    { name: 'secretarySafetyChange', maxCount: 1 },
    { name: 'enquiryVerificationChange', maxCount: 1 },
    { name: 'incomeGstChange', maxCount: 1 },
    { name: 'phoneVerification', maxCount: 1 },
     { name: 'joiningFromChange', maxCount: 1 },
]);

export default upload;
