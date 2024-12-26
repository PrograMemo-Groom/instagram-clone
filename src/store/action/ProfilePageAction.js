import {SET_MODAL_IS_OPEN} from "@/store/type/ProfilePageActionType.js";


export const setModalIsOepn = (modalIsOpen) => ({
    type: SET_MODAL_IS_OPEN,
    payload: modalIsOpen,
})