const userState = {
    user: {
        id: "",
        password: "",
    },
    showPassword: false,
}

const UserReducer = (state = userState, action) => {
    switch (action.type) {
        case 'SET_LOGIN_USER':
            // console.log("PayLoad: ", action.payload);
            return {...state, user: {id: action.payload.id, password: action.payload.password}}
        case 'SHOW_PASSWORD':
            // console.log("showPassword:",state.showPassword);
            return {...state, showPassword: !state.showPassword}
        default:
            return state;
    }
}
export default UserReducer;