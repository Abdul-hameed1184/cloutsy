import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Instagram Services",
    data: [
      {
        id: "101",
        name: "Instagram Likes",
        rate: 150,
        min: 10,
        max: 5000,
        desc: "Real likes for posts",
      },
      {
        id: "102",
        name: "Instagram Followers",
        rate: 250,
        min: 50,
        max: 10000,
        desc: "Active followers",
      },
    ],
  },
  {
    title: "Twitter Services",
    data: [
      {
        id: "201",
        name: "Twitter Retweets",
        rate: 100,
        min: 20,
        max: 2000,
        desc: "Boost your tweets",
      },
    ],
  },
  {
    title: "Twitter Services",
    data: [
      {
        id: "201",
        name: "Twitter Retweets",
        rate: 100,
        min: 20,
        max: 2000,
        desc: "Boost your tweets",
      },
    ],
  },
  {
    title: "Twitter Services",
    data: [
      {
        id: "201",
        name: "Twitter Retweets",
        rate: 100,
        min: 20,
        max: 2000,
        desc: "Boost your tweets",
      },
    ],
  },
  {
    title: "Twitter Services",
    data: [
      {
        id: "201",
        name: "Twitter Retweets",
        rate: 100,
        min: 20,
        max: 2000,
        desc: "Boost your tweets",
      },
    ],
  },
  {
    title: "Twitter Services",
    data: [
      {
        id: "201",
        name: "Twitter Retweets",
        rate: 100,
        min: 20,
        max: 2000,
        desc: "Boost your tweets",
      },
    ],
  },
  {
    title: "Twitter Services",
    data: [
      {
        id: "201",
        name: "Twitter Retweets",
        rate: 100,
        min: 20,
        max: 2000,
        desc: "Boost your tweets",
      },
    ],
  },
  {
    title: "Twitter Services",
    data: [
      {
        id: "201",
        name: "Twitter Retweets",
        rate: 100,
        min: 20,
        max: 2000,
        desc: "Boost your tweets",
      },
    ],
  },
  {
    title: "Twitter Services",
    data: [
      {
        id: "201",
        name: "Twitter Retweets",
        rate: 100,
        min: 20,
        max: 2000,
        desc: "Boost your tweets",
      },
    ],
  },
  {
    title: "Twitter Services",
    data: [
      {
        id: "201",
        name: "Twitter Retweets",
        rate: 100,
        min: 20,
        max: 2000,
        desc: "Boost your tweets",
      },
    ],
  },
];

const darkMode = false;

const Services = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  const navigate = useNavigate();

  const toggleDropdown = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } py-12 px-4 md:px-10`}
    >
      <div className="max-w-6xl mx-auto space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Our Services
        </h2>

        {services.map((service, i) => (
          <div
            key={i}
            className={`border rounded-xl overflow-hidden ${
              darkMode ? "border-gray-700" : "border-gray-200"
            }`}
          >
            <button
              onClick={() => toggleDropdown(i)}
              className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold focus:outline-none"
            >
              {service.title}
              {openIndex === i ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>

            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-4 pb-4"
                >
                  <div className="overflow-auto">
                    <table className="min-w-full table-auto text-sm border-collapse mt-2">
                      <thead>
                        <tr
                          className={`${
                            darkMode ? "bg-gray-800" : "bg-gray-100"
                          } text-left`}
                        >
                          <th className="px-4 py-2">ID</th>
                          <th className="px-4 py-2">Name</th>
                          <th className="px-4 py-2">Rate Per 1k</th>
                          <th className="px-4 py-2">Min</th>
                          <th className="px-4 py-2">Max</th>
                          <th className="px-4 py-2">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        {service.data.map((item) => (
                          <tr
                            key={item.id}
                            onClick={() => setSelectedService(item)}
                            className={`cursor-pointer hover:bg-blue-50 ${
                              darkMode ? "hover:bg-gray-800" : ""
                            } transition`}
                          >
                            <td className="px-4 py-2">{item.id}</td>
                            <td className="px-4 py-2">{item.name}</td>
                            <td className="px-4 py-2">{item.rate}</td>
                            <td className="px-4 py-2">{item.min}</td>
                            <td className="px-4 py-2">{item.max}</td>
                            <td className="px-4 py-2">{item.desc}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}

        {/* Modal */}
        {selectedService && (
          <div className="fixed inset-0 z-50 bg-white/10 backdrop-blur-sm flex items-center justify-center">
            <div
              className={`${
                darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
              } p-6 rounded-xl w-full max-w-md shadow-lg`}
            >
              <h3 className="text-xl font-bold mb-4">Service Details</h3>
              <ul className="space-y-2">
                <li>
                  <strong>ID:</strong> {selectedService.id}
                </li>
                <li>
                  <strong>Name:</strong> {selectedService.name}
                </li>
                <li>
                  <strong>Rate:</strong> {selectedService.rate}
                </li>
                <li>
                  <strong>Min:</strong> {selectedService.min}
                </li>
                <li>
                  <strong>Max:</strong> {selectedService.max}
                </li>
                <li>
                  <strong>Description:</strong> {selectedService.desc}
                </li>
              </ul>
              <div className="flex gap-6 items-center">
                <button
                  className="mt-6 px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
                  onClick={() => navigate("/user/dashboard")}
                >
                  order now
                </button>
                <button
                  onClick={() => setSelectedService(null)}
                  className="mt-6 px-4 py-2 rounded bg-red-400 text-white hover:bg-red-700"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
