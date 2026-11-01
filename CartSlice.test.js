import { describe, it, expect } from 'vitest';
import cartReducer, { addItem, removeItem, updateQuantity } from './CartSlice';

describe('CartSlice Reducer & Actions', () => {
  const initialState = { items: [] };

  const samplePlant = {
    id: 'air-1',
    name: 'Snake Plant',
    image: 'https://images.unsplash.com/photo-1545241047-6083a3684587',
    cost: '$18',
  };

  it('should initialize with empty cart items', () => {
    const state = cartReducer(undefined, { type: 'unknown' });
    expect(state.items).toEqual([]);
  });

  it('addItem: should add a new plant with quantity 1', () => {
    const nextState = cartReducer(initialState, addItem(samplePlant));
    expect(nextState.items).toHaveLength(1);
    expect(nextState.items[0]).toEqual({
      id: 'air-1',
      name: 'Snake Plant',
      image: 'https://images.unsplash.com/photo-1545241047-6083a3684587',
      cost: '$18',
      quantity: 1,
    });
  });

  it('addItem: should increment quantity when adding duplicate plant', () => {
    let state = cartReducer(initialState, addItem(samplePlant));
    state = cartReducer(state, addItem(samplePlant));
    expect(state.items).toHaveLength(1);
    expect(state.items[0].quantity).toBe(2);
  });

  it('updateQuantity: should safely update item quantity', () => {
    let state = cartReducer(initialState, addItem(samplePlant));
    state = cartReducer(state, updateQuantity({ id: 'air-1', quantity: 5 }));
    expect(state.items[0].quantity).toBe(5);
  });

  it('updateQuantity: should remove item if quantity set to 0 or negative', () => {
    let state = cartReducer(initialState, addItem(samplePlant));
    state = cartReducer(state, updateQuantity({ id: 'air-1', quantity: 0 }));
    expect(state.items).toHaveLength(0);
  });

  it('removeItem: should remove plant from cart by id or name', () => {
    let state = cartReducer(initialState, addItem(samplePlant));
    state = cartReducer(state, removeItem({ id: 'air-1', name: 'Snake Plant' }));
    expect(state.items).toHaveLength(0);
  });

  it('removeItem: should remove plant from cart when passing name as string', () => {
    let state = cartReducer(initialState, addItem(samplePlant));
    state = cartReducer(state, removeItem('Snake Plant'));
    expect(state.items).toHaveLength(0);
  });
});
