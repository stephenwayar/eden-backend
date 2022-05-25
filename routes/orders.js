const express = require('express')
const OrdersController = require('../controllers/OrdersControllers')
const Router = express.Router()

//post route
Router.post('/api/orders', OrdersController.post_order)

//put route
Router.put('/api/orders/:id', OrdersController.update_order)

//get routes
Router.get('/api/orders/pending', OrdersController.get_pending_orders)

Router.get('/api/orders/confirmed', OrdersController.get_confirmed_orders)

Router.get('/api/orders/completed', OrdersController.get_completed_orders)

module.exports = Router