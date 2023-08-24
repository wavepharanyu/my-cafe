const slugify = require("slugify")
const Products = require("../models/product")
const { v4: uuidv4 } = require('uuid')


exports.create = (req,res) => {
    const {productName,unitPrice,thumbnail} = req.body
    let productId = slugify(productName)
    if(!productId){
        productId = uuidv4()
    }
    //validate
    switch(true){
        case !productName:
            return res.status(400).json({error:"กรุณาระบุชื่อสินค้า"})
            break;
        case !unitPrice:
            return res.status(400).json({error:"กรุณาระบุราคาสินค้า"})
            break;
        case !thumbnail:
            return res.status(400).json({error:"กรุณาระบุ url thumbnail"})
            break;
    }
    //บันทึกข้อมูล
    Products.create({productName,unitPrice,thumbnail,productId})
    .then((product) => {
        res.json(product)
    })
    .catch((err)=>{
        if(err){
            res.status(400).json({error:"มีสินค้าซ้ำกัน"})
        }
    })
}

//ดึงข้อมูล all products
exports.getAllProducts = (req,res) => {
    Products.find({}).then((products)=>{
        res.json(products)
    })
} 

exports.remove = (req,res) => {
    const {_id} = req.params
    Products.findOneAndRemove({_id}).then((product)=>{
        res.json({
            message: "ลบสินค้าเรียบร้อย"
        })
    })
}  

exports.getSingleProduct = (req,res) => {
    const {_id} = req.params
    Products.findOne({_id}).then((product)=>{
        res.json(product)
    })
}  

exports.update = (req,res) => {
    const {_id} = req.params
    const {productName,unitPrice,thumbnail} = req.body

    switch(true){
        case !productName:
            return res.status(400).json({error:"กรุณาระบุชื่อสินค้า"})
            break;
        case !unitPrice:
            return res.status(400).json({error:"กรุณาระบุราคาสินค้า"})
            break;
        case !thumbnail:
            return res.status(400).json({error:"กรุณาระบุ url thumbnail"})
            break;
    }

    Products.findOneAndUpdate({_id},{productName,unitPrice,thumbnail},{new: true})
    .then((product)=>{
        res.json(product)
    }).catch((err)=>console.log(err))
}  


