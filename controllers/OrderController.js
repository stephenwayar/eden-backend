const logger = require('../utils/logger')
const mongoose = require('mongoose');
const Order = require('../models/Order')
const OrderItem = require('../models/OrderItem')
const User = require('../models/User')
const Product = require('../models/Product')
const { sendSMS } = require('../helpers/sms')
const { 
  order_confirmed,
  order_for_delivery,
  order_completed,
  order_canceled
} = require('../templates/emails')
const nodemailer = require("nodemailer")
const { orderScreener } = require('../helpers/orderScreener')

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EDEN_SUPPORT_EMAIL,
    pass: process.env.MAIL_PASSWORD,
  }
})

//post controller
exports.place_order = async (req, res) => {
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
      shipping_fee: body.shipping_fee,
      amount: body.amount,
      paid: body.paid,
      reference: body.reference,
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
  if (!req.user) {
    logger.info('token is missing')
    return res.status(401).json({
      error: 'token missing or invalid'
    })
  }

  const ID = req.params.id
  const firstName = req.user.firstName
  const { status } = req.body

  if(status === 'confirmed'){
    try{
      let order = await Order.findByIdAndUpdate(
        ID, 
        { status }, 
        { new: true, runValidators: true, context: 'query' }
      )

      order = await order.populate('customer order_items')
      order = await order.populate({ path: 'order_items.product' })

      const { 
        reference, 
        payment_provider, 
        payment_method, 
        balance, 
        items, 
        date_placed,
        id, 
        shipping_fee, 
        amount, 
        paid, 
        confirmationSMS,
        customer
      } = orderScreener(order, firstName, ID)

      await transporter.sendMail({
        from: '"Eden Support" ',
        to: customer,
        subject: "Your #order has been confirmed!",
        html: order_confirmed(
          date_placed,
          id,
          shipping_fee,
          amount,
          paid,
          reference,
          payment_provider,
          payment_method,
          balance,
          items
        )
      });
      await sendSMS(confirmationSMS, req.user.phone_number)
  
      res.status(200).json(order)
    }catch(error){
      logger.error('Failed to confirm order', error)
      res.status(400).json({
        success: false,
        message: 'Failed to confirm order'
      })
    }
  }else if(status === 'outForDelivery'){
    try{
      let order = await Order.findByIdAndUpdate(
        ID, 
        { status }, 
        { new: true, runValidators: true, context: 'query' }
      )

      order = await order.populate('customer order_items')
      order = await order.populate({ path: 'order_items.product' })

      const { 
        reference, 
        payment_provider, 
        payment_method, 
        balance, 
        items, 
        date_placed,
        id, 
        shipping_fee, 
        amount, 
        paid, 
        customer,
        outForDeliverySMS ,
        fName,
        lName,
        phone_number,
        shipping_address
      } = orderScreener(order, firstName, ID)

      await transporter.sendMail({
        from: '"Eden Support" ',
        to: customer,
        subject: "Your #order is out for delivery!",
        html: order_for_delivery(
          date_placed,
          id,
          shipping_fee,
          amount,
          paid,
          reference,
          payment_provider,
          payment_method,
          balance,
          items,
          fName,
          lName,
          customer,
          phone_number,
          shipping_address
        )
      });
      await sendSMS(outForDeliverySMS, req.user.phone_number)
  
      res.status(200).json(order)
    }catch(error){
      logger.error('Failed to confirm order', error)
      res.status(400).json({
        success: false,
        message: 'Failed to confirm order'
      })
    }
  }else if(status === 'completed'){
    try{
      let order = await Order.findByIdAndUpdate(
        ID, 
        { status }, 
        { new: true, runValidators: true, context: 'query' }
      )

      order = await order.populate('customer order_items')
      order = await order.populate({ path: 'order_items.product' })

      const { 
        reference, 
        payment_provider, 
        payment_method, 
        balance, 
        items, 
        date_placed,
        id, 
        shipping_fee, 
        amount, 
        paid, 
        customer,
        fName,
        lName,
        phone_number,
        shipping_address
      } = orderScreener(order, firstName, ID)

      await transporter.sendMail({
        from: '"Eden Support" ',
        to: customer,
        subject: "#Order completed!",
        html: order_completed(
          date_placed,
          id,
          shipping_fee,
          amount,
          paid,
          reference,
          payment_provider,
          payment_method,
          balance,
          items,
          fName,
          lName,
          customer,
          phone_number,
          shipping_address
        )
      });
  
      res.status(200).json(order)
    }catch(error){
      logger.error('Failed to confirm order', error)
      res.status(400).json({
        success: false,
        message: 'Failed to confirm order'
      })
    }
  }else if(status === 'canceled'){
    try{
      let order = await Order.findByIdAndUpdate(
        ID, 
        { status }, 
        { new: true, runValidators: true, context: 'query' }
      )

      order = await order.populate('customer order_items')
      order = await order.populate({ path: 'order_items.product' })

      const { 
        reference, 
        payment_provider, 
        payment_method, 
        balance, 
        items, 
        date_placed,
        id, 
        shipping_fee, 
        amount, 
        paid, 
        customer,
        canceledSMS
      } = orderScreener(order, firstName, ID)

      await transporter.sendMail({
        from: '"Eden Support" ',
        to: customer,
        subject: "Your #order has been canceled!",
        html: order_canceled(
          date_placed,
          id,
          shipping_fee,
          amount,
          paid,
          reference,
          payment_provider,
          payment_method,
          balance,
          items
        )
      });
      await sendSMS(canceledSMS, req.user.phone_number)
  
      res.status(200).json(order)
    }catch(error){
      logger.error('Failed to confirm order', error)
      res.status(400).json({
        success: false,
        message: 'Failed to confirm order'
      })
    }
  }else{
    res.status(400).json({
      success: false,
      message: 'Snap! There was a problem somewhere'
    })
  }
}

//get controller
exports.get_order = async (req, res) => {
  if (!req.user) {
    logger.info('token is missing')
    return res.status(401).json({
      error: 'token missing or invalid'
    })
  }

  let ID = req.params.id

  try{
    const order = await Order
      .findById(ID)
      .populate('customer order_items')

    res.status(200).json(order)
  }catch(error){
    logger.info('Order not found!', error)
    res.status(404).json({
      message: "Order not found!",
      success: false
    })
  }
}

exports.get_orders = async (req, res, next) => {
  if (!req.user) {
    logger.info('token is missing')
    return res.status(401).json({
      error: 'token missing or invalid'
    })
  }

  const status = req.body.status

  if (!status) {
    logger.info('Order status is required')
    return res.status(400).json({
      success: false,
      message: 'Order status is required'
    })
  }

  try{
    const orders = await Order
      .find({ status })
      .populate('customer order_items')
  
    res.status(200).json(orders)
  }catch(error){
    logger.error(`Failed to fetch ${status} orders`,error)
    next(error)
  }
}