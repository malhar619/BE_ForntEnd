import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="mx-auto p-4 shadow-md border rounded-lg shadow-md bg-gray-900 bg-opacity-90 p-8">
        <h1 className="text-3xl font-semibold mb-6 text-green-400">About Us</h1>

        <div className="p-6 shadow-md text-white rounded-md">
          <h2 className="text-xl font-semibold mb-4">Our Team</h2>
          <ul className="list-disc pl-4">
            <li>Malhar Kulkarni</li>
            <li>Manohar Dudhat</li>
            <li>Aditya Dhumal</li>
          </ul>
          <div className="mb-8"></div>
          <h2 className="text-xl font-semibold mb-4">What We Offer</h2>
          <ul className="list-disc pl-4">
            <li>Option Chain Visualization</li>
            <li>Stock Analysis and Suggestions</li>
            <li>Mutual Fund Suggestions</li>
            <li>Undervalued Stock Identifier</li>
            <li>Intrinsic Value Calculator</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
