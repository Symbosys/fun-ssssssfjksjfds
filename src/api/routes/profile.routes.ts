// import express from "express";
// import { profileImageFields } from "../../constants/profileImageFields";
// import { uploadPaymentScreenshots } from "../middlewares/upload.middleware";
// import { updateprofile } from "../controllers/profile.controller";

// const router = express.Router();


// router.get("/:id", getprofileByIdRouter);


// router.put("/update/:id", uploadPaymentScreenshots, updateprofile);

// export default router;


import express from "express";
import { deleteProfile, getAllProfiles, getprofileById, updateprofile } from "../controllers/profile.controller";
import { uploadPaymentScreenshots } from "../middlewares/upload.middleware";

const router = express.Router();

router.use((req, res, next) => {
  console.log("Incoming:", req.method, req.url);
  next();
});

// Update profile with payment screenshots
router.put("/update/:id", uploadPaymentScreenshots, updateprofile);

// Get profile by ID
router.get("/:id", getprofileById);

router.delete("/:id", deleteProfile);

// Get all profiles with pagination
router.get("/", getAllProfiles);

export default router;
