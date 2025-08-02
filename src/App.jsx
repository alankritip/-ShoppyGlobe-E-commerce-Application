import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

// Lazy-load all large page components for performance/code-splitting
const ProductList = lazy(() => import('./components/ProductList'));
const ProductDetail = lazy(() => import('./components/ProductDetail'));
const Cart = lazy(() => import('./components/Cart'));
const Checkout = lazy(() => import('./components/Checkout'));
const NotFound = lazy(() => import('./components/NotFound'));

// Main App component: Sets up routing and shared layout
export default function App() {
  return (
    <BrowserRouter>
      {/* App-wide header/navigation */}
      <Header />

      {/* Suspense boundary for lazy-loaded routes, with loading fallback */}
      <Suspense fallback={<div style={{ padding: 28 }}>Loading...</div>}>
        <Routes>
          {/* Home page: list of products */}
          <Route path="/" element={<ProductList />} />

          {/* Product detail page, with dynamic id parameter */}
          <Route path="/products/:id" element={<ProductDetail />} />

          {/* Shopping cart */}
          <Route path="/cart" element={<Cart />} />

          {/* Checkout page */}
          <Route path="/checkout" element={<Checkout />} />

          {/* 404 Not Found route (handles any unknown paths) */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
