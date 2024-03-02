// BankNifty.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import backgroundImage from '../background/background.jpg';
const PlotComponent = ({ plotType, additionalInfo }) => {
  const [plotUrl, setPlotUrl] = useState('');

  useEffect(() => {
    // Fetch the plot from the Flask server
    if (plotType) {
      axios.get(`http://localhost:5000/get_nifty_plot/${plotType}`, { responseType: 'blob' })
        .then(response => {
          const url = URL.createObjectURL(new Blob([response.data]));
          setPlotUrl(url);
        })
        .catch(error => console.error('Error fetching plot:', error));
    }
  }, [plotType]);

  return (
    <div className="border rounded-md p-4 my-4 shadow-md">
      {additionalInfo && (
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2 text-green-400">Additional Info:</h3>
          <ul className="list-disc ml-6 text-white">
            <li>{`Put Call Ratio: ${additionalInfo.put_call_ratio.toFixed(2)}`}</li>
            <li>{`Put OI Call OI Ratio: ${additionalInfo.put_oi_call_oi_ratio.toFixed(2)}`}</li>
          </ul>
        </div>
      )}
      {plotType && <h2 className="text-2xl font-bold mb-2 text-green-400">{`Plot: ${plotType}`}</h2>}
      {plotUrl && <img className="w-full rounded-md mb-4" src={plotUrl} alt={plotType} />}
    </div>
  );
};

function BankNifty() {
  const [plotsData, setPlotsData] = useState(null);

  useEffect(() => {
    // Fetch additional information and plots data from the Flask server
    axios.get('http://localhost:5000/get_nifty_plots')
      .then(response => setPlotsData(response.data))
      .catch(error => console.error('Error fetching plots data:', error));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-6"
    style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}
   >
      {plotsData && (
        <div className="max-w-screen-lg w-full">
          <PlotComponent additionalInfo={plotsData} />
          <PlotComponent plotType="oi" />
          <PlotComponent plotType="volume" />
          {/* Add more PlotComponent instances for other plot types if needed */}
        </div>
      )}
    </div>
  );
}

export default BankNifty;
