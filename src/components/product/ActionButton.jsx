function ActionButton({ text, color, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        px-5 py-2 rounded-full border text-sm font-medium
        ${
          color === "green"
            ? "border-green-500 text-green-600 hover:bg-green-50"
            : "border-red-500 text-red-500 hover:bg-red-50"
        }
      `}
    >
      {text}
    </button>
  );
}

export default ActionButton;