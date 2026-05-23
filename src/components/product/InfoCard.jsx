function InfoCard({ docName, status }) {
  return (
    <div
      className={`rounded-xl shadow-md p-6 border h-25 w-
        ${status === "yes" ? "bg-green-100 border-green-400" : "bg-red-200 border-red-400"}`}
    >
      <h2 className="text-l font-bold">{docName}</h2>
      
      <button className="text-xs text-green-500 font-bold italic hover:text-blue-800">
        View Uploaded Documents
      </button>
    </div>
  );
}

export default InfoCard;
