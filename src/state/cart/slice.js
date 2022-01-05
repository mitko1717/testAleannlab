import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalSum: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const { product } = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);
      state.totalQuantity++;

      if (!existingItem) {
        state.items.push({
          ...product,
          inventory: product.inventory - 1,
          quantity: 1,
          totalPrice: product.price,
        });
      } else {
        if (product.inventory !== 0) {
          existingItem.quantity++;
          existingItem.inventory--;
          existingItem.totalPrice = existingItem.totalPrice + product.price;
        }
      }

      state.totalSum = state.items.reduce((s, q) => {
        return s + q.totalPrice;
      }, 0);
    },

    removeItemFromCart(state, action) {
      const cartItem = action.payload;

      const existingItem = state.items.find((item) => item.id === cartItem.id);
      state.totalQuantity--;

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== cartItem.id);
      } else {
        existingItem.quantity--;
        existingItem.inventory++;
        existingItem.totalPrice = existingItem.totalPrice - cartItem.price;
      }

      state.totalSum = state.items.reduce((s, q) => {
        return s + q.totalPrice;
      }, 0);
    },

    deleteWholeProductFromCart(state, action) {
      const itemToDelete = action.payload.itemToDelete;
      const itemToDeleteQuantity = action.payload.itemToDelete.quantity;

      const existingItem = state.items.find(
        (item) => item.id === itemToDelete.id
      );
      existingItem.inventory = existingItem.inventory + existingItem.quantity;

      state.items = state.items.filter((item) => item.id !== itemToDelete.id);
      state.totalQuantity = state.totalQuantity - itemToDeleteQuantity;

      state.totalSum = state.items.reduce((s, q) => {
        return s + q.totalPrice;
      }, 0);
    },

    // setInputValue(state, action) {
    //   const cartItem = action.payload;
    //   console.log(cartItem);
    //   const existingItem = state.items.find((item) => item.id === cartItem.id);

    //   existingItem.quantity = cartItem.value;
    //   console.log(current(existingItem));
    // },
  },
});

export const {
  addItem,
  removeItemFromCart,
  setInputValue,
  deleteWholeProductFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
