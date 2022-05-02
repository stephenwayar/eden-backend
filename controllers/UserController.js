const User = require("../models/User")

exports.get_users = function(req, res, next){
  User.find({}).then(users => {
    res.status(200).json(users)
  })
}

exports.get_user = function(req, res, next){
  var ID = req.params.id
  User.findById(ID).then(user => {
    res.status(200).json(user)
  }).catch(() => {
    res.status(404).json({
      message: "User not found!",
      success: false
    })
  })
}

exports.delete_user = function(req, res, next){
  var ID = req.params.id
  User.findByIdAndDelete(ID).then(() => {
    res.status(200).json({
      message: "Successfully deleted user",
      success: true
    })
  }).catch(() => {
    res.status(400).json({
      message: "User does not exist",
      success: false
    })
  })
}