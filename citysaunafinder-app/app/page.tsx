import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import SearchBar from '@/components/SearchBar';
import VenueCard from '@/components/VenueCard';
import Footer from '@/components/Footer';
import venuesData from '@/data/venues.json';

export default function Home() {
  const featuredVenues = venuesData.filter(venue => venue.featured);

  return (
    <>
      <Navigation />
      <Hero />
      <SearchBar />

      <section className="mx-auto" style={{
        maxWidth: 'var(--max-width)',
        padding: 'var(--space-lg)',
      }}>
        <div className="mb-12 pb-6 border-b-2" style={{ borderColor: 'var(--stone)' }}>
          <h2 className="font-serif mb-2" style={{
            fontSize: '2rem',
            fontWeight: '300',
            letterSpacing: '-0.01em',
            color: 'var(--slate)',
          }}>
            Featured Experiences
          </h2>
          <p style={{
            fontSize: '0.9375rem',
            color: 'var(--spruce)',
            fontWeight: '300',
            letterSpacing: '0.01em',
          }}>
            Curated sauna destinations worth the journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5" style={{
          background: 'var(--slate)',
        }}>
          {featuredVenues.map(venue => (
            <VenueCard
              key={venue.id}
              name={venue.name}
              slug={venue.slug}
              category={venue.category}
              city={venue.city}
              state={venue.state}
              description={venue.description}
              amenities={venue.amenities}
              priceRange={venue.priceRange}
            />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
