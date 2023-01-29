const logger = require('../utils/logger')
const mongoose = require('mongoose');
const Order = require('../models/Order')
const OrderItem = require('../models/OrderItem')
const User = require('../models/User')
const Product = require('../models/Product')

//post controller
exports.place_order = async (req, res, next) => {
  if (!req.user) {
    logger.info('token is missing')
    return res.status(401).json({
      error: 'token missing or invalid'
    })
  }

  const body = req.body
  const order_items = body.order_items //array of objects

  try{
    const options = { 
      day: 'numeric', 
      month: 'numeric', 
      year: 'numeric' 
    } // date formating options 
    const today  = new Date()
    const date_placed = today.toLocaleDateString(options) // returns e.g 29/1/2023

    const user = await User.findById(req.user.id) // find the order owner

    let ordered_items = []

    const promiseArr = await order_items.map(async item => {
      const newOrderItem = new OrderItem({
        product: mongoose.Types.ObjectId(item.product),
        size: item.size,
        quantity: item.quantity,
        price: item.price,
        total_price: item.itemTotal
      })

      const savedItem = await newOrderItem.save()

      const product = await Product.findById(savedItem.product) // finds the product in an order_item 

      product.no_of_orders = product.no_of_orders.concat(mongoose.Types.ObjectId(savedItem._id)) // adds a saved item's objectId in the no_of_orders array. This is a feature that enables the frontend to filter the best selling products

      product.save() // saves the product

      return mongoose.Types.ObjectId(savedItem._id)
    }) // loops through order_items array and saves each order item

    ordered_items = await Promise.all(promiseArr) // pushes all saved order item Ids into this array

    const newOrder = new Order({
      customer: mongoose.Types.ObjectId(req.user.id),
      order_items: ordered_items, // order_items is now an array that holds each item's objectId (to enable using the populate())
      status: 'placed',
      payment_method: body.payment_method,
      payment_provider: body.payment_provider,
      paid: body.paid,
      date_placed
    })

    let savedOrder = await newOrder.save() // saves the order

    user.orders = user.orders.concat(mongoose.Types.ObjectId(savedOrder._id)) // updates the customer's orders array to hold the new order

    await user.save() // saves the customer

    // savedOrder = await Order.populate(savedOrder, { 
    //   path: 'customer',      
    //   populate: {
    //     path: 'orders',
    //     model: 'Order'
    //   } 
    // })
    
    savedOrder = await savedOrder.populate('order_items') // populates order_items objectId
    savedOrder = await savedOrder.populate({ 
      path: 'order_items.product' 
    }) // populates product objectId

    res.status(200).json(savedOrder)
  }catch(error){
    logger.error('Failed to place order', error)

    res.status(400).json({
      success: false,
      message: 'There was an error placing your order'
    })
  }
}

//update controller
exports.update_order = async (req, res, next) => {

}

//get controller
exports.get_order = async (req, res, next) => {

}

exports.get_placed_orders = async (req, res, next) => {

}

exports.get_confirmed_orders = async (req, res, next) => {

}

exports.get_outfordelivery_orders = async (req, res, next) => {

}

exports.get_completed_orders = async (req, res, next) => {

}

exports.get_canceled_orders = async (req, res, next) => {

}