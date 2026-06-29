import { Lightbulb } from "lucide-react";

function RecommendationsCard({ recommendations }) {
  return (
    <div className="bg-white rounded-3xl shadow-md p-8 mb-8">
      <div className="flex items-center gap-3 mb-5">
        <Lightbulb className="text-yellow-500" />

        <h2 className="text-2xl font-semibold">
          Recommendations
        </h2>
      </div>

      <ul className="list-disc pl-6 space-y-3">
        {recommendations.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default RecommendationsCard;