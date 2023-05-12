const User = require("../models/User")
const Admin = require('../models/Admin')
const logger = require('../utils/logger')
const bcrypt = require("bcryptjs")
const deleteAvatar = require('../helpers/deleteImage')

exports.get_users = async function(req, res, next){
  if (!req.user) {
    logger.info('token is missing')
    return res.status(401).json({
      error: 'token missing or invalid'
    })
  }

  try{
    let users = await User.find({}).populate('orders')
    users = await users.populate({ path: 'orders.order_items' })
    users = await users.populate({ path: 'orders.order_items.product' })
  
    res.status(200).json(users)
  }catch(error){
    logger.error('Failed to fetch users',error)
    next(error)
  }
}

exports.get_user = async function(req, res) {
  if (!req.user) {
    logger.info('token is missing')
    return res.status(401).json({
      error: 'token missing or invalid'
    })
  }

  let ID = req.params.id

  try{
    let user = await User.findById(ID).populate('orders')
    user = await user.populate({ path: 'orders.order_items' })
    user = await user.populate({ path: 'orders.order_items.product' })

    res.status(200).json(user)
  }catch(error){
    logger.info('User not found!', error)
    res.status(404).json({
      message: "User not found!",
      success: false
    })
  }
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
    firstName, 
    lastName,
    phone_number, 
    shipping_address
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

exports.get_admins = async function (req, res, next) {
  if (!req.user) {
    logger.info('token is missing')
    return res.status(401).json({
      error: 'token missing or invalid'
    })
  }

  try {
    const admins = await Admin.find({ role: 'basic' })

    res.status(200).json(admins)
  } catch (error) {
    logger.error('Failed to fetch admins', error)
    next(error)
  }
}