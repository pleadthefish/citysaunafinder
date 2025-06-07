// App.js
import React, { useState } from 'react';
import SaunaCard from './SuanaCard.js';
import saunas from './SaunaData.js';
import './App.css'; // You'll put your CSS here

function App() {
  const [filteredSaunas, setFilteredSaunas] = useState(saunas);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Filter function
  const handleFilter = (filterType) => {
    setActiveFilter(filterType);
    
    let filtered = saunas;
    
    // Apply type filter
    if (filterType !== 'all') {
      filtered = filtered.filter(sauna => sauna.type === filterType);
    }
    
    // Apply search filter if there's a search term
    if (searchTerm) {
      filtered = filtered.filter(sauna => 
        sauna.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sauna.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sauna.features.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredSaunas(filtered);
  };

  // Search function
  const handleSearch = (term) => {
    setSearchTerm(term);
    
    let filtered = saunas;
    
    // Apply search filter
    if (term) {
      filtered = filtered.filter(sauna => 
        sauna.name.toLowerCase().includes(term.toLowerCase()) ||
        sauna.category.toLowerCase().includes(term.toLowerCase()) ||
        sauna.features.toLowerCase().includes(term.toLowerCase())
      );
    }
    
    // Apply type filter if there's an active filter
    if (activeFilter !== 'all') {
      filtered = filtered.filter(sauna => sauna.type === activeFilter);
    }
    
    setFilteredSaunas(filtered);
  };

  return (
    <div className="App">
      <header>
        <nav className="container">
          <a href="/" className="logo">🧖‍♂️ Seattle Sauna Guide</a>
        </nav>
      </header>

      <section className="hero">
        <div className="container">
          <h1>Seattle's Best Saunas</h1>
          <p>Discover authentic Finnish saunas, modern infrared rooms, and relaxing steam baths across the Emerald City</p>
        </div>
      </section>

      <main className="main-content">
        <section className="search-section">
          <h2>Find Saunas Near You</h2>
          <div className="search-container">
            <input 
              type="text" 
              className="search-input" 
              placeholder="Search by name, neighborhood, or sauna type..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
          <div className="filters">
            {['all', 'finnish', 'infrared', 'korean', 'russian', 'gym', 'hotel'].map(filter => (
              <button 
                key={filter}
                className={`filter-button ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => handleFilter(filter)}
              >
                {filter === 'all' ? 'All Types' : 
                 filter === 'finnish' ? 'Finnish/Wood-Fired' :
                 filter === 'infrared' ? 'Infrared' :
                 filter === 'korean' ? 'Korean Spa' :
                 filter === 'russian' ? 'Russian Banya' :
                 filter === 'gym' ? 'Gym/Chain' :
                 filter === 'hotel' ? 'Hotel Spa' : filter}
              </button>
            ))}
          </div>
        </section>

        <section className="featured-section">
          <div className="container">
            <h2>Featured Saunas ({filteredSaunas.length})</h2>
            <div className="sauna-grid">
              {filteredSaunas.map(sauna => (
                <SaunaCard key={sauna.id} sauna={sauna} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;