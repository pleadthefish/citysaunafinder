# CitySaunaFinder - Venue Data

## Schema

Each venue in `venues.json` follows this structure:

```typescript
{
  id: string;              // Unique identifier (e.g., "seattle-1")
  name: string;            // Venue name
  slug: string;            // URL-friendly slug (e.g., "olympus-spa")
  city: string;            // City name
  state: string;           // State code (e.g., "WA")
  address: string;         // Full street address
  zip: string;             // ZIP code
  coordinates: {
    lat: number;           // Latitude
    lng: number;           // Longitude
  };
  neighborhood: string;    // Neighborhood slug
  phone: string | null;    // Phone number
  website: string | null;  // Website URL
  email: string | null;    // Contact email
  saunaTypes: string[];    // Types: "finnish", "korean", "russian", "infrared", "gym", "hotel", "private", "spa"
  category: string;        // Display category (e.g., "Korean Spa")
  amenities: string[];     // Amenities array
  priceRange: string;      // Display price (e.g., "$53 day pass")
  pricing: string;         // Pricing details
  description: string;     // Short description
  hours: string | null;    // Operating hours
  images: string[];        // Image URLs (empty for now)
  rating: number;          // Rating 1-5
  featured: boolean;       // Show on homepage
  verified: boolean;       // Verified listing
  source: string;          // Data source
  dateAdded: string;       // ISO 8601 timestamp
  lastUpdated: string;     // ISO 8601 timestamp
}
```

## Current Data

- **10 Seattle-area venues** manually migrated from legacy React app
- Source: `manual-migration` via `/scripts/convert-existing-data.js`
- All venues have coordinates for map display
- Images are placeholder (empty array) - to be added later

## Future Expansion

Use `/scripts/scraper.js` or `/scripts/scraper-multi-source.js` to populate more cities.

Target: 15 cities with 10-15 venues each (150-225 total venues).
