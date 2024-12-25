const commonState = {
    isLoading: false,
}

const CommonReducer = (state = commonState, action) => {
    switch (action.type) {
        case 'IS_LOADING':
            return {...state, isLoading: action.payload}
        default:
            return state;
    }
}
export default CommonReducer;