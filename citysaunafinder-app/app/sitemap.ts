import { MetadataRoute } from 'next';
import venuesData from '@/data/venues.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://citysaunafinder.pages.dev';

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // Venue pages
  const venuePages: MetadataRoute.Sitemap = venuesData.map((venue) => ({
    url: `${baseUrl}/sauna/${venue.slug}`,
    lastModified: new Date(venue.lastUpdated),
    changeFrequency: 'monthly' as const,
    priority: venue.featured ? 0.9 : 0.8,
  }));

  return [...staticPages, ...venuePages];
}
