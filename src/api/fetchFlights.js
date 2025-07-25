const RAPIDAPI_KEY = 'a9ede0e41amsh72fc1bb69c1818e1p00b92jsn3ca510b3080a';
const RAPIDAPI_HOST_BOOKING = 'booking-com18.p.rapidapi.com';


export const fetchFlights = async ({ origin, destination, departDate }) => {
  console.log('Using mock data for flight search. Real flight search API needed.');
  console.log('RapidAPI Key (for reference):', RAPIDAPI_KEY);
  console.log('RapidAPI Host (Booking.com, for reference):', RAPIDAPI_HOST_BOOKING);

  
  await new Promise(resolve => setTimeout(resolve, 1500));

  // Mock flight data
  const mockFlights = [
    {
      id: 'FL001',
      airline: 'SkyHigh Airlines',
      origin: 'New York (JFK)',
      destination: 'London (LHR)',
      departureTime: '08:00 AM',
      arrivalTime: '08:00 PM',
      price: 650,
      currency: 'USD',
      date: departDate,
    },
    {
      id: 'FL002',
      airline: 'Global Connect',
      origin: 'New York (JFK)',
      destination: 'London (LHR)',
      departureTime: '10:30 AM',
      arrivalTime: '10:30 PM',
      price: 720,
      currency: 'USD',
      date: departDate,
    },
    {
      id: 'FL003',
      airline: 'EuroFly',
      origin: 'New York (JFK)',
      destination: 'London (LHR)',
      departureTime: '02:00 PM',
      arrivalTime: '02:00 AM (+1)',
      price: 580,
      currency: 'USD',
      date: departDate,
    },
    {
      id: 'FL004',
      airline: 'Vistara',
      origin: 'Delhi (DEL)',
      destination: 'London (LHR)',
      departureTime: '09:00 AM',
      arrivalTime: '2:00 PM',
      price: 450,
      currency: 'USD',
      date: departDate,
    },
    {
      id: 'FL005',
      airline: 'Indigo',
      origin: 'Delhi (DEL)',
      destination: 'Dubai (DXB)',
      departureTime: '09:00 AM',
      arrivalTime: '12:00 PM',
      price: 250,
      currency: 'USD',
      date: departDate,
    },
      {
    id: 'FL006',
    airline: 'Vistara',
    origin: 'New York (JFK)',
    destination: 'London (LHR)',
    departureTime: '01:00 AM',
    arrivalTime: '04:00 PM',
    price: 650,
    currency: 'USD',
    date: '2025-08-10',
  },
  {
    id: 'FL007',
    airline: 'Global Connect',
    origin: 'New York (JFK)',
    destination: 'London (LHR)',
    departureTime: '10:30 AM',
    arrivalTime: '10:30 PM',
    price: 720,
    currency: 'USD',
    date: '2025-08-10',
  },
  {
    id: 'FL008',
    airline: 'EuroFly',
    origin: 'New York (JFK)',
    destination: 'London (LHR)',
    departureTime: '02:00 PM',
    arrivalTime: '02:00 AM (+1)',
    price: 580,
    currency: 'USD',
    date: '2025-08-11',
  },
  {
    id: 'FL009',
    airline: 'Air India',
    origin: 'Delhi (DEL)',
    destination: 'London (LHR)',
    departureTime: '06:00 AM',
    arrivalTime: '11:00 AM',
    price: 450,
    currency: 'USD',
    date: '2025-08-12',
  },
  {
    id: 'FL0010',
    airline: 'Indigo',
    origin: 'Delhi (DEL)',
    destination: 'Dubai (DXB)',
    departureTime: '09:00 AM',
    arrivalTime: '12:00 PM',
    price: 250,
    currency: 'USD',
    date: '2025-08-12',
  },
  {
    id: 'FL0011',
    airline: 'Lufthansa',
    origin: 'Frankfurt (FRA)',
    destination: 'New York (JFK)',
    departureTime: '11:00 AM',
    arrivalTime: '02:00 PM',
    price: 780,
    currency: 'EUR',
    date: '2025-08-15',
  },
  {
    id: 'FL0012',
    airline: 'Emirates',
    origin: 'Dubai (DXB)',
    destination: 'Sydney (SYD)',
    departureTime: '01:00 AM',
    arrivalTime: '10:00 PM (+1)',
    price: 1200,
    currency: 'AED',
    date: '2025-08-18',
  },
  {
    id: 'FL0013',
    airline: 'Japan Airlines',
    origin: 'Tokyo (HND)',
    destination: 'Los Angeles (LAX)',
    departureTime: '05:00 PM',
    arrivalTime: '10:00 AM',
    price: 950,
    currency: 'JPY',
    date: '2025-08-20',
  },
  {
    id: 'FL0014',
    airline: 'British Airways',
    origin: 'London (LHR)',
    destination: 'New York (JFK)',
    departureTime: '09:00 AM',
    arrivalTime: '12:00 PM',
    price: 680,
    currency: 'GBP',
    date: '2025-08-10',
  },
  {
    id: 'FL0015',
    airline: 'Vistara',
    origin: 'Mumbai (BOM)',
    destination: 'Singapore (SIN)',
    departureTime: '07:00 AM',
    arrivalTime: '01:00 PM',
    price: 300,
    currency: 'INR',
    date: '2025-08-14',
  },
  ];

  // Filter mock flights based on origin and destination (case-insensitive)
  const filteredFlights = mockFlights.filter(flight =>
    flight.origin.toLowerCase().includes(origin.toLowerCase()) &&
    flight.destination.toLowerCase().includes(destination.toLowerCase())
  );

  if (filteredFlights.length > 0) {
    return { success: true, flights: filteredFlights };
  } else {
    return { success: false, message: 'No flights found for your selected route. Try "New York (JFK)" to "London (LHR)" or "Delhi (DEL)" to "London (LHR)" or "Delhi (DEL)" to "Dubai (DXB)".' };
  }
};