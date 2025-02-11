import { createSlice } from "@reduxjs/toolkit";

// Load user from local storage if exists
const userFromStorage = JSON.parse(localStorage.getItem("user")) || null;

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: userFromStorage,  // Persist user session
  },
  reducers: {
    signup: (state, action) => {
      const newUser = action.payload;
      localStorage.setItem("user", JSON.stringify(newUser));
      state.user = newUser;
    },
    login: (state, action) => {
      localStorage.setItem("user", JSON.stringify(action.payload));
      state.user = action.payload;
    },
    logout: (state) => {
      localStorage.removeItem("user");
      state.user = null;
    },
  },
});

export const { signup, login, logout } = authSlice.actions;
export default authSlice.reducer;
