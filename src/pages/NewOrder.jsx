import React from "react";
// import useThemeStore from "../store/useThemeStore";

const NewOrder = () => {
//   const { darkMode } = useThemeStore();

const darkMode = false

  return (
      <div
        className={`w-full max-w-6xl mx-auto md:mt-40 mb-10 px-4 sm:px-6 lg:px-8 pt-20 pb-8 rounded-lg shadow-md ${
          darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Add New Section */}
          <div>
            <h2 className="font-semibold text-lg mb-4">Add new</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Category
                </label>
                <select
                  className={`w-full border px-3 py-2 rounded-md ${
                    darkMode
                      ? "bg-gray-700 text-white border-gray-600"
                      : "bg-white border-gray-300"
                  }`}
                >
                  <option>Select Category</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Service
                </label>
                <select
                  className={`w-full border px-3 py-2 rounded-md ${
                    darkMode
                      ? "bg-gray-700 text-white border-gray-600"
                      : "bg-white border-gray-300"
                  }`}
                >
                  <option>Select a service</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Link</label>
                <input
                  type="url"
                  placeholder="www.example.com/your_profile_identity"
                  className={`w-full border px-3 py-2 rounded-md placeholder-gray-400 ${
                    darkMode
                      ? "bg-gray-700 text-white border-gray-600"
                      : "bg-white border-gray-300"
                  }`}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Quantity
                </label>
                <input
                  type="number"
                  placeholder="0"
                  className={`w-full border px-3 py-2 rounded-md ${
                    darkMode
                      ? "bg-gray-700 text-white border-gray-600"
                      : "bg-white border-gray-300"
                  }`}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Price</label>
                <input
                  type="text"
                  disabled
                  className={`w-full border px-3 py-2 rounded-md ${
                    darkMode
                      ? "bg-gray-700 text-white border-gray-600"
                      : "bg-gray-100 border-gray-300"
                  }`}
                />
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="confirm"
                  className="w-4 h-4 accent-blue-700"
                />
                <label
                  htmlFor="confirm"
                  className="text-sm text-blue-800 font-medium"
                >
                  Yes, I have confirmed the order!
                </label>
              </div>
              <button className="w-full bg-blue-800 text-white font-semibold py-2 rounded-full hover:bg-blue-900 transition">
                Place Order
              </button>
            </div>
          </div>

          {/* Order Resume Section */}
          <div>
            <h2 className="font-semibold text-lg mb-4">Order Resume</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Service name
                </label>
                <div
                  className={`w-full h-10 rounded-md px-3 py-2 ${
                    darkMode
                      ? "bg-gray-700 text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                ></div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Minimum Amount
                  </label>
                  <input
                    type="number"
                    className={`w-full px-3 py-2 rounded-md border ${
                      darkMode
                        ? "bg-gray-700 text-white border-gray-600"
                        : "bg-gray-100 border-gray-300"
                    }`}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Maximum Amount
                  </label>
                  <input
                    type="number"
                    className={`w-full px-3 py-2 rounded-md border ${
                      darkMode
                        ? "bg-gray-700 text-white border-gray-600"
                        : "bg-gray-100 border-gray-300"
                    }`}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Price per 1k
                  </label>
                  <input
                    type="number"
                    value="0"
                    disabled
                    className={`w-full px-3 py-2 rounded-md border ${
                      darkMode
                        ? "bg-gray-700 text-white border-gray-600"
                        : "bg-gray-100 border-gray-300"
                    }`}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Description
                </label>
                <textarea
                  rows={5}
                  className={`w-full px-3 py-2 rounded-md border ${
                    darkMode
                      ? "bg-gray-700 text-white border-gray-600"
                      : "bg-gray-100 border-gray-300"
                  }`}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default NewOrder;
