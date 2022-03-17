const express = require('express')
const WomenController = require('../controllers/WomenController')
const router = express.Router()

router.get('/api/shop/women', WomenController.get_all_women)

router.get('/api/shop/women/:id', WomenController.get_single_women)

router.post('/api/shop/women', WomenController.post_women)

router.put('/api/shop/women/:id', WomenController.update_women)

router.delete('/api/shop/women/:id', WomenController.delete_women)

module.exports = router