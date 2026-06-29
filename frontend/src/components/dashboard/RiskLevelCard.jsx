import { ShieldCheck } from "lucide-react";

function RiskLevelCard({ riskLevel, severity, patientCondition }) {
  const getColor = () => {
    switch (riskLevel?.toLowerCase()) {
      case "low":
        return "bg-green-100 text-green-700";
      case "medium":
        return "bg-yellow-100 text-yellow-700";
      case "high":
        return "bg-red-100 text-red-700";
      default:
        return "bg-slate-100 text-slate-700";
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-md p-8 mb-8">
      <div className="flex items-center gap-3 mb-5">
        <ShieldCheck className="text-green-600" />

        <h2 className="text-2xl font-semibold">
          Overall Health
        </h2>
      </div>

      <div className="flex flex-wrap gap-4 mb-4">
        <span className={`px-4 py-2 rounded-full font-medium ${getColor()}`}>
          Risk: {riskLevel}
        </span>

        <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium">
          Severity: {severity}
        </span>
      </div>

      <p className="text-slate-700">
        <strong>Condition:</strong> {patientCondition}
      </p>
    </div>
  );
}

export default RiskLevelCard;