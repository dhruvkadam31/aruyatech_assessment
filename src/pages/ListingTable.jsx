import { useState } from 'react';
import { Eye, Check, X, Info } from 'lucide-react';
import Tooltip from '../components/ui/Tooltip';
import ReviewModal from '../components/product/ReviewModal';
import { useNavigate } from 'react-router-dom';
import { listings } from '../data/listings';

function ListingsTable({ searchQuery = "" }) {
  const navigate = useNavigate();
  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const [reviewType, setReviewType] = useState("approve");
  const [activeItem, setActiveItem] = useState(null);

  const normalizedSearch = searchQuery.trim().toLowerCase();
  const filteredListings = listings.filter((item) => {
    if (!normalizedSearch) return true;
    return Object.values(item).some((val) => {
      if (val === null || val === undefined) return false;
      return String(val).toLowerCase().includes(normalizedSearch);
    });
  });

  const openReviewModal = (type, item) => {
    setReviewType(type);
    setActiveItem(item);
    setReviewModalOpen(true);
  };

  const closeReviewModal = () => {
    setReviewModalOpen(false);
    setActiveItem(null);
  };

  const handleReviewConfirm = (reason) => {
    console.log(`${reviewType === "reject" ? "Rejected" : "Approved"} listing`, {
      item: activeItem,
      reason,
    });
    closeReviewModal();
  };

  return (
    <div className="mt-6 bg-white border border-gray-200 rounded-xl shadow-sm overflow-visible">

      <table className="w-full">

        <thead className="bg-orange-100  border-b border-gray-200">

          <tr className=" text-yellow-500">

            <th className="text-left p-4 text-sm ">
              MACHINE NAME
            </th>

            <th className="text-left p-4 text-sm ">
              VENDOR
            </th>

            <th className="text-left p-4 text-sm ">
              LOCATION
            </th>

            <th className="text-left p-4 text-sm ">
              PINCODE
            </th>

            <th className="text-left p-4 text-sm">

                    <Tooltip text="Price per month: Charged for full monthly usage">

                    <div className="flex items-center gap-1">
                      <span>PPM</span>
                      <Info className="w-4 h-4 text-gray-400" />
                    </div>

                </Tooltip>

            </th>

            <th className="text-left p-4 text-sm">

                <Tooltip text="Price per session: Charged per 8-hour shift">

                    <div className="flex items-center gap-1">
                      <span>PPS</span>
                      <Info className="w-4 h-4 text-gray-400" />
                    </div>

                </Tooltip>

            </th>

            <th className="text-left p-4 text-sm ">
              SUBMITTED
            </th>

            <th className="text-left p-4 text-sm ">
              ACTIONS
            </th>

          </tr>

        </thead>

        <tbody>
          {filteredListings.length === 0 ? (
            <tr>
              <td colSpan={8} className="p-4 text-center text-sm text-gray-500">
                No listings found.
              </td>
            </tr>
          ) : (
            filteredListings.map((item) => {
              return (
                <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="p-4 text-sm">
                    <div className="flex items-center gap-3">
                      <img
                        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=200"
                        alt={`Machine photo for ${item.machine}`}
                        loading="lazy"
                        className="w-12 h-10 rounded-md object-cover bg-gray-100"
                      />
                      <div>
                        {item.machine}
                        {item.type && (
                          <p className="text-blue-500 font-bold text-xs mt-1 border rounded-xl px-2 py-1 w-max border-blue-300 uppercase bg-blue-50">
                            {item.type}
                          </p>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-sm">
                    {item.vendor}
                    {item.phone && (
                      <p className="text-gray-400 text-xs mt-1">{item.phone}</p>
                    )}
                  </td>
                  <td className="p-4 text-sm">{item.location}</td>
                  <td className="p-4 text-sm">{item.pincode}</td>
                  <td className="p-4 text-sm">{item.ppm}</td>
                  <td className="p-4 text-sm">{item.pps}</td>
                  <td className="p-4 text-sm">{item.submitted}</td>
                  <td className="p-4 text-sm">
                    <div className="flex gap-2">
                      <button
                        onClick={() =>
                          navigate("/product", {
                            state: {
                              name: item.vendor,
                              shopName: item.shopName,
                              phone: item.phone,
                              type: item.type,
                              title: item.machine,
                            },
                          })
                        }
                        className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
                      >
                        <Eye className="w-4 h-4 text-gray-600" />
                      </button>
                      <button
                        onClick={() => openReviewModal("approve", item)}
                        className="w-8 h-8 rounded-full bg-green-500 text-white hover:bg-green-600 flex items-center justify-center"
                      >
                        <Check className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => openReviewModal("reject", item)}
                        className="w-8 h-8 rounded-full bg-red-500 text-white hover:bg-red-600 flex items-center justify-center"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>

      </table>

      <ReviewModal
        isOpen={reviewModalOpen}
        onClose={closeReviewModal}
        type={reviewType}
        item={activeItem}
        onConfirm={handleReviewConfirm}
      />

    </div>
  );
}

export default ListingsTable;