function Sidebar() {
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
          <li className="text-gray-300 px-4 py-2 rounded-lg hover:text-yellow-500 hover:border hover:border-yellow-500 cursor-pointer mb-2">
            Onboarding
          </li>
          <li className="text-gray-300 px-4 py-2 rounded-lg hover:text-yellow-500 hover:border hover:border-yellow-500 cursor-pointer mb-2">
            Bookings
          </li>
          <li className="text-gray-300 px-4 py-2 rounded-lg hover:text-yellow-500 hover:border hover:border-yellow-500 cursor-pointer mb-2">
            Revenue
          </li>
          <li className="text-gray-300 px-4 py-2 rounded-lg hover:text-yellow-500 hover:border hover:border-yellow-500 cursor-pointer mb-2">
            Commission 
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