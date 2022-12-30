const Product = require('../models/Product')
const logger = require('../utils/logger')
const uploadProductImg = require('../helpers/uploadProductImg')

// toys controllers
exports.get_kids_toys = async (_req, res, next) => {
  const tag = 'kids_toys'

  try{
    const products = await Product.find({ tag })

    res.status(200).json(products)
  }catch(error){
    next(error)
  }
}

exports.add_kids_toys = async (req, res) => {
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
  const tag = 'kids_toys'

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
    logger.error('Failed to add kids_toys', error)

    res.status(400).json({
      success: false,
      message: 'There was an error adding product'
    })
  }
}

// pink (girls) controllers
exports.get_kids_pink = async (_req, res, next) => {
  const tag = 'kids_pink'

  try{
    const products = await Product.find({ tag })

    res.status(200).json(products)
  }catch(error){
    next(error)
  }
}

exports.add_kids_pink = async (req, res) => {
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
  const name = 'kids_pink'
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
      logger.error('Failed to add kids_pink', error)

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
      logger.error('Failed to add kids_pink', error)
      res.status(400).json({
        success: false,
        message: 'There was an error adding product'
      })
    }
  }
}

// blue (boys) controllers
exports.get_kids_blue = async (_req, res, next) => {
  const tag = 'kids_blue'

  try{
    const products = await Product.find({ tag })

    res.status(200).json(products)
  }catch(error){
    next(error)
  }
}

exports.add_kids_blue = async (req, res) => {
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
  const name = 'kids_blue'
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
      logger.error('Failed to add kids_blue', error)

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
      logger.error('Failed to add kids_blue', error)
      res.status(400).json({
        success: false,
        message: 'There was an error adding product'
      })
    }
  }
}