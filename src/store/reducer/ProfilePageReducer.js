const initialState = {
    modalIsOpen : false,
    isFollowed : false,
}

const ProfilePageReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'SET_MODAL_IS_OPEN':
            return {...state, modalIsOpen: action.payload}

        case 'SET_IS_FOLLOWED' :
            return {
                ...state,
                isFollowed: action.payload
            }

        default:
            return state;
    }
}
export default ProfilePageReducer;