import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import Navbar from './Navbar';

function CartItem({ onContinueShopping, onHomeClick }) {
  const cartItems = useSelector((state) => state.cart.items || []);
  const dispatch = useDispatch();
  const [checkoutMessage, setCheckoutMessage] = useState('');

  // Helper to parse price string like "$18" or 18 into a clean integer/float
  const parseCost = (cost) => {
    if (typeof cost === 'number') return cost;
    if (typeof cost === 'string') {
      const cleaned = cost.replace(/[^0-9.]/g, '');
      const parsed = parseFloat(cleaned);
      return isNaN(parsed) ? 0 : parsed;
    }
    return 0;
  };

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    const total = cartItems.reduce((acc, item) => {
      const unitCost = parseCost(item.cost);
      const qty = item.quantity || 0;
      return acc + unitCost * qty;
    }, 0);
    return total.toFixed(2);
  };

  // Calculate total cost based on quantity for an individual item
  const calculateTotalCost = (item) => {
    const unitCost = parseCost(item.cost);
    const qty = item.quantity || 0;
    return (unitCost * qty).toFixed(2);
  };

  // Increment item quantity by 1
  const handleIncrement = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        name: item.name,
        quantity: item.quantity + 1,
      })
    );
  };

  // Decrement item quantity by 1, or remove if quantity reaches 0
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          id: item.id,
          name: item.name,
          quantity: item.quantity - 1,
        })
      );
    } else {
      dispatch(removeItem({ id: item.id, name: item.name }));
    }
  };

  // Remove item completely from cart
  const handleRemove = (item) => {
    dispatch(removeItem({ id: item.id, name: item.name }));
  };

  // Continue shopping button action
  const handleContinueShopping = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (onContinueShopping) {
      onContinueShopping(e);
    }
  };

  // Checkout button action
  const handleCheckout = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setCheckoutMessage('Checkout coming soon! Thank you for choosing Paradise Nursery.');
    alert('Checkout coming soon! Thank you for choosing Paradise Nursery.');
  };

  const totalQuantity = cartItems.reduce((sum, item) => sum + (item.quantity || 0), 0);

  return (
    <div className="cart-page-wrapper">
      {/* If accessed standalone or directly without parent navbar */}
      {!onContinueShopping && (
        <Navbar
          currentView="cart"
          onNavigateHome={onHomeClick}
          onNavigatePlants={handleContinueShopping}
          onNavigateCart={() => {}}
        />
      )}

      <div className="cart-container">
        <header className="cart-header">
          <h2 className="cart-title">Your Plant Cart</h2>
          <p className="cart-subtitle">
            Review your chosen greenery before bringing them home.
          </p>
        </header>

        {cartItems.length === 0 ? (
          <div className="empty-cart-state">
            <div className="empty-cart-icon">🌱</div>
            <h3>Your cart is currently empty</h3>
            <p>Looks like you haven't added any botanical wonders to your collection yet.</p>
            <button
              type="button"
              className="continue-shopping-btn primary-btn"
              onClick={handleContinueShopping}
            >
              Explore Plants
            </button>
          </div>
        ) : (
          <div className="cart-content-layout">
            {/* List of Cart Items */}
            <div className="cart-items-list">
              {cartItems.map((item) => (
                <div key={item.id || item.name} className="cart-item-card">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-image"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80";
                    }}
                  />

                  <div className="cart-item-info">
                    <div className="cart-item-header">
                      <h4 className="cart-item-name">{item.name}</h4>
                      <span className="cart-item-unit-cost">
                        Unit Price: {typeof item.cost === 'string' && item.cost.startsWith('$') ? item.cost : `$${item.cost}`}
                      </span>
                    </div>

                    <div className="cart-item-controls">
                      {/* Quantity Controls */}
                      <div className="quantity-stepper">
                        <button
                          type="button"
                          className="quantity-btn decrease-btn"
                          onClick={() => handleDecrement(item)}
                          aria-label={`Decrease quantity of ${item.name}`}
                        >
                          −
                        </button>
                        <span className="quantity-value" aria-label={`Quantity: ${item.quantity}`}>
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          className="quantity-btn increase-btn"
                          onClick={() => handleIncrement(item)}
                          aria-label={`Increase quantity of ${item.name}`}
                        >
                          +
                        </button>
                      </div>

                      {/* Line Total */}
                      <div className="cart-item-total">
                        <span className="subtotal-label">Subtotal:</span>
                        <span className="subtotal-amount">${calculateTotalCost(item)}</span>
                      </div>

                      {/* Delete Button */}
                      <button
                        type="button"
                        className="delete-item-btn"
                        onClick={() => handleRemove(item)}
                        aria-label={`Remove ${item.name} from cart`}
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                          <polyline points="3 6 5 6 21 6" />
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                          <line x1="10" y1="11" x2="10" y2="17" />
                          <line x1="14" y1="11" x2="14" y2="17" />
                        </svg>
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Summary & Actions */}
            <aside className="cart-summary-card">
              <h3 className="summary-title">Order Summary</h3>

              <div className="summary-row">
                <span>Total Items</span>
                <span className="summary-count">{totalQuantity} plants</span>
              </div>

              <div className="summary-row total-row">
                <span>Total Amount</span>
                <span className="summary-total-cost">${calculateTotalAmount()}</span>
              </div>

              {checkoutMessage && (
                <div className="checkout-banner" role="status">
                  {checkoutMessage}
                </div>
              )}

              <div className="summary-actions">
                <button
                  type="button"
                  className="checkout-btn"
                  onClick={handleCheckout}
                >
                  Checkout
                </button>
                <button
                  type="button"
                  className="continue-shopping-btn"
                  onClick={handleContinueShopping}
                >
                  Continue Shopping
                </button>
              </div>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartItem;
