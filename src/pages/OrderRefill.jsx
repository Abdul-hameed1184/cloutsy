import { useState } from 'react'

const darkMode = false

const statusTabs = [
  'All Orders', 'Awaiting', 'Pending', 'Processing', 'In progress',
  'Completed', 'Partial', 'Canceled', 'Refunded'
]

const dummyOrders = [
  {
    id: 'ORD001',
    details: 'Instagram Followers - 1000',
    price: '₦1,200',
    start: 1520,
    remains: 500,
    orderAt: '2025-07-10',
    status: 'Completed',
  },
  {
    id: 'ORD002',
    details: 'YouTube Views - 5000',
    price: '₦2,800',
    start: 3000,
    remains: 0,
    orderAt: '2025-07-09',
    status: 'Processing',
  },
  {
    id: 'ORD003',
    details: 'Twitter Retweets - 800',
    price: '₦900',
    start: 750,
    remains: 200,
    orderAt: '2025-07-08',
    status: 'Pending',
  },
  {
    id: 'ORD004',
    details: 'TikTok Likes - 2000',
    price: '₦1,500',
    start: 2100,
    remains: 0,
    orderAt: '2025-07-06',
    status: 'Canceled',
  },
]

const OrderRefill = () => {
  const [activeTab, setActiveTab] = useState('All Orders')

  const filteredOrders = activeTab === 'All Orders'
    ? dummyOrders
    : dummyOrders.filter(order => order.status === activeTab)

  return (
    <section className={`${darkMode ? 'bg-[#0f172a] text-white' : 'bg-white text-black'} py-10 px-4 md:mt-20 md:px-8`}>
      <div className="max-w-7xl mx-auto space-y-8">

        {/* Filter Bar */}
        <div className={`rounded-xl p-4 shadow ${darkMode ? 'bg-[#1e293b]' : 'bg-white'} flex flex-col lg:flex-row gap-4`}>
          <input
            type="text"
            placeholder="Order ID"
            className={`flex-1 border rounded-md px-4 py-2 outline-none text-sm
              ${darkMode ? 'bg-[#334155] text-white border-gray-700' : 'bg-gray-50 border-gray-300'}`}
          />
          <input
            type="text"
            placeholder="Service"
            className={`flex-1 border rounded-md px-4 py-2 outline-none text-sm
              ${darkMode ? 'bg-[#334155] text-white border-gray-700' : 'bg-gray-50 border-gray-300'}`}
          />
          <select
            className={`flex-1 border rounded-md px-4 py-2 text-sm outline-none
              ${darkMode ? 'bg-[#334155] text-white border-gray-700' : 'bg-gray-50 border-gray-300'}`}
          >
            <option value="">All Status</option>
            {statusTabs.map(status => (
              <option key={status} value={status}>{status}</option>
            ))}
          </select>
          <input
            type="date"
            className={`flex-1 border rounded-md px-4 py-2 outline-none text-sm
              ${darkMode ? 'bg-[#334155] text-white border-gray-700' : 'bg-gray-50 border-gray-300'}`}
          />
          <button
            className="px-6 py-2 bg-[#1d22f2] text-white rounded-md hover:bg-[#151adc] transition-all"
          >
            Search
          </button>
        </div>

        {/* Status Tabs */}
        <div className="overflow-auto">
          <div className="flex gap-4 whitespace-nowrap">
            {statusTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 rounded-md font-medium text-sm transition-all ${
                  activeTab === tab
                    ? 'bg-purple-500 text-white shadow'
                    : 'text-blue-800 hover:text-purple-600'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className={`rounded-xl overflow-hidden shadow ${darkMode ? 'bg-[#1e293b]' : 'bg-white'}`}>
          <table className="min-w-full text-sm text-left">
            <thead>
              <tr className={`font-semibold uppercase tracking-wide ${darkMode ? 'bg-[#334155] text-white' : 'bg-gray-200 text-black'}`}>
                <th className="px-4 py-3">Order ID</th>
                <th className="px-4 py-3">Order Details</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3">Start Counter</th>
                <th className="px-4 py-3">Remains</th>
                <th className="px-4 py-3">Order AT</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">More</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.length > 0 ? (
                filteredOrders.map((order) => (
                  <tr
                    key={order.id}
                    className={`${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition`}
                  >
                    <td className="px-4 py-2">{order.id}</td>
                    <td className="px-4 py-2">{order.details}</td>
                    <td className="px-4 py-2">{order.price}</td>
                    <td className="px-4 py-2">{order.start}</td>
                    <td className="px-4 py-2">{order.remains}</td>
                    <td className="px-4 py-2">{order.orderAt}</td>
                    <td className="px-4 py-2">
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${
                        order.status === 'Completed'
                          ? 'bg-green-100 text-green-800'
                          : order.status === 'Processing'
                          ? 'bg-blue-100 text-blue-800'
                          : order.status === 'Pending'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-4 py-2 text-blue-500 cursor-pointer hover:underline">Details</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="py-6 text-center text-blue-600 font-medium">
                    No Data found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500 mt-10">
          Copyright © 2025 <span className="font-semibold text-blue-700">PalashSMM</span>. All Rights Reserved
        </div>
      </div>
    </section>
  )
}

export default OrderRefill
