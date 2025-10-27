import express from "express";
import { requestOtp, verifyOtp } from "../controllers/otp.controller.js";

const otprouter = express.Router();

otprouter.post("/request", requestOtp);

otprouter.post("/verify", verifyOtp);

export default otprouter;


