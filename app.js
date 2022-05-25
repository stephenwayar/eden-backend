require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')

const DB = require("./database/mongodb")
const indexRoute = require('./routes/index')
const authRoute = require('./routes/auth')
const usersRoute = require('./routes/users')
const menRoute = require('./routes/men')
const womenRoute = require('./routes/women')
const kidsRoute = require('./routes/kids')
const ordersRoute = require('./routes/orders')
const middleware = require('./middlewares/error')

app.use(cors())
app.use(express.json())
app.use(express.static('build'))
app.use(morgan('tiny'))

app.use('/', indexRoute)
app.use('/', authRoute)
app.use('/', usersRoute)

app.use('/', menRoute)
app.use('/', womenRoute)
app.use('/', kidsRoute)
app.use('/', ordersRoute)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app