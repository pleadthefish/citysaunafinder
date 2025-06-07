// saunaData.js
const saunas = [
  {
    id: 1,
    name: "Olympus Spa",
    type: "korean",
    category: "Korean Spa",
    location: "Lynnwood (women-only)",
    features: "Hydrotherapy pools, far infrared sauna, eucalyptus steam",
    price: "$53 day pass",
    rating: 4.5,
    neighborhood: "lynnwood"
  },
  {
    id: 2,
    name: "Banya 5",
    type: "russian",
    category: "Russian Banya",
    location: "South Lake Union",
    features: "Brick/wood sauna, hydrotherapy pools, eucalyptus steam",
    price: "Call for pricing",
    rating: 4.2,
    neighborhood: "south-lake-union"
  },
  {
    id: 3,
    name: "City Sweats",
    type: "infrared",
    category: "Infrared Sauna",
    location: "Seattle (first infrared sauna spa)",
    features: "Infrared therapy, cold plunge, contrast therapy",
    price: "Session-based pricing",
    rating: 4.7,
    neighborhood: "seattle"
  },
  {
    id: 4,
    name: "Soak on the Sound",
    type: "spa",
    category: "Premium Spa",
    location: "Pacific Northwest",
    features: "Salt-water soaking, Finnish & infrared saunas, salt lounge",
    price: "Premium pricing",
    rating: 4.8,
    neighborhood: "pacific-northwest"
  },
  {
    id: 5,
    name: "Four Seasons Seattle",
    type: "hotel",
    category: "Hotel Spa",
    location: "Downtown Seattle",
    features: "Eucalyptus steam room, fitness facilities",
    price: "Guest/member access",
    rating: 4.3,
    neighborhood: "downtown"
  },
  {
    id: 6,
    name: "Fyre Sauna",
    type: "finnish",
    category: "Wood-Fired Sauna",
    location: "Woodinville (Greater Seattle)",
    features: "Wood-fired sauna, outdoor cold plunges",
    price: "Reservation required",
    rating: 4.6,
    neighborhood: "woodinville"
  },
  {
    id: 7,
    name: "24 Hour Fitness Downtown",
    type: "gym",
    category: "Gym Sauna",
    location: "Downtown Seattle",
    features: "Steam room, sauna, fitness facilities",
    price: "Membership required",
    rating: 3.8,
    neighborhood: "downtown"
  },
  {
    id: 8,
    name: "Hothouse Spa & Sauna",
    type: "private",
    category: "Private Rental",
    location: "Seattle",
    features: "Private rental only, gender inclusive",
    price: "By appointment",
    rating: 4.1,
    neighborhood: "seattle"
  },
  // Let's add your Seattle Bouldering Project locations
  {
    id: 9,
    name: "Seattle Bouldering Project - U District",
    type: "gym",
    category: "Climbing Gym",
    location: "University District",
    features: "Infrared sauna in historic bank vault, bouldering, fitness",
    price: "Membership required",
    rating: 4.4,
    neighborhood: "university-district"
  },
  {
    id: 10,
    name: "Seattle Bouldering Project - Poplar",
    type: "gym", 
    category: "Climbing Gym",
    location: "Poplar, Seattle",
    features: "Traditional saunas in locker rooms, bouldering, fitness",
    price: "Membership required",
    rating: 4.4,
    neighborhood: "poplar"
  }
];
export default saunas;