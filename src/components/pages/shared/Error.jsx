// Error404.jsx
import React from 'react';
import {  useNavigate } from 'react-router-dom';

const Error404 = () => {
  const nav = useNavigate();

  const goBack = () => {
    nav('/course');
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <h1 className="text-4xl font-bold mb-4">404 - Not Found</h1>
      <button
        className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded"
        onClick={goBack}
      >
        Go Back
      </button>
    </div>
  );
};

export default Error404;
