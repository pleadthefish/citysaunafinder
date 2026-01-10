import Link from 'next/link';

interface VenueCardProps {
  name: string;
  slug: string;
  category: string;
  city: string;
  state: string;
  description: string;
  amenities: string[];
  priceRange: string;
}

const emojiMap: Record<string, string> = {
  'Korean Spa': '🧖',
  'Russian Banya': '🔥',
  'Infrared Sauna': '♨️',
  'Premium Spa': '🌊',
  'Hotel Spa': '🏨',
  'Wood-Fired Sauna': '🌲',
  'Gym Sauna': '🏋️',
  'Climbing Gym': '🧗',
  'Private Rental': '🔒',
};

export default function VenueCard({ name, slug, category, city, state, description, amenities, priceRange }: VenueCardProps) {
  const emoji = emojiMap[category] || '🧖';

  return (
    <div className="bg-white flex flex-col transition-colors hover:bg-[var(--birch)] cursor-pointer group">
      <Link href={`/sauna/${slug}`} className="flex flex-col h-full">
        <div className="w-full flex items-center justify-center border-b transition-opacity group-hover:opacity-60" style={{
          aspectRatio: '3 / 2',
          background: 'linear-gradient(135deg, var(--stone) 0%, var(--moss) 100%)',
          color: 'var(--spruce)',
          fontSize: '3rem',
          opacity: '0.35',
          borderColor: 'var(--stone)',
        }}>
          {emoji}
        </div>

        <div className="flex-1 flex flex-col" style={{ padding: 'var(--space-md)' }}>
          <div className="font-mono mb-4" style={{
            fontSize: '0.6875rem',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: 'var(--oak)',
          }}>
            {category}
          </div>

          <h3 className="font-serif mb-2" style={{
            fontSize: '1.5rem',
            fontWeight: '400',
            letterSpacing: '-0.01em',
            color: 'var(--charcoal)',
            lineHeight: '1.2',
          }}>
            {name}
          </h3>

          <div className="font-mono mb-6" style={{
            fontSize: '0.8125rem',
            color: 'var(--moss)',
            letterSpacing: '0.02em',
          }}>
            {city}, {state}
          </div>

          <p className="flex-1 mb-6" style={{
            fontSize: '0.875rem',
            color: 'var(--spruce)',
            lineHeight: '1.6',
            fontWeight: '300',
          }}>
            {description}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-6">
            {amenities.slice(0, 3).map((amenity, idx) => (
              <span key={idx} className="border" style={{
                fontSize: '0.6875rem',
                padding: '0.25rem 0.625rem',
                background: 'var(--mist)',
                color: 'var(--spruce)',
                borderColor: 'var(--stone)',
                letterSpacing: '0.03em',
              }}>
                {amenity.replace(/-/g, ' ')}
              </span>
            ))}
          </div>

          <div className="flex justify-between items-center pt-4 border-t" style={{ borderColor: 'var(--stone)' }}>
            <span className="font-mono" style={{
              fontSize: '0.8125rem',
              color: 'var(--oak)',
              letterSpacing: '0.02em',
              fontWeight: '400',
            }}>
              {priceRange}
            </span>
            <span className="transition-colors group-hover:text-[var(--cedar)]" style={{
              fontSize: '0.8125rem',
              color: 'var(--slate)',
              fontWeight: '400',
              letterSpacing: '0.05em',
            }}>
              Explore →
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
