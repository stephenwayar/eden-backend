const User = require("../models/User")
const logger = require('../utils/logger')

exports.get_users = function(req, res, next){
  if (!req.user) {
    logger.info('token is missing')
    return res.status(401).json({
      error: 'token missing or invalid'
    })
  }

  User.find({}).then(users => {
    res.status(200).json(users)
  }).catch(error => next(error))
}

exports.get_user = function(req, res, next){
  if (!req.user) {
    logger.info('token is missing')
    return res.status(401).json({
      error: 'token missing or invalid'
    })
  }

  let ID = req.params.id
  User.findById(ID).then(user => {
    res.status(200).json(user)
  }).catch(() => {
    logger.info('User not found!')
    res.status(404).json({
      message: "User not found!",
      success: false
    })
  })
}

exports.delete_user = function(req, res, next){
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