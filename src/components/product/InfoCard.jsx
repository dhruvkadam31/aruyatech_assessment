import { FileBadge } from "lucide-react";

function InfoCard({ docName, status }) {
  return (
    <div
      className={`rounded-xl shadow-md p-6 border w-full h-full min-h-[190px] flex flex-col justify-between ${
        status === "yes" ? "bg-green-100 border-green-400" : "bg-red-200 border-red-400"
      }`}
    >
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <FileBadge className="w-5 h-5 text-gray-700" />
          <h2 className="text-lg font-bold">{docName}</h2>
        </div>
        <p className="text-sm text-gray-600 leading-6">
          {status === "yes" ? "Verified document" : "Pending verification"}
        </p>
      </div>
      <button className="text-xs text-green-500 font-bold italic hover:text-blue-800 self-start">
        View Uploaded Documents
      </button>
    </div>
  );
}

export default InfoCard;
