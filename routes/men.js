const express = require('express')
const MenController = require('../controllers/MenController')
const Router = express.Router()

//clothing routes
Router.get('/api/men/clothing', MenController.get_men_clothing)

Router.post('/api/men/clothing', MenController.post_men_clothing_item)

//shoes routes
Router.get('/api/men/shoes', MenController.get_men_shoes)

Router.post('/api/men/shoes', MenController.post_men_shoe_item)

//accessories routes
Router.get('/api/men/accessories', MenController.get_men_accessories)

Router.post('/api/men/accessories', MenController.post_men_accessory_item)

//underwears routes
Router.get('/api/men/underwears', MenController.get_men_underwears)

Router.post('/api/men/underwears', MenController.post_men_underwear_item)

module.exports = Router