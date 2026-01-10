# CitySaunaFinder Rebuild - Resume Point

**Date:** 2025-11-03
**Status:** Mid-implementation, ready to continue after restart

---

## KEY DECISIONS MADE

✅ **Tech Stack Chosen:** Next.js 15 + React + TypeScript
- Reason: SEO-critical for city landing pages, better long-term scalability
- Cloudflare Pages supports Next.js with SSR

✅ **Approach:** Build scraper first, then design mockup, then full implementation

✅ **Typography:** Using free fonts for now (Google Fonts: Playfair Display + Inter)
- Will replace with custom typefaces later when provided

✅ **Design Priority:** User is visual learner - needs to see mockup before committing to full build

---

## COMPLETED TASKS

1. ✅ Assessed current project structure
   - Found existing React app in `/city-sauna-finder/` with 10 Seattle venues
   - Old design: wood-themed (#d4a574 cedar colors) - deemed "cheesy"
   - Uses React 19, React Router, Google Maps

2. ✅ Analyzed competitor (saunafinder.com)
   - 1,500+ venues across 43 states, 200+ cities
   - Comprehensive data structure documented
   - Deemed "predictable, boring, terrible branding" by user

3. ✅ Documented tech stack options (Vite vs Next.js)
   - File: `/reference & docs/PROJECT_TRACKER.md` contains full analysis

4. ✅ Created project tracker document
   - File: `/reference & docs/PROJECT_TRACKER.md`
   - Contains all deferred tasks, phases, decisions needed

5. ✅ Started data scraper
   - File: `/scripts/scraper.js` created
   - Targets 15 major cities (Seattle, Portland, SF, LA, Austin, Denver, etc.)
   - Rate-limited (1-2 sec delays), respects robots.txt
   - **STATUS:** Template created, needs completion

---

## IN PROGRESS (Where We Left Off)

### 🔄 Task: Building Data Scraper

**Current State:**
- Created `/scripts/scraper.js` with:
  - ✅ 15 target cities defined
  - ✅ Rate limiting (2 sec delay)
  - ✅ Ethical scraping headers
  - ✅ robots.txt checked (1 sec crawl-delay required)
  - ⚠️ **INCOMPLETE:** HTML parsing logic (placeholder only)

**What's Needed:**
1. Install dependencies: `cheerio` or `jsdom` for HTML parsing
2. Inspect saunafinder.com HTML structure to identify:
   - Venue name selectors
   - Address/location selectors
   - Amenities/features selectors
   - Pricing/hours selectors
3. Implement `parseVenueHTML()` function
4. Test scraper on 1-2 cities first
5. Run full scrape to generate `/data/venues.json`

**Alternative Approach (if scraping blocked):**
- Manual curation using `createVenueTemplate()` helper function
- Research venues via Google Maps, Yelp, venue websites
- Build JSON dataset by hand for MVP

---

## NEXT TASKS (In Order)

1. **Complete Data Scraper**
   - Implement HTML parsing
   - Run scraper to collect 100-200 venues
   - Save to `/data/venues.json`

2. **Archive Old Files**
   - Move `/city-sauna-finder/` to `/citysaunafinder-old/`
   - Keep `/reference & docs/` separate
   - Preserve: `robots.txt`, `sitemap.xml`, `.git`

3. **Create Visual Design Mockup**
   - Build standalone HTML prototype showing:
     - Homepage hero + search
     - Venue cards (list/grid)
     - Venue detail page
   - Scandinavian minimalism aesthetic
   - User reviews mockup, decides if helpful

4. **Set Up Next.js Project**
   - Initialize: `npx create-next-app@latest`
   - Configure TypeScript, Tailwind (optional), Google Maps
   - Set up project structure per plan

5. **Build Core Features**
   - Implement design system
   - Build pages: Home, Search, VenueDetail, CityPage
   - Import scraped venue data

---

## FILES CREATED THIS SESSION

1. `/reference & docs/PROJECT_TRACKER.md` - Master task list, deferred items
2. `/reference & docs/RESUME_POINT.md` - This file
3. `/scripts/scraper.js` - Data scraper (incomplete)

---

## DESIGN SYSTEM SPECS (For Mockup)

### Color Palette
```css
--cedar: #D4A574      /* Cedar wood accent */
--stone: #3A3A3A      /* Hot stone gray - text */
--steam: #F5F5F5      /* Steam white - background */
--birch: #E8DCC4      /* Light wood - cards */
--border: #E0E0E0
```

### Typography (Google Fonts)
- **Headings:** Playfair Display (serif, editorial)
- **Body:** Inter (clean sans-serif)
- **Mono:** IBM Plex Mono (addresses, details)

### Principles
- Generous whitespace (2-4x normal)
- Natural material textures
- Real photography (not stock/illustrations)
- Editorial card layouts (magazine-style)
- NO: Rounded corners everywhere, gradient buttons, corporate colors
- YES: Sharp corners, flat colors, natural tones

---

## VENUE DATA SCHEMA

```typescript
interface Venue {
  id: string;
  name: string;
  slug: string;
  city: string;
  state: string;
  address: string;
  zip: string;
  coordinates: { lat: number; lng: number };
  phone?: string;
  website?: string;
  saunaTypes: string[];        // 'finnish', 'infrared', 'steam', 'russian', 'korean'
  amenities: string[];         // 'cold_plunge', 'hot_tub', 'massage', 'coed'
  priceRange: string;          // '$', '$$', '$$$', '$$$$'
  description: string;
  hours?: string;
  images?: string[];
  featured: boolean;
}
```

---

## TARGET CITIES (15 Total)

1. Seattle, WA
2. Portland, OR
3. San Francisco, CA
4. Los Angeles, CA
5. Austin, TX
6. Denver, CO
7. Minneapolis, MN
8. Chicago, IL
9. New York, NY
10. Boston, MA
11. Boulder, CO
12. Tucson, AZ
13. Phoenix, AZ
14. San Diego, CA
15. Miami, FL

Goal: 10-15 venues per city = 150-225 total venues for MVP

---

## WHEN YOU RESUME

**Command to run:**
```bash
cd /Users/dp/projects/citysaunafinder
```

**Next immediate step:**
```bash
# Option 1: Complete the scraper
cd scripts
npm init -y
npm install cheerio
# Then implement parseVenueHTML() and test

# Option 2: Build mockup first (user is visual learner)
# Create mockup HTML in /reference & docs/design-mockup.html
```

**User preference:** Wants to see design mockup to determine if it's helpful before full build.

---

## QUESTIONS TO ASK ON RESUME (if needed)

1. Should we complete scraper first, or jump straight to design mockup?
2. Want to see 1 mockup page or 3 (home, search, detail)?
3. Any design references/screenshots to share for inspiration?

---

## GIT STATUS (Pre-restart)

```
Current branch: main
Untracked files:
  - reference & docs/csf2-prompt1.txt
  - reference & docs/PROJECT_TRACKER.md
  - reference & docs/RESUME_POINT.md
  - scripts/scraper.js
```

**Recommendation:** Commit progress before building mockup/scraper.
