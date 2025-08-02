# ShoppyGlobe
A modern React-based e-commerce application to browse, search, and shop a curated selection of products, complete with an interactive cart, checkout simulation, and a polished, responsive user experience.

## Features
* **Home/Product Listing**: Attractive landing page listing all products, including a real-time search bar and animated product cards.

* **Product Details**: View in-depth details (image, price, description, brand) for each product and easily add to cart.

* **Cart**: Interactive cart with live quantity editing, total calculation, and remove/clear options—state managed by Redux Toolkit.

* **Checkout**: Clean checkout page summarizing cart contents with a simulated order placement.

* **404 Not Found**: Custom error page for non-existent routes, with easy navigation back to Home.

* **Responsive & Aesthetic UI**: Fully mobile-friendly design, modern gradient backgrounds, animated buttons, and iconography for delightful interaction.

* **Performance**: Code-splitting and Suspense with React.lazy ensure fast load times and smooth navigation.

## Technologies
* **React**

* **Vite**

* **Redux Toolkit**

* **React Router**

* **React Icons** (for vibrant UI icons)

* **Modern CSS** (custom gradients, flexbox/grid, responsive design)

## Getting Started

### Prerequisites

* Node.js (v16 or higher recommended)
* npm (comes with Node.js)


### Installation

#### Clone the repository:

```bash
git clone https://github.com/alankritip/-ShoppyGlobe-E-commerce-Application
cd shoppyglobe
```
#### Install dependencies:

```bash
npm install
```
#### Start the app in development mode:
```bash
npm run dev
```
#### The app will run at http://localhost:5173 (Vite default) or as shown in your terminal.

## Usage
* **Home**: See all products in a responsive card layout. Use the search bar to quickly filter products by name.

* **Product Details**: Click on any product card to see detailed information and an "Add to Cart" button.

* **Cart**: Access your shopping cart from the nav-bar, adjust quantities, remove items, or clear the cart in one click.

* **Checkout**: Review all items in your cart and "Place Order" (simulated action for demo).

* **Invalid URLs**: Non-existent routes display a custom 404 Not Found page with navigation back to Home.

## Folder Structure
```plane
shoppyglobe/
├── public/                      # Static files (favicon, etc.)
├── src/
│   ├── assets/                  # Images or custom icons (optional)
│   │
│   ├── components/              # Reusable UI components
│   │   ├── Header.jsx
│   │   ├── ProductList.jsx
│   │   ├── ProductItem.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── Cart.jsx
│   │   ├── CartItem.jsx
│   │   ├── Checkout.jsx
│   │   └── NotFound.jsx
│   │
│   ├── hooks/                   # Custom React hooks
│   │   └── useProducts.js
│   │
│   ├── redux/                   # Redux Toolkit state management
│   │   ├── cartSlice.js
│   │   └── store.js
│   │
│   ├── App.jsx                  # Main App shell (routes & layout)
│   ├── App.css                  # Global styles (imported in App.jsx)
│   └── main.jsx                 # React entry, Redux + Router providers
│
├── package.json
├── README.md
└── vite.config.js
```

## License
This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/) License.

**/*Enjoy building and shopping with ShoppyGlobe!*/**