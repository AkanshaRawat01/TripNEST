import React from 'react';

const FlightResults = ({ flights }) => {
  // If no flights are provided or the array is empty, display a message.
  if (!flights || flights.length === 0) {
    return (
      <div className="text-center py-12 text-gray-600 text-lg">
        No flights found. Please try a different search.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Map over the flights array to render each flight as a card */}
      {flights.map((flight) => (
        <div key={flight.id} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition duration-300 ease-in-out">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{flight.airline}</h3>
          <p className="text-gray-600 mb-1">
            <span className="font-semibold">Route:</span> {flight.origin} to {flight.destination}
          </p>
          <p className="text-gray-600 mb-1">
            <span className="font-semibold">Departure:</span> {flight.departureTime} on {flight.date}
          </p>
          <p className="text-gray-600 mb-4">
            <span className="font-semibold">Arrival:</span> {flight.arrivalTime}
          </p>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-extrabold text-blue-600">
              {flight.currency} {flight.price}
            </span>
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105">
              Select
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlightResults;