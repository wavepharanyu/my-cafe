const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    orderedDate: {
        type:String,
        require:true,
    },
    totalPrice:{
        type:Number,
        require:true
    },
    orders:[{
        product:{
            productName:{
                type:String,
                require:true,
            },
            unitPrice:{
                type:String,
                require:true
            },
        },
        quantity:{
            type:Number,
            require:true
        }
    }
]
})

module.exports = mongoose.model("Order",orderSchema)