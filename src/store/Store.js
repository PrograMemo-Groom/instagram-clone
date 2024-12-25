import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "@/store/reducer/MainReducer.js";
import commonReducer from "@/store/reducer/CommonReducer.js";

export const Store = configureStore({
    reducer: {
        main: mainReducer,
        common: commonReducer,
    }

});

export default Store;