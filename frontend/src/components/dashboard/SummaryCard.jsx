import { FileText } from "lucide-react";

function SummaryCard({ summary }) {
  return (
    <div className="bg-white rounded-3xl shadow-md p-8 mb-8">

      <div className="flex items-center gap-3 mb-4">
        <FileText className="text-blue-600" />
        <h2 className="text-2xl font-semibold">
          Summary
        </h2>
      </div>

      <p className="text-slate-700 leading-8">
        {summary}
      </p>

    </div>
  );
}

export default SummaryCard;