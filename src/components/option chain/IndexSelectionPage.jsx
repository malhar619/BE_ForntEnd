import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import backgroundImage from '../background/background.jpg'; // Import the background image
import niftyLogo from './logos/nifty_logo.png'; // Import the Nifty logo
import bankNiftyLogo from './logos/banknifty_logo.png'; // Import the BankNifty logo
import finNiftyLogo from './logos/finnifty_logo.png'; // Import the FinNifty logo
import intrinsicLogo from './logos/intrinsic_logo.png'; // Import the Intrinsic logo
import underLogo from './logos/under_logo.png'; // Import the Under logo
import stockLogo from './logos/stock_logo.png'; // Import the Stock logo
import mutualLogo from './logos/mutual_logo.png'; // Import the Mutual logo

// Define the data for the main options
const options = [
  {
    name: 'Nifty',
    description: 'Nifty Charts',
    logo: niftyLogo, // Use the imported Nifty logo
  },
  {
    name: 'BankNifty',
    description: 'BankNifty Charts',
    logo: bankNiftyLogo, // Use the imported BankNifty logo
  },
  {
    name: 'FinNifty',
    description: 'FinNifty Charts',
    logo: finNiftyLogo, // Use the imported FinNifty logo
  },
  {
    name: 'Intrinsic Value',
    description: 'Calculate Intrinsic Value',
    logo: intrinsicLogo, // Use the imported Intrinsic logo
  },
  {
    name: 'Valuation',
    description: 'Identify Stock Valuation',
    logo: underLogo, // Use the imported Under logo
  },
  {
    name: 'Stocks',
    description: 'Stock Analysis',
    logo: stockLogo, // Use the imported Stock logo
  },
  {
    name: 'Mutual Funds',
    description: 'Mutual Fund Suggetion',
    logo: mutualLogo, // Use the imported Mutual logo
  },
];

const IndexSelectionPage = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    navigate(`/${option}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative">
      <div className="absolute top-0 left-0 right-0 bottom-0 z-10">
        <img
          src={backgroundImage}
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="h-full w-full backdrop-filter backdrop-blur-sm"></div>
      </div>
      <div className="z-20 relative">
        <h1 className="text-3xl font-bold mb-6 text-center text-white">Select Option</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {options.map((option) => (
            <div
              key={option.name}
              className="cursor-pointer bg-white rounded-lg shadow-md overflow-hidden relative group transform transition hover:scale-110"
              onClick={() => handleOptionSelect(option.name)}
            >
              <div className="p-4">
                <img src={option.logo} alt={option.name} className="w-12 h-12 mb-2 mx-auto" />
                <h2 className="text-lg font-semibold text-center">{option.name}</h2>
                <p className="text-sm text-center text-gray-600">{option.description}</p>
              </div>
              <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-75 transition-opacity"></div>
              <div className="absolute inset-x-0 bottom-0 h-1 bg-blue-500 origin-left transform scale-x-0 transition-transform group-hover:scale-x-100"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndexSelectionPage;
