require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')

require("./database/config")
const indexRoute = require('./routes/index')
const authRoute = require('./routes/auth')
const usersRoute = require('./routes/users')
const menRoute = require('./routes/men')
const womenRoute = require('./routes/women')
const kidsRoute = require('./routes/kids')
const productsRoute = require('./routes/products')
const ordersRoute = require('./routes/orders')
const mediaRoute = require('./routes/media')
const { unknownEndpoint, errorHandler } = require('./middlewares/error')
const { tokenExtractor } = require('./middlewares/tokenExtractor')
const { userExtractor } = require('./middlewares/userExtractor')

app.use(cors())
app.use(express.json({
  limit: '100mb'
}))
app.use(express.static('build'))
app.use(morgan('tiny'))

app.use(tokenExtractor)

app.use(indexRoute)
app.use(authRoute)
app.use(userExtractor, usersRoute)

app.use(userExtractor, menRoute)
app.use(userExtractor, womenRoute)
app.use(userExtractor, kidsRoute)
app.use(userExtractor, ordersRoute)
app.use(userExtractor, productsRoute)
app.use(userExtractor, mediaRoute)

app.use(unknownEndpoint)
app.use(errorHandler)

module.exports = app