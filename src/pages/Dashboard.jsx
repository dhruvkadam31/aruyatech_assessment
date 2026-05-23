import Sidebar from "../components/layout/SideBar";
import Listing from "./Listings";
import {Outlet} from "react-router-dom";

function Dashboard() {
  return (
    <div className="flex h-screen">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 bg-white overflow-y-auto">

        <div className="py-6 px-4 border-b border-gray-300">
          <p className="text-sm text-gray-500">
            Admin Portal
          </p>
        </div>

          <Outlet />
      </div>

    </div>
  );
}

export default Dashboard;