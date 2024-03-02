import React from 'react';
import backgroundImage from './components/background/background.jpg'; // Import the background image
import { Link } from 'react-router-dom';

const Mutual = () => {
  return (
    <div className="bg-cover bg-center min-h-screen flex items-center justify-center">
      <div className="border bg-gray-900 bg-opacity-50 rounded-lg p-8 text-center">
        <h1 className="text-4xl text-white font-extrabold mb-8">All Equity Mutual Funds</h1>
        <ul className="list-none space-y-6">
          <li>
            <Link
              to="/small-cap"
              className="inline-block px-6 py-3 bg-gradient-to-br from-black via-gray-900 to-gray-800 hover:from-black hover:via-gray-500 hover:to-gray-800 text-green-400 rounded-full transition duration-300"
            >
              Small Cap Equity Funds
            </Link>
          </li>
          <li>
            <Link
              to="/mid-cap"
              className="inline-block px-6 py-3 bg-gradient-to-br from-black via-gray-900 to-gray-800 hover:from-black hover:via-gray-500 hover:to-gray-800 text-green-400 rounded-full transition duration-300"
            >
              Mid Cap Equity Funds
            </Link>
          </li>
          <li>
            <Link
              to="/large-cap"
              className="inline-block px-6 py-3 bg-gradient-to-br from-black via-gray-900 to-gray-800 hover:from-black hover:via-gray-500 hover:to-gray-800 text-green-400 rounded-full transition duration-300"
            >
              Large Cap Equity Funds
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Mutual;
