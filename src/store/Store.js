import {configureStore} from "@reduxjs/toolkit";
import mainReducer from "@/store/reducer/MainReducer.js";
import commonReducer from "@/store/reducer/CommonReducer.js";
import searchReducer from "@/components/searchTab/searchSlice.js"

export const Store = configureStore({
    reducer: {
        main: mainReducer,
        common: commonReducer,
        search: searchReducer,
    }
});

export default Store;