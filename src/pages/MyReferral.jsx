import { useState } from 'react'

const darkMode = false // toggle this to true to see dark mode

const dummyBonusData = [
  {
    sl: 1,
    user: 'john_doe',
    date: '12/07/2025',
    amount: '$25',
    remarks: 'Referral Bonus',
    time: '12:45 PM',
  },
  {
    sl: 2,
    user: 'jane_doe',
    date: '13/07/2025',
    amount: '$40',
    remarks: 'Milestone Bonus',
    time: '03:20 PM',
  },
]

const MyReferral = () => {
  const [search, setSearch] = useState('')
  const [date, setDate] = useState('')
  const [data, setData] = useState(dummyBonusData)

  const filtered = data.filter((item) =>
    item.user.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <section
      className={`min-h-screen w-full mt-35 px-4 py-8 md:px-10 ${
        darkMode ? 'bg-[#0f172a] text-white' : 'bg-white text-gray-900'
      }`}
    >
      <div className="max-w-7xl mx-auto space-y-6">

        {/* Search Fields */}
        <div
          className={`flex flex-col md:flex-row items-center gap-4 p-4 rounded-lg shadow ${
            darkMode ? 'bg-slate-800' : 'bg-white'
          }`}
        >
          <input
            type="text"
            placeholder="Search User"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={`w-full md:w-1/3 px-4 py-2 border rounded ${
              darkMode
                ? 'bg-slate-700 border-slate-600 text-white placeholder:text-slate-400'
                : 'bg-white border-gray-300'
            }`}
          />

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className={`w-full md:w-1/3 px-4 py-2 border rounded ${
              darkMode
                ? 'bg-slate-700 border-slate-600 text-white placeholder:text-slate-400'
                : 'bg-white border-gray-300'
            }`}
          />

          <button
            onClick={() => {}}
            className="w-full md:w-1/3 bg-blue-700 text-white py-2 px-6 rounded hover:bg-blue-800 transition"
          >
            Search
          </button>
        </div>

        {/* Bonus Table */}
        <div
          className={`rounded-lg shadow overflow-auto ${
            darkMode ? 'bg-slate-800' : 'bg-white'
          }`}
        >
          <table className="w-full text-sm text-left border-collapse">
            <thead
              className={`text-sm ${
                darkMode ? 'bg-slate-700 text-white' : 'bg-gray-300 text-black'
              }`}
            >
              <tr>
                <th className="px-4 py-3">SL No.</th>
                <th className="px-4 py-3">Bonus From</th>
                <th className="px-4 py-3">Amount</th>
                <th className="px-4 py-3">Remarks</th>
                <th className="px-4 py-3">Time</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length > 0 ? (
                filtered.map((bonus, i) => (
                  <tr
                    key={i}
                    className={`${
                      darkMode
                        ? 'hover:bg-slate-700 border-b border-slate-600'
                        : 'hover:bg-gray-100 border-b border-gray-200'
                    }`}
                  >
                    <td className="px-4 py-3">{bonus.sl}</td>
                    <td className="px-4 py-3">{bonus.user}</td>
                    <td className="px-4 py-3">{bonus.amount}</td>
                    <td className="px-4 py-3">{bonus.remarks}</td>
                    <td className="px-4 py-3">{bonus.time}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center py-6 text-gray-500 dark:text-gray-400"
                  >
                    No Data Found!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default MyReferral
