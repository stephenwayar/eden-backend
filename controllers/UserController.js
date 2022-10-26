const User = require("../models/User")
const logger = require('../utils/logger')
const bcrypt = require("bcryptjs")
const deleteAvatar = require('../helpers/deleteImage')

exports.get_users = function(req, res, next){
  if (!req.user) {
    logger.info('token is missing')
    return res.status(401).json({
      error: 'token missing or invalid'
    })
  }

  User.find({}).populate('orders').then(users => {
    res.status(200).json(users)
  }).catch(error => next(error))
}

exports.get_user = function(req, res){
  if (!req.user) {
    logger.info('token is missing')
    return res.status(401).json({
      error: 'token missing or invalid'
    })
  }

  let ID = req.params.id
  User.findById(ID).populate('orders').then(user => {
    res.status(200).json(user)
  }).catch(() => {
    logger.info('User not found!')
    res.status(404).json({
      message: "User not found!",
      success: false
    })
  })
}

exports.update_user_details = async function(req, res){
  if (!req.user) {
    logger.info('token is missing')
    return res.status(401).json({
      error: 'token missing or invalid'
    })
  }

  const ID = req.params.id
  const {
    firstName, lastName,
    phone_number, shipping_address
  } = req.body

  try{
    const user = await User.findByIdAndUpdate(
      ID, 
      { firstName, lastName, phone_number, shipping_address }, 
      { new: true, runValidators: true, context: 'query' }
    )

    res.status(200).json(user)
  }catch(error){
    logger.error('Failed to update user details', error)
    res.status(400).json({
      success: false,
      message: 'Failed to update user details'
    })
  }
}

exports.delete_account = async function(req, res){
  if (!req.user) {
    logger.info('token is missing')
    return res.status(401).json({
      error: 'token missing or invalid'
    })
  }

  const { id, password } = req.params
  const user = await User.findById(id)

  if(!user){
    return res.status(404).json({
      success: false,
      message: "Snap! there was a problem somewhere"
    })
  }

  const passwordIsCorrect = await bcrypt.compare(password, user.password)

  if(!passwordIsCorrect){
    return res.status(401).json({
      success: false,
      message: "Your password was incorrect"
    })
  }

  try{
    if(user.avatar?.public_id){
      await deleteAvatar(user.avatar)
    }
    const deletedUser = await User.findByIdAndDelete(id)

    res.status(200).json(deletedUser)
  }catch(error){
    logger.info('Failed to delete account', error)
    res.status(400).json({
      message: "Failed to delete account",
      success: false
    })
  }
}