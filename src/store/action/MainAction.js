import {SET_MAIN_CONTENT} from "@/store/type/MainActionType.js";

export const setMainResult = (mainResult) => ({
    type: SET_MAIN_CONTENT,
    payload: mainResult,
})