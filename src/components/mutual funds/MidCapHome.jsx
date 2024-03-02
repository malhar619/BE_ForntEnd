import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MidCapReturns from './MidCapReturns';

const MidCapHome = () => {
  const [homeData, setHomeData] = useState([]);
  const [showReturns, setShowReturns] = useState(false);
  const navigate = useNavigate();

  const fetchHomeData = async () => {
    try {
      const response = await fetch('http://localhost:5000/mid_cap_data');
      const data = await response.json();
      setHomeData(data);
    } catch (error) {
      console.error('Error fetching home data:', error);
    }
  };

  useEffect(() => {
    fetchHomeData();
  }, []); // Fetch home data on component mount

  const handleButtonClick = (type) => {
    setShowReturns(true);
    navigate(`/mid-cap/returns/${type}`);
  };

  return (
    <div className='bg-gradient-to-br from-black via-gray-900 to-gray-800'>
    <div className="p-6 text-white min-h-screen">
      <h2 className="text-4xl text-green-400 font-bold mb-8">Mid Cap Equity Funds</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <button
          onClick={() => handleButtonClick('1Y')}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full transition duration-300"
        >
          Top Funds (1 Year Returns)
        </button>
        <button
          onClick={() => handleButtonClick('3Y')}
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full transition duration-300"
        >
          Top Funds (3 Year Returns)
        </button>
        <button
          onClick={() => handleButtonClick('5Y')}
          className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-full transition duration-300"
        >
          Top Funds (5 Year Returns)
        </button>
      </div>

      <h3 className="text-2xl text-green-400 font-bold mt-8 mb-4">All Mid Cap Equity Funds Data and Returns</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full text-white border border-green-400">
          <thead>
            <tr>
              <th className="border border-green-400">Scheme Name</th>
              <th className="border border-green-400">AuM (Cr)</th>
              <th className="border border-green-400">Crisil Rank</th>
              <th className="border border-green-400">1W returns (%)</th>
              <th className="border border-green-400">1M returns (%)</th>
              <th className="border border-green-400">3M returns (%)</th>
              <th className="border border-green-400">6M returns (%)</th>
              <th className="border border-green-400">1Y returns (%)</th>
              <th className="border border-green-400">2Y returns (%)</th>
              <th className="border border-green-400">3Y returns (%)</th>
              <th className="border border-green-400">5Y returns (%)</th>
              <th className="border border-green-400">10Y returns (%)</th>
              <th className="border border-green-400">YTD</th>
            </tr>
          </thead>
          <tbody>
            {homeData.map((fund) => (
              <tr key={`${fund['Scheme Name']}_${fund['Crisil Rank']}`}>
                <td className="border border-green-400 text-center">{fund['Scheme Name']}</td>
                <td className="border border-green-400 text-center">{fund['AuM (Cr)']}</td>
                <td className="border border-green-400 text-center">{fund['Crisil Rank']}</td>
                <td className="border border-green-400 text-center">{fund['1W']}</td>
                <td className="border border-green-400 text-center">{fund['1M']}</td>
                <td className="border border-green-400 text-center">{fund['3M']}</td>
                <td className="border border-green-400 text-center">{fund['6M']}</td>
                <td className="border border-green-400 text-center">{fund['1Y']}</td>
                <td className="border border-green-400 text-center">{fund['2Y']}</td>
                <td className="border border-green-400 text-center">{fund['3Y']}</td>
                <td className="border border-green-400 text-center">{fund['5Y']}</td>
                <td className="border border-green-400 text-center">{fund['10Y']}</td>
                <td className="border border-green-400 text-center">{fund['YTD']}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showReturns && <MidCapReturns />}
    </div>
    </div>
  );
};

export default MidCapHome;
