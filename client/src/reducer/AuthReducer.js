const AuthReducer = (state,action) => {
    if(action.type === "INPUT_USERNAME"){
        return { ...state, username: action.payload }
    }
    if(action.type === "INPUT_PASSWORD"){
        return { ...state, password: action.payload }
    }
    if(action.type === "INIT_DATA"){
        return { username: '', password: '' }
    }
    else{
        return state
    }
}

export default AuthReducer