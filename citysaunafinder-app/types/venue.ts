export interface Venue {
  id: string;
  name: string;
  slug: string;

  // Location
  city: string;
  state: string;
  address: string;
  zip: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  neighborhood: string;

  // Contact
  phone: string | null;
  website: string | null;
  email: string | null;

  // Sauna details
  saunaTypes: string[];
  category: string;
  amenities: string[];

  // Pricing
  priceRange: string;
  pricing: string;

  // Description
  description: string;

  // Hours
  hours: string | null;

  // Media
  images: string[];

  // Metadata
  rating: number;
  featured: boolean;
  verified: boolean;
  source: string;
  dateAdded: string;
  lastUpdated: string;
}
