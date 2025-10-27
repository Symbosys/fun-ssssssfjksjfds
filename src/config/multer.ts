import multer from "multer";
import path from "path";
import { Request } from "express";
import fs from "fs";

// Set destination folder for temp uploads (Cloudinary will pick from here)
const tempUploadDir = path.join(__dirname, "..", "uploads");

if (!fs.existsSync(tempUploadDir)) {
  fs.mkdirSync(tempUploadDir, { recursive: true });
}

// Multer storage config: store files in /uploads temporarily
const storage = multer.diskStorage({
  destination: function (req: Request, file, cb) {
    cb(null, tempUploadDir);
  },
  filename: function (req: Request, file, cb) {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const ext = path.extname(file.originalname);
    cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
  },
});

// File filter for images only (optional)
const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: multer.FileFilterCallback
) => {
  const allowedMimeTypes = ["image/jpeg", "image/png", "image/webp", "application/pdf"];

  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only images and PDFs are allowed"));
  }
};

// Create and export multer instance
const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5 MB max per file
  },
});

export default upload;
