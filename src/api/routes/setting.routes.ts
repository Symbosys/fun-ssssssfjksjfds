import { Router } from "express";
import { ModelController } from "../controllers";

const router = Router();

router.post("/update-contact", ModelController.updateContactDetails);

export default router;