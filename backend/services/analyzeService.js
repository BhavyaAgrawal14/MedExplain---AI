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
  } else if (file.mimetype === "image/png" || file.mimetype === "image/jpeg") {
    extractedText = await extractTextFromImage(file.path);
    if (!extractedText || extractedText.trim().length < 50) {
      return {
        success: false,
        message:
          "Could not extract enough readable text from the uploaded file.",
      };
    }
  } else {
    throw new Error("Unsupported file type.");
  }

  const aiResponse = await analyzeWithGroq(extractedText);
 let parsedResponse;

try {
  parsedResponse = JSON.parse(aiResponse);
} catch (error) {
  return {
    success: false,
    message: "The AI returned an invalid response. Please try again.",
  };
}
  if (!parsedResponse.isMedicalReport) {
    return {
      success: false,
      message: parsedResponse.message,
    };
  }

  return {
    success: true,
    analysis: parsedResponse,
  };
};
