import { Apple } from "lucide-react";

function DietSuggestionsCard({ dietSuggestions = [] }) {
  return (
    <div className="bg-white rounded-3xl shadow-md p-8 h-full">
      <div className="flex items-center gap-3 mb-5">
        <Apple className="text-green-600" />
        <h2 className="text-2xl font-semibold">
          Diet Suggestions
        </h2>
      </div>

      <ul className="list-disc pl-6 space-y-3">
        {dietSuggestions.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default DietSuggestionsCard;