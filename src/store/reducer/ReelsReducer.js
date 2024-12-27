import { SET_ACTIVE_MODAL, TOGGLE_LIKE } from "../type/ReelsActionType";

const initialState = {
    isLiked: false,
    activeModal: null, // 현재 활성화된 모달
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
        default:
            return state;
    }
};

export default reelsReducer;