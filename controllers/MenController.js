const Product = require('../models/Product')
const Tag = require('../models/Tag')
const logger = require('../utils/logger')

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
  const name = 'men_clothe'
  const tag = await Tag.findOne({ name })

  if(tag){
    try{
      const img = await uploadProductImg(images)

      const product = new Product({
        images: img,
        name: body.name,
        description: body.description,
        price: body.price, //object or array object
        quantity: body.quantity, //object or array object
        tag: tag.name
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
  }else{
    const newTag = new Tag({ name })

    try{
      const savedTag = await newTag.save()

      const img = await uploadProductImg(images)

      const product = new Product({
        images: img,
        name: body.name,
        description: body.description,
        price: body.price, //object or array object
        quantity: body.quantity, //object or array object
        tag: savedTag.name
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
  const name = 'men_shoe'
  const tag = await Tag.findOne({ name })

  if(tag){
    try{
      const img = await uploadProductImg(images)

      const product = new Product({
        images: img,
        name: body.name,
        description: body.description,
        price: body.price, //object or array object
        quantity: body.quantity, //object or array object
        tag: tag.name
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
  }else{
    const newTag = new Tag({ name })

    try{
      const savedTag = await newTag.save()

      const img = await uploadProductImg(images)

      const product = new Product({
        images: img,
        name: body.name,
        description: body.description,
        price: body.price, //object or array object
        quantity: body.quantity, //object or array object
        tag: savedTag.name
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
  const name = 'men_accessory'
  const tag = await Tag.findOne({ name })

  if(tag){
    try{
      const img = await uploadProductImg(images)

      const product = new Product({
        images: img,
        name: body.name,
        description: body.description,
        price: body.price, //object or array object
        quantity: body.quantity, //object or array object
        tag: tag.name
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
  }else{
    const newTag = new Tag({ name })

    try{
      const savedTag = await newTag.save()

      const img = await uploadProductImg(images)

      const product = new Product({
        images: img,
        name: body.name,
        description: body.description,
        price: body.price, //object or array object
        quantity: body.quantity, //object or array object
        tag: savedTag.name
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
}

//underwears controllers
exports.get_men_underwears = async (req, res, next) => {
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
  const name = 'men_underwear'
  const tag = await Tag.findOne({ name })

  if(tag){
    try{
      const img = await uploadProductImg(images)

      const product = new Product({
        images: img,
        name: body.name,
        description: body.description,
        price: body.price, //object or array object
        quantity: body.quantity, //object or array object
        tag: tag.name
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
  }else{
    const newTag = new Tag({ name })

    try{
      const savedTag = await newTag.save()

      const img = await uploadProductImg(images)

      const product = new Product({
        images: img,
        name: body.name,
        description: body.description,
        price: body.price, //object or array object
        quantity: body.quantity, //object or array object
        tag: savedTag.name
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
}