const mongoose = require('mongoose')

const OrderItemSchema = new mongoose.Schema({
  product: {
    type: String,
    ref: 'Product'
  },

  quantity: {
    type: Number
  },

  price: {
    type: Number
  }
})

OrderItemSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('OrderItem', OrderItemSchema)