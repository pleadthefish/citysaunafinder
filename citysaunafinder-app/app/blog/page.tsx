import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Blog - CitySaunaFinder',
  description: 'Articles about sauna culture, health benefits, and wellness tips.',
};

// Placeholder for future blog posts
const blogPosts: Array<{
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
}> = [];

export default function BlogPage() {
  return (
    <>
      <Navigation />

      <div className="mx-auto" style={{
        maxWidth: 'var(--max-width)',
        padding: 'var(--space-xl) var(--space-lg)',
      }}>
        <header className="mb-12 pb-8 border-b-2" style={{ borderColor: 'var(--stone)' }}>
          <h1 className="font-serif mb-4" style={{
            fontSize: '3rem',
            fontWeight: '300',
            letterSpacing: '-0.02em',
            color: 'var(--charcoal)',
            lineHeight: '1.15',
          }}>
            Sauna Culture & Wellness
          </h1>
          <p style={{
            fontSize: '1rem',
            color: 'var(--spruce)',
            fontWeight: '300',
            maxWidth: '600px',
            lineHeight: '1.7',
          }}>
            Explore the history, health benefits, and cultural significance of sauna traditions around the world.
          </p>
        </header>

        {blogPosts.length === 0 ? (
          <div className="text-center py-20">
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📝</div>
            <p style={{ color: 'var(--moss)', fontSize: '1rem' }}>
              Blog posts coming soon
            </p>
          </div>
        ) : (
          <div className="grid gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="border-b-2 pb-8" style={{ borderColor: 'var(--stone)' }}>
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="font-serif mb-3 hover:text-[var(--oak)] transition-colors" style={{
                    fontSize: '1.75rem',
                    fontWeight: '400',
                    color: 'var(--charcoal)',
                    letterSpacing: '-0.01em',
                  }}>
                    {post.title}
                  </h2>
                </Link>
                <div className="font-mono mb-4" style={{
                  fontSize: '0.75rem',
                  color: 'var(--moss)',
                  letterSpacing: '0.02em',
                }}>
                  {post.date} · {post.author}
                </div>
                <p style={{
                  fontSize: '1rem',
                  color: 'var(--spruce)',
                  lineHeight: '1.7',
                  fontWeight: '300',
                }}>
                  {post.description}
                </p>
              </article>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}
