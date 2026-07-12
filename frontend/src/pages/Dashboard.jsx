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
import { Download } from "lucide-react";
import { generateAnalysisPDF } from "../utils/generatePDF";

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
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 transition-colors duration-300 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
              Medical Report Analysis
            </h1>

            <p className="mt-3 text-lg text-slate-600 dark:text-slate-400">
              Your report has been analyzed successfully. Review the
              AI-generated insights below.
            </p>
          </div>

          <button
            onClick={() => generateAnalysisPDF(analysis)}
            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Download size={20} />
            Download PDF
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8 items-stretch">
          <div className="lg:col-span-2 flex">
            <HealthScoreCard score={analysis.healthScore} />
          </div>

          <div className="flex">
            <RiskLevelCard
              riskLevel={analysis.riskLevel}
              severity={analysis.severity}
              patientCondition={analysis.patientCondition}
            />
          </div>
        </div>

        {/* Summary */}

        <SummaryCard summary={analysis.summary} />

        {/* Two-column layout */}

        <AbnormalValuesCard abnormalValues={analysis.abnormalValues} />

        <div className="my-8">
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
