const express = require('express')
const WomenController = require('../controllers/WomenController')
const router = express.Router()

//clothing routes
router.get('/api/women/clothing', WomenController.get_women_clothing)

router.get('/api/women/clothing/:id', WomenController.get_women_clothing_item)

router.put('/api/women/clothing/:id', WomenController.update_women_clothing_item)

router.post('/api/women/clothing', WomenController.post_women_clothing_item)

router.delete('/api/women/clothing/:id', WomenController.delete_women_clothing_item)

//shoes routes
router.get('/api/women/shoes', WomenController.get_women_shoes)

router.get('/api/women/shoes/:id', WomenController.get_women_shoe_item)

router.put('/api/women/shoes/:id', WomenController.update_women_shoe_item)

router.post('/api/women/shoes', WomenController.post_women_shoe_item)

router.delete('/api/women/shoes/:id', WomenController.delete_women_shoe_item)

//accessories routes
router.get('/api/women/accessories', WomenController.get_women_accessories)

router.get('/api/women/accessories/:id', WomenController.get_women_accessory_item)

router.put('/api/women/accessories/:id', WomenController.update_women_accessory_item)

router.post('/api/women/accessories', WomenController.post_women_accessory_item)

router.delete('/api/women/accessories/:id', WomenController.delete_women_accessory_item)

//underwears routes
router.get('/api/women/underwears', WomenController.get_women_underwears)

router.get('/api/women/underwears/:id', WomenController.get_women_underwear)

router.put('/api/women/underwears/:id', WomenController.update_women_underwear_item)

router.post('/api/women/underwears', WomenController.post_women_underwear_item)

router.delete('/api/women/underwears/:id', WomenController.delete_women_underwear)

module.exports = router