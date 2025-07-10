import React, { useState } from "react";
import useThemeStore from "../store/useThemeStore";

const dummyHistory = [
  {
    id: "TXN1001",
    remark: "Wallet top-up",
    amount: "₦3,000",
    time: "2025-07-05 2:45PM",
  },
  {
    id: "TXN1002",
    remark: "Promo bonus",
    amount: "₦1,500",
    time: "2025-07-04 10:30AM",
  },
  {
    id: "TXN1003",
    remark: "Refund",
    amount: "₦800",
    time: "2025-07-03 5:15PM",
  },
];

const History = () => {
//   const { darkMode } = useThemeStore();
  const [search, setSearch] = useState("");
  const [remark, setRemark] = useState("");

  const filteredHistory = dummyHistory.filter(
    (item) =>
      item.id.toLowerCase().includes(search.toLowerCase()) &&
      item.remark.toLowerCase().includes(remark.toLowerCase())
  );

  const darkMode = false

  return (
    <div
      className={`min-h-screen pt-30 px-4 md:px-6 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Filter Bar */}
        <div
          className={`rounded-md shadow-md p-4 flex flex-wrap gap-4 items-center justify-between ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <input
            type="text"
            placeholder="Search for Transaction ID"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={`px-3 py-2 rounded-md border w-full md:w-1/4 ${
              darkMode
                ? "bg-gray-700 text-white border-gray-600 placeholder-gray-400"
                : "bg-white border-gray-300"
            }`}
          />
          <input
            type="text"
            placeholder="Remark"
            value={remark}
            onChange={(e) => setRemark(e.target.value)}
            className={`px-3 py-2 rounded-md border w-full md:w-1/4 ${
              darkMode
                ? "bg-gray-700 text-white border-gray-600 placeholder-gray-400"
                : "bg-white border-gray-300"
            }`}
          />
          <input
            type="date"
            className={`px-3 py-2 rounded-md border w-full md:w-1/4 ${
              darkMode
                ? "bg-gray-700 text-white border-gray-600"
                : "bg-white border-gray-300"
            }`}
          />
          <button className="w-full md:w-auto bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-2 rounded-md transition">
            Search
          </button>
        </div>

        {/* Transaction Table */}
        <div
          className={`overflow-x-auto rounded-md shadow-md ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <table className="min-w-full text-sm">
            <thead>
              <tr
                className={`text-left font-semibold text-xs uppercase ${
                  darkMode
                    ? "bg-gray-700 text-gray-300"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                <th className="px-4 py-3">SL No.</th>
                <th className="px-4 py-3">Transaction ID</th>
                <th className="px-4 py-3">Amount</th>
                <th className="px-4 py-3">Remarks</th>
                <th className="px-4 py-3">Time</th>
              </tr>
            </thead>
            <tbody>
              {filteredHistory.length > 0 ? (
                filteredHistory.map((item, idx) => (
                  <tr
                    key={item.id}
                    className={`border-b ${
                      darkMode ? "border-gray-700" : "border-gray-200"
                    }`}
                  >
                    <td className="px-4 py-3">{idx + 1}</td>
                    <td className="px-4 py-3">{item.id}</td>
                    <td className="px-4 py-3">{item.amount}</td>
                    <td className="px-4 py-3">{item.remark}</td>
                    <td className="px-4 py-3">{item.time}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center py-6 text-gray-400 italic"
                  >
                    No transactions found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <footer className="text-center text-xs py-6 text-gray-500">
          Copyright © 2025 PalashSMM. All Rights Reserved
        </footer>
      </div>
    </div>
  );
};

export default History;
