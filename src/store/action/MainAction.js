import {SET_IS_DARK, SET_MAIN_CONTENT, SET_OPEN_POSTING_MODAL} from "@/store/type/MainActionType.js";

export const setMainResult = (mainResult) => ({
    type: SET_MAIN_CONTENT,
    payload: mainResult,
})

export const setIsDark = (isDark) => ({
    type: SET_IS_DARK,
    payload: isDark,
})

export const setOpenPostingModal = (openPostingModal) => ({
    type: SET_OPEN_POSTING_MODAL,
    payload: openPostingModal,
})