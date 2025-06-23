import { createSlice } from '@reduxjs/toolkit';

const isLargeScreen = typeof window !== 'undefined' && window.innerWidth >= 640;

const navSlice = createSlice({
    name: 'nav',
    initialState: {
        isNavOpen: isLargeScreen // 👉 open on big screens, closed on mobile
    },
    reducers: {
        toggleNav: (state) => {
            state.isNavOpen = !state.isNavOpen;
        },
        closeNav: (state) => {
            state.isNavOpen = false;
        },
        openNav: (state) => {
            state.isNavOpen = true;
        }
    }
});

export const { toggleNav, closeNav, openNav } = navSlice.actions;
export default navSlice.reducer;
