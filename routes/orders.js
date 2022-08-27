const express = require('express')
const OrdersController = require('../controllers/OrderControllers')
const Router = express.Router()

//post route
Router.post('/api/orders', OrdersController.order_product)

//put route
Router.put('/api/orders/:id', OrdersController.update_order)

//get routes
Router.get('/api/orders/:id', OrdersController.get_user_orders)

Router.get('/api/orders/placed', OrdersController.get_placed_orders)

Router.get('/api/orders/confirmed', OrdersController.get_confirmed_orders)

Router.get('/api/orders/outfordelivery', OrdersController.get_outfordelivery_orders)

Router.get('/api/orders/completed', OrdersController.get_completed_orders)

Router.get('/api/orders/canceled', OrdersController.get_canceled_orders)

module.exports = Router