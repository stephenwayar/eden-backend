const express = require('express')
const KidsController = require('../controllers/KidsController')
const Router = express.Router()

//toys routes
Router.get('/api/kids/toys', KidsController.get_kids_toys)

Router.post('/api/kids/toys', KidsController.add_kids_toys)

//pink (girls) routes
Router.get('/api/kids/pink', KidsController.get_kids_pink)

Router.post('/api/kids/pink', KidsController.add_kids_pink)

//blue (boys) routes
Router.get('/api/kids/blue', KidsController.get_kids_blue)

Router.post('/api/kids/blue', KidsController.add_kids_blue)

module.exports = Router