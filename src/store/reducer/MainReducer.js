const initialState = {
    mainResult: [],
}

const MainReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'SET_MAIN_CONTENT':
            return {...state, mainResult: action.payload}
        default:
            return state;
    }
}
export default MainReducer;