function Tooltip({ text, children }) {
  return (
    <div className="relative inline-flex items-center group cursor-pointer">

      {children}

      <div className="absolute bottom-full left-1/2 z-50 mb-2 w-max -translate-x-1/2 rounded-lg bg-gray-800 px-2 py-1 text-xs text-white shadow-lg whitespace-nowrap pointer-events-none opacity-0 invisible transition-all duration-200 group-hover:opacity-100 group-hover:visible">
        {text}
      </div>

    </div>
  );
}

export default Tooltip;