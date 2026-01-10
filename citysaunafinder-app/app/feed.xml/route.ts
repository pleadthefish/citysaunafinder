import RSS from 'rss';
import venuesData from '@/data/venues.json';

export async function GET() {
  const feed = new RSS({
    title: 'CitySaunaFinder',
    description: 'Discover authentic sauna experiences across North America',
    feed_url: 'https://citysaunafinder.pages.dev/feed.xml',
    site_url: 'https://citysaunafinder.pages.dev',
    language: 'en',
    pubDate: new Date().toUTCString(),
    ttl: 60,
  });

  // Add recently updated venues
  const recentVenues = venuesData
    .sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime())
    .slice(0, 10);

  recentVenues.forEach((venue) => {
    feed.item({
      title: `${venue.name} - ${venue.city}, ${venue.state}`,
      description: venue.description,
      url: `https://citysaunafinder.pages.dev/sauna/${venue.slug}`,
      date: venue.lastUpdated,
      categories: [venue.category, ...venue.saunaTypes],
    });
  });

  // TODO: Add blog posts when blog content is created
  // blogPosts.forEach((post) => {
  //   feed.item({
  //     title: post.title,
  //     description: post.description,
  //     url: `https://citysaunafinder.pages.dev/blog/${post.slug}`,
  //     date: post.date,
  //   });
  // });

  return new Response(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
