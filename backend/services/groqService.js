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
You are an experienced medical AI assistant.

Explain medical reports in simple language.
Never diagnose diseases.
Always recommend consulting a doctor.
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