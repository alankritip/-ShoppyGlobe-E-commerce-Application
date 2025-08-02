import { createSlice } from '@reduxjs/toolkit';

// Initial state for the cart: an array of items
const initialState = {
  items: [],
};

// Create the cart slice with reducers for different cart actions
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add product to cart (increment quantity if already exists)
    addToCart(state, action) {
      const existing = state.items.find(item => item.id === action.payload.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    // Remove item from cart by id
    removeFromCart(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    // Modify the quantity of a specific item
    modifyQuantity(state, action) {
      const { id, amount } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        item.quantity += amount;
        if (item.quantity < 1) item.quantity = 1; // Prevent going below 1
      }
    },
    // Clear the cart completely
    clearCart(state) {
      state.items = [];
    }
  }
});

// Export the reducer actions for use elsewhere in the app
export const { addToCart, removeFromCart, modifyQuantity, clearCart } = cartSlice.actions;
// Export the cart reducer for use in the store
export default cartSlice.reducer;
