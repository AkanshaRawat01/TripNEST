
import React, { useState } from 'react';

import { fetchFlights, fetchStays, fetchCarRentals } from './api';
import ErrorMessage from './components/ErrorMessage';
import LoadingSpinners from './components/LoadingSpinner';
import FlightSearchForm from './components/FlightSearchForm';
import FlightResults from './components/FlightResults';
import StaysSearchForm from './components/StaysSearchForm';
import CarRentalSearchForm from './components/CarRentalSearchForm';
import StaysResults from './components/StaysResults'; 
import CarRentalResults from './components/CarRentalResults'; 
import backgroundImage from './assets/background.jpg';

function App() {
  const [flights, setFlights] = useState([]);
  const [stays, setStays] = useState([]);
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('Flights');

  const handleSearch = async (searchParams) => {
    setLoading(true);
    setError(null);
    setFlights([]);
    setStays([]);
    setCars([]);

    try {
      if (activeTab === 'Flights') {
        const result = await fetchFlights(searchParams);
        if (result.success) {
          setFlights(result.flights);
        } else {
          setError(result.message);
        }
      } else if (activeTab === 'Stays') {
        const result = await fetchStays(searchParams);
        if (result.success) {
          setStays(result.stays);
          // Removed the redundant setError call here, as it's a success
        } else {
          setError(result.message);
        }
      } else if (activeTab === 'Car Rental') {
        const result = await fetchCarRentals(searchParams);
        if (result.success) {
          setCars(result.cars);
          // Removed the redundant setError call here, as it's a success
        } else {
          setError(result.message);
        }
      }
    } catch (err) {
      console.error('Error during search:', err);
      setError('Failed to perform search. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const getMainTitle = () => {
    switch (activeTab) {
      case 'Flights':
        return 'Where do you want to go?';
      case 'Stays':
        return 'Where do you want to stay?';
      case 'Car Rental':
        return 'Find best car rental deals';
      default:
        return 'Welcome';
    }
  };

  return (
       <div className="relative min-h-screen font-sans text-gray-100">
      {/* Background Image Container */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
           style={{ backgroundImage: `url(${backgroundImage})` }} 

      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-indigo-900 opacity-65"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 p-4 sm:p-6 lg:p-10">
        {/* Top Navigation Bar */}
        <header className="flex justify-between items-center max-w-6xl mx-auto mb-12">
          <div className="flex items-center space-x-4">

            <h1 className="text-3xl font-extrabold text-white">TripNEST</h1>
          </div>

        </header>

        <main className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-10 leading-tight">
            {getMainTitle()}
          </h1>

          {/* Tab Selection */}
          <div className="flex justify-center space-x-4 mb-8">
            <button
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition duration-300 ${activeTab === 'Flights' ? 'bg-pink-600 text-white shadow-lg' : 'bg-white bg-opacity-20 text-gray-400 hover:bg-opacity-30'}`}
              onClick={() => { setActiveTab('Flights'); setError(null); setFlights([]); setStays([]); setCars([]); }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              <span>Flights</span>
            </button>
            <button
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition duration-300 ${activeTab === 'Stays' ? 'bg-pink-600 text-white shadow-lg' : 'bg-white bg-opacity-20 text-gray-400 hover:bg-opacity-30'}`}
              onClick={() => { setActiveTab('Stays'); setError(null); setFlights([]); setStays([]); setCars([]); }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m8-10h1m-1 4h1m-1 4h1m-8 4v2m8-2v2" />
              </svg>
              <span>Stays</span>
            </button>
            <button
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition duration-300 ${activeTab === 'Car Rental' ? 'bg-pink-600 text-white shadow-lg' : 'bg-white bg-opacity-20 text-gray-400 hover:bg-opacity-30'}`}
              onClick={() => { setActiveTab('Car Rental'); setError(null); setFlights([]); setStays([]); setCars([]); }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 17v1a2 2 0 002 2h14a2 2 0 002-2v-1M4 12h16m-1 4l-1.588-.794a2 2 0 00-1.074-.112L11 14.5l-3.332 1.666a2 2 0 01-1.074.112L3 16m0 0V8a2 2 0 012-2h14a2 2 0 012 2v8m-14 0h.01M16 16h.01" />
              </svg>
              <span>Car Rental</span>
            </button>
          </div>

          {/* Render search form based on active tab */}
          {activeTab === 'Flights' && (
            <FlightSearchForm onSearch={handleSearch} isLoading={loading} />
          )}
          {activeTab === 'Stays' && (
            <StaysSearchForm onSearch={handleSearch} isLoading={loading} />
          )}
          {activeTab === 'Car Rental' && (
            <CarRentalSearchForm onSearch={handleSearch} isLoading={loading} />
          )}

          {/* Error and Loading Indicators */}
          {error && <ErrorMessage message={error} />}
          {loading && <LoadingSpinners />}

          {/* Display Results based on active tab */}
          {activeTab === 'Flights' && !loading && !error && flights.length > 0 && (
            <div className="mt-10">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">Available Flights</h2>
              <FlightResults flights={flights} />
            </div>
          )}

          {activeTab === 'Stays' && !loading && !error && stays.length > 0 && (
            <div className="mt-10">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">Available Stays</h2>
              <StaysResults stays={stays} />
            </div>
          )}

          {activeTab === 'Car Rental' && !loading && !error && cars.length > 0 && (
            <div className="mt-10">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">Available Car Rentals</h2>
              <CarRentalResults cars={cars} />
            </div>
          )}

          {/* Initial/No results message based on active tab */}
          {!loading && !error && flights.length === 0 && activeTab === 'Flights' && (
            <div className="text-center py-12 text-gray-300 text-lg">
              Start your flight search by filling the form above.
            </div>
          )}
          {!loading && !error && stays.length === 0 && activeTab === 'Stays' && (
            <div className="text-center py-12 text-gray-300 text-lg">
              Start your stays search by filling the form above.
            </div>
          )}
          {!loading && !error && cars.length === 0 && activeTab === 'Car Rental' && (
            <div className="text-center py-12 text-gray-200 text-lg">
              Start your car rental search by filling the form above.
            </div>
          )}
        </main>

        <footer className="text-center mt-12 py-6 text-gray-300 text-sm">
          &copy; {new Date().getFullYear()} TripNEST. Inspired by TripNEST. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

export default App;
