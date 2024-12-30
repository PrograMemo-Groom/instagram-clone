const commonState = {
    isLoading: false,
    isLogin: JSON.parse(localStorage.getItem("isLogin")) || false,
}

const CommonReducer = (state = commonState, action) => {
    switch (action.type) {
        case 'IS_LOADING':
            return {...state, isLoading: action.payload}
        case 'IS_LOGIN':
            localStorage.setItem("isLogin", JSON.stringify(action.payload));
            return {...state, isLogin: action.payload}
        default:
            return state;
    }
}
export default CommonReducer;