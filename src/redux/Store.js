import { configureStore } from "@reduxjs/toolkit";

import { SearchSlice, AuthSlice, CartSlice, CategorySlice } from "./slices";

const Store = configureStore({
  reducer: {
    category: CategorySlice,
    search: SearchSlice,
    cart: CartSlice,
    auth: AuthSlice,
  },
});

export default Store;
