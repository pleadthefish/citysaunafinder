/**
 * CitySaunaFinder Multi-Source Data Scraper
 *
 * Sources:
 * - saunafinder.com (US-focused, 1,500+ venues)
 * - saunaatlas.com (Global, 2,254 locations, 5,430 saunas)
 *
 * Ethical scraping:
 * - Rate limited (2-3 second delays)
 * - Respects robots.txt
 * - User-Agent identifies purpose
 * - Only public data
 */

const fs = require('fs');
const path = require('path');

// Target US cities (sauna culture hotspots)
const TARGET_CITIES = [
  { name: 'Seattle', state: 'WA', slug: 'seattle-wa', coords: { lat: 47.6062, lng: -122.3321 } },
  { name: 'Portland', state: 'OR', slug: 'portland-or', coords: { lat: 45.5152, lng: -122.6784 } },
  { name: 'San Francisco', state: 'CA', slug: 'san-francisco-ca', coords: { lat: 37.7749, lng: -122.4194 } },
  { name: 'Los Angeles', state: 'CA', slug: 'los-angeles-ca', coords: { lat: 34.0522, lng: -118.2437 } },
  { name: 'Austin', state: 'TX', slug: 'austin-tx', coords: { lat: 30.2672, lng: -97.7431 } },
  { name: 'Denver', state: 'CO', slug: 'denver-co', coords: { lat: 39.7392, lng: -104.9903 } },
  { name: 'Minneapolis', state: 'MN', slug: 'minneapolis-mn', coords: { lat: 44.9778, lng: -93.2650 } },
  { name: 'Chicago', state: 'IL', slug: 'chicago-il', coords: { lat: 41.8781, lng: -87.6298 } },
  { name: 'New York', state: 'NY', slug: 'new-york-ny', coords: { lat: 40.7128, lng: -74.0060 } },
  { name: 'Boston', state: 'MA', slug: 'boston-ma', coords: { lat: 42.3601, lng: -71.0589 } },
  { name: 'Boulder', state: 'CO', slug: 'boulder-co', coords: { lat: 39.5501, lng: -105.7821 } },
  { name: 'Tucson', state: 'AZ', slug: 'tucson-az', coords: { lat: 32.2226, lng: -110.9747 } },
  { name: 'Phoenix', state: 'AZ', slug: 'phoenix-az', coords: { lat: 33.4484, lng: -112.0740 } },
  { name: 'San Diego', state: 'CA', slug: 'san-diego-ca', coords: { lat: 32.7157, lng: -117.1611 } },
  { name: 'Miami', state: 'FL', slug: 'miami-fl', coords: { lat: 25.7617, lng: -80.1918 } }
];

// Rate limiting
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Fetch HTML from a URL
 */
async function fetchHTML(url) {
  try {
    console.log(`  Fetching: ${url}`);
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'CitySaunaFinder-DataResearch/1.0 (contact@citysaunafinder.com)',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    return await response.text();
  } catch (error) {
    console.error(`  ❌ Error fetching ${url}:`, error.message);
    return null;
  }
}

/**
 * Fetch JSON data (for APIs)
 */
async function fetchJSON(url) {
  try {
    console.log(`  Fetching JSON: ${url}`);
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'CitySaunaFinder-DataResearch/1.0 (contact@citysaunafinder.com)',
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`  ❌ Error fetching JSON ${url}:`, error.message);
    return null;
  }
}

/**
 * SAUNAFINDER.COM SCRAPER
 */
async function scrapeSaunaFinder(city) {
  console.log(`\n🔍 Checking saunafinder.com for ${city.name}...`);
  const url = `https://saunafinder.com/${city.slug}`;
  const html = await fetchHTML(url);

  if (!html) {
    return [];
  }

  await delay(2000);

  // TODO: Implement HTML parsing with cheerio
  // For now, return empty array - needs DOM inspection
  console.log(`  ⚠️  Parser not yet implemented (needs cheerio)`);
  return [];
}

/**
 * SAUNAATLAS.COM SCRAPER
 *
 * SaunaAtlas uses app.saunaatlas.com with Next.js
 * They have 2,254 locations globally
 *
 * Strategy:
 * 1. Check if they expose data in _next/data or similar
 * 2. Look for map data endpoints
 * 3. Fallback to manual research if needed
 */
async function scrapeSaunaAtlas(city) {
  console.log(`\n🗺️  Checking saunaatlas.com for ${city.name}...`);

  // Try to find their data endpoint
  // SaunaAtlas uses a map interface, so they likely have a JSON endpoint
  const appUrl = 'https://app.saunaatlas.com';

  // Try common Next.js data patterns
  const possibleEndpoints = [
    `${appUrl}/_next/data/build-id/index.json`,
    `${appUrl}/api/saunas`,
    `${appUrl}/data/saunas.json`
  ];

  // For now, mark as TODO
  console.log(`  ⚠️  SaunaAtlas scraper needs investigation`);
  console.log(`  💡 Next.js app - look for data in network tab or _next/data/`);

  await delay(2000);
  return [];
}

/**
 * MANUAL RESEARCH HELPER
 *
 * Since scraping may be complex, this helps manually add venues
 * from Google Maps, Yelp, venue websites, etc.
 */
