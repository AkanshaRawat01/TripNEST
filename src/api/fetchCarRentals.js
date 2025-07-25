// src/api/fetchCarRentals.js
// This file is responsible for making the API call to fetch car rental data.

const RAPIDAPI_KEY = 'a9ede0e41amsh72fc1bb69c1818e1p00b92jsn3ca510b3080a';
const RAPIDAPI_HOST_CARS = 'booking-com15.p.rapidapi.com'; // From the latest screenshot

const searchCarLocation = async (locationName) => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 300));

  // Mock data for common locations
  switch (locationName.toLowerCase()) {
    case 'new delhi':
    case 'delhi':
      return { latitude: 28.6139, longitude: 77.2090 }; 
    case 'new york':
    case 'jfk':
      return { latitude: 40.6413, longitude: -73.7781 }; 
    case 'london':
    case 'lhr':
      return { latitude: 51.4700, longitude: -0.4543 }; 
    case 'dubai':
    case 'dxb':
        return { latitude: 25.2532, longitude: 55.2708 }; 
    case 'paris':
    case 'cdg':
      return { latitude: 49.0097, longitude: 2.5479 }; 
    case 'los angeles':
    case 'lax':
      return { latitude: 33.9416, longitude: -118.4085 }; 
    case 'mumbai':
    case 'bom':
      return { latitude: 19.0900, longitude: 72.8599 }; 
    case 'singapore':
    case 'sin':
      return { latitude: 1.3644, longitude: 103.9915 }; 
    case 'frankfurt':
    case 'fra':
      return { latitude: 50.0333, longitude: 8.5706 }; 
    case 'tokyo':
    case 'hnd':
      return { latitude: 35.5494, longitude: 139.7798 };
    case 'sydney':
    case 'syd':
      return { latitude: -33.9461, longitude: 151.1772 }; 
    case 'berlin':
    case 'ber':
      return { latitude: 52.3683, longitude: 13.5042 }; 
    case 'rome':
    case 'fco':
      return { latitude: 41.8003, longitude: 12.2389 }; 
    default:
     
      return { latitude: 40.6397018432617, longitude: -73.7791976928711 };
  }
};


const mockCarRentalsData = [
  {
    id: 'CAR001',
    supplierName: 'Hertz',
    carCategory: 'Economy',
    carModel: 'Toyota Yaris',
    price: { amount: 35, currencyCode: 'USD' },
    features: ['Automatic', 'AC', '4 Seats'],
    imageUrl: 'https://placehold.co/400x250/ADD8E6/00008B?text=Economy+Car',
  },
  {
    id: 'CAR002',
    supplierName: 'Avis',
    carCategory: 'Mid-size',
    carModel: 'Honda Civic',
    price: { amount: 50, currencyCode: 'USD' },
    features: ['Automatic', 'AC', '5 Seats'],
    imageUrl: 'https://placehold.co/400x250/FFDAB9/FF4500?text=Mid-size+Car',
  },
  {
    id: 'CAR003',
    supplierName: 'Enterprise',
    carCategory: 'SUV',
    carModel: 'Nissan Rogue',
    price: { amount: 80, currencyCode: 'USD' },
    features: ['Automatic', 'AC', '5 Seats', 'Large Trunk'],
    imageUrl: 'https://placehold.co/400x250/DDA0DD/800080?text=SUV+Car',
  },
  {
    id: 'CAR004',
    supplierName: 'Budget',
    carCategory: 'Luxury',
    carModel: 'Mercedes-Benz C-Class',
    price: { amount: 150, currencyCode: 'USD' },
    features: ['Automatic', 'AC', 'Leather Seats', 'GPS'],
    imageUrl: 'https://placehold.co/400x250/B0E0E6/4682B4?text=Luxury+Car',
  },
  {
    id: 'CAR005',
    supplierName: 'Sixt',
    carCategory: 'Van',
    carModel: 'Ford Transit',
    price: { amount: 100, currencyCode: 'USD' },
    features: ['Manual', 'AC', '7 Seats'],
    imageUrl: 'https://placehold.co/400x250/FFE4B5/FF8C00?text=Van',
  },
  {
    id: 'CAR006',
    supplierName: 'Alamo',
    carCategory: 'Compact',
    carModel: 'Hyundai Accent',
    price: { amount: 30, currencyCode: 'USD' },
    features: ['Automatic', 'AC', '4 Seats'],
    imageUrl: 'https://placehold.co/400x250/C5CAE9/3F51B5?text=Compact+Car',
  },
  {
    id: 'CAR007',
    supplierName: 'National',
    carCategory: 'Full-size',
    carModel: 'Chevrolet Malibu',
    price: { amount: 65, currencyCode: 'USD' },
    features: ['Automatic', 'AC', '5 Seats', 'Spacious'],
    imageUrl: 'https://placehold.co/400x250/B2DFDB/009688?text=Full-size+Car',
  },
  {
    id: 'CAR008',
    supplierName: 'Thrifty',
    carCategory: 'Convertible',
    carModel: 'Ford Mustang',
    price: { amount: 180, currencyCode: 'USD' },
    features: ['Automatic', 'AC', '2 Seats', 'Sporty'],
    imageUrl: 'https://placehold.co/400x250/FFCDD2/F44336?text=Convertible',
  },
  {
    id: 'CAR009',
    supplierName: 'Dollar',
    carCategory: 'Minivan',
    carModel: 'Chrysler Pacifica',
    price: { amount: 110, currencyCode: 'USD' },
    features: ['Automatic', 'AC', '7 Seats', 'Family'],
    imageUrl: 'https://placehold.co/400x250/D1C4E9/673AB7?text=Minivan',
  },
  {
    id: 'CAR010',
    supplierName: 'Fox Rent A Car',
    carCategory: 'Electric',
    carModel: 'Tesla Model 3',
    price: { amount: 200, currencyCode: 'USD' },
    features: ['Automatic', 'AC', '5 Seats', 'Eco-friendly'],
    imageUrl: 'https://placehold.co/400x250/C8E6C9/4CAF50?text=Electric+Car',
  },
];

