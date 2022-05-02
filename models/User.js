const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },

  lastName: {
    type: String,
    required: true
  },

  email: {
    type: String,
    unique: true,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  telephone: {
    type: Number,
    minlength: 10
  },

  shipping_address: {
    type: String,
    maxlength: 20
  }
})

module.exports = mongoose.model('User', UserSchema)