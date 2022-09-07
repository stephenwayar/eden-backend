const mongoose = require('mongoose')

const OrderItemSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },

  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  },

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

  size: {
    type: Object,
    enum: {
      variation: {
        enum: [
          "xs",
          "sm",
          "md",
          "lg",
          "xl",
          "_2xl",
          "_3xl"
        ]
      },

      variation: {
        type: Number
      }
    }
  },

  date_placed: {
    type: Date
  },

  quantity: {
    type: Number
  },

  total_price: {
    type: Number
  }
})

OrderItemSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('OrderItem', OrderItemSchema)