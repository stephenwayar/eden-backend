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
      'processed'
    ]
  },

  date_placed: {
    type: Date
  },
})

OrderSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Order', OrderSchema)