import ActionButton from "./ActionButton";

function ProductHeader({ title, type, year, location }) {
  return (
    <div className="flex justify-between items-start mt-4">

      {/* Left */}
      <div>

        <h1 className="text-4xl font-bold text-gray-900">
          {title}
        </h1>

        <div className="flex gap-4 mt-3 text-sm text-gray-500">

          <span>{type}</span>

          <span>Year: {year}</span>

          <span>{location}</span>

        </div>

      </div>

      {/* Right */}
      <div className="flex gap-3">

        <ActionButton
          text="✓ Approve"
          color="green"
        />

        <ActionButton
          text="✕ Reject"
          color="red"
        />

      </div>

    </div>
  );
}

export default ProductHeader;