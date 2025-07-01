"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const router = (0, express_1.Router)();
router.post("/update-contact", controllers_1.ModelController.updateContactDetails);
router.get("/get-contact", controllers_1.ModelController.getContactDetails);
exports.default = router;
