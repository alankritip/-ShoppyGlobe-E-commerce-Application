import { useDispatch } from 'react-redux';
import { modifyQuantity, removeFromCart } from '../redux/cartSlice';

// Component for displaying a single cart item with quantity controls
export default function CartItem({ item }) {
  // Setup the Redux dispatch function for modifying or removing items
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      {/* Display item title, price, and quantity */}
      <span className="cart-item-title">
        {item.title} (${item.price} x {item.quantity})
      </span>
      {/* Quantity and remove buttons */}
      <span>
        {/* Increase quantity */}
        <button
          onClick={() => dispatch(modifyQuantity({ id: item.id, amount: 1 }))}
        >+</button>
        {/* Decrease quantity */}
        <button
          onClick={() => dispatch(modifyQuantity({ id: item.id, amount: -1 }))}
        >-</button>
        {/* Remove from cart */}
        <button
          onClick={() => dispatch(removeFromCart(item.id))}
          style={{ background: '#ef233c' }}
        >
          Remove
        </button>
      </span>
    </div>
  );
}
