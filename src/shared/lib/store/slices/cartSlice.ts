import { CartItem, Product } from '@/shared/lib/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartState {
  items: CartItem[];
  isInitialized: boolean,
}

const saveCartToLocalStorage = (state: CartState) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('cart', JSON.stringify(state));
  }
};

const initialState: CartState = {
  items: [],
  isInitialized: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    initializeCart: (state, action: PayloadAction<CartItem[]>) => {
      state.items = action.payload;
      state.isInitialized = true;
    },
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      saveCartToLocalStorage(state);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      saveCartToLocalStorage(state);
    },
    updateQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
      saveCartToLocalStorage(state);
    },
    clearCart: (state) => {
      state.items = [];
      saveCartToLocalStorage(state);
    },
  },
});

export const { initializeCart, addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;