import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

// ProductDetail component: fetches and displays details for a single product
export default function ProductDetail() {
  // Retrieve the product ID from route parameters
  const { id } = useParams();

  // Local state for product data, loading, and error flags
  const [product, setProduct] = useState(null);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  // Redux dispatch for adding product to cart
  const dispatch = useDispatch();

  // Fetch product data on mount or when ID changes
  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
      })
      .then(data => setProduct(data))
      .catch(() => setError('Failed to load product details'))
      .finally(() => setLoading(false));
  }, [id]);

  // Render loading, error, or the actual product details
  if (loading) return <div>Loading detail...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!product) return null;

  // Display product image, title, description, brand, price, and action button
  return (
    <main className="main-content">
      <div style={{
        display: "flex",
        gap: 20,
        flexWrap: 'wrap',
        alignItems: 'flex-start'
      }}>
        <img
          src={product.thumbnail}
          alt={product.title}
          style={{
            width: 300,
            maxWidth: '100%',
            borderRadius: 8,
            background: '#fff'
          }}
        />
        <div>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Brand: <b>{product.brand}</b></p>
          <p>Price: <b>${product.price}</b></p>
          <button onClick={() => dispatch(addToCart(product))}>
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}
