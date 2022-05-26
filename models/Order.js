const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
  img_URL: {
    type: String
  },

  name: {
    type: String,
    unique: true
  },

  description: {
    type: String,
    maxlength: 50
  },

  price: {
    type: Number
  },

  quantity: {
    type: String,
    minlength: 1
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

  date: {
    type: Date
  },

  owner: {
    type: String,
    ref: 'User'
  },
})

OrderSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Order', OrderSchema)