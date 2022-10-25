const User = require("../models/User")
const logger = require('../utils/logger')

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

exports.delete_account = function(req, res){
  if (!req.user) {
    logger.info('token is missing')
    return res.status(401).json({
      error: 'token missing or invalid'
    })
  }

  let ID = req.params.id
  User.findByIdAndDelete(ID).then(() => {
    logger.info('Successfully deleted user')
    res.status(200).json({
      message: "Successfully deleted user",
      success: true
    })
  }).catch(() => {
    logger.info('User does not exist')
    res.status(400).json({
      message: "User does not exist",
      success: false
    })
  })
}