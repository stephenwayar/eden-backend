const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
  status: {
    type: String,
    enum: [
      'placed',
      'confirmed',
      'outForDelivery',
      'completed',
      'canceled'
    ]
  },

  customer: {
    type: String,
    ref: 'User'
  },

  order_item: [{
    type: String,
    ref: 'OrderItem'
  }],

  date: {
    type: Date
  }
})

OrderSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Order', OrderSchema)