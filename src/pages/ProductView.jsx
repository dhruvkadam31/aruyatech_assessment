import { useLocation } from "react-router-dom";
import ProductHeader from "../components/product/ProductHeader";
import PricingCard from "../components/product/PricingCard";
import ImageGallery from "../components/product/ImageGallery";
import VendorInfo from "../components/product/VendorInfo";
import InfoCard from "../components/product/InfoCard";

function ProductView() {
  const location = useLocation();
  const { name, phone, shopName } = location.state || {};
  const documents = [
  { docName: "PAN Card", status: "yes" },
  { docName: "RC (Registration Certificate)", status: "yes" },
  { docName: "Insurance", status: "yes" },
  { docName: "GST Certificate", status: "yes" },
];

  return (
    <div className="p-6">

      {/* Breadcrumb */}
      <p className="text-sm text-gray-400">
        ← New Listings / Excavator
      </p>

      {/* Header */}
      <ProductHeader
        title="CAT 320 Hydraulic Excavator"
        type="Excavator"
        year="2022"
        location="Mumbai, Maharashtra"
      />

      {/* Pricing Cards */}
      <div className="flex gap-6 mt-8">

        <PricingCard
          price="₹20,000"
          label="Rent per shift (1 shift = 8 hrs)"
        />

        <PricingCard
          price="₹6,00,000"
          label="Rent per month"
        />

      </div>
      <ImageGallery />
      <VendorInfo
        name={name || "Admin User"}
        shopName={shopName || "Shop Name"}
        phone={phone || "+91 9876543210"}
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-3">
        {documents.map((doc, index) => (
            <InfoCard key={index} docName={doc.docName} status={doc.status} />
        ))}
        </div>

    </div>
  );
}

export default ProductView;