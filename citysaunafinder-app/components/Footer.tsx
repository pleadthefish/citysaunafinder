import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t-2 mt-20" style={{
      background: 'var(--birch)',
      borderColor: 'var(--slate)',
    }}>
      <div className="mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0" style={{
        maxWidth: 'var(--max-width)',
        padding: 'var(--space-lg)',
      }}>
        <div style={{
          fontSize: '0.8125rem',
          color: 'var(--spruce)',
          letterSpacing: '0.02em',
        }}>
          © 2024 CitySaunaFinder
        </div>

        <ul className="flex flex-col md:flex-row gap-4 md:gap-12 list-none text-center">
          <li>
            <Link href="/about" className="transition-colors hover:text-[var(--oak)]" style={{
              fontSize: '0.8125rem',
              color: 'var(--spruce)',
              textDecoration: 'none',
              letterSpacing: '0.02em',
            }}>
              About
            </Link>
          </li>
          <li>
            <Link href="/privacy" className="transition-colors hover:text-[var(--oak)]" style={{
              fontSize: '0.8125rem',
              color: 'var(--spruce)',
              textDecoration: 'none',
              letterSpacing: '0.02em',
            }}>
              Privacy
            </Link>
          </li>
          <li>
            <Link href="/terms" className="transition-colors hover:text-[var(--oak)]" style={{
              fontSize: '0.8125rem',
              color: 'var(--spruce)',
              textDecoration: 'none',
              letterSpacing: '0.02em',
            }}>
              Terms
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
