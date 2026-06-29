import { HeartPulse } from "lucide-react";

function HealthScoreCard({ score }) {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-3xl p-8 shadow-xl mb-8">
      <div className="flex items-center gap-3 mb-4">
        <HeartPulse size={30} />
        <h2 className="text-2xl font-semibold">
          Health Score
        </h2>
      </div>

      <p className="text-6xl font-bold">
        {score}/100
      </p>
    </div>
  );
}

export default HealthScoreCard;