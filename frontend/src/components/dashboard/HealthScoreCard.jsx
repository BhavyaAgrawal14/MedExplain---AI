import { HeartPulse } from "lucide-react";
import { theme } from "../../constants/theme";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";

function HealthScoreCard({ score }) {
  const progressColor =
    score >= 80 ? "#22c55e" : score >= 60 ? "#f59e0b" : "#ef4444";

  const healthStatus =
    score >= 90
      ? "Excellent"
      : score >= 80
        ? "Good"
        : score >= 60
          ? "Fair"
          : "Needs Attention";
  return (
    <div
      className={`${theme.card} w-full h-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-3xl p-8 overflow-hidden relative flex items-center`}
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Left */}

        <div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
              <HeartPulse size={24} />
            </div>

            <div>
              <p className="text-sm uppercase tracking-wider text-white/80">
                Overall Health
              </p>

              <h2 className="text-2xl font-semibold">Health Score</h2>
            </div>
          </div>

          <p className="mt-6 text-white/80">
            AI-generated overall wellness score based on your uploaded report.
          </p>
        </div>

        {/* Right */}

        <div className="flex flex-col items-center">
          <div className="w-36 h-36">
            <CircularProgressbar
              value={score}
              text={`${score}`}
              styles={buildStyles({
                pathColor: progressColor,
                trailColor: "rgba(255,255,255,0.15)",
                textColor: "#ffffff",
                strokeLinecap: "round",
              })}
            />
          </div>

          <span className="mt-4 px-4 py-1 rounded-full text-sm font-semibold bg-white/20 backdrop-blur-sm">
            {healthStatus}
          </span>
        </div>
      </div>
    </div>
  );
}

export default HealthScoreCard;
