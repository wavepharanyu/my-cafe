import { createContext, useContext, useReducer } from "react"; 
import AuthReducer from "../reducer/AuthReducer";
import axios from "axios";
import Swal from 'sweetalert2'
import { authenticate } from "../services/authorize";

const initState = {
    username: '',
    password: ''
}

const AuthContext = createContext()

export const MyAuthContext = () =>{
    return useContext(AuthContext)
}

const AuthProvider = ({children}) => {
    const [state,dispatch] = useReducer(AuthReducer,initState) 

    const inputUsername = (value) => {
        dispatch({type:"INPUT_USERNAME", payload: value})
    }

    const inputPassword = (value) => {
        dispatch({type:"INPUT_PASSWORD", payload: value})
    }

    const initData = () => {
        dispatch({type:"INIT_DATA"})
    }

    const submitForm = (e,next) => {
        const { username, password } = state
        axios.defaults.withCredentials = true
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_API}/login`,{username,password})
        .then(res=>{
            //login สำเร็จ
            authenticate(res,next)
        }).catch(err=> {
            Swal.fire(
                'แจ้งเตือน',
                err.response.data.error,
                'error'
            )
        })
    }

    return(
        <AuthContext.Provider value={{...state,inputUsername,inputPassword,submitForm,initData}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext,AuthProvider}