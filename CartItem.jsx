
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import Navbar from './Navbar';

function CartItem({ onContinueShopping, onHomeClick }) {
  const cart = useSelector((state) => state.cart.items || []);
  const dispatch = useDispatch();

  const [checkoutMessage, setCheckoutMessage] = useState('');

  // Convert price strings such as "$18" into numbers
  const parseCost = (cost) => {
    if (typeof cost === 'number') return cost;

    if (typeof cost === 'string') {
      const parsed = parseFloat(cost.replace(/[^0-9.]/g, ''));
      return isNaN(parsed) ? 0 : parsed;
    }

    return 0;
  };

  // Calculate total amount for all cart items
  const calculateTotalAmount = () => {
    const total = cart.reduce((acc, item) => {
      const unitCost = parseCost(item.cost);
      const quantity = item.quantity || 0;

      return acc + unitCost * quantity;
    }, 0);

    return total.toFixed(2);
  };

  // Calculate subtotal for an individual item
  const calculateTotalCost = (item) => {
    const unitCost = parseCost(item.cost);
    const quantity = item.quantity || 0;

    return (unitCost * quantity).toFixed(2);
  };

  // Increase item quantity
  const handleIncrement = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        name: item.name,
        quantity: item.quantity + 1,
      })
    );
  };

  // Decrease item quantity
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
      dispatch(removeItem(item.name));
    }
  };

  // Remove item completely from cart
  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  // Continue shopping navigation
  const handleContinueShopping = (e) => {
    if (e) e.preventDefault();

    if (onContinueShopping) {
      onContinueShopping(e);
    }
  };

  // Checkout action
  const handleCheckout = (e) => {
    if (e) e.preventDefault();

    const message =
      'Checkout coming soon! Thank you for choosing Paradise Nursery.';

    setCheckoutMessage(message);
    alert(message);
  };

  // Calculate total quantity
  const totalQuantity = cart.reduce(
    (sum, item) => sum + (item.quantity || 0),
    0
  );

  return (
    <div className="cart-page-wrapper">

      {/* Display Navbar when CartItem is accessed independently */}
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

        {cart.length === 0 ? (
          <div className="empty-cart-state">

            <div className="empty-cart-icon">🌱</div>

            <h3>Your cart is currently empty</h3>

            <p>
              Looks like you haven't added any botanical wonders
              to your collection yet.
            </p>

            <button
              type="button"
              className="get-started-button"
              onClick={handleContinueShopping}
            >
              Continue Shopping
            </button>

          </div>
        ) : (

          <div className="cart-content-layout">

            {/* Cart Items List */}
            <div className="cart-items-list">

              {cart.map((item) => (

                <div
                  key={item.id || item.name}
                  className="cart-item-card"
                >

                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-image"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80';
                    }}
                  />

                  <div className="cart-item-info">

                    <div className="cart-item-header">

                      <h4 className="cart-item-name">
                        {item.name}
                      </h4>

                      <span className="cart-item-unit-cost">
                        Unit Price: $
                        {parseCost(item.cost).toFixed(2)}
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
                          -
                        </button>

                        <span className="quantity-value">
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

                      {/* Individual Item Subtotal */}
                      <div className="cart-item-total">

                        <span className="subtotal-label">
                          Subtotal:
                        </span>

                        <span className="subtotal-amount">
                          ${calculateTotalCost(item)}
                        </span>

                      </div>

                      {/* Delete Button */}
                      <button
                        type="button"
                        className="delete-btn"
                        onClick={() => handleRemove(item)}
                        aria-label={`Delete ${item.name} from cart`}
                      >
                        Delete
                      </button>

                    </div>
                  </div>
                </div>

              ))}

            </div>

            {/* Order Summary */}
            <aside className="cart-summary-card">

              <h3 className="summary-title">
                Order Summary
              </h3>

              <div className="summary-row">

                <span>Total Items</span>

                <span className="summary-count">
                  {totalQuantity} plants
                </span>

              </div>

              <div className="summary-row total-row">

                <span>Total Amount</span>

                <span className="summary-total-cost">
                  ${calculateTotalAmount()}
                </span>

              </div>

              {checkoutMessage && (
                <div className="checkout-banner" role="status">
                  {checkoutMessage}
                </div>
              )}

              <div className="summary-actions">

                {/* Checkout Button */}
                <button
                  type="button"
                  className="get-started-button1"
                  onClick={handleCheckout}
                >
                  Checkout
                </button>

                {/* Continue Shopping Button */}
                <button
                  type="button"
                  className="get-started-button"
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
