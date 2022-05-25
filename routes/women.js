const express = require('express')
const WomenController = require('../controllers/WomenController')
const Router = express.Router()

//clothing routes
Router.get('/api/women/clothing', WomenController.get_women_clothing)

Router.get('/api/women/clothing/:id', WomenController.get_women_clothing_item)

Router.put('/api/women/clothing/:id', WomenController.update_women_clothing_item)

Router.post('/api/women/clothing', WomenController.post_women_clothing_item)

Router.delete('/api/women/clothing/:id', WomenController.delete_women_clothing_item)

//shoes routes
Router.get('/api/women/shoes', WomenController.get_women_shoes)

Router.get('/api/women/shoes/:id', WomenController.get_women_shoe_item)

Router.put('/api/women/shoes/:id', WomenController.update_women_shoe_item)

Router.post('/api/women/shoes', WomenController.post_women_shoe_item)

Router.delete('/api/women/shoes/:id', WomenController.delete_women_shoe_item)

//accessories routes
Router.get('/api/women/accessories', WomenController.get_women_accessories)

Router.get('/api/women/accessories/:id', WomenController.get_women_accessory_item)

Router.put('/api/women/accessories/:id', WomenController.update_women_accessory_item)

Router.post('/api/women/accessories', WomenController.post_women_accessory_item)

Router.delete('/api/women/accessories/:id', WomenController.delete_women_accessory_item)

//underwears routes
Router.get('/api/women/underwears', WomenController.get_women_underwears)

Router.get('/api/women/underwears/:id', WomenController.get_women_underwear)

Router.put('/api/women/underwears/:id', WomenController.update_women_underwear_item)

Router.post('/api/women/underwears', WomenController.post_women_underwear_item)

Router.delete('/api/women/underwears/:id', WomenController.delete_women_underwear)

module.exports = Router