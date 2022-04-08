const express = require('express')
const MenController = require('../controllers/MenController')
const router = express.Router()

//clothing routes
router.get('/api/men/clothing', MenController.get_men_clothing)

router.get('/api/men/clothing/:id', MenController.get_men_clothing_item)

router.put('/api/men/clothing/:id', MenController.update_men_clothing_item)

router.post('/api/men/clothing', MenController.post_men_clothing_item)

router.delete('/api/men/clothing/:id', MenController.delete_men_clothing_item)

//shoes routes
router.get('/api/men/shoes', MenController.get_men_shoes)

router.get('/api/men/shoes/:id', MenController.get_men_shoe_item)

router.put('/api/men/shoes/:id', MenController.update_men_shoe_item)

router.post('/api/men/shoes', MenController.post_men_shoe_item)

router.delete('/api/men/shoes/:id', MenController.delete_men_shoe_item)

//accessories routes
router.get('/api/men/accessories', MenController.get_men_accessories)

router.get('/api/men/accessories/:id', MenController.get_men_accessory_item)

router.put('/api/men/accessories/:id', MenController.update_men_accessory_item)

router.post('/api/men/accessories', MenController.post_men_accessory_item)

router.delete('/api/men/accessories/:id', MenController.delete_men_accessory_item)

//underwears routes
router.get('/api/men/underwears', MenController.get_men_underwears)

router.get('/api/men/underwears/:id', MenController.get_men_underwear)

router.put('/api/men/underwears/:id', MenController.update_men_underwear_item)

router.post('/api/men/underwears', MenController.post_men_underwear_item)

router.delete('/api/men/underwears/:id', MenController.delete_men_underwear)

module.exports = router