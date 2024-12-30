import { SET_ACTIVE_MODAL, TOGGLE_LIKE } from "../type/ReelsActionType";

export const SET_COMMENTS = "SET_COMMENTS";

// 액티브 모달 설정
export const setActiveModal = (modal) => ({
    type: SET_ACTIVE_MODAL,
    payload: modal,
});

// 좋아요 토글
export const toggleLike = () => ({
    type: TOGGLE_LIKE,
});

export const setComments = (mediaId, comments) => ({
    type: SET_COMMENTS,
    payload: { mediaId, comments },
});