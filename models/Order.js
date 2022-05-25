const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
  img_URL: {
    type: String
  },

  name: {
    type: String,
    unique: true
  },

  status: {
    type: String,
    enum: [
      'pending',
      'confirmed',
      'completed'
    ]
  },

  date: {
    type: Date
  },

  owner: [{
    type: String,
    ref: 'User'
  }],
})

OrderSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Order', OrderSchema)