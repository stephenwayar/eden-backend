const Product = require('../models/Product')
const logger = require('../utils/logger')

//clothing controllers
exports.get_men_clothing = (req, res, next) => {
  let TAG = 'men_clothe'
  Product.find({ tag: TAG }).then(products => {
    res.status(200).json(products)
  }).catch(error => next(error))
}

exports.add_men_clothe = (req, res, next) => {
  let body = req.body
  let TAG = 'men_clothe'
  let product = new Product({
    img_URL: body.img_URL,
    name: body.name,
    description: body.description,
    price: body.price,
    quantity: body.quantity,
    tag: TAG
  })
  product.save().then(product => {
    logger.info("Clothe saved!")
    res.status(200).json(product)
  }).catch(error => {
    logger.error('Error! Clothe not saved', error)
    res.status(400).json({
      success: false,
      message: "Error! Clothe not saved"
    })
  })
}

// shoe controllers
exports.get_men_shoes = (req, res, next) => {
  let TAG = 'men_shoe'
  Product.find({ tag: TAG }).then(products => {
    res.status(200).json(products)
  }).catch(error => next(error))
}

exports.add_men_shoe = (req, res, next) => {
  let body = req.body
  let TAG = 'men_shoe'
  let product = new Product({
    img_URL: body.img_URL,
    name: body.name,
    description: body.description,
    price: body.price,
    quantity: body.quantity,
    tag: TAG
  })
  product.save().then(product => {
    logger.info('Shoe saved!')
    res.status(200).json(product)
  }).catch(error => {
    logger.error('Error! Shoe not saved', error)
    res.status(400).json({
      success: false,
      message: "Error! Shoe not saved"
    })
  })
}

//accessories controllers
exports.get_men_accessories = (req, res, next) => {
  let TAG = 'men_accessory'
  Product.find({ tag: TAG }).then(products => {
    res.status(200).json(products)
  }).catch(error => next(error))
}

exports.add_men_accessory = (req, res, next) => {
  let body = req.body
  let TAG = 'men_accessory'
  let product = new Product({
    img_URL: body.img_URL,
    name: body.name,
    description: body.description,
    price: body.price,
    quantity: body.quantity,
    tag: TAG
  })
  product.save().then(product => {
    logger.info('Accessory saved!')
    res.status(200).json(product)
  }).catch(error => {
    logger.error('Error! Accessory not saved', error)
    res.status(400).json({
      success: false,
      message: "Error! Accessory not saved"
    })
  })
}

//underwears controllers
exports.get_men_underwears = (req, res, next) => {
  let TAG = 'men_underwear'
  Product.find({ tag: TAG }).then(products => {
    res.status(200).json(products)
  }).catch(error => next(error))
}

exports.add_men_underwear = (req, res, next) => {
  let body = req.body
  let TAG = 'men_underwear'
  let product = new Product({
    img_URL: body.img_URL,
    name: body.name,
    description: body.description,
    price: body.price,
    quantity: body.quantity,
    tag: TAG
  })
  product.save().then(product => {
    logger.info('Underwear saved!')
    res.status(200).json(product)
  }).catch(error => {
    logger.error('Error! Underwear not saved', error)
    res.status(400).json({
      success: false,
      message: "Error! Underwear not saved"
    })
  })
}