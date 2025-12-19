"use strict";
// import express from "express";
// import { profileImageFields } from "../../constants/profileImageFields";
// import { uploadPaymentScreenshots } from "../middlewares/upload.middleware";
// import { updateprofile } from "../controllers/profile.controller";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
const upload_middleware_1 = __importStar(require("../middlewares/upload.middleware"));
const router = express_1.default.Router();
router.use((req, res, next) => {
    console.log("Incoming:", req.method, req.url);
    next();
});
// Create new profile
router.post("/create", upload_middleware_1.default.single("customerImage"), profile_controller_1.createProfile);
// Update profile with payment screenshots
router.put("/update/:id", upload_middleware_1.uploadPaymentScreenshots, profile_controller_1.updateprofile);
// Get profile by ID
router.get("/:id", profile_controller_1.getprofileById);
router.delete("/:id", profile_controller_1.deleteProfile);
// Get all profiles with pagination
router.get("/", profile_controller_1.getAllProfiles);
exports.default = router;
