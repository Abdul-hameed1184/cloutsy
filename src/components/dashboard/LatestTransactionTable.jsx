const LatestTransactionTable = ({ darkMode }) => (
  <div
    className={`rounded-md shadow-md m-4 p-4 ${
      darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
    }`}
  >
    <h4 className="font-semibold mb-2">Latest Transaction</h4>
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm border">
        <thead
          className={`text-left ${
            darkMode ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-600"
          }`}
        >
          <tr>
            <th className="px-4 py-2">Transaction ID</th>
            <th className="px-4 py-2">Amount</th>
            <th className="px-4 py-2">Remarks</th>
            <th className="px-4 py-2">Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="4" className="text-center text-gray-500 p-4">
              No recent transactions
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default LatestTransactionTable;
