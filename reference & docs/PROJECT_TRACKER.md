# CitySaunaFinder Rebuild - Project Tracker

**Status:** Phase 1 - Foundation
**Last Updated:** 2025-11-03
**Tech Stack:** TBD (Vite vs Next.js decision pending)

---

## IMMEDIATE TASKS (In Progress)

### ✅ Completed
- [x] Assess current project state
- [x] Analyze competitor (saunafinder.com)
- [x] Propose tech stack options
- [x] Document Vite vs Next.js pros/cons

### 🔄 In Progress
- [ ] Build data scraper for saunafinder.com
- [ ] Create visual design mockup
- [ ] Archive old files to `/citysaunafinder-old`

---

## DEFERRED TASKS (Pushed Out)

### Design & Branding
- [ ] **Final Typography Selection** - Upload custom typeface files when ready
- [ ] **Design System Iteration** - Refine colors/spacing after seeing mockup
- [ ] **Photography Strategy** - Source real sauna images (not stock photos)
- [ ] **Logo Design** - Create proper brand identity (currently just text)
- [ ] **Illustration Style** - Define if/when to use illustrations vs photos

### Content & Copy
- [ ] **Authentic Voice Development** - Write compelling venue descriptions
- [ ] **City Page Intros** - Unique content for each city landing page
- [ ] **About Page** - Tell the CitySaunaFinder story
- [ ] **SEO Content Strategy** - Keywords, meta descriptions, blog topics
- [ ] **Editorial Guidelines** - Tone, style, voice documentation

### Data & Features
- [ ] **Manual Data Refinement** - Clean/enhance scraped venue data
- [ ] **Add Venue Hours** - Collect operating hours for all venues
- [ ] **Add Pricing Details** - Research and document pricing for each
- [ ] **Photo Sourcing** - Get venue photos (permissions/licensing)
- [ ] **User Reviews System** - Phase 2 feature (after MVP)
- [ ] **Venue Submission Form** - Allow owners to add their saunas
- [ ] **Admin Panel** - Manage venue data without editing JSON

### Technical Enhancements
- [ ] **Database Migration** - Move from JSON to Supabase/Firebase
- [ ] **Image Optimization** - Compress/serve optimized images
- [ ] **Performance Audit** - Lighthouse scores, Core Web Vitals
- [ ] **Analytics Integration** - Google Analytics 4 or Plausible
- [ ] **Error Tracking** - Sentry or similar for bug monitoring
- [ ] **API Layer** - If moving to dynamic data fetching

### SEO & Marketing
- [ ] **Schema Markup** - Structured data for venue listings
- [ ] **Open Graph Images** - Social media preview cards
- [ ] **Google My Business** - Claim/optimize business listing
- [ ] **Sitemap Optimization** - Dynamic sitemap generation
- [ ] **Local SEO Strategy** - City-specific keyword targeting
- [ ] **Backlink Outreach** - Partner with local sauna businesses

### Mobile & Accessibility
- [ ] **PWA Features** - Add to home screen, offline support
- [ ] **Touch Gestures** - Swipe galleries, pull-to-refresh
- [ ] **Accessibility Audit** - WCAG 2.1 AA compliance
- [ ] **Screen Reader Testing** - VoiceOver/NVDA optimization

### Phase 2 Features (Post-Launch)
- [ ] **"Near Me" Geolocation** - Auto-detect user location
- [ ] **Favorites/Bookmarks** - Save venues (localStorage/account)
- [ ] **Compare Venues** - Side-by-side comparison tool
- [ ] **Filters Expansion** - More granular filtering (price, hours, amenities)
- [ ] **"List Your Sauna" Flow** - Owner self-service submission
- [ ] **Email Newsletter** - Build email list, send updates
- [ ] **Blog/Editorial** - Sauna culture content, city guides

### Phase 3 Features (Monetization)
- [ ] **Sponsored Listings** - Paid placement for venues
- [ ] **Affiliate Links** - Commission on bookings/memberships
- [ ] **Premium Profiles** - Enhanced listings for venues
- [ ] **Display Ads** - If traffic justifies (AdSense/Mediavine)

---

## DECISIONS NEEDED

1. **Tech Stack:** Vite (fast MVP) vs Next.js (better SEO)?
2. **Design Approval:** Review mockup before full build
3. **Data Volume:** How many cities/venues for MVP launch?
4. **Domain Strategy:** Keep citysaunafinder.com or rebrand?

---

## RESOURCES & REFERENCES

- **Competitor:** saunafinder.com (1,500+ venues, 43 states, 200+ cities)
- **Current Data:** 10 Seattle venues in `/city-sauna-finder/src/SaunaData.js`
- **Design Inspo:** Kinfolk magazine, Monocle, Finnish sauna heritage
- **Hosting:** Cloudflare Pages (current)

---

## NOTES

- Focus on design quality as competitive advantage
- Manual data curation > automation for MVP
- Mobile-first (75% of searches)
- Scandinavian minimalism aesthetic
- Real photography over stock/illustrations
- Editorial hierarchy, not SaaS startup vibes
