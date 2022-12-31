const Product = require('../models/Product')
const logger = require('../utils/logger')
const deleteImage = require('../helpers/deleteImage')

// GET controller
exports.get_products = (req, res, next) => {
  Product.find({}).then(products => {
    res.status(200).json(products)
  }).catch(() => {
    res.status(404).json({
      success: false,
      message: "Products not found!"
    })
  })
}

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

  let ID = req.params.id
  let { name, description, price } = req.body
  Product.findByIdAndUpdate(
    ID,
    { name, description, price },
    { new: true, runValidators: true, context: 'query' }
  ).then(updatedProduct => {
    logger.info('Updated product!')
    res.status(200).json(updatedProduct)
  }).catch(error => {
    logger.error("Error! Failed to update product", error)
    res.status(400).end()
  })
}

//DELETE controller
exports.delete_product = async (req, res, next) => {
  if (!req.user) {
    logger.info('token is missing')
    return res.status(401).json({
      error: 'token missing or invalid'
    })
  }

  const ID = req.params.id
  const product = await Product.findById(ID)

  if(product){
    const images = product.images

    try{
      images.forEach(async (img) => {
        await deleteImage(img)
      })

      await Product.findByIdAndDelete(ID)

      res.status(200).end()
    }catch(error){
      logger.error('Failed to delete product!', error)
      res.status(400).json({
        success: false,
        message: 'Failed to delete product! Try again'
      })
    }
  }else{
    logger.info('Product does not exist or has been deleted!')
    res.status(400).json({
      success: false,
      message: 'Product does not exist or has been deleted!'
    })
  }
}