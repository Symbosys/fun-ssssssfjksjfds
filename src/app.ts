import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import { rateLimit } from "express-rate-limit";
import { errorMiddleware } from "./api/middlewares";
import { ENV } from "./config";
import path from "path"
import { adminRouter, hotelRoute, modelRouter } from "./api/routes";


// 🚀 Initialize express application
const app = express();

// 🛡️ Security and utility middlewares
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));
app.use(helmet());
app.use(morgan("dev"));
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  })
);
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000, //⌛ 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: {
      status: 429,
      message: "Too many requests, please try again later",
    },
    standardHeaders: true,
    legacyHeaders: false,
  })
);


// 🩺 Health check endpoint
app.get("/", (_, res) => {
    res.send("Hello Worlds");
});

app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/model", modelRouter);
app.use("/api/v1/hotel", hotelRoute);

  
// ⚠️ Global error handling middleware
app.use(errorMiddleware);


// 📤 Export the configured app
export default app;
