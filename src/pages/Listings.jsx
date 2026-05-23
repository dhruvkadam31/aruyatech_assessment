import { useState } from "react";
import { Search, RefreshCcw } from "lucide-react";
import ListingTable from "./ListingTable";
import PlaceholderPage from "./PlaceholderPage";
import { listings } from "../data/listings";

function Listings() {
  const [activeTab, setActiveTab] = useState("new");
  const [search, setSearch] = useState("");

  return (
    <div className="px-4">

      
      <div className="py-6 flex justify-between items-start">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold text-gray-900">
            Onboarding
          </h1>
          <p className="text-gray-500 mt-2">
            Review and approve new machine listings before they go live.
          </p>
        </div>

        <button className="flex items-center gap-2 text-purple-600 text-sm font-medium hover:text-purple-800 whitespace-nowrap">
          <RefreshCcw className="w-4 h-4" />
          Refresh
        </button>
      </div>

        <div className="flex justify-between items-center border-b border-gray-200 ">

        {/* Tabs */}
        <div className="flex gap-6 text-sm font-medium">

            <button
            onClick={() => setActiveTab("new")}
            className={`pb-3 ${
                activeTab === "new"
                ? "border-b-2 border-yellow-500 "
                : "text-gray-500 hover:text-yellow-500"
            }`}
            >
            New Listings ({listings.length})
            </button>

            <button
            onClick={() => setActiveTab("change")}
            className={`pb-3 ${
                activeTab === "change"
                ? "border-b-2 border-yellow-500 "
                : "text-gray-500 hover:text-yellow-500"
            }`}
            >
            Change Requests
            </button>

            <button
            onClick={() => setActiveTab("published")}
            className={`pb-3 ${
                activeTab === "published"
                ? "border-b-2 border-yellow-500 "
                : "text-gray-500 hover:text-yellow-500"
            }`}
            >
            Published
            </button>

        </div>

        {/* Search */}
        <div className="relative mb-2">

          <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Machine Name or Order ID"
          className="w-80 border border-gray-300 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-yellow-500"
          />

          <span className="absolute left-3 top-2 text-gray-400">
            <Search className="w-4 h-4" />
          </span>

        </div>

   </div>

        {activeTab === "new" && <ListingTable searchQuery={search} />}
        {activeTab === "change" && <PlaceholderPage title="Change Requests" />}
        {activeTab === "published" && <PlaceholderPage title="Published" />}
  </div>



  );
}

export default Listings;