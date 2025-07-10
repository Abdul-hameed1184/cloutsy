const StatCards = ({ darkMode }) => {
  const stats = [
    { label: "Account Balance", value: "NGN 0", icon: "🍔" },
    { label: "Total Orders", value: "0", icon: "📊" },
    { label: "Account Status", value: "ACTIVE", icon: "🏆" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className={`rounded-md shadow-md p-4 ${
            darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
          }`}
        >
          <div className="text-2xl mb-2">{stat.icon} {stat.value}</div>
          <div className="text-sm text-gray-500">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default StatCards;
