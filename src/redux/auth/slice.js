import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { login, logOut, refreshUser, register } from "./operations";

const initialState = {
  user: {
    name: "",
    email: "",
  },
  token: "",
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(logOut.fulfilled, () => {
        return initialState;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addMatcher(
        isAnyOf(register.fulfilled, login.fulfilled),
        (state, action) => {
          state.user = action.payload.user;
          state.isLoggedIn = true;
          state.token = action.payload.token;
        }
      );
  },
});

export const authReducer = authSlice.reducer;
