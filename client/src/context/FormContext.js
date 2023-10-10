import { createContext, useContext, useReducer } from "react"; 
import FormReducer from "../reducer/FormReducer";
import axios from "axios";
import Swal from "sweetalert2";
import { getToken } from "../services/authorize";

const initState = {
    productName: '', unitPrice: '', thumbnail: ''
}

const FormContext = createContext()

export const MyFormContext = () =>{
    return useContext(FormContext)
}

const FormProvider = ({children}) => {
    const [state,dispatch] = useReducer(FormReducer,initState)
    
    const createProduct = (e) => {
        const {productName,unitPrice,thumbnail} = state
        //axios.defaults.withCredentials = true
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_API}/product/create`,
            {productName,unitPrice,thumbnail},
            {
                headers:{
                    authorization: `Bearer ${getToken()}`
                }
            }
        )
        .then(response=>{
            Swal.fire(
                'แจ้งเตือน',
                'บันทึกข้อมูลเรียบร้อย',
                'success'
            )
            dispatch({type:"RESET_PRODUCT"})
        })
        .catch(err=>{
            Swal.fire(
                'แจ้งเตือน',
                err.response.data.error,
                'error'
            )
        })
    }

    const updateProduct = (e,id) => {
        const {productName,unitPrice,thumbnail} = state
        //axios.defaults.withCredentials = true
        e.preventDefault();
        axios.put(`${process.env.REACT_APP_API}/product/${id}`,
            {productName,unitPrice,thumbnail},
            {
                headers:{
                    authorization: `Bearer ${getToken()}`
                }
            }
        )
        .then(response=>{
            Swal.fire(
                'แจ้งเตือน',
                'บันทึกข้อมูลเรียบร้อย',
                'success'
            )
            //dispatch({type:"RESET_PRODUCT"})
        })
        .catch(err=>{
            Swal.fire(
                'แจ้งเตือน',
                err.response.data.error,
                'error'
            )
        })
    }

    const fetchSingleProduct = (_id) => {
        //axios.defaults.withCredentials = true
        axios.get(`${process.env.REACT_APP_API}/product/${_id}`)
        .then(res=>dispatch({type:"FETCH_PRODUCT",payload: res.data}))
        .catch(err=>alert(err))
    }

    const inputName = (value) => {
        dispatch({type:"INPUT_NAME", payload: value})
    }

    const inputPrice = (value) => {
        dispatch({type:"INPUT_PRICE", payload: value})
    }

    const inputThumbnail = (value) => {
        dispatch({type:"INPUT_THUMBNAIL", payload: value})
    }

    const initData = () => {
        dispatch({type:"RESET_PRODUCT"})
    }

    return(
        <FormContext.Provider value={{...state, createProduct, inputName, inputPrice, inputThumbnail, fetchSingleProduct, initData, updateProduct}}>
            {children}
        </FormContext.Provider>
    )
}

export {FormContext,FormProvider}