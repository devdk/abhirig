import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [] // Assuming products will hold the items in the cart
  },
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find(item => item.id === action.payload.id);

      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      state.products = state.products.filter(item => item.id !== action.payload);
    },
    resetCart: (state, action) => {
      state.products = [];
    }
  }
})

// Action creators are generated for each case reducer function
export const { addToCart, removeItem, resetCart } = cartSlice.actions

export default cartSlice.reducer
