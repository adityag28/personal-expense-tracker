// store/categorySlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [
    { id: 1, name: 'Food', icon: '🍔' },
    { id: 2, name: 'Transport', icon: '🚗' },
    { id: 3, name: 'Groceries', icon: '🛒' },
    { id: 4, name: 'Utilities', icon: '💡' },
    { id: 5, name: 'Health', icon: '💊' },
    { id: 6, name: 'Entertainment', icon: '🎬' },
    { id: 7, name: 'Shopping', icon: '🛍️' },
    { id: 8, name: 'Recharge & Bills', icon: '📱' },
  ]
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    addCategory: (state, action) => {
      state.categories.push(action.payload);
    },
    updateCategory: (state, action) => {
      const index = state.categories.findIndex(cat => cat.id === action.payload.id);
      if (index !== -1) {
        state.categories[index] = action.payload;
      }
    },
    deleteCategory: (state, action) => {
      state.categories = state.categories.filter(cat => cat.id !== action.payload);
    }
  }
});

export const { setCategories, addCategory, updateCategory, deleteCategory } = categorySlice.actions;

export const selectCategories = (state) => state.category.categories;

export default categorySlice.reducer;
