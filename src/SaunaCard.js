// SaunaCard.js
import React from 'react';

function SaunaCard({ sauna }) {
  // Function to get emoji based on sauna type
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

  // Function to generate star rating
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

  return (
    <div className="sauna-card" data-type={sauna.type}>
      <div className="sauna-image">
        {getEmoji(sauna.type)}
      </div>
      <div className="sauna-info">
        <h3>{sauna.name}</h3>
        <span className="sauna-type">{sauna.category}</span>
        <div className="sauna-details">
          <p><strong>Location:</strong> {sauna.location}</p>
          <p><strong>Features:</strong> {sauna.features}</p>
          <p><strong>Price:</strong> {sauna.price}</p>
          <div className="rating">{generateStars(sauna.rating)}</div>
        </div>
      </div>
    </div>
  );
}

export default SaunaCard;