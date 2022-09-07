const Product = require('../models/Product')
const logger = require('../utils/logger')

// GET controller
exports.get_product = (req, res, next) => {
  let ID = req.params.id
  Product.findById(ID).then(product => {
    res.status(200).json(product)
  }).catch(() => {
    logger.info("Error! Product not found")
    res.status(404).json({
      success: false,
      message: "Product not found!"
    })
  })
}

// PUT controller
exports.update_product = (req, res, next) => {
  if (!req.user) {
    logger.info('token is missing')
    return res.status(401).json({
      error: 'token missing or invalid'
    })
  }


}

//DELETE controller
exports.delete_product = (req, res, next) => {
  if (!req.user) {
    logger.info('token is missing')
    return res.status(401).json({
      error: 'token missing or invalid'
    })
  }

  let ID = req.params.id
  Product.findByIdAndDelete(ID).then(() => {
    res.status(200).end()
  }).catch(error => {
    logger.error('Product does not exist or has been deleted!', error)
    res.status(400).json({
      success: false,
      message: 'Product does not exist or has been deleted!'
    })
  })
}