const RAPIDAPI_KEY = 'a9ede0e41amsh72fc1bb69c1818e1p00b92jsn3ca510b3080a';
const RAPIDAPI_HOST_STAYS = 'booking-com18.p.rapidapi.com'; // From previous screenshot

export const fetchStays = async ({ location, checkInDate, checkOutDate, guests, rooms }) => {
  console.log('Using mock data for stays search. Real Stays API needed.');
  console.log('Stays Search Params:', { location, checkInDate, checkOutDate, guests, rooms });
  console.log('RapidAPI Key (for reference):', RAPIDAPI_KEY);
  console.log('RapidAPI Host (Stays, for reference):', RAPIDAPI_HOST_STAYS);

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1500));

  // Mock stays data - More varied data for better display
  const allMockStays = [
{
      id: 'HTL001',
      name: 'Grand Hyatt Delhi',
      location: 'New Delhi, India',
      price: 150,
      currency: 'USD',
      rating: 4.5,
      checkIn: checkInDate,
      checkOut: checkOutDate,
      imageUrl: 'https://placehold.co/400x250/E0E7FF/3F51B5?text=Grand+Hyatt'
    },
    {
      id: 'HTL002',
      name: 'The Lalit London',
      location: 'London, UK',
      price: 250,
      currency: 'USD',
      rating: 4.8,
      checkIn: checkInDate,
      checkOut: checkOutDate,
      imageUrl: 'https://placehold.co/400x250/D1C4E9/512DA8?text=The+Lalit'
    },
    {
      id: 'HTL003',
      name: 'Taj Mahal Palace',
      location: 'Mumbai, India',
      price: 300,
      currency: 'USD',
      rating: 4.9,
      checkIn: checkInDate,
      checkOut: checkOutDate,
      imageUrl: 'https://placehold.co/400x250/C8E6C9/388E3C?text=Taj+Palace'
    },
    {
      id: 'HTL004',
      name: 'Burj Al Arab Jumeirah',
      location: 'Dubai, UAE',
      price: 1200,
      currency: 'USD',
      rating: 5.0,
      checkIn: checkInDate,
      checkOut: checkOutDate,
      imageUrl: 'https://placehold.co/400x250/FFECB3/FFA000?text=Burj+Al+Arab'
    },
    {
      id: 'HTL005',
      name: 'The Plaza Hotel',
      location: 'New York, USA',
      price: 450,
      currency: 'USD',
      rating: 4.7,
      checkIn: checkInDate,
      checkOut: checkOutDate,
      imageUrl: 'https://placehold.co/400x250/FFE0B2/FF9800?text=The+Plaza'
    },
    {
      id: 'HTL006',
      name: 'Hotel California',
      location: 'Los Angeles, USA',
      price: 180,
      currency: 'USD',
      rating: 4.2,
      checkIn: checkInDate,
      checkOut: checkOutDate,
      imageUrl: 'https://placehold.co/400x250/F8BBd0/E91E63?text=Hotel+California'
    },
    {
      id: 'HTL007',
      name: 'Shangri-La Paris',
      location: 'Paris, France',
      price: 900,
      currency: 'EUR',
      rating: 4.9,
      checkIn: checkInDate,
      checkOut: checkOutDate,
      imageUrl: 'https://placehold.co/400x250/BBDEFB/2196F3?text=Shangri-La'
    },
    {
      id: 'HTL008',
      name: 'Marina Bay Sands',
      location: 'Singapore, Singapore',
      price: 700,
      currency: 'SGD',
      rating: 5.0,
      checkIn: checkInDate,
      checkOut: checkOutDate,
      imageUrl: 'https://placehold.co/400x250/DCEDC8/8BC34A?text=Marina+Bay'
    },
    {
      id: 'HTL009',
      name: 'The Ritz-Carlton, Tokyo',
      location: 'Tokyo, Japan',
      price: 600,
      currency: 'JPY',
      rating: 4.8,
      checkIn: checkInDate,
      checkOut: checkOutDate,
      imageUrl: 'https://placehold.co/400x250/DCE775/AFB42B?text=Ritz-Carlton'
    },
    {
      id: 'HTL010',
      name: 'Four Seasons Hotel Sydney',
      location: 'Sydney, Australia',
      price: 350,
      currency: 'AUD',
      rating: 4.7,
      checkIn: checkInDate,
      checkOut: checkOutDate,
      imageUrl: 'https://placehold.co/400x250/B2EBF2/00BCD4?text=Four+Seasons'
    },
    {
      id: 'HTL011',
      name: 'Waldorf Astoria Berlin',
      location: 'Berlin, Germany',
      price: 280,
      currency: 'EUR',
      rating: 4.6,
      checkIn: checkInDate,
      checkOut: checkOutDate,
      imageUrl: 'https://placehold.co/400x250/FFCCBC/FF5722?text=Waldorf+Astoria'
    },
    {
      id: 'HTL012',
      name: 'Hotel Eden, Rome',
      location: 'Rome, Italy',
      price: 550,
      currency: 'EUR',
      rating: 4.9,
      checkIn: checkInDate,
      checkOut: checkOutDate,
      imageUrl: 'https://placehold.co/400x250/CFD8DC/607D8B?text=Hotel+Eden'
    },
    {
      id: 'HTL013',
      name: 'W Barcelona',
      location: 'Barcelona, Spain',
      price: 400,
      currency: 'EUR',
      rating: 4.7,
      checkIn: checkInDate,
      checkOut: checkOutDate,
      imageUrl: 'https://placehold.co/400x250/F0F4C3/AFB42B?text=W+Barcelona'
    },
    {
      id: 'HTL014',
      name: 'Park Hyatt Kyoto',
      location: 'Kyoto, Japan',
      price: 750,
      currency: 'JPY',
      rating: 4.9,
      checkIn: checkInDate,
      checkOut: checkOutDate,
      imageUrl: 'https://placehold.co/400x250/E1F5FE/2196F3?text=Park+Hyatt+Kyoto'
    },
    {
      id: 'HTL015',
      name: 'The Silo Hotel',
      location: 'Cape Town, South Africa',
      price: 600,
      currency: 'ZAR',
      rating: 5.0,
      checkIn: checkInDate,
      checkOut: checkOutDate,
      imageUrl: 'https://placehold.co/400x250/F3E5F5/9C27B0?text=The+Silo'
    },
    {
      id: 'HTL016',
      name: 'Belmond Copacabana Palace',
      location: 'Rio de Janeiro, Brazil',
      price: 500,
      currency: 'BRL',
      rating: 4.8,
      checkIn: checkInDate,
      checkOut: checkOutDate,
      imageUrl: 'https://placehold.co/400x250/FFF3E0/FF9800?text=Copacabana+Palace'
    },
  ];

  // Filter mock stays based on location (case-insensitive)
  const filteredStays = allMockStays.filter(stay =>
    stay.location.toLowerCase().includes(location.toLowerCase())
  );

  if (filteredStays.length > 0) {
    return { success: true, stays: filteredStays };
  } else {
    return { success: false, message: 'No mock stays found for your selected location. Try "New Delhi", "London", "Mumbai", "Dubai", "New York", "Los Angeles", "Paris", or "Singapore".' };
  }
};