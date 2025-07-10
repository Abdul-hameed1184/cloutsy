import React, { useState } from "react";
import useThemeStore from "../store/useThemeStore";

const dummyData = [
  {
    id: "TXN12345",
    gateway: "Paystack",
    amount: "₦5,000",
    charge: "₦100",
    status: "Successful",
    time: "2025-07-09 12:45PM",
  },
  {
    id: "TXN67890",
    gateway: "Flutterwave",
    amount: "₦3,500",
    charge: "₦50",
    status: "Pending",
    time: "2025-07-08 9:10AM",
  },
  {
    id: "TXN54321",
    gateway: "Bank Transfer",
    amount: "₦10,000",
    charge: "₦200",
    status: "Failed",
    time: "2025-07-07 5:30PM",
  },
];

const Transactions = () => {
//   const { darkMode } = useThemeStore();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All Payment");

  const filteredData = dummyData.filter((txn) =>
    txn.id.toLowerCase().includes(search.toLowerCase())
  );

  const darkMode = false
  return (
    <div
      className={`min-h-screen w-full pt-30 px-4 md:px-6 ${
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
            placeholder="Type Here"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={`px-3 py-2 rounded-md border w-full md:w-1/4 ${
              darkMode
                ? "bg-gray-700 text-white border-gray-600 placeholder-gray-400"
                : "bg-white border-gray-300"
            }`}
          />
          <select
            className={`px-3 py-2 rounded-md border w-full md:w-1/4 ${
              darkMode
                ? "bg-gray-700 text-white border-gray-600"
                : "bg-white border-gray-300"
            }`}
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option>All Payment</option>
            <option>Paystack</option>
            <option>Flutterwave</option>
            <option>Bank Transfer</option>
          </select>
          <input
            type="date"
            className={`px-3 py-2 rounded-md border w-full md:w-1/4 ${
              darkMode
                ? "bg-gray-700 text-white border-gray-600"
                : "bg-white border-gray-300"
            }`}
          />
          <button
            className="w-full md:w-auto bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-2 rounded-md transition"
          >
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
                <th className="px-4 py-3">Transaction ID</th>
                <th className="px-4 py-3">Gateway</th>
                <th className="px-4 py-3">Amount</th>
                <th className="px-4 py-3">Charge</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Time</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((txn, idx) => (
                  <tr
                    key={idx}
                    className={`border-b ${
                      darkMode ? "border-gray-700" : "border-gray-200"
                    }`}
                  >
                    <td className="px-4 py-3">{txn.id}</td>
                    <td className="px-4 py-3">{txn.gateway}</td>
                    <td className="px-4 py-3">{txn.amount}</td>
                    <td className="px-4 py-3">{txn.charge}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`text-xs font-semibold px-2 py-1 rounded-full ${
                          txn.status === "Successful"
                            ? "bg-green-200 text-green-800 dark:bg-green-700 dark:text-white"
                            : txn.status === "Pending"
                            ? "bg-yellow-200 text-yellow-800 dark:bg-yellow-700 dark:text-white"
                            : "bg-red-200 text-red-800 dark:bg-red-700 dark:text-white"
                        }`}
                      >
                        {txn.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">{txn.time}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
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

export default Transactions;
