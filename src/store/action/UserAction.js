import {SET_USER_ID, SET_USER_PW} from "@/store/type/UserActionType.js";

export const setUserId = (isLoading) => ({
    type: SET_USER_ID,
    payload: isLoading
})

export const setUserPw = (isLogin) => ({
    type: SET_USER_PW,
    payload: isLogin
})