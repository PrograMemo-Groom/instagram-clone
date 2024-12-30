import { SET_ACTIVE_MODAL, TOGGLE_LIKE } from "../type/ReelsActionType";

// 액티브 모달 설정
export const setActiveModal = (modal) => ({
    type: SET_ACTIVE_MODAL,
    payload: modal,
});

// 좋아요 토글
export const toggleLike = () => ({
    type: TOGGLE_LIKE,
});