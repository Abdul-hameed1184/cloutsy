import { useState } from 'react'

const darkMode = false // Toggle for dark mode

const OpenTicket = () => {
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [file, setFile] = useState(null)

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ subject, message, file })
    // You can reset form here if needed
  }

  return (
    <section
      className={`min-h-screen flex items-center justify-center px-4 py-10 ${
        darkMode ? 'bg-[#0f172a] text-white' : 'bg-white text-gray-900'
      }`}
    >
      <form
        onSubmit={handleSubmit}
        className={`w-full max-w-2xl rounded-xl p-6 shadow-lg ${
          darkMode ? 'bg-slate-800' : 'bg-white'
        }`}
      >
        {/* Subject */}
        <div className="mb-4">
          <label className="block font-semibold mb-1">Subject</label>
          <input
            type="text"
            placeholder="Enter Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className={`w-full px-4 py-2 border rounded focus:outline-none ${
              darkMode
                ? 'bg-slate-700 text-white placeholder:text-slate-400 border-slate-600'
                : 'bg-white border-gray-300'
            }`}
          />
        </div>

        {/* Message */}
        <div className="mb-4">
          <label className="block font-semibold mb-1">Message</label>
          <textarea
            rows={4}
            placeholder="Enter Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`w-full px-4 py-2 border rounded resize-none focus:outline-none ${
              darkMode
                ? 'bg-slate-700 text-white placeholder:text-slate-400 border-slate-600'
                : 'bg-white border-gray-300'
            }`}
          />
        </div>

        {/* File Upload */}
        <div className="mb-6 flex flex-wrap items-center gap-2">
          <label
            className={`px-4 py-2 border rounded cursor-pointer ${
              darkMode
                ? 'bg-slate-700 border-slate-600 text-white'
                : 'bg-gray-100 border-gray-300 text-gray-700'
            }`}
          >
            Upload
            <input
              type="file"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
          <span className="text-sm">
            {file ? file.name : 'Choose file'}
          </span>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 rounded-full bg-blue-700 text-white font-semibold hover:bg-blue-800 transition"
        >
          Submit
        </button>
      </form>
    </section>
  )
}

export default OpenTicket
