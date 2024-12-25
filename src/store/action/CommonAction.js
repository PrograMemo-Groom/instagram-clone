import {IS_LOADING} from "@/store/type/CommonActionType.js";

export const setIsLoading = (isLoading) => ({
    type: IS_LOADING,
    payload: isLoading
})