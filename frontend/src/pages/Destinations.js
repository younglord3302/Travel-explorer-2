import React, { useState, useEffect } from 'react';
import './Destinations.css';

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDestinations();
  }, []);

  const fetchDestinations = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/destinations');
      if (!response.ok) {
        throw new Error('Failed to fetch destinations');
      }
      const data = await response.json();
      setDestinations(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return (
    <div className="loading-container">
      <div className="loader"></div>
      <p>Finding the perfect spots for you...</p>
    </div>
  );
  
  if (error) return (
    <div className="error-container glass-panel">
      <p>Error: {error}</p>
      <button onClick={fetchDestinations} className="cta-button">Try Again</button>
    </div>
  );

  return (
    <div className="destinations animate-fade-in-up">
      <div className="container">
        <h1 className="section-title">Explore <span className="gradient-text">Destinations</span></h1>
        <div className="destinations-grid">
          {destinations.map((destination) => (
            <div key={destination._id} className="destination-card glass-panel">
              <div className="destination-image-container">
                {destination.image && (
                  <img src={destination.image} alt={destination.name} className="destination-image" />
                )}
                <div className="destination-badge">${destination.price}</div>
              </div>
              <div className="destination-content">
                <div className="destination-header">
                  <h3>{destination.name}</h3>
                  {destination.rating && <span className="rating">★ {destination.rating}</span>}
                </div>
                <p className="location">
                  <span className="icon">📍</span> {destination.location}
                </p>
                <p className="description">{destination.description}</p>
                <div className="destination-footer">
                  <button className="book-btn">Details</button>
                  <button className="action-btn">Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
