import { useState } from "react";

const darkMode = false; // Change to true for dark mode

const dummyTickets = [
  {
    id: 1,
    subject: "Payment not credited",
    status: "Open",
    lastReply: "2025-07-13 14:32",
  },
  {
    id: 2,
    subject: "Need invoice for last order",
    status: "Closed",
    lastReply: "2025-07-12 10:21",
  },
];

const ShowTicket = () => {
  const [tickets] = useState(dummyTickets);

  return (
    <section
      className={`min-h-screen px-4 mt-20 py-10 ${
        darkMode ? "bg-[#0f172a] text-white" : "bg-white text-gray-900"
      }`}
    >
      <div
        className={`w-full max-w-6xl mx-auto rounded-xl shadow-md overflow-hidden ${
          darkMode ? "bg-slate-800" : "bg-white"
        }`}
      >
        <table className="w-full table-auto text-sm border-collapse">
          <thead>
            <tr className={`${darkMode ? "bg-slate-700" : "bg-gray-300"}`}>
              <th className="px-4 py-3 text-left font-semibold">Subject</th>
              <th className="px-4 py-3 text-left font-semibold">Status</th>
              <th className="px-4 py-3 text-left font-semibold">Last Reply</th>
              <th className="px-4 py-3 text-left font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {tickets.length > 0 ? (
              tickets.map((ticket) => (
                <tr
                  key={ticket.id}
                  className={`${
                    darkMode ? "hover:bg-slate-700" : "hover:bg-gray-100"
                  } transition`}
                >
                  <td className="px-4 py-3">{ticket.subject}</td>
                  <td className="px-4 py-3">{ticket.status}</td>
                  <td className="px-4 py-3">{ticket.lastReply}</td>
                  <td className="px-4 py-3">
                    <button className="text-blue-600 hover:underline">
                      View
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="px-4 py-6 text-center text-gray-500">
                  No Data Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ShowTicket
