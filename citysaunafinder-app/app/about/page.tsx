import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'About - CitySaunaFinder',
  description: 'Learn about CitySaunaFinder, your guide to authentic sauna experiences across North America.',
};

export default function AboutPage() {
  return (
    <>
      <Navigation />

      <article className="mx-auto" style={{
        maxWidth: '800px',
        padding: 'var(--space-xl) var(--space-lg)',
      }}>
        <h1 className="font-serif mb-8" style={{
          fontSize: '3rem',
          fontWeight: '300',
          letterSpacing: '-0.02em',
          color: 'var(--charcoal)',
          lineHeight: '1.15',
        }}>
          About CitySaunaFinder
        </h1>

        <div style={{
          fontSize: '1rem',
          lineHeight: '1.8',
          color: 'var(--spruce)',
          fontWeight: '300',
        }}>
          <p className="mb-6">
            CitySaunaFinder is your comprehensive guide to discovering authentic sauna experiences across North America.
          </p>

          <p className="mb-6">
            We curate and catalog traditional Finnish saunas, Korean jjimjilbangs, Russian banyas, infrared studios,
            and more — helping you find the perfect heat therapy experience in your city.
          </p>

          <h2 className="font-serif mt-12 mb-4" style={{
            fontSize: '1.75rem',
            fontWeight: '400',
            color: 'var(--slate)',
            letterSpacing: '-0.01em',
          }}>
            Our Mission
          </h2>

          <p className="mb-6">
            To connect people with the transformative benefits of sauna culture while supporting local wellness businesses.
          </p>

          <h2 className="font-serif mt-12 mb-4" style={{
            fontSize: '1.75rem',
            fontWeight: '400',
            color: 'var(--slate)',
            letterSpacing: '-0.01em',
          }}>
            Contact
          </h2>

          <p className="mb-6">
            Have a sauna to add to our directory? Want to report outdated information?
            Reach out at{' '}
            <a href="mailto:hello@citysaunafinder.com" style={{ color: 'var(--oak)' }}>
              hello@citysaunafinder.com
            </a>
          </p>
        </div>
      </article>

      <Footer />
    </>
  );
}
