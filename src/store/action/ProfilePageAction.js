import {SET_IS_FOLLOWED, SET_MODAL_IS_OPEN} from "@/store/type/ProfilePageActionType.js";


export const setModalIsOepn = (modalIsOpen) => ({
    type: SET_MODAL_IS_OPEN,
    payload: modalIsOpen,
})

export const setIsFollowed = (isFollowed) => ({
    type : SET_IS_FOLLOWED,
    payload: isFollowed,
})