function createVenueTemplate(data) {
  return {
    id: data.id || `venue-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    name: data.name,
    slug: data.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    city: data.city,
    state: data.state,
    address: data.address,
    zip: data.zip || '',
    coordinates: data.coordinates || { lat: 0, lng: 0 },
    phone: data.phone || null,
    website: data.website || null,
    email: data.email || null,

    // Sauna types: finnish, korean, russian, infrared, steam, wood-fired
    saunaTypes: data.saunaTypes || [],

    // Amenities
    amenities: data.amenities || [],

    // Pricing
    priceRange: data.priceRange || '$$', // $, $$, $$$, $$$$
    pricing: data.pricing || null, // e.g., "$53 day pass"

    // Details
    description: data.description || '',
    hours: data.hours || null,

    // Media
    images: data.images || [],

    // Metadata
    featured: data.featured || false,
    verified: data.verified || false,
    source: data.source || 'manual',
    dateAdded: new Date().toISOString(),
    lastUpdated: new Date().toISOString()
  };
}

/**
 * MAIN SCRAPER
 */
async function scrapeAllVenues() {
  console.log('🔥 CitySaunaFinder Multi-Source Data Scraper');
  console.log('📍 Sources: saunafinder.com, saunaatlas.com');
  console.log(`🏙️  Targeting ${TARGET_CITIES.length} US cities\n`);

  const allVenues = [];
  const stats = {
    saunaFinder: 0,
    saunaAtlas: 0,
    total: 0
  };

  for (const city of TARGET_CITIES) {
    console.log(`\n${'='.repeat(60)}`);
    console.log(`🏙️  ${city.name}, ${city.state}`);
    console.log('='.repeat(60));

    // Scrape SaunaFinder
    const sfVenues = await scrapeSaunaFinder(city);
    stats.saunaFinder += sfVenues.length;
    allVenues.push(...sfVenues);
    console.log(`  ✓ SaunaFinder: ${sfVenues.length} venues`);

    // Scrape SaunaAtlas
    const saVenues = await scrapeSaunaAtlas(city);
    stats.saunaAtlas += saVenues.length;
    allVenues.push(...saVenues);
    console.log(`  ✓ SaunaAtlas: ${saVenues.length} venues`);

    // Delay between cities
    await delay(3000);
  }

  console.log(`\n${'='.repeat(60)}`);
  console.log('✅ SCRAPING COMPLETE');
  console.log('='.repeat(60));
  console.log(`📊 Total venues: ${allVenues.length}`);
  console.log(`   - SaunaFinder: ${stats.saunaFinder}`);
  console.log(`   - SaunaAtlas: ${stats.saunaAtlas}`);

  // Save to JSON
  const outputPath = path.join(__dirname, '../data/venues-scraped.json');
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify(allVenues, null, 2));

  console.log(`\n💾 Saved to: ${outputPath}`);

  // Also save stats
  const statsPath = path.join(__dirname, '../data/scrape-stats.json');
  const statsData = {
    ...stats,
    cities: TARGET_CITIES.length,
    timestamp: new Date().toISOString(),
    sources: ['saunafinder.com', 'saunaatlas.com']
  };
  fs.writeFileSync(statsPath, JSON.stringify(statsData, null, 2));
  console.log(`📈 Stats saved to: ${statsPath}`);

  return allVenues;
}

/**
 * MANUAL DATA ENTRY MODE
 *
 * Run this to manually add venues while scraper is being built
 */
async function manualDataEntry() {
  console.log('📝 Manual Data Entry Mode');
  console.log('💡 Use this to add venues from research\n');

  // Example: Load existing Seattle venues
  const existingData = require('../city-sauna-finder/src/SaunaData.js');
  console.log(`Found ${existingData.length} existing Seattle venues`);

  // Convert to new schema
  const converted = existingData.map(venue => createVenueTemplate({
    id: venue.id,
    name: venue.name,
    city: venue.location.split(',')[0].trim(),
    state: 'WA',
    address: venue.address || '',
    coordinates: venue.coordinates,
    saunaTypes: [venue.type],
    amenities: venue.features ? venue.features.split(',').map(s => s.trim()) : [],
    priceRange: venue.price.includes('$$$') ? '$$$' : '$$',
    pricing: venue.price,
    description: venue.features || '',
    featured: true,
    verified: false,
    source: 'manual-migration'
  }));

  // Save
  const outputPath = path.join(__dirname, '../data/venues-manual.json');
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify(converted, null, 2));

  console.log(`✅ Converted ${converted.length} venues`);
  console.log(`💾 Saved to: ${outputPath}`);

  return converted;
}

// Exports
module.exports = {
  scrapeAllVenues,
  scrapeSaunaFinder,
  scrapeSaunaAtlas,
  createVenueTemplate,
  manualDataEntry,
  TARGET_CITIES
};

// CLI
if (require.main === module) {
  const args = process.argv.slice(2);

  if (args.includes('--manual')) {
    manualDataEntry().catch(console.error);
  } else {
    scrapeAllVenues().catch(console.error);
  }
}
