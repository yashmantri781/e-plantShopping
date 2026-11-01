import React, { useState } from 'react';
import ProductList from './ProductList';
import AboutUs from './AboutUs';
import './App.css';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  const handleHomeClick = () => {
    setShowProductList(false);
  };

  return (
    <div className="app-root">
      {!showProductList ? (
        <div className="landing-page">
          <div className="landing-overlay">
            {/* Hero Section */}
            <div className="landing-hero-container">
              <div className="landing-hero-content">
                <div className="brand-badge">Welcome to Botanical Sanctuary</div>
                <h1 className="hero-title">Paradise Nursery</h1>
                <p className="hero-tagline">Where Greenery Meets Serenity</p>
                <p className="hero-description">
                  Immerse your space in the tranquil, purifying power of nature. Discover carefully curated, 
                  greenhouse-fresh houseplants tailored for homes, apartments, and creative workspaces.
                </p>

                <div className="hero-cta-group">
                  <button
                    type="button"
                    className="get-started-btn"
                    onClick={handleGetStartedClick}
                    id="get-started-btn"
                  >
                    <span>Get Started</span>
                    <svg 
                      className="arrow-icon" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Integrated About Us Component */}
              <div className="landing-about-wrapper">
                <AboutUs />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <ProductList onHomeClick={handleHomeClick} />
      )}
    </div>
  );
}

export default App;
