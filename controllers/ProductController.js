const Product = require('../models/Product')
const logger = require('../utils/logger')

// GET controller
exports.get_product = (req, res, next) => {
  let ID = req.params.id
  Product.findById(ID).then(product => {
    res.status(200).json(product)
  }).catch(error => {
    logger.error("Error! Product not found", error)
    res.status(404).json({
      success: false,
      message: "Product not found!"
    })
  })
}

// PUT controller
exports.update_product = (req, res, next) => {
  let ID = req.params.id
  let { img_URL, name, description, price, quantity, tag } = req.body
  Product.findByIdAndUpdate(
    ID,
    { img_URL, name, description, price, quantity, tag },
    { new: true, runValidators: true, context: 'query' }
  ).then(updatedProduct => {
    logger.info('Updated product!')
    res.status(200).json(updatedProduct)
  }).catch(error => {
    logger.error("Error! Failed to update product", error)
    res.status(400).end()
  })
}