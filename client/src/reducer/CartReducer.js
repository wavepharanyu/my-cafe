
const CartReducer = (state,action) => {
    if(action.type === "ADD_CART"){
        return {  CartList: action.payload.CartList, totalPrice: action.payload.totalPrice }
    }
    if(action.type === "RESET_CART"){
        return {  CartList: [], totalPrice: 0 }
    }
    if(action.type === "DELETE_CART"){
        return { CartList: action.payload.CartList, totalPrice: action.payload.totalPrice }
    }
    else{
        return state
    }
}

export default CartReducer