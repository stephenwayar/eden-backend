const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  img_URL: {
    type: String
  },

  name: {
    type: String,
    unique: true
  },

  description: {
    type: String,
    maxlength: 80
  },

  price: {
    type: Number
  },

  quantity: {
    type: Number,
    minlength: 1
  },

  tag: {
    type: String,
    enum: [
      'men_clothe',
      'men_shoe',
      'men_accessory',
      'men_underwear',
      'women_clothe',
      'women_shoe',
      'women_accessory',
      'women_underwear',
      'kids_toys',
      'kids_pink',
      'kids_blue'
    ]
  },
})

ProductSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Product', ProductSchema)