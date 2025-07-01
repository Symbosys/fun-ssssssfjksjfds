import { Router } from "express";
import { ModelController } from "../controllers";

const router = Router();

router.post("/update-contact", ModelController.updateContactDetails);
router.get("/get-contact", ModelController.getContactDetails);

export default router;