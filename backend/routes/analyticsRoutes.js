import express from "express";
import {
    getTopSkills,
    getLocationStats,
    getExperienceStats
} from "../controllers/analyticsController.js";

const router = express.Router();

router.get("/skills", getTopSkills);
router.get("/locations", getLocationStats);
router.get("/experience", getExperienceStats);

export default router;