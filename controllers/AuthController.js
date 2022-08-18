const bcrypt = require("bcryptjs")
const User = require('../models/User')
const Admin = require('../models/Admin')
const logger = require('../utils/logger')
const jwt = require('jsonwebtoken')

//User controllers
exports.post_login_user = async (req, res, next) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  const passwordIsCorrect = user ? await bcrypt.compare(password, user.password) : false

  if(!(user && passwordIsCorrect)){
    logger.info(user, passwordIsCorrect)
    return res.status(401).json({
      success: false,
      message: "Email or password is incorrect"
    })
  }

  const userForToken = {
    email: user.email,
    id: user._id,
  }

  const token = jwt.sign(
    userForToken,
    process.env.SECRET,
    { expiresIn: 60 * 60 }
  )

  res.status(200).send({
    token,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phone_number: user.phone_number,
    shipping_address: user.shipping_address ? user.shipping_address : null,
    orders: user.orders ? user.orders : null
  })
}

exports.post_register_user = async (req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    password,
    phone_number
  } = req.body

  const user = await User.findOne({ email })

  if(user){
    return res.status(400).json({
      success: false,
      message: "There is a user with this email already"
    })
  }

  const newUser = new User({
    firstName,
    lastName,
    email,
    password,
    phone_number
  })

  bcrypt.genSalt(10, (_err, salt) => {
    bcrypt.hash(newUser.password, salt, async (err, hash) => {
      if (err) throw err

      newUser.password = hash

      try{
        const savedUser = await newUser.save()

        res.status(201).json(savedUser)
      } catch(error) {
        next(error)
      }
    })
  })
}

exports.post_forgot_password_user = async (req, res, next) => {

}

exports.post_reset_password_user = async (req, res, next) => {

}

//Admin controllers
exports.post_login_admin = async (req, res, next) => {
  const { email, password } = req.body

  const admin = await Admin.findOne({ email })

  const passwordIsCorrect = admin ? await bcrypt.compare(password, admin.password) : false

  if(!(admin && passwordIsCorrect)){
    logger.info(admin, passwordIsCorrect)
    return res.status(401).json({
      success: false,
      message: "Email or password is incorrect"
    })
  }

  const adminForToken = {
    email: admin.email,
    id: admin._id,
  }

  const token = jwt.sign(
    adminForToken,
    process.env.SECRET,
    { expiresIn: 60 * 60 }
  )

  res.status(200).send({
    token,
    firstName: admin.firstName,
    lastName: admin.lastName,
    email: admin.email,
    role: admin.role
  })
}

exports.post_register_admin = async (req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    password,
  } = req.body

  const admin = await Admin.findOne({ email })
  const user = await User.findOne({ email })

  if(admin || user){
    return res.status(400).json({
      success: false,
      message: "There is a user with this email already"
    })
  }

  const newAdmin = new Admin({
    firstName,
    lastName,
    email,
    password,
    phone_number
  })

  bcrypt.genSalt(10, (_err, salt) => {
    bcrypt.hash(newAdmin.password, salt, async (err, hash) => {
      if (err) throw err

      newAdmin.password = hash

      try{
        const savedAdmin = await newAdmin.save()

        res.status(201).json(savedAdmin)
      } catch(error) {
        next(error)
      }
    })
  })
}

exports.post_forgot_password_admin = (req, res, next) => {

}

exports.post_reset_password_admin = (req, res, next) => {

}