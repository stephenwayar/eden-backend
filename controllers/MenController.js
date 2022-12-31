const Product = require('../models/Product')
const logger = require('../utils/logger')
const uploadProductImg = require('../helpers/uploadProductImg')

//clothing controllers
exports.get_men_clothing = async (_req, res, next) => {
  const tag = 'men_clothe'

  try{
    const products = await Product.find({ tag })

    res.status(200).json(products)
  }catch(error){
    next(error)
  }
}

exports.add_men_clothe = async (req, res) => {
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
  const tag = 'men_clothe'

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
    logger.error('Failed to add men_clothe', error)

    res.status(400).json({
      success: false,
      message: 'There was an error adding product'
    })
  }
}

// shoe controllers
exports.get_men_shoes = async (req, res, next) => {
  const tag = 'men_shoe'

  try{
    const products = await Product.find({ tag })

    res.status(200).json(products)
  }catch(error){
    next(error)
  }
}

exports.add_men_shoe = async (req, res) => {
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
  const tag = 'men_shoe'

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
    logger.error('Failed to add men_shoe', error)

    res.status(400).json({
      success: false,
      message: 'There was an error adding product'
    })
  }
}

//accessories controllers
exports.get_men_accessories = async (_req, res, next) => {
  const tag = 'men_accessory'

  try{
    const products = await Product.find({ tag })

    res.status(200).json(products)
  }catch(error){
    next(error)
  }
}

exports.add_men_accessory = async (req, res) => {
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
  const tag = 'men_accessory'

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
    logger.error('Failed to add men_accessory', error)

    res.status(400).json({
      success: false,
      message: 'There was an error adding product'
    })
  }
}

//underwears controllers
exports.get_men_underwears = async (_req, res, next) => {
  let tag = 'men_underwear'

  try{
    const products = await Product.find({ tag })

    res.status(200).json(products)
  }catch(error){
    next(error)
  }
}

exports.add_men_underwear = async (req, res) => {
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
  const tag = 'men_underwear'

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
    logger.error('Failed to add men_underwear', error)

    res.status(400).json({
      success: false,
      message: 'There was an error adding product'
    })
  }
}