import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";

const DashboardUserHome = () => {
  const barData = [
    { month: "Jan", orders: 4 },
    { month: "Feb", orders: 6 },
    { month: "Mar", orders: 5 },
    { month: "Apr", orders: 8 },
    { month: "May", orders: 3 },
  ];

  const pieData = [
    { name: "Completed", value: 10 },
    { name: "Pending", value: 5 },
    { name: "Shipped", value: 3 },
  ];

  const COLORS = ["#000000", "#4B5563", "#9CA3AF"];

  return (
    <div className="md:p-6 min-h-screen bg-white text-black">
      <h1 className="text-2xl font-bold mb-6">User Dashboard Overview</h1>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-100 p-5 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold text-gray-700 mb-1">My Orders</h2>
          <p className="text-2xl font-bold">24</p>
        </div>
        <div className="bg-gray-100 p-5 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold text-gray-700 mb-1">Total Spend</h2>
          <p className="text-2xl font-bold">$1,230</p>
        </div>
        <div className="bg-gray-100 p-5 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold text-gray-700 mb-1">Wishlist Items</h2>
          <p className="text-2xl font-bold">8</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-gray-100 p-5 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Orders by Month</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={barData}>
              <XAxis dataKey="month" stroke="#000" />
              <YAxis stroke="#000" />
              <Tooltip />
              <Bar dataKey="orders" fill="#000" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-gray-100 p-5 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Status</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {pieData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Table */}
      <div className="bg-gray-100 p-5 rounded-xl shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-gray-700">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2">Order ID</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Amount</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2">#10234</td>
                <td className="px-4 py-2">May 1, 2025</td>
                <td className="px-4 py-2">$120</td>
                <td className="px-4 py-2">Completed</td>
              </tr>
              <tr>
                <td className="px-4 py-2">#10235</td>
                <td className="px-4 py-2">May 3, 2025</td>
                <td className="px-4 py-2">$95</td>
                <td className="px-4 py-2">Pending</td>
              </tr>
              <tr>
                <td className="px-4 py-2">#10236</td>
                <td className="px-4 py-2">May 5, 2025</td>
                <td className="px-4 py-2">$250</td>
                <td className="px-4 py-2">Shipped</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardUserHome;
