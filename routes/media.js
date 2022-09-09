const express = require('express')
const MediaController = require('../controllers/MediaController')
const Router = express.Router()

Router.post('/api/upload/avatar', MediaController.upload_avatar)

Router.post('/api/delete/avatar', MediaController.delete_avatar)

module.exports = Router