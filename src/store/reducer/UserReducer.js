const userState = {
    user: {
        id: "",
        password: "",
    },
    joinUser: {
        id: "",
        password: "",
        name: "",
        realName: "",
    },
    showPassword: false,
}

const UserReducer = (state = userState, action) => {
    switch (action.type) {
        case 'SET_LOGIN_USER':
            // console.log("SET_LOGIN_USER PayLoad: ", action.payload);
            return {...state, user: {id: action.payload.id, password: action.payload.password}}
        case 'SET_JOIN_USER':
            // console.log("SET_JOIN_USER PayLoad: ",action.payload);
            return {...state,
                user: {
                    id: action.payload.id,
                    password: action.payload.password,
                    name: action.payload.name,
                    realName: action.payload.realName
                }
            }
        case 'SHOW_PASSWORD':
            // console.log("showPassword:",state.showPassword);
            return {...state, showPassword: !state.showPassword}
        default:
            return state;
    }
}
export default UserReducer;