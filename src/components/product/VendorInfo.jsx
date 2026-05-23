import { Building2, Phone } from "lucide-react";

function VendorInfo({
  name,
  shopName,
  phone,
}) {
  return (
    <div className="flex flex-col">
      <p className="text-xl font-bold text-gray-800 mt-1">
        About the Vendor
      </p>
      <div className="py-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold">
            {name?.[0] || "V"}
          </div>

          <div className="flex-1">
            <p className="font-semibold text-gray-900">
              {name || "Vendor Name"}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
              {phone && (
                <span className="inline-flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  {phone}
                </span>
              )}
              <span className="inline-flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                {shopName || "Shop Name"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VendorInfo;