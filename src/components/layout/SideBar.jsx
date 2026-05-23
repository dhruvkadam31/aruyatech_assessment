import { NavLink, useLocation } from "react-router-dom";
import { listings } from "../../data/listings";

function Sidebar() {
  const { pathname } = useLocation();
  const onboardingActive = pathname === "/" || pathname.startsWith("/product");

  return (
    <div className="w-64 h-screen bg-linear-to-br from-zinc-900 via-zinc-900 to-slate-50 text-white flex flex-col">

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
                  ? "block px-4 py-2 rounded-lg mb-2 text-yellow-500 border border-yellow-500"
                  : "block px-4 py-2 rounded-lg mb-2 text-gray-300 hover:text-yellow-500 hover:border hover:border-yellow-500"
              }
            >
              <span className="flex items-center justify-between gap-2">
                <span>Onboarding</span>
                <span className="inline-flex h-6 min-w-[24px] items-center justify-center rounded-full bg-yellow-500 px-2 text-xs font-semibold text-black">
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
              Bookings
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
              Revenue
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
              Commission
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
              Team
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
              Payout
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
              Audit Logs
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