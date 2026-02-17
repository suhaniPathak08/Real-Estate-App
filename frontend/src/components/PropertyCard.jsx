import React from 'react';

function PropertyCard({ property }) {
  if (!property) return null;

  const title = property.title || 'Untitled Property';
  const location = property.location || '';
  const price = property.price != null ? Number(property.price) : 0;
  const image = property.image || 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop';

  const handleContact = () => {
    alert(`Contacting agent for ${title}`);
  };

  return (
    <div className="property-card">
      <div className="property-image">
        <img src={image} alt={title} />
      </div>
      <div className="property-details">
        <h3>{title}</h3>
        <p className="property-location">📍 {location}</p>
        <p className="property-price">${price.toLocaleString()}</p>
        <button className="btn-contact" onClick={handleContact}>
          Contact Agent
        </button>
      </div>
    </div>
  );
}

export default PropertyCard;