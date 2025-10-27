"use strict";
// import { Router } from "express";
// import {
//   createProfile,
//   getAllProfiles,
//   getProfileById,
//   updateProfile,
//   deleteProfile,
// } from "../controllers/profile.controller";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const router = Router();
// router.post("/", createProfile);
// router.get("/", getAllProfiles);
// router.get("/:id", getProfileById);
// router.put("/:id", updateProfile);
// router.delete("/:id", deleteProfile);
// export default router;
const express_1 = __importDefault(require("express"));
const profile_controller_1 = require("../controllers/profile.controller");
const router = express_1.default.Router();
router.post("/", profile_controller_1.createProfile);
router.get("/", profile_controller_1.getAllProfiles);
router.get("/:id", profile_controller_1.getProfileById);
router.put("/:id", profile_controller_1.updateProfile);
router.delete("/:id", profile_controller_1.deleteProfile);
// ✅ Image upload & delete routes
router.post("/:id/image", profile_controller_1.upload.single("image"), profile_controller_1.uploadProfileImage);
router.delete("/:id/image", profile_controller_1.deleteProfileImage);
exports.default = router;
