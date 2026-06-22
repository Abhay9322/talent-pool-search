import express from "express";
import upload from "../middleware/uploadMiddleware.js";
import { uploadResume } from "../controllers/resumeController.js";

const router = express.Router();

router.post(
    "/upload",
    upload.array("files", 30),
    uploadResume
);

export default router;