import express from "express";

import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";

import healthRoutes from "./routes/healthRoutes.js";
import rateLimiter from "./middleware/rateLimiter.js";
import errorMiddleware from "./middleware/errorMiddleware.js";

import resumeRoutes from "./routes/resumeRoutes.js";
import candidateRoutes from "./routes/candidateRoutes.js";
import analyticsRoutes from "./routes/analyticsRoutes.js";




dotenv.config();

const app = express();

app.use(helmet());

app.use(
    cors({
        origin: "*",
    })
);;

app.use(express.json());

app.use(morgan("dev"));

app.use(rateLimiter);

app.use("/api/health", healthRoutes);
app.use("/api/resumes", resumeRoutes);
app.use("/api/candidates", candidateRoutes);

app.use("/api/analytics", analyticsRoutes);

app.use(errorMiddleware);

export default app;