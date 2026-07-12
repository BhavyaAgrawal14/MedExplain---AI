import { ShieldCheck } from "lucide-react";
import { theme } from "../../constants/theme";

function RiskLevelCard({ riskLevel, severity, patientCondition }) {
  const getRiskStyles = () => {
    switch (riskLevel?.toLowerCase()) {
      case "low":
        return {
          badge: "bg-green-100 text-green-700",
          dot: "bg-green-500",
        };

      case "medium":
        return {
          badge: "bg-yellow-100 text-yellow-700",
          dot: "bg-yellow-500",
        };

      case "high":
        return {
          badge: "bg-red-100 text-red-700",
          dot: "bg-red-500",
        };

      default:
        return {
          badge: "bg-slate-100 text-slate-700",
          dot: "bg-slate-500",
        };
    }
  };

  const styles = getRiskStyles();

  return (
    <div className={`${theme.card} w-full h-full rounded-3xl p-8 flex flex-col`}>

      <div className="flex items-center gap-3 mb-6">

        <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">

          <ShieldCheck className="text-blue-600 dark:text-blue-400" />

        </div>

        <div>

          <p className="text-sm uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Health Status
          </p>

          <h2 className={`${theme.heading} text-2xl font-semibold`}>
            Overall Assessment
          </h2>

        </div>

      </div>

      <div className="space-y-5">

        <div className="flex items-center justify-between">

          <span className={`${theme.text} font-medium`}>
            Risk Level
          </span>

          <span
            className={`px-4 py-2 rounded-full font-semibold ${styles.badge}`}
          >
            {riskLevel}
          </span>

        </div>

        <div className="flex items-center justify-between">

          <span className={`${theme.text} font-medium`}>
            Severity
          </span>

          <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold">
            {severity}
          </span>

        </div>

        <div className="border-t border-slate-200 dark:border-slate-700 pt-5">

          <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
            Patient Condition
          </p>

          <div className="flex items-center gap-3">

            <div className={`w-3 h-3 rounded-full ${styles.dot}`} />

            <p className={`${theme.heading} font-medium`}>
              {patientCondition}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default RiskLevelCard;