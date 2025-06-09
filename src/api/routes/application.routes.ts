import { Router } from "express";
import { ApplicationController } from "../controllers";

const applicationRoutes = Router();

applicationRoutes.post("/create", ApplicationController.createApplication);
applicationRoutes.get("/all", ApplicationController.getApplications);
applicationRoutes.get("/:id", ApplicationController.getApplicantsById);
applicationRoutes.delete("/:id", ApplicationController.deleteApplicantsById);

export default applicationRoutes;