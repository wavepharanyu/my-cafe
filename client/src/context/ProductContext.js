import { createContext, useContext, useReducer } from "react"; 
import ProductReducer from "../reducer/ProductReducer";
import axios from "axios";
import { getToken } from "../services/authorize";

const initState = {
    products: [],
    isFetching: false,
    product: {}
}

const ProductContext = createContext()

export const MyProductContext = () =>{
    return useContext(ProductContext)
}

const ProductProvider = ({children}) => {
    const [state,dispatch] = useReducer(ProductReducer,initState)
    
    const fetchProduct = () => {
        dispatch({type:"FETCH_PRODUCTS_REQUEST"})
        //axios.defaults.withCredentials = true
        axios.get(`${process.env.REACT_APP_API}/products`)
        .then(res=>dispatch({type:"FETCH_PRODUCTS_SUCCESS",payload: res.data}))
    }

    const onDelProduct = (product) => {
        //axios.defaults.withCredentials = true
        axios.delete(`${process.env.REACT_APP_API}/product/${product._id}`,
            {
                headers:{
                    authorization: `Bearer ${getToken()}`
                }
            }
        )
          .then(res=>{
            fetchProduct()
          })
          .catch(err=>alert(err))
    } 

    return(
        <ProductContext.Provider value={{...state,onDelProduct,fetchProduct}}>
            {children}
        </ProductContext.Provider>
    )
}

export {ProductContext,ProductProvider}