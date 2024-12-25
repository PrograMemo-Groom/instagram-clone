import {SET_IS_DARK, SET_MAIN_CONTENT} from "@/store/type/MainActionType.js";

export const setMainResult = (mainResult) => ({
    type: SET_MAIN_CONTENT,
    payload: mainResult,
})

export const setIsDark = (isDark) => ({
    type: SET_IS_DARK,
    payload: isDark,
})