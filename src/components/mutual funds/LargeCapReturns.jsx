import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const LargeCapReturns = () => {
  const [returnsData, setReturnsData] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(`Fetching data for ${type} returns...`);
        const response = await axios.get(`http://localhost:5000/get_large_cap_mutual_funds_${type}`);
        let responseData;

        // Check if the response type is a string and parse it
        if (typeof response.data === 'string') {
          responseData = JSON.parse(response.data);
        } else {
          responseData = response.data;
        }

        console.log('Response Type:', typeof responseData);
        console.log('Response Data:', responseData);

        setReturnsData(responseData.top_mutual_funds || responseData.top_mutual_funds_3Y || responseData.top_mutual_funds_5Y || responseData.top_mutual_funds_10Y || []);
      } catch (error) {
        console.error(`Error fetching large cap returns data for ${type} returns:`, error);
      }
    };

    fetchData();
  }, [type]);

  return (
    <div className='bg-gradient-to-br from-black via-gray-900 to-gray-800'>
    <div className="p-6 text-white min-h-screen">
      <h2 className="text-4xl text-green-400 font-bold mb-8">
        Large Cap Equity Funds based on {type === '1Y' ? '1 Year' : type === '3Y' ? '3 Year' : type === '5Y' ? '5 Year' : type === '10Y' ? '10 Year' : 'Unknown'} Returns
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-green-400 text-white">
          <thead>
            <tr>
              <th className="border border-green-400">Rank</th>
              <th className="border border-green-400">Scheme Name</th>
              <th className="border border-green-400">
                {type === '1Y' ? '1Y Returns (%)' : type === '3Y' ? '3Y Returns (%)' : type === '5Y' ? '5Y Returns(%) ' : type === '10Y' ? '10Y Returns (%) ' : 'Unknown'}
              </th>
              <th className="border border-green-400">AuM (Cr)</th>
            </tr>
          </thead>
          <tbody>
            {returnsData?.map((fund) => (
              <tr key={fund.Rank}>
                <td className="border border-green-400 text-center">{fund.Rank}</td>
                <td className="border border-green-400 text-center">{fund['Scheme Name']}</td>
                <td className="border border-green-400 text-center">{fund[type]}</td>
                <td className="border border-green-400 text-center">{fund['AuM (Cr)']}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default LargeCapReturns;
