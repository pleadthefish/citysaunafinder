/**
 * Convert existing SaunaData.js to new schema
 */

const fs = require('fs');
const path = require('path');

// Import existing Seattle venues
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
    location: "North Beacon Hill, Seattle",
    coordinates: { lat: 47.6348, lng: -122.3448 },
    features: "Traditional saunas in locker rooms, bouldering, fitness",
    price: "Membership required",
    rating: 4.4,
    neighborhood: "north-beacon-hill",
    address: "2750 Poplar Pl S, Seattle, WA 98144"
  }
];

// Type mapping
const typeMapping = {
  'korean': ['korean spa', 'jjimjilbang'],
  'russian': ['russian banya'],
  'infrared': ['infrared'],
  'spa': ['spa', 'premium spa'],
  'hotel': ['hotel spa'],
  'finnish': ['finnish', 'wood-fired'],
  'gym': ['gym sauna'],
  'private': ['private rental']
};

// Price range mapping
function parsePriceRange(price) {
  if (price.includes('$53')) return '$53 day pass';
  if (price.toLowerCase().includes('premium') || price === 'Premium pricing') return '$$$';
  if (price.toLowerCase().includes('membership')) return 'Membership required';
  if (price.toLowerCase().includes('session')) return 'Session-based';
  if (price.toLowerCase().includes('reservation') || price.toLowerCase().includes('appointment')) return 'By reservation';
  if (price.toLowerCase().includes('guest')) return 'Guest access';
  if (price.toLowerCase().includes('call')) return 'Call for pricing';
  return '$$';
}

// Extract amenities from features
function extractAmenities(features) {
  const amenityMap = {
    'hydrotherapy': 'hydrotherapy',
    'infrared': 'far-infrared',
    'eucalyptus': 'eucalyptus-steam',
    'cold plunge': 'cold-plunge',
    'platza': 'platza',
    'salt': 'salt-therapy',
    'wood-fired': 'wood-fired',
    'private': 'private-rooms',
    'fitness': 'fitness-center'
  };

  const amenities = [];
  const lowerFeatures = features.toLowerCase();

  for (const [key, value] of Object.entries(amenityMap)) {
    if (lowerFeatures.includes(key)) {
      amenities.push(value);
    }
  }

  return amenities;
}

// Parse city from location/neighborhood
function parseCity(location, neighborhood) {
  if (location.toLowerCase().includes('seattle') || neighborhood.toLowerCase().includes('seattle')) {
    return 'Seattle';
  }
  if (location.toLowerCase().includes('lynnwood')) return 'Lynnwood';
  if (location.toLowerCase().includes('woodinville')) return 'Woodinville';
  return 'Seattle'; // default
}

// Convert to new schema
const converted = saunas.map(venue => {
  const city = parseCity(venue.location, venue.neighborhood);

  return {
    id: `seattle-${venue.id}`,
    name: venue.name,
    slug: venue.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),

    // Location
    city: city,
    state: 'WA',
    address: venue.address,
    zip: venue.address.match(/\d{5}$/)?.[0] || '',
    coordinates: venue.coordinates,
    neighborhood: venue.neighborhood,

    // Contact
    phone: null,
    website: null,
    email: null,

    // Sauna details
    saunaTypes: [venue.type],
    category: venue.category,
    amenities: extractAmenities(venue.features),

    // Pricing
    priceRange: parsePriceRange(venue.price),
    pricing: venue.price,

    // Description
    description: venue.features,

    // Hours
    hours: null,

    // Media
    images: [],

    // Metadata
    rating: venue.rating,
    featured: venue.rating >= 4.5,
    verified: false,
    source: 'manual-migration',
    dateAdded: new Date().toISOString(),
    lastUpdated: new Date().toISOString()
  };
});

// Save to data folder
const outputPath = path.join(__dirname, '../data/venues.json');
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, JSON.stringify(converted, null, 2));

console.log('✅ Converted 10 Seattle venues to new schema');
console.log(`💾 Saved to: ${outputPath}`);
console.log('\nSample venue:');
console.log(JSON.stringify(converted[0], null, 2));
