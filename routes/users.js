const express = require('express')
const UserController = require('../controllers/UserController')
const Router = express.Router()

Router.get('/api/users', UserController.get_users)

Router.get('/api/users/:id', UserController.get_user)

Router.put('/api/users/:id', UserController.update_user_details)

Router.delete('/api/users/:id', UserController.delete_user)

module.exports = Router