import { useState, useEffect } from 'react';
import { getProperties } from '../api/api';
import { properties as fallbackProperties } from '../data/properties';
import PropertyCard from './PropertyCard';

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [usingFallback, setUsingFallback] = useState(false);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      setLoading(true);
      setError(null);
      setUsingFallback(false);
      const data = await getProperties();
      // Backend may return array or { properties: [] }
      const list = Array.isArray(data) ? data : (data?.properties || []);
      setProperties(list.length > 0 ? list : fallbackProperties);
      if (list.length === 0) setUsingFallback(true);
    } catch (err) {
      console.error('Error fetching properties:', err);
      setProperties(fallbackProperties);
      setUsingFallback(true);
      setError(null); // Don't show error when we have fallback
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="properties properties-container">
        <h2 className="section-title">Featured Properties</h2>
        <p className="loading-text" style={{ textAlign: 'center', color: '#64748b' }}>Loading properties...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="properties properties-container">
        <h2 className="section-title">Featured Properties</h2>
        <p className="error-text" style={{ textAlign: 'center', color: '#dc2626', marginBottom: '1rem' }}>{error}</p>
        <button onClick={fetchProperties} className="btn-primary" style={{ display: 'block', margin: '0 auto' }}>
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="properties properties-container">
      <h2 className="section-title">Featured Properties</h2>
      {usingFallback && (
        <p className="fallback-notice">Here are the available properties.</p>
      )}
      <div className="properties-grid">
        {properties.length > 0 ? (
          properties.map((property) => (
            <PropertyCard key={property._id || property.id} property={property} />
          ))
        ) : (
          <p>No properties available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default Properties;