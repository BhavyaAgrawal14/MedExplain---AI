import fs from "fs/promises";
import pdfParse from "pdf-parse/lib/pdf-parse.js";

export const extractTextFromPDF = async (filePath) => {
  try {
    const pdfBuffer = await fs.readFile(filePath);

    const data = await pdfParse(pdfBuffer);

    return data.text;
  } catch (error) {
    throw new Error("Failed to extract text from PDF.");
  }
};