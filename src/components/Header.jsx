import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaShoppingCart, FaHome, FaCreditCard } from "react-icons/fa";

// Header component: navigation bar with site logo and links (shows cart item count)
export default function Header() {
  // Get the number of items in the cart from Redux store
  const cartCount = useSelector(state => state.cart.items.length);

  return (
    <header>
      <nav>
        {/* Logo or brand section */}
        <div>
          <NavLink
            to="/"
            style={{ fontWeight: 600, fontSize: '1.4em' }}
          >
            ShoppyGlobe
          </NavLink>
        </div>
        {/* Navigation links */}
        <div>
          {/* Home link */}
          <NavLink
            to="/"
            end
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            <FaHome className="icon" />Home
          </NavLink>
          {/* Cart link with item count */}
          <NavLink
            to="/cart"
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            <FaShoppingCart className="icon" />Cart ({cartCount})
          </NavLink>
          {/* Checkout link */}
          <NavLink
            to="/checkout"
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            <FaCreditCard className="icon" />Checkout
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
