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
exports.uploadImage = void 0;
const prisma_1 = __importDefault(require("../../config/prisma"));
const uploadImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "No file uploaded" });
        }
        const { filename, mimetype, size } = req.file;
        const imageUrl = `/uploads/${filename}`; // you can use a CDN or S3 later
        const image = yield prisma_1.default.profile.create({
            data: {
                filename,
                url: imageUrl,
                mimetype,
                size,
            },
        });
        return res.status(201).json({
            success: true,
            message: "Image uploaded successfully",
            data: image,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error", error });
    }
});
exports.uploadImage = uploadImage;
