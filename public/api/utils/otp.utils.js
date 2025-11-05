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
exports.sendOtp = exports.generateOtp = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const crypto_1 = __importDefault(require("crypto"));
// Generate OTP (4-digit)
const generateOtp = () => {
    return crypto_1.default.randomInt(1000, 10000).toString(); // generates 1000-9999
};
exports.generateOtp = generateOtp;
// Send OTP via email using Nodemailer (Professional HTML email)
const sendOtp = (email, otp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Configure transporter (Gmail example)
        const transporter = nodemailer_1.default.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER, // your Gmail email from .env
                pass: process.env.EMAIL_APP_PASSWORD, // Gmail app password from .env
            },
        });
        // Professional HTML email content
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Your One-Time Password (OTP) for Verification",
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e0e0e0; padding: 20px; border-radius: 8px; background-color: #f9f9f9;">
          <h2 style="color: #333;">Hello,</h2>
          <p style="font-size: 16px; color: #555;">
            You requested a One-Time Password (OTP) for verification with <strong>itsecortservice.com/</strong>. Please use the OTP below to complete your process.
          </p>
          <div style="text-align: center; margin: 20px 0;">
            <span style="font-size: 32px; font-weight: bold; color: #1a73e8; letter-spacing: 4px;">${otp}</span>
          </div>
          <p style="font-size: 14px; color: #777;">
            This OTP is valid for <strong>5 minutes</strong>. Do not share it with anyone.  
            If you did not request this OTP, please ignore this email.
          </p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="font-size: 12px; color: #999;">
            © ${new Date().getFullYear()} itsecortservice.com All rights reserved.
          </p>
        </div>
      `
        };
        // Send email
        const info = yield transporter.sendMail(mailOptions);
        console.log(`OTP sent to ${email}: ${otp} | Message ID: ${info.messageId}`);
    }
    catch (error) {
        console.error("Error sending OTP email:", error);
        throw new Error("Failed to send OTP email");
    }
});
exports.sendOtp = sendOtp;
