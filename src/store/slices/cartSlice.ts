import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../types";

// Define CartProduct interface that extends Product and adds a count
interface CartProduct extends Product {
  count: number;
}

interface CartState {
  items: CartProduct[]; // Cart items will now be an array of CartProduct
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const product = action.payload;
      const existingProductIndex = state.items.findIndex(
        (item) => item.id === product.id
      );

      // If the product is already in the cart, increment the count
      if (existingProductIndex >= 0) {
        state.items[existingProductIndex].count += 1;
      } else {
        // Otherwise, add the new product with count 1
        state.items.push({ ...product, count: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const existingProductIndex = state.items.findIndex(
        (item) => item.id === id
      );

      if (existingProductIndex >= 0) {
        const product = state.items[existingProductIndex];

        // If the count is greater than 1, decrement it
        if (product.count > 1) {
          state.items[existingProductIndex].count -= 1;
        } else {
          // If the count is 1, remove the product from the cart
          state.items.splice(existingProductIndex, 1);
        }
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
