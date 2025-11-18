"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadPaymentScreenshots = void 0;
const multer_1 = __importDefault(require("multer"));
// Configure multer for in-memory storage
const storage = multer_1.default.memoryStorage();
// File filter to only allow images
const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
        cb(null, true);
    }
    else {
        cb(new Error('Only image files are allowed!'));
    }
};
// Configure multer
const upload = (0, multer_1.default)({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 5 * 1024 * 1024, // 5MB limit
    },
});
// Middleware for handling multiple payment screenshot uploads
exports.uploadPaymentScreenshots = upload.fields([
    { name: "customerImage", maxCount: 1 },
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
exports.default = upload;
