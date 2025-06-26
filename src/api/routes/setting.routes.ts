import { Router } from "express";
import { ModelController } from "../controllers";

const router = Router();

router.post("/update-contact", ModelController.updateAllModelsContact)

export default router;