import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./navSlice"

const appStore = configureStore({
    reducer: {
        nav: navReducer,
    }
})

export default appStore