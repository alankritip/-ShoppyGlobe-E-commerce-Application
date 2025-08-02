import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../redux/cartSlice';

// Checkout page component: review cart, display total, and "place order"
export default function Checkout() {
  // Get cart items from Redux store
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calculate the total cart amount
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  // Handler for placing the order (simulated)
  function handlePlaceOrder() {
    alert('Order placed! (Simulated)');
    dispatch(clearCart());
  }

  // If cart is empty, show appropriate message
  if (!items.length) {
    return (
      <main className="main-content">
        <h2>Checkout</h2>
        <div>Your cart is empty.</div>
      </main>
    );
  }

  // When cart has items, show summary and order button
  return (
    <main className="main-content">
      <h2>Checkout</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <strong>{item.title}</strong> x {item.quantity} = ${item.price * item.quantity}
          </li>
        ))}
      </ul>
      <h3>Total Amount: ${total.toFixed(2)}</h3>
      <button onClick={handlePlaceOrder} style={{ marginTop: 10 }}>
        Place Order
      </button>
      <div style={{ color: 'gray', fontSize: 14, marginTop: 8 }}>
        * Payment is simulated for this assignment.
      </div>
    </main>
  );
}
