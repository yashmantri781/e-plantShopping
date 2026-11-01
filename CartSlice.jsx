import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Array of items: { id, name, image, cost, quantity }
  },
  reducers: {
    addItem: (state, action) => {
      const payload = action.payload || {};
      const { id, name, image, cost } = payload;
      const itemId = id || name;

      // Find if item already exists by either id or name
      const existingItem = state.items.find(
        (item) => (item.id && item.id === itemId) || item.name === name
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          id: itemId,
          name: name || 'Plant',
          image: image || '',
          cost: cost || '$0',
          quantity: 1,
        });
      }
    },

    removeItem: (state, action) => {
      const payload = action.payload;
      // Payload can be a string (id or name) or an object ({ id, name })
      let targetId = '';
      let targetName = '';

      if (typeof payload === 'object' && payload !== null) {
        targetId = payload.id || payload.name || '';
        targetName = payload.name || '';
      } else if (typeof payload === 'string') {
        targetId = payload;
        targetName = payload;
      }

      state.items = state.items.filter((item) => {
        if (targetId && (item.id === targetId || item.name === targetId)) {
          return false;
        }
        if (targetName && item.name === targetName) {
          return false;
        }
        return true;
      });
    },

    updateQuantity: (state, action) => {
      const payload = action.payload || {};
      const { id, name, quantity } = payload;
      const targetId = id || name;
      const newQuantity = Number(quantity);

      const existingIndex = state.items.findIndex(
        (item) => (item.id && item.id === targetId) || item.name === name
      );

      if (existingIndex !== -1) {
        // Handle zero or negative quantities safely by removing item
        if (isNaN(newQuantity) || newQuantity <= 0) {
          state.items.splice(existingIndex, 1);
        } else {
          state.items[existingIndex].quantity = newQuantity;
        }
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
