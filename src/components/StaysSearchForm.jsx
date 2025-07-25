import React, { useState } from 'react';

const StaysSearchForm = ({ onSearch, isLoading }) => {
  const [location, setLocation] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guests, setGuests] = useState(2);
  const [rooms, setRooms] = useState(1);

  
  const popularStayLocations = [
    'New Delhi, India',
    'London, UK',
    'Mumbai, India',
    'Dubai, UAE',
    'New York, USA',
    'Los Angeles, USA',
    'Paris, France',
    'Singapore, Singapore',
    'Tokyo, Japan',
    'Sydney, Australia',
    'Berlin, Germany',
    'Rome, Italy',
    'Barcelona, Spain',
    'Kyoto, Japan',
    'Cape Town, South Africa',
    'Rio de Janeiro, Brazil',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!location || !checkInDate || !checkOutDate) {
      alert('Please fill in location, check-in, and check-out dates.');
      return;
    }
    onSearch({ location, checkInDate, checkOutDate, guests, rooms });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden text-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200 mt-4 rounded-xl overflow-hidden">
        {/* Location Input - now a select dropdown */}
        <div className="bg-white p-4 flex flex-col justify-center col-span-full md:col-span-1">
          <label htmlFor="staysLocation" className="block text-gray-500 text-xs font-semibold mb-1 uppercase">Location</label>
          <select
            id="staysLocation"
            className="w-full text-lg font-semibold bg-transparent focus:outline-none appearance-none"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          >
            <option value="">Where to stay?</option>
            {popularStayLocations.map((loc, index) => (
              <option key={index} value={loc}>{loc}</option>
            ))}
          </select>
        </div>

        {/* Check-in & Check-out Dates */}
        <div className="bg-white p-4 flex flex-col justify-center col-span-full md:col-span-1">
          <label htmlFor="checkInDate" className="block text-gray-500 text-xs font-semibold mb-1 uppercase">Check-in - Check-out</label>
          <div className="flex items-center">
            <input
              type="date"
              id="checkInDate"
              className="w-1/2 text-lg font-semibold bg-transparent focus:outline-none pr-2"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
              required
            />
            <span className="text-gray-400 mx-1">-</span>
            <input
              type="date"
              id="checkOutDate"
              className="w-1/2 text-lg font-semibold bg-transparent focus:outline-none pl-2"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
              min={checkInDate || new Date().toISOString().split('T')[0]}
              required
            />
          </div>
        </div>

        {/* Rooms & Guests */}
        <div className="bg-white p-4 flex flex-col justify-center col-span-full md:col-span-1">
          <label htmlFor="guests" className="block text-gray-500 text-xs font-semibold mb-1 uppercase">Rooms & Guests</label>
          <div className="flex items-center">
            <input
              type="number"
              id="rooms"
              className="w-1/2 text-lg font-semibold bg-transparent focus:outline-none pr-2"
              value={rooms}
              onChange={(e) => setRooms(Math.max(1, parseInt(e.target.value) || 1))}
              min="1"
            />
            <span className="text-gray-400 mx-1">room,</span>
            <input
              type="number"
              id="guests"
              className="w-1/2 text-lg font-semibold bg-transparent focus:outline-none pl-2"
              value={guests}
              onChange={(e) => setGuests(Math.max(1, parseInt(e.target.value) || 1))}
              min="1"
            />
            <span className="text-gray-400 ml-1">guests</span>
          </div>
        </div>
      </div>

      {/* Search Button */}
      <div className="flex justify-end p-6">
        <button
          type="submit"
          className={`bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-pink-300 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
          disabled={isLoading}
        >
          {isLoading ? 'Searching...' : 'Search Stays'}
        </button>
      </div>
    </form>
  );
};

export default StaysSearchForm;
