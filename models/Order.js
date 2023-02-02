const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },

  order_items: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'OrderItem'
  }],

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

  payment_method: {
    type: String,
    enum: [
      'cod',
      'card'
    ]
  },

  payment_provider: {
    type: String,
    enum: [
      'paystack',
      'flutterwave',
      'cod'
    ]
  },

  shipping_fee: {
    type: Number
  },

  amount: {
    type: Number
  },

  paid: {
    type: Boolean
  },

  reference: {
    type: String
  },

  date_placed: {
    type: String
  },
})

OrderSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Order', OrderSchema)