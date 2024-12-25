const initialState = {
    mainResult: [],
    isDark : false,
}

const MainReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'SET_MAIN_CONTENT':
            return {...state, mainResult: action.payload}
        case 'SET_IS_DARK' :
            return {
                ...state,
                isDark : action.payload
            }
        default:
            return state;
    }
}
export default MainReducer;