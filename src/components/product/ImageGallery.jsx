import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

function ImageGallery({ type = "Excavator" }) {
  const [mainLoaded, setMainLoaded] = useState(false);

  const images = [
    "https://images.unsplash.com/photo-1599707254554-027aeb4deacd?w=1200",
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200",
    "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200",
    "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=1200",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoomOpen, setZoomOpen] = useState(false);
  const activeImage = images[currentIndex];
  const machineType = type;

  useEffect(() => {
    setMainLoaded(false);
  }, [activeImage]);

    const nextImage = () => {
        setCurrentIndex((prev) =>
            prev === images.length - 1 ? 0 : prev + 1
        );
    };

    const prevImage = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        );
    };

  return (
    <div className="mt-8">

      {/* Main Image */}
      <div className="group relative overflow-hidden rounded-2xl border border-gray-200">
        {!mainLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100/90 text-gray-500">
            Loading image...
          </div>
        )}

        <img
          src={activeImage}
          alt={`${machineType} - image ${currentIndex + 1}`}
          loading="lazy"
          onLoad={() => setMainLoaded(true)}
          className="w-full h-[500px] object-cover"
        />

        {/* Machine type badge */}
        <div className="absolute top-4 left-4 rounded-full bg-gray-900 px-3 py-1 text-xs font-semibold text-white uppercase z-10">
          {machineType}
        </div>

        {/* Zoom icon overlay */}
        <button
          className="absolute top-4 right-4 bg-black bg-opacity-50 rounded-full p-2 cursor-pointer z-10"
          onClick={() => setZoomOpen(true)}
        >
          <ZoomIn className="w-5 h-5 text-white" />
        </button>

        {/* Left Arrow */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Image Counter */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Zoom modal */}
      {zoomOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setZoomOpen(false)}
        >
          <img
            src={activeImage}
            alt="Zoomed"
            className="max-h-[90%] max-w-[90%] rounded-xl shadow-lg"
          />
        </div>
      )}

      {/* Thumbnails */}
      <div className="flex gap-4 mt-4">

        {images.map((image, index) => (

          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-full overflow-hidden rounded-xl border-2 transition-all ${
              currentIndex === index
                ? "border-yellow-500"
                : "border-transparent"
            }`}
          >

            <img
              src={image}
              alt={`${machineType} thumbnail ${index + 1}`}
              loading="lazy"
              className="w-full h-24 object-cover hover:scale-105 transition-transform duration-200"
            />

          </button>

        ))}

      </div>

      <div className="py-4 flex flex-col gap-2">
        <p className="text-xl font-bold text-gray-800 mt-1">
          About this machine
        </p>
        <p className="text-xs text-gray-400">
            Well-maintained Caterpillar 320 GX hydraulic rxacavator available for short and long term rental in Mumbai and surrounding regions. Ideal for deep exacavation, foundation work, and demolition. Operator available on request at additional cost.
        </p>
    
      </div>

    </div>
  );
}

export default ImageGallery;