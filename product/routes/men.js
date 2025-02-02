const express = require('express')
const MenController = require('../controllers/MenController')
const Router = express.Router()

//clothing routes
Router.get('/api/men/clothing', MenController.get_men_clothing)

Router.post('/api/men/clothing', MenController.add_men_clothe)

//shoes routes
Router.get('/api/men/shoes', MenController.get_men_shoes)

Router.post('/api/men/shoes', MenController.add_men_shoe)

//accessories routes
Router.get('/api/men/accessories', MenController.get_men_accessories)

Router.post('/api/men/accessories', MenController.add_men_accessory)

//underwears routes
Router.get('/api/men/underwears', MenController.get_men_underwears)

Router.post('/api/men/underwears', MenController.add_men_underwear)

module.exports = Router