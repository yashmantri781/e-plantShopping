import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import Navbar from './Navbar';

export const plantsArray = [
  {
    category: "Air Purifying Plants",
    plants: [
      {
        id: "air-1",
        name: "Snake Plant",
        image: "https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=600&q=80",
        description: "Hardy upright foliage that cleans toxins like formaldehyde and produces night-time oxygen.",
        cost: "$18",
        price: 18,
      },
      {
        id: "air-2",
        name: "Spider Plant",
        image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=600&q=80",
        description: "Graceful arching leaves that actively absorb carbon monoxide and xylene in indoor environments.",
        cost: "$15",
        price: 15,
      },
      {
        id: "air-3",
        name: "Peace Lily",
        image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80",
        description: "Elegant white blooms with glossy foliage that improve indoor humidity and air purity.",
        cost: "$22",
        price: 22,
      },
      {
        id: "air-4",
        name: "Boston Fern",
        image: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&w=600&q=80",
        description: "Lush cascading fronds that act as a natural air humidifier and remove airborne pollutants.",
        cost: "$19",
        price: 19,
      },
      {
        id: "air-5",
        name: "English Ivy",
        image: "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?auto=format&fit=crop&w=600&q=80",
        description: "Classic evergreen climber proven to reduce airborne mold particles and freshen stale room air.",
        cost: "$16",
        price: 16,
      },
      {
        id: "air-6",
        name: "Rubber Plant",
        image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=600&q=80",
        description: "Thick glossy leaves that capture carbon and toxins with striking architectural presence.",
        cost: "$26",
        price: 26,
      },
    ],
  },
  {
    category: "Aromatic & Medicinal Plants",
    plants: [
      {
        id: "arom-1",
        name: "Lavender",
        image: "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?auto=format&fit=crop&w=600&q=80",
        description: "Fragrant purple blossoms that calm the nervous system, relieve stress, and support deep sleep.",
        cost: "$14",
        price: 14,
      },
      {
        id: "arom-2",
        name: "Aloe Vera",
        image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80",
        description: "Famous succulent packed with soothing medicinal gel for natural skin healing and air filtering.",
        cost: "$12",
        price: 12,
      },
      {
        id: "arom-3",
        name: "Rosemary",
        image: "https://images.unsplash.com/photo-1515586000433-45406d8e6662?auto=format&fit=crop&w=600&q=80",
        description: "Invigorating woody herb that stimulates mental clarity, memory, and culinary excellence.",
        cost: "$15",
        price: 15,
      },
      {
        id: "arom-4",
        name: "Peppermint",
        image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=600&q=80",
        description: "Crisp cooling aroma that naturally deters household insects and provides fresh herbal leaves.",
        cost: "$13",
        price: 13,
      },
      {
        id: "arom-5",
        name: "Lemon Balm",
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
        description: "Pleasant citrus aroma that relieves anxiety and can be brewed into soothing herbal teas.",
        cost: "$14",
        price: 14,
      },
      {
        id: "arom-6",
        name: "Eucalyptus",
        image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=600&q=80",
        description: "Silvery aromatic foliage releasing therapeutic vapors that open airways and provide a spa-like scent.",
        cost: "$24",
        price: 24,
      },
    ],
  },
  {
    category: "Low-Maintenance & Succulents",
    plants: [
      {
        id: "low-1",
        name: "Monstera Deliciosa",
        image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80",
        description: "Iconic split-leaf tropical beauty that grows happily in indirect sun with minimal watering.",
        cost: "$28",
        price: 28,
      },
      {
        id: "low-2",
        name: "ZZ Plant",
        image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?auto=format&fit=crop&w=600&q=80",
        description: "Indestructible glossy houseplant that thrives in low light and requires watering only once a month.",
        cost: "$25",
        price: 25,
      },
      {
        id: "low-3",
        name: "Jade Plant",
        image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80",
        description: "Plump succulent tree symbolizing prosperity; stores water in thick leaves for ultimate durability.",
        cost: "$18",
        price: 18,
      },
      {
        id: "low-4",
        name: "Pothos Golden",
        image: "https://images.unsplash.com/photo-1598880940371-c756e015fea1?auto=format&fit=crop&w=600&q=80",
        description: "Vibrant variegated trailing vine that forgives irregular care and thrives in almost any corner.",
        cost: "$16",
        price: 16,
      },
      {
        id: "low-5",
        name: "Cast Iron Plant",
        image: "https://images.unsplash.com/photo-1600411833196-7c1f6b1a8b90?auto=format&fit=crop&w=600&q=80",
        description: "True to its name, this resilient plant survives deep shade, temperature drafts, and forgotten waterings.",
        cost: "$30",
        price: 30,
      },
      {
        id: "low-6",
        name: "Haworthia Zebra",
        image: "https://images.unsplash.com/photo-1509223197845-458d87318791?auto=format&fit=crop&w=600&q=80",
        description: "Striking zebra-striped miniature succulent ideal for windowsills and desks, needing very little water.",
        cost: "$15",
        price: 15,
      },
    ],
  },
];

