'use client';

import { useState } from 'react';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [saunaType, setSaunaType] = useState('all');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement search functionality
    console.log('Search:', { searchTerm, saunaType });
  };

  return (
    <div className="mx-auto" style={{
      maxWidth: 'var(--max-width)',
      padding: 'var(--space-md) var(--space-lg)',
    }}>
      <form onSubmit={handleSearch} className="grid gap-px" style={{
        gridTemplateColumns: '2fr 1fr auto',
        background: 'var(--stone)',
        maxWidth: '700px',
      }}>
        <input
          type="text"
          placeholder="City or ZIP code"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border-none focus:outline-none focus:outline-1 focus:outline-[var(--cedar)] focus:outline-offset-[-1px]"
          style={{
            padding: 'var(--space-sm) var(--space-md)',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.875rem',
            fontWeight: '300',
            color: 'var(--charcoal)',
            background: 'white',
          }}
        />
        <select
          value={saunaType}
          onChange={(e) => setSaunaType(e.target.value)}
          className="border-none cursor-pointer focus:outline-none focus:outline-1 focus:outline-[var(--cedar)] focus:outline-offset-[-1px]"
          style={{
            padding: 'var(--space-sm) var(--space-md)',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.875rem',
            fontWeight: '300',
            color: 'var(--spruce)',
            background: 'white',
          }}
        >
          <option value="all">All Types</option>
          <option value="finnish">Finnish</option>
          <option value="korean">Korean Spa</option>
          <option value="russian">Russian Banya</option>
          <option value="infrared">Infrared</option>
        </select>
        <button
          type="submit"
          className="border-none cursor-pointer transition-colors hover:bg-[var(--wood-dark)]"
          style={{
            padding: 'var(--space-sm) var(--space-md)',
            background: 'var(--slate)',
            color: 'var(--birch)',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.8125rem',
            fontWeight: '400',
            letterSpacing: '0.05em',
          }}
        >
          Search
        </button>
      </form>
    </div>
  );
}
