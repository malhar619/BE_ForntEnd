import React, { useState } from 'react';
import backgroundImage from '../background/background.jpg'; // Import the background image

const UndervaluedStockIdentifier = () => {
  const [futureGrowth, setFutureGrowth] = useState('');
  const [dividendYield, setDividendYield] = useState('');
  const [peRatio, setPeRatio] = useState('');
  const [valuationResult, setValuationResult] = useState(null);

  const [futureGrowthError, setFutureGrowthError] = useState('');
  const [dividendYieldError, setDividendYieldError] = useState('');
  const [peRatioError, setPeRatioError] = useState('');

  const validateInputs = () => {
    let isValid = true;

    // Regular expression to match valid numeric formats
    const numericRegex = /^-?\d*\.?\d*$/;

    if (!futureGrowth || !numericRegex.test(futureGrowth)) {
      setFutureGrowthError('Future Growth must be a valid number');
      isValid = false;
    } else {
      setFutureGrowthError('');
    }

    if (!dividendYield || !numericRegex.test(dividendYield)) {
      setDividendYieldError('Dividend Yield must be a valid number');
      isValid = false;
    } else {
      setDividendYieldError('');
    }

    if (!peRatio || !numericRegex.test(peRatio)) {
      setPeRatioError('P/E Ratio must be a valid number');
      isValid = false;
    } else {
      setPeRatioError('');
    }

    return isValid;
  };

  const calculateValuation = () => {
    if (!validateInputs()) {
      return;
    }

    // Convert input values to numbers
    const futureGrowthValue = parseFloat(futureGrowth);
    const dividendYieldValue = parseFloat(dividendYield);
    const peRatioValue = parseFloat(peRatio);

    // Perform the calculation
    const value = (futureGrowthValue + dividendYieldValue) / peRatioValue;

    // Update state with the result
    let label = '';
    if (value < 1) {
      label = 'Overvalued';
    } else if (value >= 1 && value <= 1.5) {
      label = 'Fairly Valued';
    } else if (value > 1.5 && value <= 2.4) {
      label = 'Undervalued';
    } else if (value > 2.5) {
      label = 'Very Undervalued';
    }
    setValuationResult(label);
  };

  return (
    <div className="flex items-center justify-center min-h-screen" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
      <div className="rounded-lg border  shadow-md p-6 max-w-md w-full " style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold mb-4 text-white">Undervalued Stock Identifier</h1>
          <p className="text-white">
            How to get specific stock details:
            <a href="https://finance.yahoo.com/" target="_blank" rel="noopener noreferrer" className="text-blue-300 ml-1 underline">
              Visit Yahoo Finance
            </a>
          </p>
        </div>


        <div className="flex flex-col space-y-4">

          <input
            id="ESP"
            type="text"
            placeholder="Future Growth of EPS"
            className={`p-2 rounded-full text-center border focus:outline-none focus:border-blue-500 ${futureGrowthError ? 'border-red-500' : 'border-gray-300'}`}
            value={futureGrowth}
            onChange={(e) => setFutureGrowth(e.target.value)}
          />
          {futureGrowthError && <p className="text-red-500 italic">{futureGrowthError}</p>}


          <input
            id="Div"
            type="text"
            placeholder="Dividend Yield"
            className={`p-2 rounded-full text-center border focus:outline-none focus:border-blue-500 ${dividendYieldError ? 'border-red-500' : 'border-gray-300'}`}
            value={dividendYield}
            onChange={(e) => setDividendYield(e.target.value)}
          />
          {dividendYieldError && <p className="text-red-500 italic">{dividendYieldError}</p>}



          <input
            id="pe"
            type="text"
            placeholder="P/E Ratio"
            className={`p-2 rounded-full text-center border focus:outline-none focus:border-blue-500  ${peRatioError ? 'border-red-500' : 'border-gray-300'}`}
            value={peRatio}
            onChange={(e) => setPeRatio(e.target.value)}
          />
          {peRatioError && <p className="text-red-500 italic">{peRatioError}</p>}
          <button
            className="btn bg-purple-500 text-center hover:bg-purple-700 text-white py-2 px-4 rounded-full cursor-pointer transition duration-300"
            onClick={calculateValuation}
          >
            Calculate Valuation
          </button>

          {valuationResult !== null && (
            <div className="mt-4">
              <p className="font-bold text-white">Valuation Result:</p>
              <p className="text-white">{valuationResult}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UndervaluedStockIdentifier;
