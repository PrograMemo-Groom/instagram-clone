const initialState = {
    modalIsOpen : false,
}

const ProfilePageReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'SET_MODAL_IS_OPEN':
            return {...state, modalIsOpen: action.payload}

        default:
            return state;
    }
}
export default ProfilePageReducer;