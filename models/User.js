const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },

  lastName: {
    type: String,
  },

  email: {
    type: String,
    unique: true,
    required: true
  },

  password: {
    type: String,
    minlength: 4,
    required: true
  },

  phone_number: {
    type: Number,
    minlength: 8
  },

  avatar: {
    type: Object
  },

  shipping_address: {
    type: String
  },

  orders: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'OrderItem'
  }],

  verified: {
    type: Boolean
  },

  otpToken: {
    type: Number
  },

  otpExpires: {
    type: Date
  }
}, { timestamps: true })

UserSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject.__v
    delete returnedObject.password
    delete returnedObject.otpToken
    delete returnedObject.otpExpires
  }
})

module.exports = mongoose.model('User', UserSchema)