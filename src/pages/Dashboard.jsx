import React from 'react';
import useThemeStore from '../store/useThemeStore';
import StatCards from '../components/dashboard/StatCard';
import NewOrderForm from '../components/dashboard/NewOrderForm';
import LatestTransactionTable from '../components/dashboard/LatestTransactionTable';

const Dashboard = () => {
//   const { darkMode } = useThemeStore(); // Use actual Zustand state

const darkMode = false
  return (
    <div
      className={`min-h-screen w-full pt-24 px-4 md:px-6 flex flex-col items-center ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
      }`}
    >
      <div className="w-full max-w-5xl space-y-6">
        <StatCards darkMode={darkMode} />
        <NewOrderForm darkMode={darkMode} />
        <LatestTransactionTable darkMode={darkMode} />
      </div>

    </div>
  );
};

export default Dashboard;
