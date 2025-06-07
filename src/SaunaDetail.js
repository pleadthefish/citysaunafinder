// SaunaDetail.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Wrapper, Status } from '@googlemaps/react-wrapper';

// Single sauna map component
const SingleSaunaMap = ({ sauna }) => {
  const mapRef = React.useRef(null);

  React.useEffect(() => {
    if (!mapRef.current || !sauna) return;

    const map = new window.google.maps.Map(mapRef.current, {
      center: sauna.coordinates,
      zoom: 15,
      styles: [
        {
          featureType: "poi",
          elementType: "labels",
          stylers: [{ visibility: "off" }]
        }
      ]
    });

    const marker = new window.google.maps.Marker({
      position: sauna.coordinates,
      map: map,
      title: sauna.name,
      icon: {
        url: getMarkerIcon(sauna.type),
        scaledSize: new window.google.maps.Size(50, 50),
      }
    });

    const infoWindow = new window.google.maps.InfoWindow({
      content: `
        <div style="padding: 15px; max-width: 300px;">
          <h3 style="margin: 0 0 10px 0; color: #333;">${sauna.name}</h3>
          <p style="margin: 5px 0; color: #666;"><strong>${sauna.category}</strong></p>
          <p style="margin: 5px 0; color: #666;">${sauna.address}</p>
          <p style="margin: 5px 0; color: #666;">⭐ ${sauna.rating}/5</p>
          <p style="margin: 10px 0 0 0; color: #666;">${sauna.features}</p>
        </div>
      `
    });

    marker.addListener('click', () => {
      infoWindow.open(map, marker);
    });

    // Open info window by default
    infoWindow.open(map, marker);
  }, [sauna]);

  const getMarkerIcon = (type) => {
    const iconMap = {
      'korean': 'data:image/svg+xml;base64,' + btoa(`<svg width="50" height="50" xmlns="http://www.w3.org/2000/svg"><circle cx="25" cy="25" r="22" fill="#ff6b6b" stroke="white" stroke-width="4"/><text x="25" y="35" text-anchor="middle" fill="white" font-size="24">🏢</text></svg>`),
      'russian': 'data:image/svg+xml;base64,' + btoa(`<svg width="50" height="50" xmlns="http://www.w3.org/2000/svg"><circle cx="25" cy="25" r="22" fill="#ff8c42" stroke="white" stroke-width="4"/><text x="25" y="35" text-anchor="middle" fill="white" font-size="24">🔥</text></svg>`),
      'infrared': 'data:image/svg+xml;base64,' + btoa(`<svg width="50" height="50" xmlns="http://www.w3.org/2000/svg"><circle cx="25" cy="25" r="22" fill="#ffd93d" stroke="white" stroke-width="4"/><text x="25" y="35" text-anchor="middle" fill="white" font-size="24">☀️</text></svg>`),
      'spa': 'data:image/svg+xml;base64=' + btoa(`<svg width="50" height="50" xmlns="http://www.w3.org/2000/svg"><circle cx="25" cy="25" r="22" fill="#6bcf7f" stroke="white" stroke-width="4"/><text x="25" y="35" text-anchor="middle" fill="white" font-size="24">💎</text></svg>`),
      'hotel': 'data:image/svg+xml;base64=' + btoa(`<svg width="50" height="50" xmlns="http://www.w3.org/2000/svg"><circle cx="25" cy="25" r="22" fill="#4ecdc4" stroke="white" stroke-width="4"/><text x="25" y="35" text-anchor="middle" fill="white" font-size="24">🏨</text></svg>`),
      'finnish': 'data:image/svg+xml;base64=' + btoa(`<svg width="50" height="50" xmlns="http://www.w3.org/2000/svg"><circle cx="25" cy="25" r="22" fill="#a8e6cf" stroke="white" stroke-width="4"/><text x="25" y="35" text-anchor="middle" fill="white" font-size="24">🔥</text></svg>`),
      'gym': 'data:image/svg+xml;base64=' + btoa(`<svg width="50" height="50" xmlns="http://www.w3.org/2000/svg"><circle cx="25" cy="25" r="22" fill="#845ec2" stroke="white" stroke-width="4"/><text x="25" y="35" text-anchor="middle" fill="white" font-size="24">💪</text></svg>`),
      'private': 'data:image/svg+xml;base64=' + btoa(`<svg width="50" height="50" xmlns="http://www.w3.org/2000/svg"><circle cx="25" cy="25" r="22" fill="#d65db1" stroke="white" stroke-width="4"/><text x="25" y="35" text-anchor="middle" fill="white" font-size="24">🔒</text></svg>`)
    };
    
    return iconMap[type] || iconMap['spa'];
  };

  return <div ref={mapRef} style={{ width: '100%', height: '400px', borderRadius: '8px' }} />;
};

const SaunaDetail = ({ saunas }) => {
  const { id } = useParams();
  const sauna = saunas.find(s => s.id === parseInt(id));

  if (!sauna) {
    return (
      <div className="sauna-detail-container">
        <div className="sauna-detail-header">
          <Link to="/" className="back-link">← Back to All Saunas</Link>
          <h1>Sauna not found</h1>
        </div>
      </div>
    );
  }

  const getEmoji = (type) => {
    const emojiMap = {
      'korean': '🏢',
      'russian': '🔥',
      'infrared': '☀️',
      'spa': '💎',
      'hotel': '🏨',
      'finnish': '🔥',
      'gym': '💪',
      'private': '🔒'
    };
    return emojiMap[type] || '🧖‍♂️';
  };

  const generateStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push('★');
    }
    if (hasHalfStar) {
      stars.push('☆');
    }
    return stars.join('') + ` ${rating}/5`;
  };

  const render = (status) => {
    switch (status) {
      case Status.LOADING:
        return <div style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading map...</div>;
      case Status.FAILURE:
        return <div style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Error loading map</div>;
      case Status.SUCCESS:
        return <SingleSaunaMap sauna={sauna} />;
    }
  };

  return (
    <div className="sauna-detail-container">
      <div className="sauna-detail-header">
        <Link to="/" className="back-link">← Back to All Saunas</Link>
        <div className="sauna-detail-title">
          <span className="sauna-emoji">{getEmoji(sauna.type)}</span>
          <h1>{sauna.name}</h1>
        </div>
      </div>

      <div className="sauna-detail-content">
        <div className="sauna-detail-info">
          <div className="info-section">
            <h2>Overview</h2>
            <p className="sauna-category">{sauna.category}</p>
            <div className="rating-large">{generateStars(sauna.rating)}</div>
          </div>

          <div className="info-section">
            <h3>Location</h3>
            <p>{sauna.address}</p>
            <p className="neighborhood-tag">{sauna.neighborhood}</p>
          </div>

          <div className="info-section">
            <h3>Features</h3>
            <p>{sauna.features}</p>
          </div>

          <div className="info-section">
            <h3>Pricing</h3>
            <p className="price-info">{sauna.price}</p>
          </div>
        </div>

        <div className="sauna-detail-map">
          <h3>Location</h3>
          <Wrapper 
            apiKey="YOUR_GOOGLE_MAPS_API_KEY" 
            render={render}
            libraries={['places']}
          />
        </div>
      </div>
    </div>
  );
};

export default SaunaDetail;