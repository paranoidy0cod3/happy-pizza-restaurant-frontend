import { configureStore } from "@reduxjs/toolkit";
import { CategorySlice, SearchSlice } from "./slices";

const Store = configureStore({
  reducer: {
    CategorySlice,
    SearchSlice,
  },
});

export default Store;
