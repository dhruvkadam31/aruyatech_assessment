import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Calendar,
  BarChart3,
  Percent,
  Users,
  Wallet,
  FileText,
} from "lucide-react";
import { listings } from "../../data/listings";

function Sidebar() {
  const { pathname } = useLocation();
  const onboardingActive = pathname === "/" || pathname.startsWith("/product");

  return (
    <div className="w-64 h-screen bg-gradient-to-b from-[#0b0f10] via-[#2b241f] to-[#1b1b1b] text-white flex flex-col shadow-xl">

      <div className="p-6 border-b border-gray-700">
        <h1 className="text-xl font-bold">
          SITEGRABB
        </h1>
      </div>

      <div className="flex-1 p-4">
        <p className="text-gray-400 text-sm mb-4">
          Main Menu
        </p>

        <ul>
          <li>
            <NavLink
              to="/"
              className={
                onboardingActive
                  ? "block px-4 py-2 rounded-lg mb-2 text-yellow-500 border border-yellow-500 bg-gradient-to-r from-[#0b0f10] to-transparent p-6 rounded-xl text-white"
                  : "block px-4 py-2 rounded-lg mb-2 text-gray-300 hover:text-yellow-500 hover:border hover:border-yellow-500"
              }
            >
              <span className="flex items-center justify-between gap-2">
                <span className="flex items-center gap-3">
                  <LayoutDashboard className="w-4 h-4" />
                  <span>Onboarding</span>
                </span>
                <span className="inline-flex h-6 min-w-[24px] items-center justify-center rounded-full bg-red-500 px-2 text-xs font-semibold text-white">
                  {listings.length}
                </span>
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/bookings"
              className={({ isActive }) =>
                `block px-4 py-2 rounded-lg mb-2 ${
                  isActive
                    ? "text-yellow-500 border border-yellow-500"
                    : "text-gray-300 hover:text-yellow-500 hover:border hover:border-yellow-500"
                }`
              }
            >
              <span className="flex items-center gap-3">
                <Calendar className="w-4 h-4" />
                <span>Bookings</span>
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/revenue"
              className={({ isActive }) =>
                `block px-4 py-2 rounded-lg mb-2 ${
                  isActive
                    ? "text-yellow-500 border border-yellow-500"
                    : "text-gray-300 hover:text-yellow-500 hover:border hover:border-yellow-500"
                }`
              }
            >
              <span className="flex items-center gap-3">
                <BarChart3 className="w-4 h-4" />
                <span>Revenue</span>
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/commission"
              className={({ isActive }) =>
                `block px-4 py-2 rounded-lg mb-2 ${
                  isActive
                    ? "text-yellow-500 border border-yellow-500"
                    : "text-gray-300 hover:text-yellow-500 hover:border hover:border-yellow-500"
                }`
              }
            >
              <span className="flex items-center gap-3">
                <Percent className="w-4 h-4" />
                <span>Commission</span>
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/team"
              className={({ isActive }) =>
                `block px-4 py-2 rounded-lg mb-2 ${
                  isActive
                    ? "text-yellow-500 border border-yellow-500"
                    : "text-gray-300 hover:text-yellow-500 hover:border hover:border-yellow-500"
                }`
              }
            >
              <span className="flex items-center gap-3">
                <Users className="w-4 h-4" />
                <span>Team</span>
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/payout"
              className={({ isActive }) =>
                `block px-4 py-2 rounded-lg mb-2 ${
                  isActive
                    ? "text-yellow-500 border border-yellow-500"
                    : "text-gray-300 hover:text-yellow-500 hover:border hover:border-yellow-500"
                }`
              }
            >
              <span className="flex items-center gap-3">
                <Wallet className="w-4 h-4" />
                <span>Payout</span>
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/audit-logs"
              className={({ isActive }) =>
                `block px-4 py-2 rounded-lg mb-2 ${
                  isActive
                    ? "text-yellow-500 border border-yellow-500"
                    : "text-gray-300 hover:text-yellow-500 hover:border hover:border-yellow-500"
                }`
              }
            >
              <span className="flex items-center gap-3">
                <FileText className="w-4 h-4" />
                <span>Audit Logs</span>
              </span>
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="p-4 border-t border-gray-700">
        <div className="flex items-center gap-3">

           <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold">
            A
          </div>

          <div>
            <p className="font-semibold">
              Admin User
            </p>

            <p className="text-sm text-gray-400">
              admin@sitegrabb.in
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Sidebar;