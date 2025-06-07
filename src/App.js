// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SaunaCard from './SaunaCard.js';
import MainMap from './MainMap.js';
import SaunaDetail from './SaunaDetail.js';
import saunas from './SaunaData.js';
import './app.css'; // Import your CSS file

// Main page component
function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedSaunaId, setSelectedSaunaId] = useState(null);

  // Filter saunas based on search and type
  const filteredSaunas = saunas.filter(sauna => {
    const matchesSearch = sauna.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         sauna.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         sauna.neighborhood.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = selectedType === 'all' || sauna.type === selectedType;
    
    return matchesSearch && matchesType;
  });

  // Get unique sauna types for filter dropdown  
  const saunaTypes = [...new Set(saunas.map(sauna => sauna.type))];

  const handleMarkerClick = (saunaId) => {
    setSelectedSaunaId(saunaId);
    // Scroll to the corresponding card
    const cardElement = document.getElementById(`sauna-${saunaId}`);
    if (cardElement) {
      cardElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="App">
      <header className="header">
        <h1>🧖‍♂️ Seattle Sauna Finder</h1>
        <p>Discover the best saunas, steam rooms, and thermal experiences in Seattle</p>
      </header>

      {/* Search and Filter Controls */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search saunas by name, location, or neighborhood..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        
        <select 
          value={selectedType} 
          onChange={(e) => setSelectedType(e.target.value)}
          className="filter-select"
        >
          <option value="all">All Types</option>
          {saunaTypes.map(type => (
            <option key={type} value={type}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Map Section */}
      <div className="map-section">
        <h2>Find Saunas Near You</h2>
        <MainMap 
          saunas={filteredSaunas} 
          onMarkerClick={handleMarkerClick}
          selectedSaunaId={selectedSaunaId}
        />
      </div>

      {/* Results */}
      <div className="results-section">
        <h2>
          {filteredSaunas.length} Sauna{filteredSaunas.length !== 1 ? 's' : ''} Found
        </h2>
        
        <div className="sauna-grid">
          {filteredSaunas.map(sauna => (
            <div 
              key={sauna.id} 
              id={`sauna-${sauna.id}`}
              className={selectedSaunaId === sauna.id ? 'highlighted' : ''}
            >
              <SaunaCard sauna={sauna} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Main App component with routing
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sauna/:id" element={<SaunaDetail saunas={saunas} />} />
      </Routes>
    </Router>
  );
}

export default App;