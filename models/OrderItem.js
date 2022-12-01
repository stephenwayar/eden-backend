const mongoose = require('mongoose')

const OrderItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
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
        ]
      },

      variation: {
        type: Number
      }
    }
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