import { useState, useEffect } from 'react';

// Custom hook to fetch the list of products with loading and error handling
export const useProducts = () => {
  // State to store fetched products
  const [products, setProducts] = useState([]);
  // State to indicate if data is loading
  const [loading, setLoading] = useState(true);
  // State to store any error message
  const [error, setError] = useState(null);

  useEffect(() => {
    // When effect runs, start loading and reset error
    setLoading(true);
    setError(null);

    // Fetch product data from API
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setProducts(data.products || []))  // Set product data
      .catch(() => setError('Failed to fetch products')) // Set error message
      .finally(() => setLoading(false));                // Loading ends (success or error)
  }, []); // Runs only once when component mounts

  // Return products, loading and error status
  return { products, loading, error };
};
