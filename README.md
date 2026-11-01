# Paradise Nursery Shopping Application

Welcome to **Paradise Nursery** — *Where Greenery Meets Serenity*. 

This project is a modern, responsive, high-performance e-commerce shopping cart web application designed for an online houseplant shop. Developed as a Coursera Final Project, it demonstrates modern React development patterns, Redux Toolkit state management, botanical UI/UX design, and production deployment best practices.

---

## 🌿 Project Overview

Paradise Nursery connects plant lovers with greenhouse-fresh indoor plants. Customers can learn about the therapeutic and air-purifying benefits of houseplants, explore curated botanical categories, add plants to their shopping cart, manage quantities seamlessly, and calculate order totals in real time.

---

## ✨ Features

- **Botanical Landing Page**:
  - Immersive full-screen botanical background image with high-contrast emerald typography.
  - Welcome hero message and brand identity: *"Where Greenery Meets Serenity"*.
  - Interactive **Get Started** button leading seamlessly to the plant catalog.
  - Integrated **About Us** section showcasing the company vision, indoor plant health benefits, and our 30-day plant guarantee.

- **Plant Catalog & Organization**:
  - 18+ unique, healthy houseplants categorized into 3 distinct botanical sections:
    1. *Air Purifying Plants* (Snake Plant, Spider Plant, Peace Lily, Boston Fern, English Ivy, Rubber Plant)
    2. *Aromatic & Medicinal Plants* (Lavender, Aloe Vera, Rosemary, Peppermint, Lemon Balm, Eucalyptus)
    3. *Low-Maintenance & Succulents* (Monstera Deliciosa, ZZ Plant, Jade Plant, Pothos Golden, Cast Iron Plant, Haworthia Zebra)
  - Detailed product cards featuring high-resolution photography, botanical descriptions, prices, and status indicators.
  - Dynamic **Add to Cart** buttons that automatically disable and reflect *"Added to Cart"* once a product is added.

- **Shopping Cart Functionality**:
  - Global state managed via **Redux Toolkit** and **React-Redux**.
  - Dynamic cart counter badge updated across all application headers.
  - Detailed cart view displaying plant thumbnail, name, unit price, quantity steppers (`+` / `−`), and individual line totals.
  - Real-time overall total cost and item count calculations.
  - Item removal with confirmation and single-click delete.
  - **Continue Shopping** navigation returning to the plant catalog.
  - **Checkout** integration displaying *"Checkout coming soon"*.
  - Friendly empty-cart state with quick navigation back to the shop.

---

## 🛠️ Technology Stack

- **Frontend Core**: [React 19](https://react.dev/)
- **Build Tool & Bundler**: [Vite](https://vitejs.dev/)
- **Global State Management**: [@reduxjs/toolkit](https://redux-toolkit.js.org/) & [react-redux](https://react-redux.js.org/)
- **Styling**: Vanilla CSS3 (Custom Design System with Google Fonts Outfit & Plus Jakarta Sans, CSS Grid, Flexbox, Glassmorphism)
- **Deployment & Hosting**: GitHub Pages / Static Hosting

---

## 📁 Project Structure

```text
paradise-nursery-shopping-app/
├── public/
│   ├── favicon.svg
│   └── nursery-bg.jpg            # Public botanical hero background asset
├── src/
│   ├── assets/
│   │   └── nursery-bg.jpg        # High-res landing background image
│   ├── AboutUs.jsx               # Company details, mission & plant benefits
│   ├── App.css                   # Global styles & landing background rules
│   ├── App.jsx                   # Main application & landing page navigation
│   ├── CartItem.jsx              # Shopping cart view with item controls & totals
│   ├── CartSlice.jsx             # Redux slice (addItem, removeItem, updateQuantity)
│   ├── Navbar.jsx                # Shared responsive navigation with live cart count
│   ├── ProductList.jsx           # 18-plant catalog across 3 categories & add-to-cart
│   ├── plantsData.js             # Detailed plant datasets & verified assets
│   ├── store.js                  # Redux Toolkit store configuration
│   ├── index.css                 # Base resets
│   └── main.jsx                  # React DOM root & Redux Provider setup
├── index.html                    # HTML5 shell with Google Fonts & metadata
├── package.json                  # Dependencies & scripts
├── vite.config.js                # Vite build configuration
└── README.md                     # Documentation & Coursera submission guide
```

---

## 🚀 Installation & Local Development

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended; v24+ verified)
- [npm](https://www.npmjs.com/) (v9.0.0 or higher)

### Setup Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yashkadam0001/paradise-nursery-shopping-app.git
   cd paradise-nursery-shopping-app
   ```

2. **Install project dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to the local address displayed in your terminal (typically `http://localhost:5173/`).

4. **Build for production**:
   ```bash
   npm run build
   ```
   The optimized production assets will be generated in the `dist/` directory.

5. **Preview production build locally**:
   ```bash
   npm run preview
   ```

---

## 🛒 Shopping Cart State Management

The application cart state is centralized in `src/CartSlice.jsx` using Redux Toolkit:

- **`addItem(state, action)`**: Adds a plant to the cart. If the plant already exists, increments its quantity; otherwise, appends it with an initial quantity of 1.
- **`removeItem(state, action)`**: Removes a plant from the cart by matching either its unique ID or name.
- **`updateQuantity(state, action)`**: Safely updates an item's quantity. If the quantity is set to 0 or less, removes the item automatically to maintain cart integrity.

---

## 🧪 How to Test the Project

### Manual End-to-End Test Plan

1. **Landing Page Verification**:
   - Check that the company name *"Paradise Nursery"* is prominent.
   - Verify the botanical background image renders behind the hero content.
   - Read the About Us section to verify company mission and plant benefits.
   - Click the **Get Started** button and verify smooth transition to the plant catalog.

2. **Catalog & Add to Cart**:
   - Verify all 3 categories (*Air Purifying*, *Aromatic & Medicinal*, *Low-Maintenance & Succulents*) are displayed with 6 plants each (18 plants total).
   - Click **Add to Cart** on several plants.
   - Confirm that the button text changes to *"Added to Cart"* and the button becomes disabled.
   - Notice the cart icon in the navigation bar increments with the total quantity of plants added.

3. **Cart Operations**:
   - Click the **Cart** button in the navigation bar.
   - Verify each plant displays its image, name, unit price, quantity, and line total (`quantity × price`).
   - Click the **+** (increment) button and verify quantity and subtotals increase.
   - Click the **−** (decrement) button and verify quantity decreases; when reaching 0, verify the item is removed.
   - Click the **Delete** button to remove an item directly.
   - Check that the **Total Amount** reflects the correct sum of all items.

4. **Cart Navigation & Checkout**:
   - Click **Continue Shopping** and confirm you return to the plant catalog with previous state preserved.
   - Click **Checkout** and verify the alert *"Checkout coming soon"*.
   - Remove all items to verify the empty-cart message and action button.
   - Click the brand logo or **Home** link to return to the landing page.

---

## 📄 License & Attribution

- Built as part of the Coursera Front-End Web Development Specialization.
- Botanical imagery provided by Unsplash photographers via open royalty-free licenses.
- Designed & Developed by [yashkadam0001](https://github.com/yashkadam0001).
