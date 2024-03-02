import React from 'react';
import backgroundImage from '../background/background.jpg'; // Import the background image

const StreamlitApp = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
      <h1 className="text-3xl font-bold mb-6 text-green-400">Stock Prediction App</h1>
      <div className="border rounded-lg overflow-hidden shadow-md bg-white">
        <iframe
          title="Streamlit App"
          src="http://localhost:8501/"
          width="800"
          height="600"
          style={{ border: '4px solid #2BD463', borderRadius: '3px' }}
        />
      </div>
    </div>
  );
};

export default StreamlitApp;
