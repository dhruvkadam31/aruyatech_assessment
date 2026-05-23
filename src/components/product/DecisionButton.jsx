function DecisionButtons({
  confirmText,
  onCancel,
  onConfirm,
}) {
  return (
    <div className="flex gap-3 mt-6">

      {/* Cancel Button */}
      <button
        onClick={onCancel}
        className="flex-1 py-3 rounded-full border border-gray-300 text-sm font-medium text-yellow-500 hover:bg-gray-50 transition-colors"
      >
        &lt; Cancel
      </button>

      {/* Confirm Button */}
      <button
        onClick={onConfirm}
        className="flex-1 py-3 rounded-full bg-yellow-400 text-sm font-medium text-black hover:bg-yellow-500 transition-colors"
      >
        {confirmText} →
      </button>

    </div>
  );
}

export default DecisionButtons;