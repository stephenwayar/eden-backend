require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')

require("../database/config")

require('../models/Order')
require('../models/Product')
require('../models/User')

const productRoute = require('./routes/products')
const kidRoute = require('./routes/kids')
const menRoute = require('./routes/men')
const womenRoute = require('./routes/women')
const { unknownEndpoint, errorHandler } = require('../middlewares/error')
const { tokenExtractor } = require('../middlewares/tokenExtractor')

app.use(cors())
app.use(express.json({
  limit: '100mb'
}))
app.use(express.static('build'))
app.use(morgan('tiny'))

app.use(tokenExtractor)

app.use(productRoute)
app.use(kidRoute)
app.use(menRoute)
app.use(womenRoute)

app.use(unknownEndpoint)
app.use(errorHandler)

module.exports = app