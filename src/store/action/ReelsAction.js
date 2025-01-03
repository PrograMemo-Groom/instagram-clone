import {SET_ACTIVE_MODAL, TOGGLE_LIKE, SET_COMMENTS, INCREMENT_LIKE_COUNT, ADD_COMMENT} from "../type/ReelsActionType";

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

// 좋아요 수 증가
export const incrementLikeCount = (reelId) => ({
    type: INCREMENT_LIKE_COUNT,
    payload: reelId,
});

export const addComment = (mediaId, comment) => ({
    type: ADD_COMMENT,
    payload: { mediaId, comment },
});

export const toggleCommentLike = (mediaId, commentId) => ({
    type: "TOGGLE_COMMENT_LIKE",
    payload: { mediaId, commentId },
});