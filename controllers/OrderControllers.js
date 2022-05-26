const Order = require('../models/Order')
const logger = require('../utils/logger')

//post controller
exports.order_product = (req, res, next) => {
  let dateToday = new Date().toLocaleDateString('en-us',
  {
    weekday:"long",
    year:"numeric",
    month:"short",
    day:"numeric"
  })
  let orderStatus = 'placed'
  let orders = req.body.orderArray

  for (let i = 0; i < orders.length; i++) {
    let newOrder = new Order({
      img_URL: orders[i].img_URL,
      name: orders[i].name,
      description: orders[i].description,
      price: orders[i].price,
      quantity: orders[i].quantity,
      status: orderStatus,
      date: dateToday,
      owner: orders[i].owner
    })

    newOrder.save().then(() => {
      logger.info("Order placed!")
    }).catch(error => logger.error("Error! Failed to place order", error))
  }

  res.status(201).end()
}

//put controller
exports.update_order = (req, res, next) => {
  let ID = req.params.id
  let { status } = req.body
  Order.findByIdAndUpdate(ID, { status }, { new: true, runValidators: true, context: 'query' }).then(updatedOrder => {
    logger.info('Updated order!')
    res.status(200).json(updatedOrder)
  }).catch(error => {
    logger.error("Error! Failed to update order", error)
    res.status(400).end()
  })
}

//get controller
exports.get_pending_orders = (req, res, next) => {

}

exports.get_confirmed_orders = (req, res, next) => {

}

exports.get_completed_orders = (req, res, next) => {

}