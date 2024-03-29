const express = require('express')
const AuthController = require('../controllers/AuthController')
const Router = express.Router()

//User routes
Router.post('/api/auth/login/user', AuthController.post_login_user)

Router.post('/api/auth/register/user', AuthController.post_register_user)

Router.post('/api/auth/forgot_password/user', AuthController.post_forgot_password_user)

Router.post('/api/auth/reset_password/user', AuthController.post_reset_password_user)

Router.post('/api/auth/change_password/user', AuthController.post_change_password_user)

Router.post('/api/auth/verify_otp/user', AuthController.verify_user_otp)

Router.post('/api/auth/verify_user_account', AuthController.verify_user_account)

Router.post('/api/auth/request_verification/:email', AuthController.request_verification)

Router.get('/account/verification/:email', AuthController.get_verification_page)

Router.post('/api/auth/with_google', AuthController.auth_with_google)

//Admin routes
Router.post('/api/auth/login/admin', AuthController.post_login_admin)

Router.post('/api/auth/change_password/admin', AuthController.post_change_password_admin)

Router.post('/api/auth/register/admin', AuthController.post_register_admin)

Router.post('/api/auth/forgot_password/admin', AuthController.post_forgot_password_admin)

Router.post('/api/auth/reset_password/admin', AuthController.post_reset_password_admin)

Router.post('/api/auth/verify_otp/admin', AuthController.verify_admin_otp)

module.exports = Router;