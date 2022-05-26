const express = require('express')
const ProductController = require('../controllers/ProductController')
const Router = express.Router()

// GET route
Router.get('/api/products/:id', ProductController.get_product)

// PUT route
Router.put('/api/products/:id', ProductController.update_product)

// DELETE route
Router.delete('/api/products/:id', ProductController.delete_product)

module.exports = Router