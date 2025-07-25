import React from 'react';

const ErrorMessage = ({ message }) => {
  if (!message) return null; // If no message is provided, render nothing.
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative mb-6 shadow-md" role="alert">
      <strong className="font-bold">Error!</strong>
      <span className="block sm:inline ml-2">{message}</span>
    </div>
  );
};

export default ErrorMessage; 
