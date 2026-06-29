import { analyzeMedicalReport } from "../services/analyzeService.js";

export const analyzeReport = async (req, res) => {
  try {
    const result = await analyzeMedicalReport(req.file);

    res.json(result);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};