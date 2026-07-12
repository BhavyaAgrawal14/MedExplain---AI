const demoAnalysis = {
  healthScore: 84,
  riskLevel: "Low",

  summary:
    "Your blood report is generally healthy. Most parameters are within the normal range. Vitamin D levels are slightly low, which is common and can often be improved with diet, sunlight exposure, or supplements after consulting a doctor.",

  abnormalValues: [
    {
      test: "Vitamin D",
      status: "Low",
      explanation:
        "Vitamin D is below the recommended range. Low Vitamin D may lead to fatigue, muscle weakness, and reduced bone health."
    }
  ],

  recommendations: [
    "Increase sunlight exposure for 15–20 minutes daily.",
    "Include Vitamin D-rich foods such as eggs, fish, and fortified milk.",
    "Stay physically active.",
    "Consult your doctor before taking supplements."
  ],

  dietSuggestions: [
    "Salmon",
    "Egg yolk",
    "Fortified milk",
    "Mushrooms"
  ],

  exerciseSuggestions: [
    "30 minutes of walking daily",
    "Light strength training",
    "Morning stretching"
  ],

  followUp:
    "Repeat Vitamin D test after 3 months or as advised by your healthcare provider.",

  disclaimer:
    "This AI-generated analysis is for informational purposes only and should not replace professional medical advice."
};

export default demoAnalysis;