function PricingCard({ price, label }) {
  return (
    <div className="flex-1 flex-row border border-yellow-200 bg-yellow-50 rounded-2xl p-5 flex gap-4 text-center items-center justify-center">

      <h2 className="text-2xl font-bold text-yellow-600">
        {price}
      </h2>

      <p className="text-sm text-yellow-700 mt-1.5">
        {label}
      </p>

    </div>
  );
}

export default PricingCard;