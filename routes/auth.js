const express = require('express')
const AuthController = require('../controllers/AuthController')
const router = express.Router()

router.post('/api/login', AuthController.post_login)

router.post('/api/register', AuthController.post_register)

router.post('/api/forgot_password', AuthController.post_forgot_password)

router.post('/api/reset_password', AuthController.post_reset_password)

module.exports = router;