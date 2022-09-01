const express = require('express')
const AuthController = require('../controllers/AuthController')
const Router = express.Router()

//User routes
Router.post('/api/auth/login/user', AuthController.post_login_user)

Router.post('/api/auth/register/user', AuthController.post_register_user)

Router.post('/api/auth/forgot_password/user', AuthController.post_forgot_password_user)

Router.post('/api/auth/reset_password/user', AuthController.post_reset_password_user)

Router.post('/api/auth/validate_otp/user', AuthController.validate_user_otp)

//Admin routes
Router.post('/api/auth/login/admin', AuthController.post_login_admin)

Router.post('/api/auth/register/admin', AuthController.post_register_admin)

Router.post('/api/auth/forgot_password/admin', AuthController.post_forgot_password_admin)

Router.post('/api/auth/reset_password/admin', AuthController.post_reset_password_admin)

Router.post('/api/auth/validate_otp/admin', AuthController.validate_admin_otp)

module.exports = Router;