const express = require('express')
const WomenController = require('../controllers/WomenController')
const Router = express.Router()

//clothing routes
Router.get('/api/women/clothing', WomenController.get_women_clothes)

Router.post('/api/women/clothing', WomenController.add_women_clothe)

//shoes routes
Router.get('/api/women/shoes', WomenController.get_women_shoes)

Router.post('/api/women/shoes', WomenController.add_women_shoe)

//accessories routes
Router.get('/api/women/accessories', WomenController.get_women_accessories)

Router.post('/api/women/accessories', WomenController.add_women_accessory)

//underwears routes
Router.get('/api/women/underwears', WomenController.get_women_underwears)

Router.post('/api/women/underwears', WomenController.add_women_underwear)

module.exports = Router