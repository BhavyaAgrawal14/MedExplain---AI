import { Dumbbell } from "lucide-react";

function ExerciseSuggestionsCard({ exerciseSuggestions = [] }) {
  return (
    <div className="bg-white rounded-3xl shadow-md p-8 h-full">
      <div className="flex items-center gap-3 mb-5">
        <Dumbbell className="text-blue-600" />
        <h2 className="text-2xl font-semibold">
          Exercise Suggestions
        </h2>
      </div>

      <ul className="list-disc pl-6 space-y-3">
        {exerciseSuggestions.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ExerciseSuggestionsCard;