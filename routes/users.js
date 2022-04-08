const express = require('express')
const UserController = require('../controllers/UserController')
const router = express.Router()

router.get('/api/users', UserController.get_users)

router.get('/api/users/:id', UserController.get_user)

router.delete('/api/users/:id', UserController.delete_user)

module.exports = router 