import { AlertTriangle } from "lucide-react";

function AbnormalValuesCard({ abnormalValues }) {
  return (
    <div className="bg-white rounded-3xl shadow-md p-8 mb-8">
      <div className="flex items-center gap-3 mb-5">
        <AlertTriangle className="text-orange-500" />

        <h2 className="text-2xl font-semibold">
          Abnormal Values
        </h2>
      </div>

      <div className="space-y-5">
        {abnormalValues.map((item, index) => (
          <div
            key={index}
            className="border rounded-2xl p-5"
          >
            <h3 className="font-bold text-lg">
              {item.test}
            </h3>

            <span className="inline-block mt-2 bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
              {item.status}
            </span>

            <p className="mt-3 text-slate-600">
              {item.explanation}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AbnormalValuesCard;