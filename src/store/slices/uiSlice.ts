import { createSlice } from "@reduxjs/toolkit";

interface UIState {
  isCartOpen: boolean;
}

const initialState: UIState = {
  isCartOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
    openCart: (state) => {
      state.isCartOpen = true;
    },
    closeCart: (state) => {
      state.isCartOpen = false;
    },
  },
});

export const { toggleCart, openCart, closeCart } = uiSlice.actions;
export default uiSlice.reducer;
