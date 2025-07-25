// src/components/CarRentalSearchForm.jsx
import React, { useState } from 'react';

const CarRentalSearchForm = ({ onSearch, isLoading }) => {
  const [location, setLocation] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('10:00');
  const [dropoffDate, setDropoffDate] = useState('');
  const [dropoffTime, setDropoffTime] = useState('10:00');
  const [driverAge, setDriverAge] = useState('26-65');
  const [sameDropoff, setSameDropoff] = useState(true);
  const [suvsOnly, setSuvsOnly] = useState(false);

  // Predefined list of popular car rental locations for the dropdown
  const popularCarRentalLocations = [
    'New York',
    'London',
    'Paris',
    'Dubai',
    'Los Angeles',
    'Delhi',
    'Mumbai',
    'Singapore',
    'Tokyo',
    'Sydney',
    'Berlin',
    'Rome',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!location || !pickupDate || !dropoffDate) {
      alert('Please fill in location, pick-up, and drop-off dates.');
      return;
    }
    onSearch({ location, pickupDate, pickupTime, dropoffDate, dropoffTime, driverAge, sameDropoff, suvsOnly });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden text-gray-800">
      <div className="flex items-center px-6 pt-6 text-gray-700 font-semibold text-sm space-x-4">
        {/* Same drop-off dropdown (simplified) */}
        <div className="relative group">
          <button
            type="button"
            className="flex items-center space-x-1 cursor-pointer focus:outline-none"
          >
            <span>{sameDropoff ? 'Same drop-off' : 'Different drop-off'}</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className="absolute left-0 mt-2 w-40 bg-white rounded-lg shadow-lg py-1 z-20 hidden group-hover:block group-focus-within:block">
            <button
              type="button"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              onClick={() => setSameDropoff(true)}
            >
              Same drop-off
            </button>
            <button
              type="button"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              onClick={() => setSameDropoff(false)}
            >
              Different drop-off
            </button>
          </div>
        </div>

        {/* Driver's age dropdown */}
        <div className="relative group">
          <button
            type="button"
            className="flex items-center space-x-1 cursor-pointer focus:outline-none"
          >
            <span>Driver's age: {driverAge}</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className="absolute left-0 mt-2 w-32 bg-white rounded-lg shadow-lg py-1 z-20 hidden group-hover:block group-focus-within:block">
            <button type="button" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left" onClick={() => setDriverAge('26-65')}>26-65</button>
            <button type="button" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left" onClick={() => setDriverAge('18-25')}>18-25</button>
            <button type="button" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left" onClick={() => setDriverAge('66+')}>66+</button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200 mt-4 rounded-xl overflow-hidden">
        {/* Location Input - now a select dropdown */}
        <div className="bg-white p-4 flex flex-col justify-center col-span-full">
          <label htmlFor="carLocation" className="block text-gray-500 text-xs font-semibold mb-1 uppercase">Pick-up Location</label>
          <select
            id="carLocation"
            className="w-full text-lg font-semibold bg-transparent focus:outline-none appearance-none"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          >
            <option value="">Where to pick up?</option>
            {popularCarRentalLocations.map((loc, index) => (
              <option key={index} value={loc}>{loc}</option>
            ))}
          </select>
        </div>

        {/* Pick-up Date & Time */}
        <div className="bg-white p-4 flex flex-col justify-center">
          <label htmlFor="pickupDate" className="block text-gray-500 text-xs font-semibold mb-1 uppercase">Pick-up</label>
          <div className="flex items-center">
            <input
              type="date"
              id="pickupDate"
              className="w-1/2 text-lg font-semibold bg-transparent focus:outline-none pr-2"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
              required
            />
            <input
              type="time"
              id="pickupTime"
              className="w-1/2 text-lg font-semibold bg-transparent focus:outline-none pl-2"
              value={pickupTime}
              onChange={(e) => setPickupTime(e.target.value)}
            />
          </div>
        </div>

        {/* Drop-off Date & Time */}
        <div className="bg-white p-4 flex flex-col justify-center">
          <label htmlFor="dropoffDate" className="block text-gray-500 text-xs font-semibold mb-1 uppercase">Drop-off</label>
          <div className="flex items-center">
            <input
              type="date"
              id="dropoffDate"
              className="w-1/2 text-lg font-semibold bg-transparent focus:outline-none pr-2"
              value={dropoffDate}
              onChange={(e) => setDropoffDate(e.target.value)}
              min={pickupDate || new Date().toISOString().split('T')[0]}
              required
            />
            <input
              type="time"
              id="dropoffTime"
              className="w-1/2 text-lg font-semibold bg-transparent focus:outline-none pl-2"
              value={dropoffTime}
              onChange={(e) => setDropoffTime(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* SUVs only checkbox */}
      <div className="flex items-center px-6 py-4">
        <input
          type="checkbox"
          id="suvsOnly"
          className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
          checked={suvsOnly}
          onChange={(e) => setSuvsOnly(e.target.checked)}
        />
        <label htmlFor="suvsOnly" className="ml-2 block text-sm text-gray-700">
          SUVs only
        </label>
      </div>

      {/* Search Button */}
      <div className="flex justify-end p-6">
        <button
          type="submit"
          className={`bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-pink-300 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
          disabled={isLoading}
        >
          {isLoading ? 'Searching...' : 'Search Cars'}
        </button>
      </div>
    </form>
  );
};

export default CarRentalSearchForm;