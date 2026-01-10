import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy - CitySaunaFinder',
  description: 'Privacy policy for CitySaunaFinder.',
};

export default function PrivacyPage() {
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
          Privacy Policy
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
            Information We Collect
          </h2>
          <p className="mb-6">
            CitySaunaFinder collects minimal information necessary to provide our directory service.
            We do not require user accounts or store personal information.
          </p>

          <h2 className="font-serif mt-8 mb-4" style={{
            fontSize: '1.5rem',
            fontWeight: '400',
            color: 'var(--slate)',
            letterSpacing: '-0.01em',
          }}>
            Analytics
          </h2>
          <p className="mb-6">
            We may use analytics tools to understand how visitors use our site. This data is anonymized
            and used solely to improve the user experience.
          </p>

          <h2 className="font-serif mt-8 mb-4" style={{
            fontSize: '1.5rem',
            fontWeight: '400',
            color: 'var(--slate)',
            letterSpacing: '-0.01em',
          }}>
            Third-Party Services
          </h2>
          <p className="mb-6">
            Our site may include embedded maps and advertising services from third parties.
            These services have their own privacy policies.
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
            Questions about this privacy policy? Email us at{' '}
            <a href="mailto:privacy@citysaunafinder.com" style={{ color: 'var(--oak)' }}>
              privacy@citysaunafinder.com
            </a>
          </p>
        </div>
      </article>

      <Footer />
    </>
  );
}
