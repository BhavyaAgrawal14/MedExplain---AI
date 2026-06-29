import { ShieldAlert } from "lucide-react";

function DisclaimerCard({ disclaimer }) {
  return (
    <div className="bg-red-50 border border-red-200 rounded-3xl p-6">
      <div className="flex items-center gap-3 mb-3">
        <ShieldAlert className="text-red-500" />

        <h2 className="text-xl font-semibold">
          Disclaimer
        </h2>
      </div>

      <p className="text-slate-700">
        {disclaimer}
      </p>
    </div>
  );
}

export default DisclaimerCard;