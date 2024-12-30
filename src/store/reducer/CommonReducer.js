const commonState = {
    isLoading: false,
    isLogin: true,
}

const CommonReducer = (state = commonState, action) => {
    switch (action.type) {
        case 'IS_LOADING':
            return {...state, isLoading: action.payload}
        case 'IS_LOGIN':
            return {...state, isLogin: action.payload}
        default:
            return state;
    }
}
export default CommonReducer;