import express from "express";
import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

import { analyzeReport } from "../controllers/analyzeController.js";

router.post(
  "/analyze",
  upload.single("report"),
  analyzeReport
);

export default router;