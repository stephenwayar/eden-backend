require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')

require("../database/config")

require('../models/Admin')
require('../models/Order')
require('../models/OrderItem')
require('../models/Product')
require('../models/User')

const orderRoute = require('./routes/orders')
const { unknownEndpoint, errorHandler } = require('../middlewares/error')
const { tokenExtractor } = require('../middlewares/tokenExtractor')

app.use(cors())
app.use(express.json({ limit: '100mb' }))
app.use(express.static('build'))
app.use(morgan('tiny'))

app.use(tokenExtractor)
app.use(orderRoute)

app.use(unknownEndpoint)
app.use(errorHandler)

module.exports = app