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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyOtp = exports.requestOtp = void 0;
const prisma_js_1 = __importDefault(require("../../config/prisma.js"));
const error_middleware_js_1 = require("../middlewares/error.middleware.js");
const otp_utils_js_1 = require("../utils/otp.utils.js");
const response_util_js_1 = require("../utils/response.util.js");
const types_js_1 = require("../types/types.js");
const zod_1 = require("zod");
// Validation schema
const generateOtpSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
});
const verifyOtpSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    otp: zod_1.z.union([zod_1.z.string(), zod_1.z.number()])
        .transform(val => val.toString())
        .refine(val => val.length === 4, "OTP must be 4 digits"),
});
// Generate OTP
exports.requestOtp = (0, error_middleware_js_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = generateOtpSchema.parse(req.body);
    const otp = email === "test@example.com" ? "1234" : (0, otp_utils_js_1.generateOtp)();
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes
    // Delete existing OTP
    yield prisma_js_1.default.otp.deleteMany({ where: { email } });
    // Create new OTP in DB
    yield prisma_js_1.default.otp.create({
        data: { email, otp, expiresAt },
    });
    yield (0, otp_utils_js_1.sendOtp)(email, otp);
    // Return OTP in response for testing
    return (0, response_util_js_1.SuccessResponse)(res, "OTP generated successfully", { email, otp }, // include OTP for Postman
    types_js_1.statusCode.OK);
}));
// Verify OTP
exports.verifyOtp = (0, error_middleware_js_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, otp } = verifyOtpSchema.parse(req.body);
    const storedOtp = yield prisma_js_1.default.otp.findFirst({
        where: { email, otp, expiresAt: { gt: new Date() } },
    });
    if (!storedOtp) {
        throw new response_util_js_1.ErrorResponse("Invalid or expired OTP", types_js_1.statusCode.Bad_Request);
    }
    // Delete OTP after successful verification
    yield prisma_js_1.default.otp.delete({ where: { id: storedOtp.id } });
    // Optional: Create or fetch profile
    let profile = yield prisma_js_1.default.profile.findUnique({ where: { email } });
    if (!profile) {
        profile = yield prisma_js_1.default.profile.create({ data: { email } });
    }
    return (0, response_util_js_1.SuccessResponse)(res, "OTP verified successfully", {
        profile: {
            id: profile.id,
            name: profile.name,
            email: profile.email,
            phone: profile.phone,
        },
    }, types_js_1.statusCode.OK);
}));
