const express = require('express')
const MenController = require('../controllers/MenController')
const router = express.Router()

router.get('/api/shop/men', MenController.get_all_men)

router.get('/api/shop/men/:id', MenController.get_single_men)

router.post('/api/shop/men', MenController.post_men)

router.put('/api/shop/men/:id', MenController.update_men)

router.delete('/api/shop/men/:id', MenController.delete_men)

module.exports = router