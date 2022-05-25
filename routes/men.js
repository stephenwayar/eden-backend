const express = require('express')
const MenController = require('../controllers/MenController')
const Router = express.Router()

//clothing routes
Router.get('/api/men/clothing', MenController.get_men_clothing)

Router.get('/api/men/clothing/:id', MenController.get_men_clothing_item)

Router.put('/api/men/clothing/:id', MenController.update_men_clothing_item)

Router.post('/api/men/clothing', MenController.post_men_clothing_item)

Router.delete('/api/men/clothing/:id', MenController.delete_men_clothing_item)

//shoes routes
Router.get('/api/men/shoes', MenController.get_men_shoes)

Router.get('/api/men/shoes/:id', MenController.get_men_shoe_item)

Router.put('/api/men/shoes/:id', MenController.update_men_shoe_item)

Router.post('/api/men/shoes', MenController.post_men_shoe_item)

Router.delete('/api/men/shoes/:id', MenController.delete_men_shoe_item)

//accessories routes
Router.get('/api/men/accessories', MenController.get_men_accessories)

Router.get('/api/men/accessories/:id', MenController.get_men_accessory_item)

Router.put('/api/men/accessories/:id', MenController.update_men_accessory_item)

Router.post('/api/men/accessories', MenController.post_men_accessory_item)

Router.delete('/api/men/accessories/:id', MenController.delete_men_accessory_item)

//underwears routes
Router.get('/api/men/underwears', MenController.get_men_underwears)

Router.get('/api/men/underwears/:id', MenController.get_men_underwear)

Router.put('/api/men/underwears/:id', MenController.update_men_underwear_item)

Router.post('/api/men/underwears', MenController.post_men_underwear_item)

Router.delete('/api/men/underwears/:id', MenController.delete_men_underwear)

module.exports = Router