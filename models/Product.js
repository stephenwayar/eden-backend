const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  no_of_orders: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'OrderItem'
  }],

  img_URL: [{
    type: Object
  }],

  name: {
    type: String,
    unique: true
  },

  description: {
    type: String,
    maxlength: 100
  },

  price: {
    type: Object,
    enum: [
      {
        xs: Number,
        sm: Number,
        md: Number,
        lg: Number,
        xl: Number,
        _2xl: Number,
        _3xl: Number
      },

      {
        value: {
          type: Map,
          of: Number
        }
      }
    ]
  },

  quantity: {
    type: Object,
    enum: [
      {
        xs: Number,
        sm: Number,
        md: Number,
        lg: Number,
        xl: Number,
        _2xl: Number,
        _3xl: Number
      },

      {
        value: {
          type: Map,
          of: Number
        }
      }
    ]
  },

  tag: {
    type: String,
    ref: 'Tag'
  },
})

ProductSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Product', ProductSchema)