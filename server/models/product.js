const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    productName:{
        type:String,
        require:true,
    },
    unitPrice:{
        type:String,
        require:true
    },
    thumbnail:{
        type:String,
        default:"Admin"
    },
    productId:{
        type:String,
        lowercase:true,
        unique:true
    }
},{timestamps:true})

module.exports = mongoose.model("Product",productSchema)