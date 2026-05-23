import { useState } from "react";
import { AlertCircle, CheckCircle2, CircleX } from "lucide-react";

import Modal from "../ui/Modal";
import DecisionButtons from "./DecisionButton";

function ReviewModal({
  isOpen,
  onClose,
  type,
  item,
  onConfirm,
}) {

  const [reason, setReason] = useState("");

  const rejectReasons = [
    "Incomplete documents",
    "Poor image quality",
    "Invalid PAN number",
    "Duplicate listing",
    "Incorrect pricing",
  ];

  const isReject = type === "reject";

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        setReason("");
        onClose();
      }}
      title={
        <span className="inline-flex items-center gap-3">
          {isReject ? (
            <CircleX className="w-5 h-5 text-red-500" />
          ) : (
            <CheckCircle2 className="w-5 h-5 text-green-500" />
          )}
          {isReject ? "Reject this listing" : "Approve this listing?"}
        </span>
      }
    >

      {/* Approve Content */}
      {!isReject && (
        <div>

          <p className="text-sm text-gray-600 leading-6">
            <span className="font-bold">{item?.machine ?? "This listing"}</span> by 
            <span className="font-bold"> {item?.shopName ?? "the vendor"} </span> 
             will be published and visible to contractors on SiteGrabb.
          </p>


          <DecisionButtons
            confirmText="Yes, Approve"
            onCancel={onClose}
            onConfirm={() => {
              if (onConfirm) onConfirm();
              onClose();
            }}
          />

        </div>
      )}

      {/* Reject Content */}
      {isReject && (
        <div>

          <p className="text-sm text-gray-500 inline-flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-yellow-500" />
            Select a reason (optional) and the vendor will be notified.
          </p>

          {/* Reason Chips */}
          <div className="flex flex-wrap gap-2 mt-5">

            {rejectReasons.map((item) => (

              <button
                key={item}
                type="button"
                onClick={() => setReason(item)}
                aria-pressed={reason === item}
                className={`px-3 py-2 rounded-full text-xs transition-colors ${
                  reason === item
                    ? "border border-yellow-500 bg-yellow-500 text-white"
                    : "border border-gray-200 bg-gray-50 text-gray-600 hover:bg-gray-100"
                }`}
              >
                {item}
              </button>

            ))}

          </div>

          {/* Textarea */}
          <textarea
            rows={4}
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="Add additional notes (optional)..."
            className="w-full mt-5 rounded-2xl border border-gray-200 p-4 text-sm resize-none focus:outline-none focus:border-yellow-400"
          />

          <DecisionButtons
            confirmText="Reject Listing"
            onCancel={onClose}
            onConfirm={() => {
              if (onConfirm) onConfirm(reason);
              onClose();
            }}
          />

        </div>
      )}

    </Modal>
  );
}

export default ReviewModal;