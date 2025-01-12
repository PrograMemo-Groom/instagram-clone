import {IS_LOADING, IS_LOGIN, OPEN_CONFIRM_EXIT_MODAL} from "@/store/type/CommonActionType.js";

export const setIsLoading = (isLoading) => ({
    type: IS_LOADING,
    payload: isLoading
})

export const setIsLogin = (isLogin) => ({
    type: IS_LOGIN,
    payload: isLogin
})

export const setOpenConfirmExitModal = (OpenConfirmExitModal) => ({
    type: OPEN_CONFIRM_EXIT_MODAL,
    payload: OpenConfirmExitModal
})
