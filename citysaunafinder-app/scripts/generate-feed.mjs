import RSS from 'rss';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const venuesData = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../data/venues.json'), 'utf-8')
);

const feed = new RSS({
  title: 'CitySaunaFinder',
  description: 'Discover authentic sauna experiences across North America',
  feed_url: 'https://citysaunafinder.com/feed.xml',
  site_url: 'https://citysaunafinder.com',
  language: 'en',
  pubDate: new Date().toUTCString(),
  ttl: 60,
});

const recentVenues = venuesData
  .sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime())
  .slice(0, 10);

recentVenues.forEach((venue) => {
  feed.item({
    title: `${venue.name} - ${venue.city}, ${venue.state}`,
    description: venue.description,
    url: `https://citysaunafinder.com/sauna/${venue.slug}`,
    date: venue.lastUpdated,
    categories: [venue.category, ...venue.saunaTypes],
  });
});

const publicDir = path.join(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(path.join(publicDir, 'feed.xml'), feed.xml({ indent: true }));
console.log('Generated public/feed.xml');
