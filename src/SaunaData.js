// SaunaData.js
const saunas = [
  {
    id: 1,
    name: "Olympus Spa",
    type: "korean",
    category: "Korean Spa",
    location: "Lynnwood (women-only)",
    coordinates: { lat: 47.8278, lng: -122.3151 },
    features: "Hydrotherapy pools, far infrared sauna, eucalyptus steam",
    price: "$53 day pass",
    rating: 4.5,
    neighborhood: "lynnwood",
    address: "2815 196th St SW, Lynnwood, WA 98036"
  },
  {
    id: 2,
    name: "Banya 5",
    type: "russian",
    category: "Russian Banya",
    location: "South Lake Union",
    coordinates: { lat: 47.6260, lng: -122.3370 },
    features: "Brick/wood sauna, hydrotherapy pools, eucalyptus steam",
    price: "Call for pricing",
    rating: 4.2,
    neighborhood: "south-lake-union",
    address: "405 Dexter Ave N, Seattle, WA 98109"
  },
  {
    id: 3,
    name: "City Sweats",
    type: "infrared",
    category: "Infrared Sauna",
    location: "Seattle (first infrared sauna spa)",
    coordinates: { lat: 47.6062, lng: -122.3321 },
    features: "Infrared therapy, cold plunge, contrast therapy",
    price: "Session-based pricing",
    rating: 4.7,
    neighborhood: "seattle",
    address: "1516 12th Ave, Seattle, WA 98122"
  },
  {
    id: 4,
    name: "Soak on the Sound",
    type: "spa",
    category: "Premium Spa",
    location: "Pacific Northwest",
    coordinates: { lat: 47.6034, lng: -122.3300 },
    features: "Salt-water soaking, Finnish & infrared saunas, salt lounge",
    price: "Premium pricing",
    rating: 4.8,
    neighborhood: "pacific-northwest",
    address: "Seattle, WA"
  },
  {
    id: 5,
    name: "Four Seasons Seattle",
    type: "hotel",
    category: "Hotel Spa",
    location: "Downtown Seattle",
    coordinates: { lat: 47.6089, lng: -122.3343 },
    features: "Eucalyptus steam room, fitness facilities",
    price: "Guest/member access",
    rating: 4.3,
    neighborhood: "downtown",
    address: "99 Union St, Seattle, WA 98101"
  },
  {
    id: 6,
    name: "Fyre Sauna",
    type: "finnish",
    category: "Wood-Fired Sauna",
    location: "Woodinville (Greater Seattle)",
    coordinates: { lat: 47.7540, lng: -122.1540 },
    features: "Wood-fired sauna, outdoor cold plunges",
    price: "Reservation required",
    rating: 4.6,
    neighborhood: "woodinville",
    address: "Woodinville, WA 98072"
  },
  {
    id: 7,
    name: "24 Hour Fitness Downtown",
    type: "gym",
    category: "Gym Sauna",
    location: "Downtown Seattle",
    coordinates: { lat: 47.6097, lng: -122.3331 },
    features: "Steam room, sauna, fitness facilities",
    price: "Membership required",
    rating: 3.8,
    neighborhood: "downtown",
    address: "1827 Yale Ave, Seattle, WA 98101"
  },
  {
    id: 8,
    name: "Hothouse Spa & Sauna",
    type: "private",
    category: "Private Rental",
    location: "Seattle",
    coordinates: { lat: 47.6205, lng: -122.3493 },
    features: "Private rental only, gender inclusive",
    price: "By appointment",
    rating: 4.1,
    neighborhood: "seattle",
    address: "2328 1st Ave, Seattle, WA 98121"
  },
  {
    id: 9,
    name: "Seattle Bouldering Project - U District",
    type: "gym",
    category: "Climbing Gym",
    location: "University District",
    coordinates: { lat: 47.6587, lng: -122.3138 },
    features: "Infrared sauna in historic bank vault, bouldering, fitness",
    price: "Membership required",
    rating: 4.4,
    neighborhood: "university-district",
    address: "4547 Brooklyn Ave NE, Seattle, WA 98105"
  },
  {
    id: 10,
    name: "Seattle Bouldering Project - Poplar",
    type: "gym",
    category: "Climbing Gym",
    location: "Poplar, Seattle",
    coordinates: { lat: 47.6348, lng: -122.3448 },
    features: "Traditional saunas in locker rooms, bouldering, fitness",
    price: "Membership required",
    rating: 4.4,
    neighborhood: "poplar",
    address: "2750 Poplar Pl S, Seattle, WA 98144"
  }
];

export default saunas;