export const fetchCarRentals = async ({ location, pickupDate, pickupTime, dropoffDate, dropoffTime, driverAge = '30', suvsOnly = false }) => {
  console.log('Attempting real Car Rental API call for:', { location, pickupDate, pickupTime, dropoffDate, dropoffTime, driverAge, suvsOnly });
  console.log('RapidAPI Key:', RAPIDAPI_KEY);
  console.log('RapidAPI Host:', RAPIDAPI_HOST_CARS);

  let carsToReturn = [];
  let message = '';

  try {
    // Get coordinates for pick-up and drop-off locations
    const pickUpCoords = await searchCarLocation(location);
    const dropOffCoords = await searchCarLocation(location); // Assuming same drop-off location for simplicity

    // Construct query parameters
    const queryParams = new URLSearchParams({
      pick_up_latitude: pickUpCoords.latitude,
      pick_up_longitude: pickUpCoords.longitude,
      drop_off_latitude: dropOffCoords.latitude,
      drop_off_longitude: dropOffCoords.longitude,
      pick_up_date: pickupDate,
      drop_off_date: dropoffDate,
      pick_up_time: pickupTime,
      drop_off_time: dropoffTime,
      driver_age: driverAge,
      // filters: suvsOnly ? 'carCategory::SUV' : '', // Example filter application
      languagecode: 'en', // Default language
      currency_code: 'USD', // Default currency
    });

    const apiUrl = `https://${RAPIDAPI_HOST_CARS}/api/v1/cars/searchCarRentals?${queryParams.toString()}`;

    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'x-rapidapi-key': RAPIDAPI_KEY,
        'x-rapidapi-host': RAPIDAPI_HOST_CARS,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Car Rental API Error Response (Raw Text):', errorText);
      message = `API call failed: ${errorText}. Displaying mock data.`;
      carsToReturn = mockCarRentalsData; // Fallback to mock data
    } else {
      const data = await response.json();
      console.log('Car Rental API Response Data:', data);

      if (data && data.data && data.data.cars && data.data.cars.length > 0) {
        // If API returns data, map it
        carsToReturn = data.data.cars.map((car, index) => ({
          ...car,
          imageUrl: `https://placehold.co/400x250/ADD8E6/00008B?text=Car+${index + 1}` // Example placeholder image
        }));
        message = 'Car rentals fetched successfully from API.';
      } else {
        // If API returns no data, fall back to mock data
        carsToReturn = mockCarRentalsData;
        message = 'API returned no car rentals.';
      }
    }

  } catch (error) {
    console.error('Error during Car Rental API call:', error);
    // If any other error occurs during the fetch, fall back to mock data
    carsToReturn = mockCarRentalsData;
    message = `Failed to fetch car rentals: ${error.message}. `;
  }

  // Apply SUV filter to the cars (whether from API or mock data)
  const finalFilteredCars = suvsOnly
    ? carsToReturn.filter(car => car.carCategory && car.carCategory.toLowerCase() === 'suv')
    : carsToReturn;

  if (finalFilteredCars.length > 0) {
    return { success: true, cars: finalFilteredCars, message: message };
  } else {
    // If no cars found after applying SUV filter (even from mock data)
    return { success: false, message: 'No car rentals found matching your criteria (including SUV filter).' };
  }
};