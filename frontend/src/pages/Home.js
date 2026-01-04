import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content animate-fade-in-up">
          <h1 className="gradient-text">Discover Your Next Adventure</h1>
          <p>Explore amazing destinations around the world with our curated travel experiences.</p>
          <div className="hero-btns">
            <Link to="/destinations" className="cta-button">Explore Destinations</Link>
            <Link to="/booking" className="cta-outline-button">Book a Trip</Link>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose <span className="gradient-text">Travel Explorer</span>?</h2>
          <div className="feature-grid">
            <div className="feature-card glass-panel">
              <div className="feature-icon">🌍</div>
              <h3>Curated Destinations</h3>
              <p>Hand-picked locations with authentic experiences and breathtaking views.</p>
            </div>
            <div className="feature-card glass-panel">
              <div className="feature-icon">✨</div>
              <h3>Easy Booking</h3>
              <p>Simple, secure, and lightning-fast booking process designed for you.</p>
            </div>
            <div className="feature-card glass-panel">
              <div className="feature-icon">💬</div>
              <h3>24/7 Support</h3>
              <p>Round-the-clock dedicated customer support to assist your journey.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
