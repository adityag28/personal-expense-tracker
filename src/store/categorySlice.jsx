// store/categorySlice.js
import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    list: []
  },
  reducers: {
    setCategories: (state, action) => {
      state.list = action.payload;
    },
    addCategory: (state, action) => {
      state.list.push(action.payload);
    },
    updateCategory: (state, action) => {
      const index = state.list.findIndex(cat => cat.id === action.payload.id);
      if (index !== -1) state.list[index] = action.payload;
    },
    deleteCategory: (state, action) => {
      state.list = state.list.filter(cat => cat.id !== action.payload);
    }
  }
});

// ✅ Export actions
export const { setCategories, addCategory, updateCategory, deleteCategory } = categorySlice.actions;

// ✅ Selector for useSelector
export const selectCategories = (state) => state.category.list;

export default categorySlice.reducer;
