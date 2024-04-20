import { isSignedInToLocalStorage } from "@/util/localStorageUtil";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: isSignedInToLocalStorage(),
  user: isSignedInToLocalStorage()
    ? JSON.parse(localStorage.getItem("user"))
    : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export const selectUser = (state) => state.auth.user;

const authReducer = authSlice.reducer;

export default authReducer;
