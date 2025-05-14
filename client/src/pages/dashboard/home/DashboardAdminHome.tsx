import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const DashboardAdminHome = () => {
      const [stats] = useState({
    users: 1240,
    orders: 320,
    revenue: 15200,
  });

  const barData = [
    { month: "Jan", sales: 400 },
    { month: "Feb", sales: 300 },
    { month: "Mar", sales: 500 },
    { month: "Apr", sales: 700 },
  ];

  const pieData = [
    { name: "Books", value: 40 },
    { name: "Stationery", value: 25 },
    { name: "Electronics", value: 35 },
  ];

  const COLORS = ["#333", "#666", "#999"];

  const recentOrders = [
    { id: 1, product: "Notebook", customer: "Nasif", amount: "120৳" },
    { id: 2, product: "Pen", customer: "Tishma", amount: "40৳" },
    { id: 3, product: "Sketch Book", customer: "Hasan", amount: "250৳" },
  ];
  return (
    <div className="md:p-4 bg-white min-h-screen text-black">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      {/* Add your charts, cards, tables like we did earlier */}
      <div className="p-4 md:p-6 bg-white text-black min-h-screen space-y-8">
      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="bg-white border-gray-200 shadow-sm">
          <CardContent className="p-4">
            <p className="text-sm text-gray-500">Total Users</p>
            <h2 className="text-2xl font-bold text-black">{stats.users}</h2>
          </CardContent>
        </Card>
        <Card className="bg-white border-gray-200 shadow-sm">
          <CardContent className="p-4">
            <p className="text-sm text-gray-500">Total Orders</p>
            <h2 className="text-2xl font-bold text-black">{stats.orders}</h2>
          </CardContent>
        </Card>
        <Card className="bg-white border-gray-200 shadow-sm">
          <CardContent className="p-4">
            <p className="text-sm text-gray-500">Total Revenue</p>
            <h2 className="text-2xl font-bold text-black">{stats.revenue}৳</h2>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card className="bg-white border-gray-200 shadow-sm">
          <CardContent className="h-[300px] md:h-[350px] p-4">
            <h2 className="text-lg font-semibold mb-4 text-black">Monthly Sales</h2>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <XAxis dataKey="month" stroke="#333" />
                <YAxis stroke="#333" />
                <Tooltip />
                <Bar dataKey="sales" fill="#333" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-white border-gray-200 shadow-sm">
          <CardContent className="h-[300px] md:h-[350px] p-4">
            <h2 className="text-lg font-semibold mb-4 text-black">Category Distribution</h2>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  outerRadius={80}
                  label
                >
                  {pieData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Orders Table */}
      <Card className="bg-white border-gray-200 shadow-sm">
        <CardContent className="p-4">
          <h2 className="text-lg font-semibold mb-4 text-black">Recent Orders</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-t border-gray-300">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="p-2">#</th>
                  <th className="p-2">Product</th>
                  <th className="p-2">Customer</th>
                  <th className="p-2">Amount</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-100">
                    <td className="p-2">{order.id}</td>
                    <td className="p-2">{order.product}</td>
                    <td className="p-2">{order.customer}</td>
                    <td className="p-2">{order.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
    </div>
  );
};

export default DashboardAdminHome;
