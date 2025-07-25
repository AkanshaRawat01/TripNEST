import React, { useState } from 'react';

const FlightSearchForm = ({ onSearch, isLoading }) => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departDate, setDepartDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [passengers, setPassengers] = useState(1);
  const [cabinClass, setCabinClass] = useState('Economy');
  const [tripType, setTripType] = useState('Return'); 

  const airports = [
   { code: 'JFK', name: 'New York (JFK)' },
    { code: 'LHR', name: 'London (LHR)' },
    { code: 'CDG', name: 'Paris (CDG)' },
    { code: 'DXB', name: 'Dubai (DXB)' },
    { code: 'LAX', name: 'Los Angeles (LAX)' },
    { code: 'DEL', name: 'Delhi (DEL)' },
    { code: 'BOM', name: 'Mumbai (BOM)' },
    { code: 'FRA', name: 'Frankfurt (FRA)' },
    { code: 'HND', name: 'Tokyo (HND)' },
    { code: 'SYD', name: 'Sydney (SYD)' },
    { code: 'BER', name: 'Berlin (BER)' },
    { code: 'FCO', name: 'Rome (FCO)' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!origin || !destination || !departDate) {
      alert('Please fill in origin, destination, and departure date.');
      return;
    }
    onSearch({ origin, destination, departDate, returnDate: tripType === 'Return' ? returnDate : '', passengers, cabinClass, tripType });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Trip Type Selector */}
      <div className="relative flex items-center px-6 pt-6 text-gray-700 font-semibold text-sm">
        <div className="group">
          <button
            type="button"
            className="flex items-center space-x-1 cursor-pointer focus:outline-none"
          >
          
            <span>{tripType}</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {/* Dropdown Menu */}
          <div className="absolute left-6 mt-2 w-32 bg-white rounded-lg shadow-lg py-1 z-20 hidden group-hover:block group-focus-within:block">
            <button
              type="button"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              onClick={() => setTripType('Return')}
            >
              Return
            </button>
            <button
              type="button"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              onClick={() => { setTripType('One way'); setReturnDate(''); }} // Clear return date for one-way
            >
              One way
            </button>
          </div>
        </div>
      </div>

      {tripType === 'Multi-city' ? ( 
        <div className="p-6 text-gray-700">
          <p className="text-lg font-semibold mb-4">Multi-city search is a complex feature.</p>
          <p className="text-sm">For this demo, please use 'Return' or 'One way' trip types.</p>
          <p className="text-sm mt-2">A full implementation would involve adding multiple origin/destination/date pairs.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-gray-200 mt-4 rounded-xl overflow-hidden">
          {/* Origin Input */}
          <div className="bg-white p-4 flex flex-col justify-center">
            <label htmlFor="origin" className="block text-gray-500 text-xs font-semibold mb-1 uppercase">From</label>
            <select
              id="origin"
              className="w-full text-gray-800 text-lg font-semibold bg-transparent focus:outline-none appearance-none"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              required
            >
              <option value="">Where from?</option>
              {airports.map(airport => (
                <option key={airport.code} value={airport.name}>{airport.name}</option>
              ))}
            </select>
          </div>

          {/* Destination Input */}
          <div className="bg-white p-4 flex flex-col justify-center">
            <label htmlFor="destination" className="block text-gray-500 text-xs font-semibold mb-1 uppercase">To</label>
            <select
              id="destination"
              className="w-full text-gray-800 text-lg font-semibold bg-transparent focus:outline-none appearance-none"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              required
            >
              <option value="">Where to?</option>
              {airports.map(airport => (
                <option key={airport.code} value={airport.name}>{airport.name}</option>
              ))}
            </select>
          </div>

          {/* Departure & Return Dates */}
          <div className="bg-white p-4 flex flex-col justify-center">
            <label htmlFor="departDate" className="block text-gray-500 text-xs font-semibold mb-1 uppercase">Departure {tripType === 'Return' ? '- Return' : ''}</label>
            <div className="flex items-center">
              <input
                type="date"
                id="departDate"
                className={`w-full text-gray-800 text-lg font-semibold bg-transparent focus:outline-none ${tripType === 'Return' ? 'pr-2 w-1/2' : ''}`}
                value={departDate}
                onChange={(e) => setDepartDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                required
              />
              {tripType === 'Return' && (
                <>
                  <span className="text-gray-400 mx-1">-</span>
                  <input
                    type="date"
                    id="returnDate"
                    className="w-1/2 text-lg font-semibold bg-transparent focus:outline-none pl-2"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    min={departDate || new Date().toISOString().split('T')[0]}
                  />
                </>
              )}
            </div>
          </div>

          {/* Passengers & Cabin Class */}
          <div className="bg-white p-4 flex items-center justify-between">
            <div className="flex flex-col justify-center flex-grow">
              <label htmlFor="passengers" className="block text-gray-500 text-xs font-semibold mb-1 uppercase">Passengers</label>
              <input
                type="number"
                id="passengers"
                className="w-full text-gray-800 text-lg font-semibold bg-transparent focus:outline-none appearance-none"
                value={passengers}
                onChange={(e) => setPassengers(Math.max(1, parseInt(e.target.value) || 1))}
                min="1"
              />
            </div>
            
            <div className="flex flex-col justify-center ml-4">
              <label htmlFor="cabinClass" className="block text-gray-500 text-xs font-semibold mb-1 uppercase">Class</label>
              <select
                id="cabinClass"
                className="w-full text-gray-800 text-lg font-semibold bg-transparent focus:outline-none appearance-none"
                value={cabinClass}
                onChange={(e) => setCabinClass(e.target.value)}
              >
                <option value="Economy">Economy</option>
                <option value="Premium Economy">Premium Economy</option>
                <option value="Business">Business</option>
                <option value="First">First</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Search Button */}
      <div className="flex justify-end p-6">
        <button
          type="submit"
          className={`bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-pink-300 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
          disabled={isLoading}
        >
          {isLoading ? 'Searching...' : 'Search Flights'}
        </button>
      </div>
    </form>
  );
};

export default FlightSearchForm;
