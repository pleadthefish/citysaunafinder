import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import venuesData from '@/data/venues.json';

interface VenuePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return venuesData.map((venue) => ({
    slug: venue.slug,
  }));
}

export async function generateMetadata({ params }: VenuePageProps) {
  const { slug } = await params;
  const venue = venuesData.find(v => v.slug === slug);

  if (!venue) {
    return {
      title: 'Venue Not Found',
    };
  }

  return {
    title: `${venue.name} - ${venue.city}, ${venue.state} | CitySaunaFinder`,
    description: venue.description,
  };
}

export default async function VenuePage({ params }: VenuePageProps) {
  const { slug } = await params;
  const venue = venuesData.find(v => v.slug === slug);

  if (!venue) {
    notFound();
  }

  const amenityLabels = venue.amenities.map(a => a.replace(/-/g, ' '));

  return (
    <>
      <Navigation />

      <article className="mx-auto" style={{
        maxWidth: 'var(--max-width)',
        padding: 'var(--space-lg)',
      }}>
        {/* Header */}
        <header className="mb-12 pb-8 border-b-2" style={{ borderColor: 'var(--stone)' }}>
          <div className="font-mono mb-4" style={{
            fontSize: '0.6875rem',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: 'var(--oak)',
          }}>
            {venue.category}
          </div>

          <h1 className="font-serif mb-4" style={{
            fontSize: '3rem',
            fontWeight: '300',
            letterSpacing: '-0.02em',
            color: 'var(--charcoal)',
            lineHeight: '1.15',
          }}>
            {venue.name}
          </h1>

          <div className="font-mono" style={{
            fontSize: '1rem',
            color: 'var(--spruce)',
            letterSpacing: '0.02em',
          }}>
            {venue.city}, {venue.state}
          </div>
        </header>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Main Column */}
          <div className="md:col-span-2">
            <section className="mb-12">
              <h2 className="font-serif mb-4" style={{
                fontSize: '1.5rem',
                fontWeight: '400',
                color: 'var(--slate)',
                letterSpacing: '-0.01em',
              }}>
                About
              </h2>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.8',
                color: 'var(--spruce)',
                fontWeight: '300',
              }}>
                {venue.description}
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-serif mb-4" style={{
                fontSize: '1.5rem',
                fontWeight: '400',
                color: 'var(--slate)',
                letterSpacing: '-0.01em',
              }}>
                Amenities
              </h2>
              <div className="flex flex-wrap gap-2">
                {amenityLabels.map((amenity, idx) => (
                  <span key={idx} className="border" style={{
                    fontSize: '0.75rem',
                    padding: '0.5rem 1rem',
                    background: 'var(--mist)',
                    color: 'var(--spruce)',
                    borderColor: 'var(--stone)',
                    letterSpacing: '0.03em',
                  }}>
                    {amenity}
                  </span>
                ))}
              </div>
            </section>

            {/* Map Placeholder */}
            <section className="mb-12">
              <h2 className="font-serif mb-4" style={{
                fontSize: '1.5rem',
                fontWeight: '400',
                color: 'var(--slate)',
                letterSpacing: '-0.01em',
              }}>
                Location
              </h2>
              <div className="border-2 flex items-center justify-center" style={{
                height: '400px',
                borderColor: 'var(--stone)',
                background: 'var(--mist)',
              }}>
                <div className="text-center">
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🗺️</div>
                  <p style={{ color: 'var(--moss)', fontSize: '0.875rem' }}>
                    Map integration coming soon
                  </p>
                  <p className="font-mono mt-2" style={{
                    color: 'var(--spruce)',
                    fontSize: '0.75rem',
                    letterSpacing: '0.02em',
                  }}>
                    {venue.coordinates.lat.toFixed(4)}, {venue.coordinates.lng.toFixed(4)}
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div>
            <div className="border-2 p-6" style={{
              borderColor: 'var(--stone)',
              background: 'white',
            }}>
              <h3 className="font-serif mb-6" style={{
                fontSize: '1.25rem',
                fontWeight: '400',
                color: 'var(--charcoal)',
                letterSpacing: '-0.01em',
              }}>
                Details
              </h3>

              <dl>
                <dt className="font-mono mb-2" style={{
                  fontSize: '0.6875rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: 'var(--moss)',
                }}>
                  Address
                </dt>
                <dd className="mb-6" style={{
                  fontSize: '0.875rem',
                  color: 'var(--spruce)',
                  lineHeight: '1.6',
                }}>
                  {venue.address}
                </dd>

                <dt className="font-mono mb-2" style={{
                  fontSize: '0.6875rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: 'var(--moss)',
                }}>
                  Pricing
                </dt>
                <dd className="mb-6 font-mono" style={{
                  fontSize: '1rem',
                  color: 'var(--oak)',
                  fontWeight: '400',
                }}>
                  {venue.priceRange}
                </dd>

                {venue.rating && (
                  <>
                    <dt className="font-mono mb-2" style={{
                      fontSize: '0.6875rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      color: 'var(--moss)',
                    }}>
                      Rating
                    </dt>
                    <dd className="mb-6" style={{
                      fontSize: '0.875rem',
                      color: 'var(--spruce)',
                    }}>
                      {venue.rating.toFixed(1)} / 5.0
                    </dd>
                  </>
                )}
              </dl>
            </div>

            {/* Ad Placeholder */}
            <div className="mt-6 border-2 p-6 flex items-center justify-center" style={{
              minHeight: '250px',
              borderColor: 'var(--stone)',
              background: 'var(--birch)',
            }}>
              <div className="text-center">
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📢</div>
                <p style={{ color: 'var(--moss)', fontSize: '0.75rem' }}>
                  Ad space
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: venue.name,
              description: venue.description,
              address: {
                '@type': 'PostalAddress',
                streetAddress: venue.address,
                addressLocality: venue.city,
                addressRegion: venue.state,
                postalCode: venue.zip,
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: venue.coordinates.lat,
                longitude: venue.coordinates.lng,
              },
              aggregateRating: venue.rating ? {
                '@type': 'AggregateRating',
                ratingValue: venue.rating,
                ratingCount: 1,
              } : undefined,
            }),
          }}
        />
      </article>

      <Footer />
    </>
  );
}
