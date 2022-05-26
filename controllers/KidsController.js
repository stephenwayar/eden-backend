const Product = require('../models/Product')
const logger = require('../utils/logger')

// toys controllers
exports.get_kids_toys = (req, res, next) => {
  let TAG = 'kids_toys'
  Product.find({ tag: TAG }).then(products => {
    res.status(200).json(products)
  }).catch(error => next(error))
}

exports.add_kids_toys = (req, res, next) => {
  let body = req.body
  let TAG = 'kids_toys'
  let product = new Product({
    img_URL: body.img_URL,
    name: body.name,
    description: body.description,
    price: body.price,
    quantity: body.quantity,
    tag: TAG
  })
  product.save().then(product => {
    logger.info("Kids toy saved!")
    res.status(200).json(product)
  }).catch(error => {
    logger.error('Error! Kids toy not saved', error)
    res.status(400).json({
      success: false,
      message: "Error! Kids toy not saved"
    })
  })
}

// pink (girls) controllers
exports.get_kids_pink = (req, res, next) => {
  let TAG = 'kids_pink'
  Product.find({ tag: TAG }).then(products => {
    res.status(200).json(products)
  }).catch(error => next(error))
}

exports.add_kids_pink = (req, res, next) => {
  let body = req.body
  let TAG = 'kids_pink'
  let product = new Product({
    img_URL: body.img_URL,
    name: body.name,
    description: body.description,
    price: body.price,
    quantity: body.quantity,
    tag: TAG
  })
  product.save().then(product => {
    logger.info("Kids girl wear saved!")
    res.status(200).json(product)
  }).catch(error => {
    logger.error('Error! girl wear not saved', error)
    res.status(400).json({
      success: false,
      message: "Error! girl wear not saved"
    })
  })
}

// blue (boys) controllers
exports.get_kids_blue = (req, res, next) => {
  let TAG = 'kids_blue'
  Product.find({ tag: TAG }).then(products => {
    res.status(200).json(products)
  }).catch(error => next(error))
}

exports.add_kids_blue = (req, res, next) => {
  let body = req.body
  let TAG = 'kids_blue'
  let product = new Product({
    img_URL: body.img_URL,
    name: body.name,
    description: body.description,
    price: body.price,
    quantity: body.quantity,
    tag: TAG
  })
  product.save().then(product => {
    logger.info("Kids boy wear saved!")
    res.status(200).json(product)
  }).catch(error => {
    logger.error('Error! boy wear not saved', error)
    res.status(400).json({
      success: false,
      message: "Error! boy wear not saved"
    })
  })
}