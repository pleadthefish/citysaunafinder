import { Venue } from '@/types/venue';
import venuesData from '@/data/venues.json';

export function getAllVenues(): Venue[] {
  return venuesData as Venue[];
}

export function getVenueBySlug(slug: string): Venue | undefined {
  return getAllVenues().find(venue => venue.slug === slug);
}

export function getVenuesByCity(city: string): Venue[] {
  return getAllVenues().filter(venue =>
    venue.city.toLowerCase() === city.toLowerCase()
  );
}

export function getFeaturedVenues(): Venue[] {
  return getAllVenues().filter(venue => venue.featured);
}

export function getAllCities(): string[] {
  const cities = getAllVenues().map(venue => venue.city);
  return Array.from(new Set(cities)).sort();
}
