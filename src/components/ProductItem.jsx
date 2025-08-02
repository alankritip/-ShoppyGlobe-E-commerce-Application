import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { FaCartPlus } from "react-icons/fa";

// Displays a single product card with image, title, price, and Add to Cart button
export default function ProductItem({ product }) {
  // Redux dispatch for adding items to the cart
  const dispatch = useDispatch();

  return (
    <div className="product-card">
      {/* Clicking the image or title navigates to product detail */}
      <Link to={`/products/${product.id}`}>
        <img src={product.thumbnail} alt={product.title} />
        <h4>{product.title}</h4>
      </Link>
      {/* Display price */}
      <span className="price">${product.price}</span>
      {/* Button to add product to cart, includes an icon */}
      <button onClick={() => dispatch(addToCart(product))}>
        <FaCartPlus style={{ marginRight: "7px", fontSize: "1.12em" }} />
        Add to Cart
      </button>
    </div>
  );
}
