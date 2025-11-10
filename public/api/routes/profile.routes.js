"use strict";
// import express from "express";
// import { profileImageFields } from "../../constants/profileImageFields";
// import { uploadPaymentScreenshots } from "../middlewares/upload.middleware";
// import { updateprofile } from "../controllers/profile.controller";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const router = express.Router();
// router.get("/:id", getprofileByIdRouter);
// router.put("/update/:id", uploadPaymentScreenshots, updateprofile);
// export default router;
const express_1 = __importDefault(require("express"));
const profile_controller_1 = require("../controllers/profile.controller");
const upload_middleware_1 = require("../middlewares/upload.middleware");
const router = express_1.default.Router();
router.use((req, res, next) => {
    console.log("Incoming:", req.method, req.url);
    next();
});
// Update profile with payment screenshots
router.put("/update/:id", upload_middleware_1.uploadPaymentScreenshots, profile_controller_1.updateprofile);
// Get profile by ID
router.get("/:id", profile_controller_1.getprofileById);
router.delete("/:id", profile_controller_1.deleteProfile);
// Get all profiles with pagination
router.get("/", profile_controller_1.getAllProfiles);
exports.default = router;
