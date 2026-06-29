import Groq from "groq-sdk";

export const analyzeWithGroq = async (medicalText) => {
  const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
  });

  const completion = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      {
        role: "system",
        content: `
You are an expert medical AI assistant.

Your job is to explain medical reports in simple language.

First determine whether the uploaded text is actually from a medical report.

If it is NOT a medical report, return ONLY this JSON:

{
  "isMedicalReport": false,
  "message": "The uploaded file does not appear to be a medical report."
}

If it IS a medical report, return ONLY valid JSON in this exact format:

{
  "isMedicalReport": true,

  "patientCondition": "Generally Healthy",

  "healthScore": 84,

  "riskLevel": "Low",

  "severity": "Mild",

  "summary": "A short summary in simple language.",

  "abnormalValues": [
    {
      "test": "Vitamin D",
      "status": "Low",
      "explanation": "Vitamin D is below the normal range."
    }
  ],

  "recommendations": [
    "Consult your physician.",
    "Maintain a healthy lifestyle."
  ],

  "dietSuggestions": [
    "Increase leafy green vegetables.",
    "Consume more protein-rich foods."
  ],

  "exerciseSuggestions": [
    "Walk for 30 minutes daily.",
    "Perform light strength training."
  ],

  "followUp": {
    "urgency": "Routine",
    "timeline": "Within 3 months",
    "reason": "Monitor Vitamin D levels."
  },

  "positiveFindings": [
    "Kidney function is normal.",
    "Liver function is normal."
  ],

  "disclaimer": "This analysis is for educational purposes only and does not replace professional medical advice."
}

Return ONLY JSON.

Do NOT include markdown.

Do NOT include \`\`\`.

Do NOT explain anything outside the JSON.
`,
      },
      {
        role: "user",
        content: medicalText,
      },
    ],
    temperature: 0.3,
  });

  return completion.choices[0].message.content;
};