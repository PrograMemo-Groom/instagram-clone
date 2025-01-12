const commonState = {
    isLoading: false,
    isLogin: JSON.parse(localStorage.getItem("isLogin")) || false,
    OpenConfirmExitModal: false,
}

const CommonReducer = (state = commonState, action) => {
    switch (action.type) {
        case 'IS_LOADING':
            return {...state, isLoading: action.payload}
        case 'IS_LOGIN':
            localStorage.setItem("isLogin", JSON.stringify(action.payload));
            return {...state, isLogin: action.payload}
        case "OPEN_CONFIRM_EXIT_MODAL" :
            return {...state, OpenConfirmExitModal: action.payload}

        default:
            return state;
    }
}
export default CommonReducer;