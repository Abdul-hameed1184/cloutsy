import React, { useState } from "react";

const darkMode = false;

const MassOrderPage = () => {
  const [massOrder, setMassOrder] = useState("");

  return (
    <div
      className={`pt-24 pb-10 min-h-screen transition-colors duration-300 ease-in-out ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
        <div
          className={`shadow-xl rounded-xl p-6 md:p-8 ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <h2 className="text-xl font-semibold mb-1">Mass Order</h2>
          <p
            className={`text-sm mb-4 ${
              darkMode ? "text-blue-400" : "text-blue-700"
            }`}
          >
            Each Order On New Line
          </p>
          <textarea
            rows="8"
            placeholder="e.g. 1 | 1199 | www.google.com"
            value={massOrder}
            onChange={(e) => setMassOrder(e.target.value)}
            className={`w-full p-4 text-sm rounded-md resize-none border ${
              darkMode
                ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                : "bg-white border-gray-300 text-gray-900 placeholder-gray-400"
            }`}
          ></textarea>

          <button
            onClick={() => alert("Submitted")}
            className={`w-full mt-6 py-3 rounded-full text-sm font-semibold transition-colors ${
              darkMode
                ? "bg-yellow-400 text-black hover:bg-yellow-300"
                : "bg-blue-700 text-white hover:bg-blue-800"
            }`}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default MassOrderPage;
