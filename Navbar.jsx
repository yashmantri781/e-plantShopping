import React from 'react';
import { useSelector } from 'react-redux';

function Navbar({ currentView = 'plants', onNavigateHome, onNavigatePlants, onNavigateCart }) {
  const cartItems = useSelector((state) => state.cart.items || []);
  const totalItemCount = cartItems.reduce((total, item) => total + (item.quantity || 0), 0);

  return (
    <header className="shared-navbar">
      <div className="navbar-container">
        {/* Brand / Logo */}
        <div 
          className="navbar-brand" 
          onClick={onNavigateHome}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onNavigateHome && onNavigateHome()}
          title="Return to Paradise Nursery Home"
        >
          <div className="brand-icon">🌿</div>
          <div className="brand-text">
            <h1 className="brand-title">Paradise Nursery</h1>
            <span className="brand-tagline">Where Greenery Meets Serenity</span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="navbar-links" aria-label="Main Navigation">
          <button
            type="button"
            className={`nav-link ${currentView === 'home' ? 'active' : ''}`}
            onClick={onNavigateHome}
            aria-label="Navigate to Home"
          >
            Home
          </button>

          <button
            type="button"
            className={`nav-link ${currentView === 'plants' ? 'active' : ''}`}
            onClick={onNavigatePlants}
            aria-label="Navigate to Plants catalog"
          >
            Plants
          </button>

          {/* Cart Icon & Count */}
          <button
            type="button"
            className={`nav-link cart-link ${currentView === 'cart' ? 'active' : ''}`}
            onClick={onNavigateCart}
            aria-label={`Shopping Cart with ${totalItemCount} items`}
          >
            <div className="cart-icon-wrapper">
              <svg 
                className="cart-svg-icon" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              <span className="cart-badge" aria-label={`${totalItemCount} items in cart`}>
                {totalItemCount}
              </span>
            </div>
            <span className="cart-text">Cart</span>
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
