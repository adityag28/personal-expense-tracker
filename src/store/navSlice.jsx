import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
    name: "nav",
    initialState: {
        isMenuOpen: true
    },
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen
        },
        removeMenu: (state) => {
            state.isMenuOpen = false;
        },
    }
})

export const { toggleMenu, removeMenu } = navSlice.actions
export default navSlice.reducer