import { extractTextFromPDF } from "./parser/pdfParser.js";
import { extractTextFromImage } from "./parser/imageParser.js";
import { analyzeWithGroq } from "./groqService.js";

export const analyzeMedicalReport = async (file) => {
  if (!file) {
    return {
      success: false,
      message: "No file uploaded.",
    };
  }

  let extractedText = "";

  if (file.mimetype === "application/pdf") {
    extractedText = await extractTextFromPDF(file.path);
  } else if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpeg"
  ) {
    extractedText = await extractTextFromImage(file.path);
  } else {
    throw new Error("Unsupported file type.");
  }

  const aiResponse = await analyzeWithGroq(extractedText);

return {
  success: true,
  analysis: aiResponse,
};
};