import React from 'react';

const StaysResults = ({ stays }) => {
  if (!stays || stays.length === 0) {
    return (
      <div className="text-center py-12 text-gray-300 text-lg">
        No stays found. Please try a different search or location.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {stays.map((stay) => (
        <div key={stay.id} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition duration-300 ease-in-out text-gray-800">
          {stay.imageUrl && (
            <img
              src={stay.imageUrl}
              alt={stay.name}
              className="w-full h-40 object-cover rounded-xl mb-4"
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x250/E0E0E0/888888?text=Image+Not+Found'; }}
            />
          )}
          <h3 className="text-xl font-bold mb-2">{stay.name}</h3>
          <p className="text-gray-600 mb-1">
            <span className="font-semibold">Location:</span> {stay.location}
          </p>
          <p className="text-gray-600 mb-1">
            <span className="font-semibold">Dates:</span> {stay.checkIn} to {stay.checkOut}
          </p>
          <p className="text-gray-600 mb-4">
            <span className="font-semibold">Rating:</span> {stay.rating} / 5
          </p>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-extrabold text-blue-600">
              {stay.currency} {stay.price}
            </span>
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105">
              View Deal
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StaysResults;