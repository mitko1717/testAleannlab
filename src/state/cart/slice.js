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
      state.inputValue++;

      if (!existingItem) {
        state.items.push({
          ...product,
          inventory: product.inventory - 1,
          quantity: 1,
          totalPrice: product.price * 1,
          inputValue: 1,
        });
      } else {
        if (product.inventory !== 0) {
          existingItem.quantity++;
          existingItem.inventory--;
          existingItem.inputValue++;
          existingItem.totalPrice = existingItem.quantity * product.price;
        }
      }

      state.totalSum = state.items.reduce((s, q) => {
        return s + q.totalPrice;
      }, 0);

      state.totalQuantity = state.items.reduce((s, q) => {
        return s + q.quantity;
      }, 0);
    },

    removeItemFromCart(state, action) {
      const cartItem = action.payload;

      const existingItem = state.items.find((item) => item.id === cartItem.id);
      state.inputValue--;

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== cartItem.id);
      } else {
        existingItem.quantity--;
        existingItem.inventory++;
        existingItem.inputValue--;
        existingItem.totalPrice = existingItem.totalPrice - cartItem.price;
      }

      state.totalSum = state.items.reduce((s, q) => {
        return s + q.totalPrice;
      }, 0);

      state.totalQuantity = state.items.reduce((s, q) => {
        return s + q.quantity;
      }, 0);
    },

    deleteWholeProductFromCart(state, action) {
      const itemToDelete = action.payload.itemToDelete;
      const existingItem = state.items.find(
        (item) => item.id === itemToDelete.id
      );
      existingItem.inventory = existingItem.inventory + existingItem.quantity;

      state.items = state.items.filter((item) => item.id !== itemToDelete.id);

      state.totalSum = state.items.reduce((s, q) => {
        return s + q.totalPrice;
      }, 0);

      state.totalQuantity = state.items.reduce((s, q) => {
        return s + q.quantity;
      }, 0);
    },

    setInputValue(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (action.payload.value <= action.payload.startedValue.inventory) {
        existingItem.inputValue = action.payload.value;
        existingItem.inventory =
          action.payload.startedValue.inventory - action.payload.value;
        existingItem.quantity =
          action.payload.startedValue.inventory - existingItem.inventory;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
      } else
        window.alert(
          `TOO BIG VALUE. PLZ TYPE LESS THAN ${action.payload.startedValue.inventory}`
        );

      state.totalSum = state.items.reduce((s, q) => {
        return s + q.totalPrice;
      }, 0);

      state.totalQuantity = state.items.reduce((s, q) => {
        return s + q.quantity;
      }, 0);
    },
  },
});

export const {
  addItem,
  removeItemFromCart,
  setInputValue,
  deleteWholeProductFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
