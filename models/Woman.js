const mongoose = require('mongoose')

const WomanSchema = new mongoose.Schema({
  img_URL: {
    type: String
  },

  item_name: {
    type: String,
    unique: true

  },

  item_description: {
    type: String,
    maxlength: 50
  },

  item_price: {
    type: Number
  },

  item_quantity: {
    type: String,
    minlength: 1
  }
})

module.exports = mongoose.model('Woman', WomanSchema)