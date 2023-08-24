const slugify = require("slugify")
const Orders = require("../models/order")
const { v4: uuidv4 } = require('uuid')


exports.create = (req,res) => {
    const {orderedDate,totalPrice,orders} = req.body
   

    //validate
    switch(true){
        case orders.length === 0:
            return res.status(400).json({error:"เพิ่มสินค้าลงในตะกร้าก่อนครับ"})
            break;
    }
    //บันทึกข้อมูล
    Orders.create({orderedDate,totalPrice,orders})
    .then((order) => {
        res.json(order)
    })
    .catch((err)=>{
        if(err){
            res.status(400).json({error:err})
        }
    })
}

//ดึงข้อมูล all products
exports.getAllOrders = (req,res) => {
    Orders.find({}).then((Orders)=>{
        res.json(Orders)
    })
}  

exports.remove = (req,res) => {
    const {_id} = req.params
    Orders.findOneAndRemove({_id}).then((order)=>{
        res.json({
            message: "ลบรายการสั่งซื้อเรียบร้อย"
        })
    })
}  



