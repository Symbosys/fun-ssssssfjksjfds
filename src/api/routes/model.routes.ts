import { Router } from "express";
import { multerUpload } from "../middlewares";
import { ModelController } from "../controllers";

const modelRouter = Router();

modelRouter.post("/create", multerUpload.array("image"), ModelController.createModel);
modelRouter.get("/all", ModelController.getAllModels);

modelRouter.get("/:id", ModelController.GetById);
modelRouter.put("/:id", multerUpload.array("image"), ModelController.updateModel);
modelRouter.delete("/:id", ModelController.deleteModel);

export default modelRouter;