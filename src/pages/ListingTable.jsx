import Tooltip from '../components/ui/Tooltip';

function ListingsTable() {
  const listings = [
  {
    id: 1,
    machine: "CAT 320 Hydraulic Excavator",
    type: "Excavator",
    vendor: "Ramesh Sharma",
    phone: "+91 9876543210",
    location: "Madhya Pradesh",
    pincode: "480070",
    ppm: "₹2,00,190",
    pps: "₹20,190",
    submitted: "Today",
  },

  {
    id: 2,
    machine: "CAT 320 Hydraulic Excavator",
    type: "Excavator",
    vendor: "Krishna Kumar Palliyadali",
    phone: "+91 9876543210",
    location: "Mumbai",
    pincode: "480001",
    ppm: "₹2,00,190",
    pps: "₹20,190",
    submitted: "1 day ago",
  },

  {
    id: 3,
    machine: "CAT 320 Hydraulic Excavator",
    type: "Excavator",
    vendor: "Giriraj Sahu",
    phone: "+91 9876543210",
    location: "Delhi",
    pincode: "400870",
    ppm: "₹2,00,190",
    pps: "₹20,190",
    submitted: "1 day ago",
  },

  {
    id: 4,
    machine: "CAT 320 Hydraulic Excavator",
    type: "Excavator",
    vendor: "Kheman Pawar",
    phone: "+91 9876543210",
    location: "Pune",
    pincode: "400070",
    ppm: "₹2,00,190",
    pps: "₹20,190",
    submitted: "2 days ago",
  },
];

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
                        <span className="text-gray-400 text-xs">ⓘ</span>
                        </div>

                    </Tooltip>

            </th>

            <th className="text-left p-4 text-sm">

                <Tooltip text="Price per session: Charged per 8-hour shift">

                    <div className="flex items-center gap-1">
                    <span>PPS</span>
                    <span className="text-gray-400 text-xs">ⓘ</span>
                    </div>

                </Tooltip>

            </th>

            <th className="text-left p-4 text-sm ">
              submitted
            </th>

            <th className="text-left p-4 text-sm ">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

            {listings.map((item) => (

                <tr
                key={item.id}
                className="border-b border-gray-100 hover:bg-gray-50"
                >

                <td className="p-4 text-sm">
                    <div className="flex items-center gap-3">
                        
                        <img
                            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=200"
                            alt="machine"
                            className="w-12 h-10 rounded-md object-cover"
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
                    <p className="text-gray-400 text-xs mt-1">
                        {item.phone}
                    </p>
                    )}
                </td>

                <td className="p-4 text-sm">
                    {item.location}
                </td>

                <td className="p-4 text-sm">
                    {item.pincode}
                </td>

                <td className="p-4 text-sm">
                    {item.ppm}
                </td>

                <td className="p-4 text-sm">
                    {item.pps}
                </td>

                <td className="p-4 text-sm">
                    {item.submitted}
                </td>

                <td className="p-4 text-sm">
                    <div className="flex gap-2">

                        {/* View */}
                        <button className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200">
                        👁
                        </button>

                        {/* Approve */}
                        <button className="w-8 h-8 rounded-full bg-green-500 text-white hover:bg-green-600">
                        ✓
                        </button>

                        {/* Reject */}
                        <button className="w-8 h-8 rounded-full bg-red-500 text-white hover:bg-red-600">
                        ✕
                        </button>

                    </div>                
                </td>

                </tr>

            ))}

        </tbody>

      </table>

    </div>
  );
}

export default ListingsTable;