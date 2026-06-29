import { useLocation, useNavigate } from "react-router-dom";
import HealthScoreCard from "../components/dashboard/HealthScoreCard";
import SummaryCard from "../components/dashboard/SummaryCard";
import AbnormalValuesCard from "../components/dashboard/AbnormalValuesCard";
import RecommendationsCard from "../components/dashboard/RecommendationsCard";
import DisclaimerCard from "../components/dashboard/DisclaimerCard";
import RiskLevelCard from "../components/dashboard/RiskLevelCard";
import DietSuggestionsCard from "../components/dashboard/DietSuggestionsCard";
import ExerciseSuggestionsCard from "../components/dashboard/ExerciseSuggestionsCard";
import FollowUpCard from "../components/dashboard/FollowUpCard";
import { FileSearch } from "lucide-react";

function Dashboard() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const analysis =
    state?.analysis || JSON.parse(localStorage.getItem("analysis"));

  if (!analysis || Object.keys(analysis).length === 0) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-6">
      <div className="bg-white rounded-3xl shadow-xl p-10 max-w-md w-full text-center">

        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-blue-100 flex items-center justify-center">
          <FileSearch className="w-10 h-10 text-blue-600" />
        </div>

        <h1 className="text-3xl font-bold text-slate-800 mb-3">
          No Analysis Found
        </h1>

        <p className="text-slate-600 mb-8">
          Upload a medical report to generate an AI-powered health analysis.
        </p>

        <button
          onClick={() => navigate("/")}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
        >
          Upload Medical Report
        </button>

      </div>
    </div>
  );
}

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-10">
          Medical Report Analysis
        </h1>

        <HealthScoreCard score={analysis.healthScore} />

        <RiskLevelCard
          riskLevel={analysis.riskLevel}
          severity={analysis.severity}
          patientCondition={analysis.patientCondition}
        />

        {/* Summary */}

        <SummaryCard summary={analysis.summary} />

        {/* Two-column layout */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <AbnormalValuesCard abnormalValues={analysis.abnormalValues} />

          <RecommendationsCard recommendations={analysis.recommendations} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <DietSuggestionsCard dietSuggestions={analysis.dietSuggestions} />

          <ExerciseSuggestionsCard
            exerciseSuggestions={analysis.exerciseSuggestions}
          />
        </div>

        <FollowUpCard followUp={analysis.followUp} />

        <DisclaimerCard disclaimer={analysis.disclaimer} />
      </div>
    </div>
  );
}

export default Dashboard;
