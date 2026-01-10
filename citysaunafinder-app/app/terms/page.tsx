import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Terms of Service - CitySaunaFinder',
  description: 'Terms of service for CitySaunaFinder.',
};

export default function TermsPage() {
  return (
    <>
      <Navigation />

      <article className="mx-auto" style={{
        maxWidth: '800px',
        padding: 'var(--space-xl) var(--space-lg)',
      }}>
        <h1 className="font-serif mb-4" style={{
          fontSize: '3rem',
          fontWeight: '300',
          letterSpacing: '-0.02em',
          color: 'var(--charcoal)',
          lineHeight: '1.15',
        }}>
          Terms of Service
        </h1>

        <p className="mb-8" style={{ color: 'var(--moss)', fontSize: '0.875rem' }}>
          Last updated: January 2025
        </p>

        <div style={{
          fontSize: '1rem',
          lineHeight: '1.8',
          color: 'var(--spruce)',
          fontWeight: '300',
        }}>
          <h2 className="font-serif mt-8 mb-4" style={{
            fontSize: '1.5rem',
            fontWeight: '400',
            color: 'var(--slate)',
            letterSpacing: '-0.01em',
          }}>
            Use of Service
          </h2>
          <p className="mb-6">
            CitySaunaFinder provides a directory of sauna venues for informational purposes.
            We do not guarantee the accuracy of venue information and encourage users to
            verify details directly with venues.
          </p>

          <h2 className="font-serif mt-8 mb-4" style={{
            fontSize: '1.5rem',
            fontWeight: '400',
            color: 'var(--slate)',
            letterSpacing: '-0.01em',
          }}>
            Disclaimer
          </h2>
          <p className="mb-6">
            Venue hours, pricing, and amenities may change without notice. CitySaunaFinder
            is not responsible for inaccuracies or changes to venue information.
          </p>

          <h2 className="font-serif mt-8 mb-4" style={{
            fontSize: '1.5rem',
            fontWeight: '400',
            color: 'var(--slate)',
            letterSpacing: '-0.01em',
          }}>
            User Conduct
          </h2>
          <p className="mb-6">
            Users agree not to misuse our service, including scraping content or
            submitting false venue information.
          </p>

          <h2 className="font-serif mt-8 mb-4" style={{
            fontSize: '1.5rem',
            fontWeight: '400',
            color: 'var(--slate)',
            letterSpacing: '-0.01em',
          }}>
            Contact
          </h2>
          <p className="mb-6">
            Questions about these terms? Email us at{' '}
            <a href="mailto:legal@citysaunafinder.com" style={{ color: 'var(--oak)' }}>
              legal@citysaunafinder.com
            </a>
          </p>
        </div>
      </article>

      <Footer />
    </>
  );
}
