import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalPrice: 0,
  showCart:false
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(element=>element['id']==item['id'])
      if(!existingItem){
        state.items.push(item);
      }
      else {
        existingItem['amount'] = existingItem['amount'] + item['amount']
      }
      state.totalPrice = state.totalPrice + item['amount']*item['price']
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      const itemToRemove = state.items.find(item => item['id']=== itemId);
      if (itemToRemove) {
        state.items = state.items.filter(item => item['id']!== itemId);
        state.totalPrice -= itemToRemove['amount']*itemToRemove['price'];
      }
    },
    showCart: (state, action) => {
      state.showCart = true
    },
    closeCart: (state,action) => {
      state.showCart = false
    },
    increment: (state,action) => {
      const item = action.payload;
      const existingItem = state.items.find(element=>element['id']==item['id'])
      existingItem['amount'] = existingItem['amount'] + 1
      state.totalPrice = state.totalPrice + existingItem['price']
    },
    decrement: (state,action) => {
      const item = action.payload;
      const existingItem = state.items.find(element=>element['id']==item['id'])
      existingItem['amount'] = existingItem['amount'] - 1
      state.totalPrice = state.totalPrice - existingItem['price']
      if(existingItem['amount']==0){
        state.items = state.items.filter(element => element['id'] !== item['id']);
        state.totalPrice -= existingItem['price'];
      }
    },
  },
});

export const { addItem, removeItem, showCart, closeCart, increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;