function ProductList({ onHomeClick }) {
  const [showCart, setShowCart] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items || []);

  // Helper function to check if a plant is already in the cart
  const isPlantInCart = (plant) => {
    return cartItems.some(
      (item) => (item.id && item.id === plant.id) || item.name === plant.name
    );
  };

  const handleAddToCart = (plant) => {
    dispatch(
      addItem({
        id: plant.id,
        name: plant.name,
        image: plant.image,
        cost: plant.cost,
      })
    );
  };

  const handleContinueShopping = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setShowCart(false);
  };

  // If viewing Cart, render CartItem with shared navigation
  if (showCart) {
    return (
      <div className="product-list-page">
        <Navbar
          currentView="cart"
          onNavigateHome={onHomeClick}
          onNavigatePlants={() => setShowCart(false)}
          onNavigateCart={() => setShowCart(true)}
        />
        <CartItem
          onContinueShopping={handleContinueShopping}
          onHomeClick={onHomeClick}
        />
      </div>
    );
  }

  return (
    <div className="product-list-page">
      <Navbar
        currentView="plants"
        onNavigateHome={onHomeClick}
        onNavigatePlants={() => setShowCart(false)}
        onNavigateCart={() => setShowCart(true)}
      />

      <main className="product-list-container">
        <header className="catalog-header">
          <span className="catalog-badge">Botanical Collection</span>
          <h2 className="catalog-title">Explore Our Living Houseplants</h2>
          <p className="catalog-description">
            Breathe life, calm, and pure air into your personal sanctuary. Hand-inspected, healthy plants delivered directly to your doorstep.
          </p>
        </header>

        {plantsArray.map((categorySection) => (
          <section key={categorySection.category} className="category-section">
            <div className="category-header">
              <h3 className="category-title">{categorySection.category}</h3>
              <span className="category-count">{categorySection.plants.length} Plants</span>
            </div>

            <div className="plant-grid">
              {categorySection.plants.map((plant) => {
                const inCart = isPlantInCart(plant);

                return (
                  <article key={plant.id} className="plant-card">
                    <div className="plant-image-container">
                      <img
                        src={plant.image}
                        alt={plant.name}
                        className="plant-thumbnail"
                        loading="lazy"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80";
                        }}
                      />
                      <span className="plant-price-badge">{plant.cost}</span>
                    </div>

                    <div className="plant-details">
                      <div className="plant-heading-group">
                        <h4 className="plant-name">{plant.name}</h4>
                        <span className="plant-category-tag">{categorySection.category}</span>
                      </div>
                      
                      <p className="plant-description">{plant.description}</p>

                      <div className="plant-card-footer">
                        <span className="plant-price-text">{plant.cost}</span>
                        <button
                          type="button"
                          className={`add-to-cart-btn ${inCart ? 'disabled-in-cart' : ''}`}
                          onClick={() => handleAddToCart(plant)}
                          disabled={inCart}
                          aria-disabled={inCart}
                        >
                          {inCart ? (
                            <>
                              <svg className="check-icon" viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              Added to Cart
                            </>
                          ) : (
                            'Add to Cart'
                          )}
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default ProductList;
