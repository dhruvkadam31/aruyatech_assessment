import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import ProductHeader from "../components/product/ProductHeader";
import PricingCard from "../components/product/PricingCard";
import ImageGallery from "../components/product/ImageGallery";
import VendorInfo from "../components/product/VendorInfo";
import InfoCard from "../components/product/InfoCard";
import ReviewModal from "../components/product/ReviewModal";

function ProductView() {
  const location = useLocation();
  const { name, phone, shopName, type, title } = location.state || {};
  const [reviewOpen, setReviewOpen] = useState(false);
  const [reviewType, setReviewType] = useState("approve");

  const documents = [
  { docName: "PAN Card", status: "yes" },
  { docName: "RC (Registration Certificate)", status: "yes" },
  { docName: "Insurance", status: "yes" },
  { docName: "GST Certificate", status: "yes" },
];

  const openReview = (type) => {
    setReviewType(type);
    setReviewOpen(true);
  };

  const closeReview = () => {
    setReviewOpen(false);
  };

  const handleReviewConfirm = (reason) => {
    console.log(`${reviewType === "reject" ? "Rejected" : "Approved"} product view`, {
      title,
      reason,
    });
    closeReview();
  };

  return (
    <div className="p-6">

      {/* Breadcrumb */}
      <div className="text-sm text-gray-400 flex items-center gap-2">
        <Link to="/" className="inline-flex items-center gap-2 hover:text-gray-200">
          <ChevronLeft className="w-4 h-4" />
          New Listings
        </Link>
        <span className="mx-2 text-gray-300 font-medium">/</span>
        <span className="font-bold text-black">{type || "Excavator"}</span>
      </div>

      {/* Header */}
      <ProductHeader
        title={title || "CAT 320 Hydraulic Excavator"}
        type={type || "Excavator"}
        year="2022"
        location="Mumbai, Maharashtra"
        onApprove={() => openReview("approve")}
        onReject={() => openReview("reject")}
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
      <ImageGallery type={type || "Excavator"} />
      <VendorInfo
        name={name || "Admin User"}
        shopName={shopName || "Shop Name"}
        phone={phone || "+91 9876543210"}
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-3 auto-rows-fr">
        {documents.map((doc, index) => (
            <InfoCard key={index} docName={doc.docName} status={doc.status} />
        ))}
      </div>

      <ReviewModal
        isOpen={reviewOpen}
        onClose={closeReview}
        type={reviewType}
        item={{ machine: title, vendor: name, shopName, phone }}
        onConfirm={handleReviewConfirm}
      />

    </div>
  );
}

export default ProductView;