const express = require('express')
const OrderController = require('../controllers/OrderController')
const Router = express.Router()

//post route
Router.post('/api/orders', OrderController.place_order)

//put route
Router.put('/api/orders/:id', OrderController.update_order)

//get routes
Router.get('/api/orders/:id', OrderController.get_order)

Router.get('/api/orders/placed', OrderController.get_placed_orders)

Router.get('/api/orders/confirmed', OrderController.get_confirmed_orders)

Router.get('/api/orders/outfordelivery', OrderController.get_outfordelivery_orders)

Router.get('/api/orders/completed', OrderController.get_completed_orders)

Router.get('/api/orders/canceled', OrderController.get_canceled_orders)

module.exports = Router