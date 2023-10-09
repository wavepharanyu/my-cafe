const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
require("dotenv").config()
const productRoute = require("./routes/product.js")
const orderRoute = require("./routes/order.js")
const authRoute = require("./routes/auth.js")

const app = express()

//connect database
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
    useUnifiedTopology:false
}).then(()=>console.log("success connect"))
.catch((err)=>console.log(err))


//middleware
app.get("/", (req,res) => {
    res.json('My Cafe')
})
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

//route
app.use('/api',productRoute)
app.use('/api',orderRoute)
app.use('/api',authRoute)


const port = process.env.PORT || 5500
app.listen(port,()=>console.log(`start server in port ${port}`))