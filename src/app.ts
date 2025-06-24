import cors from "cors";
import express from "express";
import { rateLimit } from "express-rate-limit";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { errorMiddleware } from "./api/middlewares";
import { adminRouter, applicationRoutes, BookingRoute, modelRouter } from "./api/routes";
import { ENV } from "./config";


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
    res.json({
      message: "Server is up and running",
      data: ENV.USER_EMAIL
    });
});

app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/model", modelRouter);
app.use("/api/v1/apply-escort", applicationRoutes);
app.use("/api/v1/booking", BookingRoute)

  
// ⚠️ Global error handling middleware
app.use(errorMiddleware);


// 📤 Export the configured app
export default app;