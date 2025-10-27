"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const otp_controller_js_1 = require("../controllers/otp.controller.js");
const otprouter = express_1.default.Router();
otprouter.post("/request", otp_controller_js_1.requestOtp);
otprouter.post("/verify", otp_controller_js_1.verifyOtp);
exports.default = otprouter;
