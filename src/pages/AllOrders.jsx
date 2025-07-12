import React, { useState } from "react";

const tabs = [
  "All Orders", "Awaiting", "Pending", "Processing", "In progress",
  "Completed", "Partial", "Canceled", "Refunded",
];

const dummyOrders = [
  {
    id: "ORD1234",
    details: "Instagram Followers",
    price: "$20",
    startCounter: "1500",
    remains: "200",
    orderAt: "2025-07-12",
    status: "Completed",
  },
  {
    id: "ORD5678",
    details: "Twitter Likes",
    price: "$15",
    startCounter: "500",
    remains: "0",
    orderAt: "2025-07-10",
    status: "Processing",
  },
  {
    id: "ORD9101",
    details: "YouTube Views",
    price: "$50",
    startCounter: "3000",
    remains: "300",
    orderAt: "2025-07-11",
    status: "Awaiting",
  },
  {
    id: "ORD1123",
    details: "Facebook Shares",
    price: "$12",
    startCounter: "1000",
    remains: "100",
    orderAt: "2025-07-09",
    status: "Pending",
  },
  {
    id: "ORD1314",
    details: "TikTok Likes",
    price: "$25",
    startCounter: "2000",
    remains: "250",
    orderAt: "2025-07-08",
    status: "Canceled",
  },
];

const darkMode = false;

const AllOrders = () => {
  const [activeTab, setActiveTab] = useState("All Orders");
  const [search, setSearch] = useState({ orderId: "", service: "", status: "All Status", date: "" });

  const filteredOrders = dummyOrders.filter((order) => {
    const matchesTab = activeTab === "All Orders" || order.status === activeTab;
    const matchesOrderId = search.orderId === "" || order.id.toLowerCase().includes(search.orderId.toLowerCase());
    const matchesService = search.service === "" || order.details.toLowerCase().includes(search.service.toLowerCase());
    const matchesStatus = search.status === "All Status" || order.status === search.status;
    const matchesDate = search.date === "" || order.orderAt === search.date;
    return matchesTab && matchesOrderId && matchesService && matchesStatus && matchesDate;
  });

  return (
    <div className={`pt-24 pb-10 transition-colors duration-300 ease-in-out min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">

        {/* Filters */}
        <div className={`grid md:grid-cols-5 gap-4 mb-6 p-4 rounded-xl shadow-md ${darkMode ? "bg-gray-800" : "bg-white"}`}>
          <input
            type="text"
            placeholder="Order ID"
            value={search.orderId}
            onChange={(e) => setSearch({ ...search, orderId: e.target.value })}
            className={`w-full px-4 py-2 rounded-md text-sm focus:ring-2 ${darkMode ? "bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:ring-yellow-400" : "bg-white border border-gray-300 text-gray-900 focus:ring-blue-500"}`}
          />
          <input
            type="text"
            placeholder="Service"
            value={search.service}
            onChange={(e) => setSearch({ ...search, service: e.target.value })}
            className={`w-full px-4 py-2 rounded-md text-sm focus:ring-2 ${darkMode ? "bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:ring-yellow-400" : "bg-white border border-gray-300 text-gray-900 focus:ring-blue-500"}`}
          />
          <select
            value={search.status}
            onChange={(e) => setSearch({ ...search, status: e.target.value })}
            className={`w-full px-4 py-2 rounded-md text-sm ${darkMode ? "bg-gray-700 border border-gray-600 text-white" : "bg-white border border-gray-300 text-gray-900"}`}
          >
            <option>All Status</option>
            {["Completed", "Processing", "Awaiting", "Pending", "Canceled"].map(status => (
              <option key={status}>{status}</option>
            ))}
          </select>
          <input
            type="date"
            value={search.date}
            onChange={(e) => setSearch({ ...search, date: e.target.value })}
            className={`w-full px-4 py-2 rounded-md text-sm ${darkMode ? "bg-gray-700 border border-gray-600 text-white" : "bg-white border border-gray-300 text-gray-900"}`}
          />
          <button
            className={`px-4 py-2 text-sm rounded-md font-semibold transition-colors ${
              darkMode ? "bg-yellow-400 text-gray-900 hover:bg-yellow-300" : "bg-blue-700 text-white hover:bg-blue-800"
            }`}
          >
            Search
          </button>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-6 text-sm font-semibold">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 rounded-full transition-colors ${
                activeTab === tab
                  ? darkMode
                    ? "bg-yellow-400 text-black"
                    : "bg-blue-700 text-white"
                  : darkMode
                  ? "text-white hover:bg-gray-700"
                  : "text-blue-800 hover:bg-blue-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className={`overflow-auto shadow-xl rounded-xl ${darkMode ? "bg-gray-800" : "bg-white"}`}>
          <table className="min-w-full table-auto text-sm">
            <thead className={`${darkMode ? "bg-gray-700 text-white" : "bg-blue-100 text-gray-900"}`}>
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Order ID</th>
                <th className="px-4 py-3 text-left font-semibold">Order Details</th>
                <th className="px-4 py-3 text-left font-semibold">Price</th>
                <th className="px-4 py-3 text-left font-semibold">Start Counter</th>
                <th className="px-4 py-3 text-left font-semibold">Remains</th>
                <th className="px-4 py-3 text-left font-semibold">Order AT</th>
                <th className="px-4 py-3 text-left font-semibold">Status</th>
                <th className="px-4 py-3 text-left font-semibold">More</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.length > 0 ? (
                filteredOrders.map((order) => (
                  <tr key={order.id} className={`border-t ${darkMode ? "border-gray-700" : "border-gray-200"} hover:bg-gray-100 dark:hover:bg-gray-700 transition`}>
                    <td className="px-4 py-2">{order.id}</td>
                    <td className="px-4 py-2">{order.details}</td>
                    <td className="px-4 py-2">{order.price}</td>
                    <td className="px-4 py-2">{order.startCounter}</td>
                    <td className="px-4 py-2">{order.remains}</td>
                    <td className="px-4 py-2">{order.orderAt}</td>
                    <td className="px-4 py-2">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold capitalize ${
                        order.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : order.status === "Processing"
                          ? "bg-yellow-100 text-yellow-700"
                          : order.status === "Canceled"
                          ? "bg-red-100 text-red-700"
                          : "bg-gray-100 text-gray-800"
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-4 py-2">
                      <button className="text-blue-600 hover:underline text-sm">View</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="text-center py-6 text-blue-700 font-semibold">
                    No Data found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default AllOrders;
