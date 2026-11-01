import React from 'react';

function AboutUs({ onBackClick }) {
  return (
    <div className="about-us-container">
      <div className="about-us-card">
        {onBackClick && (
          <button 
            type="button" 
            className="back-btn" 
            onClick={onBackClick}
            aria-label="Back to home"
          >
            ← Back to Home
          </button>
        )}

        <div className="about-us-header">
          <span className="badge">Welcome to Green Haven</span>
          <h2 className="about-title">About Paradise Nursery</h2>
          <p className="about-subtitle">
            Cultivating serene sanctuaries and purifying living spaces since 2018.
          </p>
        </div>

        <div className="about-content">
          <section className="about-section">
            <div className="section-icon">🌿</div>
            <div>
              <h3>Who We Are</h3>
              <p>
                At <strong>Paradise Nursery</strong>, we are passionate botanical enthusiasts dedicated to bridging 
                the gap between modern living and natural tranquility. We curate premium, sustainably cultivated 
                houseplants directly from eco-friendly greenhouses to your doorstep, ensuring every leaf arrives healthy, 
                radiant, and ready to thrive.
              </p>
            </div>
          </section>

          <section className="about-section">
            <div className="section-icon">🎯</div>
            <div>
              <h3>Our Mission &amp; Vision</h3>
              <p>
                Our mission is to transform urban spaces into vibrant indoor oases. We envision a world where every 
                home and workspace enjoys the calming, restorative essence of lush greenery, elevating mental wellbeing 
                and inspiring daily connection with mother nature.
              </p>
            </div>
          </section>

          <section className="about-section">
            <div className="section-icon">🍃</div>
            <div>
              <h3>The Power &amp; Benefits of Indoor Plants</h3>
              <p>
                Beyond their breathtaking aesthetic appeal, houseplants are proven scientific powerhouses. They naturally 
                filter hazardous airborne toxins (such as formaldehyde, benzene, and trichloroethylene), boost natural 
                humidity, diminish daily stress levels, and enhance mental focus and creative vitality.
              </p>
            </div>
          </section>

          <section className="about-section">
            <div className="section-icon">✨</div>
            <div>
              <h3>Our Quality Promise &amp; Care Guarantee</h3>
              <p>
                Every plant from Paradise Nursery undergoes rigorous health inspections and pest-free certification. 
                We pack our greenery in biodegradable, shock-resistant materials and back every single plant with our 
                <strong> 30-Day Healthy Plant Guarantee</strong> along with complimentary lifetime plant doctor advice.
              </p>
            </div>
          </section>
        </div>

        <div className="about-highlights">
          <div className="highlight-pill">
            <span className="pill-number">100%</span>
            <span className="pill-label">Greenhouse Healthy</span>
          </div>
          <div className="highlight-pill">
            <span className="pill-number">30-Day</span>
            <span className="pill-label">Plant Guarantee</span>
          </div>
          <div className="highlight-pill">
            <span className="pill-number">Eco-Friendly</span>
            <span className="pill-label">Sustainable Packaging</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
