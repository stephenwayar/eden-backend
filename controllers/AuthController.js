const bcrypt = require("bcryptjs")
const User = require('../models/User')
const Admin = require('../models/Admin')
const logger = require('../utils/logger')
const jwt = require('jsonwebtoken')
const nodemailer = require("nodemailer")

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EDEN_SUPPORT_EMAIL,
    pass: process.env.MAIL_PASSWORD,
  },
})

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
    { expiresIn: '1h' }
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

exports.post_forgot_password_user = async (req, res) => {
  const user = await User.findOne({ email: req.body.email })

  if(!user){
    return res.status(404).json({
      success: false,
      message: 'Sorry, user does not exist in our records'
    })
  }

  try{
    const token = Math.floor(1000 + Math.random() * 9000)

    user.otpToken = token
    user.otpExpires = Date.now() + 3600000

    const savedUser = await user.save()

    await transporter.sendMail({
      from: '"Eden Support" ',
      to: savedUser.email,
      subject: "Eden Support: OTP Reset Code",
      html: `
        <h3>Hello ${savedUser.firstName},</h3> <p>We've recieved a request to reset the password for the Eden account associated with ${savedUser.email}. No changes have been made to your account yet.
        You can complete the process with the following code:</p <h3><b>[ ${token} ]</b></h3> <p>If you did not make this request, please ignore this email and your password will remain unchanged. We are here to help you at any step of the way.</p>
        <p>-The Eden team</p>
      `
    });

    res.status(200).end()
  }catch(exception){
    res.status(400).json({
      success: false,
      message: 'Failed to process request. Try again'
    })
  }
}

exports.post_reset_password_user = async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email })

  if(!user){
    return res.status(404).json({
      success: false,
      message: 'Sorry, user does not exist in our records'
    })
  }

  bcrypt.genSalt(10, (_err, salt) => {
    bcrypt.hash(req.body.password, salt, async (err, hash) => {
      if (err) throw err

      user.password = hash
      user.otpToken = null
      user.otpExpires = null

      try{
        await user.save()

        res.status(200).end()
      } catch(exception) {
        res.status(400).json({
          success: false,
          message: 'Failed to reset password. Try again'
        })
      }
    })
  })
}

exports.verify_user_otp = async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email })

  if(!user){
    return res.status(404).json({
      success: false,
      message: 'Snap! there was a problem somewhere'
    })
  }

  if(user.otpToken.toString() === req.body.code && user.otpExpires > Date.now()){
    return res.status(200).end()
  }

  res.status(400).json({
    success: false,
    message: 'OTP is invalid or has expired'
  })
}

//Admin controllers
exports.post_login_admin = async (req, res) => {
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
    password
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

exports.verify_admin_otp = async (req, res, next) => {

}