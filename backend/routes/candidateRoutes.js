import express from "express";
import {
    getCandidates,
    getCandidateById,
    deleteCandidate,
    // searchCandidates
} from "../controllers/candidateController.js";

const router = express.Router();

router.get("/", getCandidates);
// router.get("/search", searchCandidates);
router.get("/:id", getCandidateById);
router.delete("/:id", deleteCandidate);

export default router;