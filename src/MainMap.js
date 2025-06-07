// MainMap.js
import React, { useState } from 'react';
import { Wrapper, Status } from '@googlemaps/react-wrapper';

const MapComponent = ({ saunas, onMarkerClick, selectedSaunaId }) => {
  const [map, setMap] = React.useState(null);
  const [infoWindow, setInfoWindow] = React.useState(null);
  const mapRef = React.useRef(null);

  // Initialize map
  React.useEffect(() => {
    if (!mapRef.current) return;

    const newMap = new window.google.maps.Map(mapRef.current, {
      center: { lat: 47.6205, lng: -122.3493 }, // Seattle center
      zoom: 11,
      styles: [
        {
          featureType: "poi",
          elementType: "labels",
          stylers: [{ visibility: "off" }]
        }
      ]
    });

    const newInfoWindow = new window.google.maps.InfoWindow();
    
    setMap(newMap);
    setInfoWindow(newInfoWindow);
  }, []);

  // Add markers when map loads
  React.useEffect(() => {
    if (!map || !infoWindow) return;

    const markers = saunas.map(sauna => {
      const marker = new window.google.maps.Marker({
        position: sauna.coordinates,
        map: map,
        title: sauna.name,
        icon: {
          url: getMarkerIcon(sauna.type),
          scaledSize: new window.google.maps.Size(40, 40),
        }
      });

      marker.addListener('click', () => {
        infoWindow.setContent(`
          <div style="padding: 10px; max-width: 250px;">
            <h3 style="margin: 0 0 8px 0; color: #333;">${sauna.name}</h3>
            <p style="margin: 4px 0; color: #666;"><strong>${sauna.category}</strong></p>
            <p style="margin: 4px 0; color: #666;">${sauna.location}</p>
            <p style="margin: 4px 0; color: #666;">⭐ ${sauna.rating}/5</p>
            <p style="margin: 8px 0 0 0; color: #007cba; cursor: pointer;" onclick="window.location.href='/sauna/${sauna.id}'">
              View Details →
            </p>
          </div>
        `);
        infoWindow.open(map, marker);
        
        if (onMarkerClick) {
          onMarkerClick(sauna.id);
        }
      });

      return marker;
    });

    return () => {
      markers.forEach(marker => marker.setMap(null));
    };
  }, [map, infoWindow, saunas, onMarkerClick]);

  // Get custom marker icons based on sauna type
  const getMarkerIcon = (type) => {
    const iconMap = {
      'korean': 'data:image/svg+xml;base64,' + btoa(`<svg width="40" height="40" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="18" fill="#ff6b6b" stroke="white" stroke-width="3"/><text x="20" y="28" text-anchor="middle" fill="white" font-size="20">🏢</text></svg>`),
      'russian': 'data:image/svg+xml;base64,' + btoa(`<svg width="40" height="40" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="18" fill="#ff8c42" stroke="white" stroke-width="3"/><text x="20" y="28" text-anchor="middle" fill="white" font-size="20">🔥</text></svg>`),
      'infrared': 'data:image/svg+xml;base64,' + btoa(`<svg width="40" height="40" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="18" fill="#ffd93d" stroke="white" stroke-width="3"/><text x="20" y="28" text-anchor="middle" fill="white" font-size="20">☀️</text></svg>`),
      'spa': 'data:image/svg+xml;base64=' + btoa(`<svg width="40" height="40" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="18" fill="#6bcf7f" stroke="white" stroke-width="3"/><text x="20" y="28" text-anchor="middle" fill="white" font-size="20">💎</text></svg>`),
      'hotel': 'data:image/svg+xml;base64=' + btoa(`<svg width="40" height="40" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="18" fill="#4ecdc4" stroke="white" stroke-width="3"/><text x="20" y="28" text-anchor="middle" fill="white" font-size="20">🏨</text></svg>`),
      'finnish': 'data:image/svg+xml;base64=' + btoa(`<svg width="40" height="40" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="18" fill="#a8e6cf" stroke="white" stroke-width="3"/><text x="20" y="28" text-anchor="middle" fill="white" font-size="20">🔥</text></svg>`),
      'gym': 'data:image/svg+xml;base64=' + btoa(`<svg width="40" height="40" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="18" fill="#845ec2" stroke="white" stroke-width="3"/><text x="20" y="28" text-anchor="middle" fill="white" font-size="20">💪</text></svg>`),
      'private': 'data:image/svg+xml;base64=' + btoa(`<svg width="40" height="40" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="18" fill="#d65db1" stroke="white" stroke-width="3"/><text x="20" y="28" text-anchor="middle" fill="white" font-size="20">🔒</text></svg>`)
    };
    
    return iconMap[type] || iconMap['spa'];
  };

  return <div ref={mapRef} style={{ width: '100%', height: '500px' }} />;
};

const MainMap = ({ saunas, onMarkerClick, selectedSaunaId }) => {
  const render = (status) => {
    switch (status) {
      case Status.LOADING:
        return <div style={{ height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading map...</div>;
      case Status.FAILURE:
        return <div style={{ height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Error loading map</div>;
      case Status.SUCCESS:
        return <MapComponent saunas={saunas} onMarkerClick={onMarkerClick} selectedSaunaId={selectedSaunaId} />;
    }
  };

  return (
    <Wrapper 
      apiKey="YOUR_GOOGLE_MAPS_API_KEY" 
      render={render}
      libraries={['places']}
    />
  );
};

export default MainMap;