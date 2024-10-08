import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: JSON.parse(localStorage.getItem("cartItems")) || [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        state.cart = state.cart.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, qty: item.qty + 1 };
          }
          return item;
        });
      } else {
        state.cart.push(action.payload);
      }
    },

    removeCartItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },

    incrementQTY: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    },
    decrementQTY: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            quantity: item.quantity <= 1 ? item.quantity : item.quantity - 1,
          };
        }
        return item;
      });
    },
    setCart: (state, action) => {
      state.cart = action.payload;
    },
  },
});

export const {
  addToCart,
  incrementQTY,
  decrementQTY,
  setCart,
  removeCartItem,
} = CartSlice.actions;
export default CartSlice.reducer;
