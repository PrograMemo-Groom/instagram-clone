import {configureStore} from "@reduxjs/toolkit";
import mainReducer from "@/store/reducer/MainReducer.js";
import commonReducer from "@/store/reducer/CommonReducer.js";
import searchReducer from "@/components/searchTab/searchSlice.js";
import profilePageReducer from "@/store/reducer/ProfilePageReducer.js";
import userReducer from "@/store/reducer/UserReducer.js";

export const Store = configureStore({
    reducer: {
        main: mainReducer,
        common: commonReducer,
        search: searchReducer,
        profile: profilePageReducer,
        user: userReducer,
    }
});

export default Store;