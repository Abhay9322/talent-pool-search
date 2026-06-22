import express from "express";

import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";

dotenv.config();

import healthRoutes from "./routes/healthRoutes.js";
import rateLimiter from "./middleware/rateLimiter.js";
import errorMiddleware from "./middleware/errorMiddleware.js";

import resumeRoutes from "./routes/resumeRoutes.js";
import candidateRoutes from "./routes/candidateRoutes.js";
import analyticsRoutes from "./routes/analyticsRoutes.js";




dotenv.config();

console.log("FULL ENV:", {
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
    AWS_REGION: process.env.AWS_REGION,
});


const app = express();

app.use(helmet());

app.use(
    cors({
        origin: process.env.CLIENT_URL,
        credentials: true
    })
);

app.use(express.json());

app.use(morgan("dev"));

app.use(rateLimiter);

app.use("/api/health", healthRoutes);
app.use("/api/resumes", resumeRoutes);
app.use("/api/candidates", candidateRoutes);

app.use("/api/analytics", analyticsRoutes);

app.use(errorMiddleware);

export default app;