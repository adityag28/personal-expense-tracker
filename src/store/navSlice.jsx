import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
    name: "nav",
    initialState: {
        isNavOpen: true
    },
    reducers: {
        toggleNav: (state) => {
            state.isNavOpen = !state.isNavOpen
        },
        removeNav: (state) => {
            state.isNavOpen = false;
        },
    }
})

export const { toggleNav, removeNav } = navSlice.actions
export default navSlice.reducer