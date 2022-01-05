import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import productsJSON from "./products.json";
export const getProducts = createAsyncThunk("products", async () => {
  const loadData = await JSON.parse(JSON.stringify(productsJSON));
  return loadData.products;
});

const initialState = {
  products: [],
  filteredProducts: [],
};

export const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    decreaseInventory(state, action) {
      const itemToDecrease = action.payload;

      if (itemToDecrease.product.inventory > 0) {
        state.products.map((item) =>
          item.id === itemToDecrease.product.id
            ? { ...item, inventory: item.inventory-- }
            : item
        );
      }
    },
    increaseInventory(state, action) {
      const itemToDecrease = action.payload;

      state.products.map((item) =>
        item.id === itemToDecrease.item.id
          ? { ...item, inventory: item.inventory++ }
          : item
      );
    },

    addQuantityAfterDelete(state, action) {
      const itemToDecrease = action.payload;

      const existingItem = state.products.find(
        (item) => item.id === itemToDecrease.item.id
      );
      existingItem.inventory = existingItem.inventory + itemToDecrease.quantity;
    },

    filterProducts(state, action) {
      state.products = state.filteredProducts.filter((item) =>
        item.name.toLowerCase().includes(action.payload)
      );
    },
  },

  extraReducers: {
    [getProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
      state.filteredProducts = action.payload;
    },
  },
});

export const {
  decreaseInventory,
  increaseInventory,
  addQuantityAfterDelete,
  filterProducts,
} = catalogSlice.actions;

export default catalogSlice.reducer;
