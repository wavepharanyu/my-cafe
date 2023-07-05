
const ProductReducer = (state,action) => {
    if(action.type === "FETCH_PRODUCTS_REQUEST"){
        return { ...state, isFetching:true }
    }
    if(action.type === "FETCH_PRODUCTS_SUCCESS"){
        return { products: action.payload, isFetching:false }
    }
    if(action.type === "FETCH_SINGLE_PRODUCTS"){
        return { ...state, product: action.payload, isFetching:false }
    }
    else{
        return state
    }
}

export default ProductReducer