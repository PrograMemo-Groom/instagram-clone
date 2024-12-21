import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "@/store/reducer/MainReducer.js";

export const Store = configureStore({
    reducer: {
        main: mainReducer,
    }

});

export default Store;