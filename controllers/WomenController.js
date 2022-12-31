const Product = require('../models/Product')
const logger = require('../utils/logger')
const uploadProductImg = require('../helpers/uploadProductImg')

//clothing controllers
exports.get_women_clothes = async (req, res, next) => {
  const tag = 'women_clothe'

  try{
    const products = await Product.find({ tag })

    res.status(200).json(products)
  }catch(error){
    next(error)
  }
}

exports.add_women_clothe = async (req, res, next) => {
  if (!req.user) {
    logger.info('token is missing')
    return res.status(401).json({
      error: 'token missing or invalid'
    })
  }

  const product = await Product.findOne({ name: req.body.name })

  if(product) {
    return res.status(400).json({
      success: false,
      message: `A product with the name '${req.body.name}' already exists`
    })
  }

  const body = req.body
  const images = body.images // array
  const tag = 'women_clothe'

  try{
    const img = await uploadProductImg(images)

    const product = new Product({
      images: img,
      name: body.name,
      description: body.description,
      price: body.price, // array of objects
      tag
    })

    const savedProduct = await product.save()

    res.status(200).json(savedProduct)
  }catch(error){
    logger.error('Failed to add women_clothe', error)

    res.status(400).json({
      success: false,
      message: 'There was an error adding product'
    })
  }
}

// shoe controllers
exports.get_women_shoes = async (req, res, next) => {
  const tag = 'women_shoe'

  try{
    const products = await Product.find({ tag })

    res.status(200).json(products)
  }catch(error){
    next(error)
  }
}

exports.add_women_shoe = async (req, res, next) => {
  if (!req.user) {
    logger.info('token is missing')
    return res.status(401).json({
      error: 'token missing or invalid'
    })
  }

  const product = await Product.findOne({ name: req.body.name })

  if(product) {
    return res.status(400).json({
      success: false,
      message: `A product with the name '${req.body.name}' already exists`
    })
  }

  const body = req.body
  const images = body.images //array
  const tag = 'women_shoe'

  try{
    const img = await uploadProductImg(images)

    const product = new Product({
      images: img,
      name: body.name,
      description: body.description,
      price: body.price, // array of objects
      tag
    })

    const savedProduct = await product.save()

    res.status(200).json(savedProduct)
  }catch(error){
    logger.error('Failed to add women_shoe', error)

    res.status(400).json({
      success: false,
      message: 'There was an error adding product'
    })
  }
}

//accessories controllers
exports.get_women_accessories = async (req, res, next) => {
  const tag = 'women_accessory'

  try{
    const products = await Product.find({ tag })

    res.status(200).json(products)
  }catch(error){
    next(error)
  }
}

exports.add_women_accessory = async (req, res, next) => {
  if (!req.user) {
    logger.info('token is missing')
    return res.status(401).json({
      error: 'token missing or invalid'
    })
  }

  const product = await Product.findOne({ name: req.body.name })

  if(product) {
    return res.status(400).json({
      success: false,
      message: `A product with the name '${req.body.name}' already exists`
    })
  }

  const body = req.body
  const images = body.images //array
  const tag = 'women_accessory'

  try{
    const img = await uploadProductImg(images)

    const product = new Product({
      images: img,
      name: body.name,
      description: body.description,
      price: body.price, // array of objects
      tag
    })

    const savedProduct = await product.save()

    res.status(200).json(savedProduct)
  }catch(error){
    logger.error('Failed to add women_accessory', error)

    res.status(400).json({
      success: false,
      message: 'There was an error adding product'
    })
  }
}

//underwears controllers
exports.get_women_underwears = async (req, res, next) => {
  const tag = 'women_underwear'

  try{
    const products = await Product.find({ tag })

    res.status(200).json(products)
  }catch(error){
    next(error)
  }
}

exports.add_women_underwear = async (req, res, next) => {
  if (!req.user) {
    logger.info('token is missing')
    return res.status(401).json({
      error: 'token missing or invalid'
    })
  }

  const product = await Product.findOne({ name: req.body.name })

  if(product) {
    return res.status(400).json({
      success: false,
      message: `A product with the name '${req.body.name}' already exists`
    })
  }

  const body = req.body
  const images = body.images //array
  const tag = 'women_underwear'

  try{
    const img = await uploadProductImg(images)

    const product = new Product({
      images: img,
      name: body.name,
      description: body.description,
      price: body.price, // array of objects
      tag
    })

    const savedProduct = await product.save()

    res.status(200).json(savedProduct)
  }catch(error){
    logger.error('Failed to add women_underwear', error)

    res.status(400).json({
      success: false,
      message: 'There was an error adding product'
    })
  }
}