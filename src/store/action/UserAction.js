import {SET_LOGIN_USER, SHOW_PASSWORD} from "@/store/type/UserActionType.js";

export const setUserLogin = (user) => ({
    type: SET_LOGIN_USER,
    payload: user
})
export const toggleShowPassword = () => ({
    type: SHOW_PASSWORD,
})