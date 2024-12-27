const userState = {
    user: {
        id: "",
        password: "",
    },
}

const UserReducer = (state = userState, action) => {
    switch (action.type) {
        case 'SET_USER_ID':
            return {...state, user: {id: action.payload}}
        case 'SET_USER_PW':
            return {...state, user: {password: action.payload}}
        default:
            return state;
    }
}
export default UserReducer;