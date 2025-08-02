import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

// Configure and export the Redux store
// This store will hold the cart state for the entire application
export default configureStore({
  reducer: {
    cart: cartReducer // Add cartSlice reducer under 'cart' key in store
  }
});
