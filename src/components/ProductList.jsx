import { useState } from 'react';
import { useProducts } from '../hooks/useProducts';
import ProductItem from './ProductItem';

// ProductList component: displays search input and a list of all products
export default function ProductList() {
  // Get products, loading/error state from custom hook
  const { products, loading, error } = useProducts();

  // Local state for the search input
  const [search, setSearch] = useState("");

  // Filter products in real-time based on the search input
  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  // Loading or error UI states
  if (loading) return <div>Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <main className="main-content">
      {/* Search input box */}
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{ marginBottom: 16 }}
      />
      {/* List of filtered products */}
      <div className="product-list">
        {filtered.map(p => (
          <ProductItem key={p.id} product={p} />
        ))}
      </div>
    </main>
  );
}
