import { SET_ACTIVE_MODAL, TOGGLE_LIKE, SET_COMMENTS } from "../type/ReelsActionType";

// 액티브 모달 설정
export const setActiveModal = (modal) => ({
    type: SET_ACTIVE_MODAL,
    payload: modal,
});

// 좋아요 토글
export const toggleLike = (reelId) => ({
    type: TOGGLE_LIKE,
    payload: reelId,
});

export const setComments = (mediaId, comments) => ({
    type: SET_COMMENTS,
    payload: { mediaId, comments },
});