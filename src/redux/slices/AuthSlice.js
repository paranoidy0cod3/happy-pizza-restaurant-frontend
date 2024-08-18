import { createSlice } from "@reduxjs/toolkit";
import { FaCookie } from "react-icons/fa";

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    loggedInUser: null,
    accessToken: null,
  },

  reducers: {
    loginUser: (state, action) => {
      state.loggedInUser = action.payload;
      // state.accessToken = action.payload.data.user.accessToken;
    },
    logoutUser: (state, action) => {
      state.loggedInUser = null;
      state.accessToken = null;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { loginUser, logoutUser, setUser } = AuthSlice.actions;
export default AuthSlice.reducer;
