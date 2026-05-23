function Modal({ isOpen, onClose, title, children }) {

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">

      {/* Modal Box */}
      <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl">

        {/* Header */}
        <div className="flex items-start justify-between">

          <h2 className="text-2xl font-bold text-gray-900">
            {title}
          </h2>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-xl transition-colors"
          >
            ✕
          </button>

        </div>

        {/* Body */}
        <div className="mt-4">
          {children}
        </div>

      </div>

    </div>
  );
}

export default Modal;