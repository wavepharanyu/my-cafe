const express = require('express')
const router = express.Router()
const { create, getAllOrders,remove } = require('../controllers/orderController')
const { requireLogin } = require('../controllers/authController')


router.post('/order/create',create)
router.get('/orders',getAllOrders)
router.delete('/order/:_id',requireLogin,remove)


module.exports = router