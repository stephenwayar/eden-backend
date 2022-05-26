const Product = require('../models/Product')
const logger = require('../utils/logger')

//clothing controllers
exports.get_women_clothes = (req, res, next) => {
  let TAG = 'women_clothe'
  Product.find({ tag: TAG }).then(products => {
    res.status(200).json(products)
  }).catch(error => next(error))
}

exports.add_women_clothe = (req, res, next) => {
  let body = req.body
  let TAG = 'women_clothe'
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
exports.get_women_shoes = (req, res, next) => {
  let TAG = 'women_shoe'
  Product.find({ tag: TAG }).then(products => {
    res.status(200).json(products)
  }).catch(error => next(error))
}

exports.add_women_shoe = (req, res, next) => {
  let body = req.body
  let TAG = 'women_shoe'
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
exports.get_women_accessories = (req, res, next) => {
  let TAG = 'women_accessory'
  Product.find({ tag: TAG }).then(products => {
    res.status(200).json(products)
  }).catch(error => next(error))
}

exports.add_women_accessory = (req, res, next) => {
  let body = req.body
  let TAG = 'women_accessory'
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
exports.get_women_underwears = (req, res, next) => {
  let TAG = 'women_underwear'
  Product.find({ tag: TAG }).then(products => {
    res.status(200).json(products)
  }).catch(error => next(error))
}

exports.add_women_underwear = (req, res, next) => {
  let body = req.body
  let TAG = 'women_underwear'
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