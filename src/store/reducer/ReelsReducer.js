import { SET_ACTIVE_MODAL, TOGGLE_LIKE } from "../type/ReelsActionType";
import {SET_COMMENTS} from "@/store/action/ReelsAction.js";

export const SET_ACCESS_TOKEN = "SET_ACCESS_TOKEN";
export const SET_REELS_DATA = "SET_REELS_DATA";
export const SET_USER_PROFILE = "SET_USER_PROFILE";

export const setAccessToken = (token) => ({
    type: SET_ACCESS_TOKEN,
    payload: token,
});

export const setReelsData = (data) => ({
    type: SET_REELS_DATA,
    payload: data,
});

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    payload: profile,
});

const initialState = {
    isLiked: false,
    activeModal: null, // 현재 활성화된 모달
    accessToken: "IGAAM2S8dbYxRBZAE1WanZAlN2tfYk9icVJ3V1BrekpJZAm5sdVBYOWEzaTYxajZADcGxialNjN1FhY3ZAqellwN215dXdUcm5TRlBnUmh1VHIyR1AxbjVPM2pzallHTm9JeEdKYTFYUnBFRUhZASjRTQlJTVEtWYTNlT3ctbWRWVm8wTQZDZD", // Access Token 추가
    reelsData: [], // Reels 데이터를 저장할 상태 추가
    userProfile: null, // 사용자 프로필 상태 추가
    comments: {}, //댓글
};

const reelsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_LIKE:
            return {
                ...state,
                isLiked: !state.isLiked,
            };
        case SET_ACTIVE_MODAL:
            return {
                ...state,
                activeModal: action.payload,
            };
        case SET_ACCESS_TOKEN: // Access Token 처리
            return {
                ...state,
                accessToken: action.payload,
            };
        case SET_REELS_DATA: // Reels 데이터 처리
            return {
                ...state,
                reelsData: action.payload,
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                userProfile: action.payload,
            };
        case SET_COMMENTS:
            return {
                ...state,
                comments: {
                    ...state.comments,
                    [action.payload.mediaId]: action.payload.comments,
                },
            };
        default:
            return state;
    }
};

export default reelsReducer;