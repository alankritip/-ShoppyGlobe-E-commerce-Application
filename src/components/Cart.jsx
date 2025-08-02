import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';
import { clearCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

// Cart page component: displays all items in cart and handles checkout & clear actions
export default function Cart() {
  // Access cart items from Redux store
  const items = useSelector(state => state.cart.items);
  // Get dispatch function for actions
  const dispatch = useDispatch();

  // Compute total price for all items
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  // Display message if cart is empty
  if (items.length === 0)
    return (
      <main className="main-content">
        <h2>Cart</h2>
        <div>Your cart is empty.</div>
      </main>
    );

  // Otherwise, render cart items, total, and actions
  return (
    <main className="main-content">
      <h2>Cart</h2>
      {/* Render all cart items */}
      {items.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
      {/* Cart total */}
      <h3 style={{ marginTop: 18 }}>
        Total: ${total.toFixed(2)}
      </h3>
      {/* Actions: Proceed to checkout and clear cart */}
      <div style={{ marginTop: 10 }}>
        <Link to="/checkout">
          <button>Proceed to Checkout</button>
        </Link>
        <button
          onClick={() => dispatch(clearCart())}
          style={{ marginLeft: 8 }}
        >
          Clear Cart
        </button>
      </div>
    </main>
  );
}
