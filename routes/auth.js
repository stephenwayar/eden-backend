const express = require('express')
const AuthController = require('../controllers/AuthController')
const router = express.Router()

//User routes

router.post('/api/user/login', AuthController.post_user_login)

router.post('/api/register', AuthController.post_register)

router.post('/api/user/forgot_password', AuthController.post_user_forgot_password)

router.post('/api/user/reset_password', AuthController.post_user_reset_password)

//Admin routes

router.post('/api/admin/login', AuthController.post_admin_login)

router.post('/api/admin/forgot_password', AuthController.post_admin_forgot_password)

router.post('/api/admin/reset_password', AuthController.post_admin_reset_password)

module.exports = router;