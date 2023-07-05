
const OrderReducer = (state,action) => {
    if(action.type === "FETCH_ORDERS_REQUEST"){
        return { ...state, isFetching:true }
    }
    if(action.type === "FETCH_ORDERS_SUCCESS"){
        return { orders: action.payload, isFetching:false }
    }
    else{
        return state
    }
}

export default OrderReducer