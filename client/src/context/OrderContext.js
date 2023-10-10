import { createContext, useContext, useReducer } from "react"; 
import OrderReducer from "../reducer/OrderReducer";
import axios from "axios";
import { getToken } from "../services/authorize";

const initState = {
    orders: [],
    isFetching: false,
}

const OrderContext = createContext()

export const MyOrderContext = () =>{
    return useContext(OrderContext)
}

const OrderProvider = ({children}) => {
    const [state,dispatch] = useReducer(OrderReducer,initState)
    
    const fetchOrder = () => {
        axios.defaults.withCredentials = true
        dispatch({type: "FETCH_ORDERS_REQUEST"});
        axios.get(`${process.env.REACT_APP_API}/orders`)
        .then(res=>dispatch({type:"FETCH_ORDERS_SUCCESS",payload: res.data}))
    }

    const onDelOrder = (order) => {
        axios.defaults.withCredentials = true
        axios.delete(`${process.env.REACT_APP_API}/order/${order._id}`,
            {
                headers:{
                    authorization: `Bearer ${getToken()}`
                }
            }
        )
          .then(res=>{
            fetchOrder()
          })
          .catch(err=>alert(err))
    } 

    return(
        <OrderContext.Provider value={{...state,onDelOrder,fetchOrder}}>
            {children}
        </OrderContext.Provider>
    )
}

export {OrderContext,OrderProvider}