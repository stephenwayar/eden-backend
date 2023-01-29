const express = require('express')
const OrderController = require('../controllers/OrderController')
const Router = express.Router()

//post route
Router.post('/api/orders', OrderController.place_order)

//put route
Router.put('/api/orders/:id', OrderController.update_order)

//get routes
Router.get('/api/orders/:id', OrderController.get_order)

Router.get('/api/orders', OrderController.get_orders)

module.exports = Router