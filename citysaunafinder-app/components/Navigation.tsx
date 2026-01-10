import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 border-b-2" style={{
      background: 'rgba(250, 250, 248, 0.92)',
      backdropFilter: 'blur(20px)',
      borderColor: 'var(--stone)',
    }}>
      <div className="mx-auto flex items-center justify-between" style={{
        maxWidth: 'var(--max-width)',
        padding: 'var(--space-md) var(--space-lg)',
      }}>
        <Link href="/" className="font-serif" style={{
          fontSize: '1rem',
          fontWeight: '400',
          color: 'var(--charcoal)',
          textDecoration: 'none',
          letterSpacing: '0.05em',
        }}>
          CitySaunaFinder
        </Link>

        <ul className="hidden md:flex gap-12 list-none">
          <li>
            <Link href="/cities" style={{
              color: 'var(--spruce)',
              textDecoration: 'none',
              fontSize: '0.875rem',
              fontWeight: '400',
              letterSpacing: '0.02em',
              transition: 'color 0.3s ease',
            }} className="hover:text-[var(--oak)]">
              Cities
            </Link>
          </li>
          <li>
            <Link href="/about" style={{
              color: 'var(--spruce)',
              textDecoration: 'none',
              fontSize: '0.875rem',
              fontWeight: '400',
              letterSpacing: '0.02em',
              transition: 'color 0.3s ease',
            }} className="hover:text-[var(--oak)]">
              About
            </Link>
          </li>
          <li>
            <Link href="/list" style={{
              color: 'var(--spruce)',
              textDecoration: 'none',
              fontSize: '0.875rem',
              fontWeight: '400',
              letterSpacing: '0.02em',
              transition: 'color 0.3s ease',
            }} className="hover:text-[var(--oak)]">
              List Your Sauna
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
