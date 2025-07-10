const NewOrderForm = ({ darkMode }) => {
  return (
    <div
      className={`rounded-md shadow-md p-4 m-4 ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold">New Order</h3>
        <button className="text-sm text-blue-600 font-semibold">Order History</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left side */}
        <div className="space-y-4">
          <div>
            <label className="block mb-1 text-sm">Category</label>
            <select className="w-full p-2 border rounded text-sm">
              <option>Select Category</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 text-sm">Service</label>
            <select className="w-full p-2 border rounded text-sm">
              <option>Select Service</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 text-sm">Link</label>
            <input type="text" placeholder="www.example.com/..." className="w-full p-2 border rounded text-sm" />
          </div>

          <div>
            <label className="block mb-1 text-sm">Quantity</label>
            <input type="number" className="w-full p-2 border rounded text-sm" defaultValue={0} />
          </div>

          <div>
            <label className="block mb-1 text-sm">Price</label>
            <input type="text" disabled value="0" className="w-full p-2 border rounded text-sm bg-gray-200" />
          </div>

          <label className="text-sm flex items-center gap-2">
            <input type="checkbox" />
            Yes, I have confirmed the order!
          </label>
        </div>

        {/* Right side */}
        <div className="space-y-4">
          <div>
            <label className="block mb-1 text-sm">Service name</label>
            <input type="text" disabled className="w-full p-2 border rounded text-sm bg-gray-200" />
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div>
              <label className="block mb-1 text-sm">Min</label>
              <input type="number" className="w-full p-2 border rounded text-sm" />
            </div>
            <div>
              <label className="block mb-1 text-sm">Max</label>
              <input type="number" className="w-full p-2 border rounded text-sm" />
            </div>
            <div>
              <label className="block mb-1 text-sm">Price per 1k</label>
              <input type="text" value="0" className="w-full p-2 border rounded text-sm bg-gray-200" disabled />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-sm">Description</label>
            <textarea className="w-full p-2 border rounded text-sm h-24" />
          </div>
        </div>
      </div>

      <button className="mt-6 w-full bg-blue-700 hover:bg-blue-800 text-white py-2 rounded">
        Place Order
      </button>
    </div>
  );
};

export default NewOrderForm;
