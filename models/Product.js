const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  no_of_orders: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'OrderItem'
  }],

  images: [{
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
      [
        { xs: Number },
        { sm: Number },
        { md: Number },
        { lg: Number },
        { xl: Number },
        { _2xl: Number }
      ],

      [{
        value: {
          type: Map,
          of: Number
        }
      }]
    ]
  },

  tag: {
    type: String
  }
})

ProductSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Product', ProductSchema)