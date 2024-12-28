import {IS_LOADING, IS_LOGIN} from "@/store/type/CommonActionType.js";

export const setIsLoading = (isLoading) => ({
    type: IS_LOADING,
    payload: isLoading
})

export const setIsLogin = (isLogin) => ({
    type: IS_LOGIN,
    payload: isLogin
})