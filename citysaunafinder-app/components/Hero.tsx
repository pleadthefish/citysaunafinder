export default function Hero() {
  return (
    <section className="mx-auto border-b-2" style={{
      maxWidth: 'var(--max-width)',
      padding: 'var(--space-xl) var(--space-lg) var(--space-lg)',
      borderColor: 'var(--stone)',
    }}>
      <h1 className="font-serif mb-6" style={{
        fontSize: '3.5rem',
        fontWeight: '300',
        lineHeight: '1.15',
        letterSpacing: '-0.02em',
        color: 'var(--slate)',
        maxWidth: '800px',
      }}>
        Find authentic sauna experiences in your city
      </h1>
      <p style={{
        fontSize: '1rem',
        color: 'var(--spruce)',
        fontWeight: '300',
        maxWidth: '520px',
        lineHeight: '1.7',
        letterSpacing: '0.01em',
      }}>
        Discover traditional Finnish saunas, Korean jjimjilbangs, Russian banyas, and infrared studios across North America.
      </p>
    </section>
  );
}
