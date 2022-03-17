const mongoose = require('mongoose')

const MenSchema = new mongoose.Schema({
  img_URL: {
    type: String
  },

  product_name: {
    type: String,
    unique: true

  },

  product_description: {
    type: String,
    maxlength: 50
  },

  product_price: {
    type: Number
  },

  product_quantity: {
    type: String,
    minlength: 1
  }
})

module.exports = mongoose.model('Men', MenSchema)