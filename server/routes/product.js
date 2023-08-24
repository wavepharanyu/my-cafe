const express = require('express')
const router = express.Router()
const { create, getAllProducts, remove, getSingleProduct, update } = require('../controllers/productController')
const { requireLogin } = require('../controllers/authController')


router.post('/product/create',requireLogin,create)
router.get('/products',getAllProducts)
router.delete('/product/:_id',requireLogin,remove)
router.get('/product/:_id',getSingleProduct)
router.put('/product/:_id',requireLogin,update)

module.exports = router