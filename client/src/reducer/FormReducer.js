

const FormReducer = (state,action) => {
    if(action.type === "RESET_PRODUCT"){
        return { productName: '', unitPrice: '', thumbnail: ''}
    }
    if(action.type === "FETCH_PRODUCT"){
        return { productName: action.payload.productName, unitPrice: action.payload.unitPrice, thumbnail: action.payload.thumbnail} 
    }
    if(action.type === "INPUT_NAME"){
        return { ...state, productName: action.payload }
    }
    if(action.type === "INPUT_PRICE"){
        return { ...state, unitPrice: action.payload }
    }
    if(action.type === "INPUT_THUMBNAIL"){
        return { ...state, thumbnail: action.payload }
    }
    else{
        return state
    }
}

export default FormReducer