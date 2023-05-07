const mongoose = require('mongoose')

const AdminSchema = new mongoose.Schema({
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

  role: {
    type: String,
    required: true,
    enum: [
      'super',
      'basic'
    ]
  },

  otpToken: {
    type: Number
  },

  otpExpires: {
    type: Date
  }
}, { timestamps: true })

AdminSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject.__v
    delete returnedObject.password
    delete returnedObject.otpToken
    delete returnedObject.otpExpires
  }
})

module.exports = mongoose.model('Admin', AdminSchema)