import React, { useState } from 'react';
import backgroundImage from '../background/background.jpg'; // Import the background image

const IntrinsicValueCalculator = () => {
  const [esp, setEsp] = useState('');
  const [growthRate, setGrowthRate] = useState('');
  const [yieldRate, setYieldRate] = useState('');
  const [intrinsicValue, setIntrinsicValue] = useState(null);

  const [espError, setEspError] = useState('');
  const [growthRateError, setGrowthRateError] = useState('');
  const [yieldRateError, setYieldRateError] = useState('');

  const validateInputs = () => {
    let isValid = true;

    // Regular expression to match valid numeric formats
    const numericRegex = /^-?\d*\.?\d*$/;

    if (!esp || !numericRegex.test(esp)) {
      setEspError('ESP must be a valid number');
      isValid = false;
    } else {
      setEspError('');
    }

    if (!growthRate || !numericRegex.test(growthRate)) {
      setGrowthRateError('Growth Rate must be a valid number');
      isValid = false;
    } else {
      setGrowthRateError('');
    }

    if (!yieldRate || !numericRegex.test(yieldRate)) {
      setYieldRateError('Yield Rate must be a valid number');
      isValid = false;
    } else {
      setYieldRateError('');
    }

    return isValid;
  };

  const calculateIntrinsicValue = () => {
    if (!validateInputs()) {
      return;
    }

    // Convert input values to numbers
    const espValue = parseFloat(esp);
    const growthRateValue = parseFloat(growthRate);
    const yieldRateValue = parseFloat(yieldRate);

    // Perform the calculation
    const calculatedValue = ((espValue * (8.5 + 2 * growthRateValue) * 4.4) / yieldRateValue).toFixed(2);

    // Update state with the result
    setIntrinsicValue(calculatedValue);
  };

  return (
    <div className="flex items-center  justify-center min-h-screen" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
      <div className=" rounded-lg rounded border shadow-md p-6 max-w-md w-full "style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold mb-4 text-white">Intrinsic Value Calculator</h1>
          <p className="text-white">
            How to get specific stock details: 
            <a href="https://finance.yahoo.com/" target="_blank" rel="noopener noreferrer" className="text-blue-300 ml-1 underline">
              Visit Yahoo Finance
            </a>
          </p>
        </div>

      <div className="flex flex-col space-y-4 ">
        <input
          type="text"
          placeholder="EPS (Earnings per Share)"
          className={`p-2 border text-center rounded-full focus:outline-none focus:border-blue-500 ${espError ? 'border-red-500' : 'border-gray-300'}`}
          value={esp}
          onChange={(e) => setEsp(e.target.value)}
        />
        {espError && <p className="text-red-500">{espError}</p>}

        <input
          type="text"
          placeholder="Growth Rate (g)"
          className={`p-2 border text-center rounded-full focus:outline-none focus:border-blue-500 ${growthRateError ? 'border-red-500' : 'border-gray-300'}`}
          value={growthRate}
          onChange={(e) => setGrowthRate(e.target.value)}
        />
        {growthRateError && <p className="text-red-500">{growthRateError}</p>}

        <input
          type="text"
          placeholder="Yield Rate (y)"
          className={`p-2 border text-center rounded-full focus:outline-none focus:border-blue-500 ${yieldRateError ? 'border-red-500' : 'border-gray-300'}`}
          value={yieldRate}
          onChange={(e) => setYieldRate(e.target.value)}
        />
        {yieldRateError && <p className="text-red-500">{yieldRateError}</p>}

        <button
          className="btn bg-purple-500 text-center hover:bg-purple-700 text-white py-2 px-4 rounded-full cursor-pointer transition duration-300"
          onClick={calculateIntrinsicValue}
        >
          Calculate
        </button>

        {intrinsicValue !== null && (
          <div className="mt-4">
            <p className="font-bold text-white">Calculated Intrinsic Value:</p>
            <p className="text-white">{intrinsicValue}</p>
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default IntrinsicValueCalculator;
