import React from 'react';

const CarRentalResults = ({ cars }) => {
  if (!cars || cars.length === 0) {
    return (
      <div className="text-center py-12 text-gray-300 text-lg">
        No car rentals found. Please try a different search.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cars.map((car, index) => (
        <div key={car.id || index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition duration-300 ease-in-out text-gray-800">
          {car.imageUrl && (
            <img
              src={car.imageUrl}
              alt={car.supplierName || 'Car'}
              className="w-full h-40 object-cover rounded-xl mb-4"
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x250/ADD8E6/00008B?text=Car+Image'; }}
            />
          )}
          <h3 className="text-xl font-bold mb-2">{car.supplierName || 'Unknown Supplier'}</h3>
          <p className="text-gray-600 mb-1">
            <span className="font-semibold">Category:</span> {car.carCategory || 'N/A'}
          </p>
          <p className="text-gray-600 mb-1">
            <span className="font-semibold">Model:</span> {car.carModel || 'N/A'}
          </p>
          <p className="text-gray-600 mb-4">
            <span className="font-semibold">Features:</span> {car.features?.join(', ') || 'N/A'}
          </p>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-extrabold text-blue-600">
              {car.currencyCode || 'USD'} {car.price?.amount || 'N/A'}
            </span>
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105">
              Book Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarRentalResults;