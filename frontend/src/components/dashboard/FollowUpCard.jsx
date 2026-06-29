import { CalendarClock } from "lucide-react";

function FollowUpCard({ followUp }) {
  if (!followUp) return null;

  return (
    <div className="bg-white rounded-3xl shadow-md p-8 mb-8">
      <div className="flex items-center gap-3 mb-5">
        <CalendarClock className="text-purple-600" />
        <h2 className="text-2xl font-semibold">
          Follow-Up Recommendation
        </h2>
      </div>

      <p><strong>Urgency:</strong> {followUp.urgency}</p>
      <p><strong>Timeline:</strong> {followUp.timeline}</p>
      <p className="mt-3">{followUp.reason}</p>
    </div>
  );
}

export default FollowUpCard;