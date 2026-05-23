import { CalendarDays, MapPin } from "lucide-react";
import ActionButton from "./ActionButton";

function ProductHeader({ title, type, year, location, onApprove, onReject }) {
  return (
    <div className="flex justify-between items-start mt-4">

      {/* Left */}
      <div>

        <h1 className="text-4xl font-bold text-gray-900">
          {title}
        </h1>

        <div className="flex gap-4 mt-3 text-sm text-gray-500">

          <span>{type}</span>

          <span className="inline-flex items-center gap-2">
            <CalendarDays className="w-4 h-4" />
            Year: {year}
          </span>

          <span className="inline-flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            {location}
          </span>

        </div>

      </div>

      {/* Right */}
      <div className="flex gap-3">

        <ActionButton
          text="✓ Approve"
          color="green"
          onClick={onApprove}
        />

        <ActionButton
          text="✕ Reject"
          color="red"
          onClick={onReject}
        />

      </div>

    </div>
  );
}

export default ProductHeader;