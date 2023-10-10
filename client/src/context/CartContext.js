import { createContext, useContext, useReducer } from "react"; 
import CartReducer from "../reducer/CartReducer";
import axios from "axios";
import Swal from 'sweetalert2'

const initState = {
    CartList: [],
    totalPrice: 0
}

const CartContext = createContext()

export const MyCartContext = () =>{
    return useContext(CartContext)
}

const CartProvider = ({children}) => {
    const [state,dispatch] = useReducer(CartReducer,initState)
    
    const resetCart = () => {
        dispatch({type: "RESET_CART"});
    }

    const addCart = (product) => {
        let { CartList, totalPrice } = state
        let newCartList = []
        let total = []
        let findCart = CartList.find(item => item.product.productId === product.productId)
        if(findCart){
            const addOne = findCart.quantity+1
            newCartList = CartList.map(order => {
                if(order.product.productId !== product.productId) return order
                return {...order, quantity: addOne}
           })
        }
        else{
            newCartList = [...CartList,{product: product, quantity: 1}]
        }
        total = totalPrice + parseInt(product.unitPrice)
        dispatch({type: "ADD_CART", payload:{ CartList: newCartList, totalPrice: total}});
    }

    const onDelCart = (product) => {
        let { CartList, totalPrice } = state
        let findCart = CartList.find(item => item.product.productId === product.productId)
        let filterCart = CartList.filter(item => item.product.productId !== product.productId)
        const delPrice = totalPrice - (parseInt(findCart.product.unitPrice) * findCart.quantity)
        dispatch({type: "DELETE_CART", payload:{ CartList: filterCart, totalPrice: delPrice}});
    }

    const onConfirmOrder = () => {
        let { CartList, totalPrice } = state
        axios.defaults.withCredentials = true
        axios.post(`${process.env.REACT_APP_API}/order/create`,{orderedDate: new Date(), totalPrice, orders:CartList})
            .then(res => {
                Swal.fire(
                    'แจ้งเตือน',
                    'ยืนยันการซื้อสินค้าเรียบร้อย',
                    'success'
                )
                dispatch({type: "RESET_CART"});
            })
            .catch(err=>{
                Swal.fire(
                    'แจ้งเตือน',
                    err.response.data.error,
                    'error'
                )
            })

    }


    return(
        <CartContext.Provider value={{...state,resetCart,addCart,onDelCart,onConfirmOrder}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext,CartProvider}