import Tesseract from "tesseract.js";

export const extractTextFromImage = async (filePath) => {
  try {
    const { data } = await Tesseract.recognize(
      filePath,
      "eng"
    );

    return data.text;
  } catch (error) {
    throw new Error("Failed to extract text from image.");
  }
};