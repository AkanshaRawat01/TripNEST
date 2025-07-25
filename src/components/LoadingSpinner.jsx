import React from 'react';

const LoadingSpinners = () => {
  return (
    <div className="flex justify-center items-center py-8">
      
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
      <p className="ml-4 text-lg text-gray-700">Searching...</p>
    </div>
  );
};

export default LoadingSpinners; 

