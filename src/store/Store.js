import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "@/store/reducer/MainReducer.js";
import commonReducer from "@/store/reducer/CommonReducer.js";
import profilePageReducer from "@/store/reducer/ProfilePageReducer.js";

export const Store = configureStore({
    reducer: {
        main: mainReducer,
        common: commonReducer,
        profile : profilePageReducer
    }

});

export default Store;