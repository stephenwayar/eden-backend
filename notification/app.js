require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')

app.use(cors())
app.use(express.json({
  limit: '100mb'
}))
app.use(express.static('build'))
app.use(morgan('tiny'))

module.exports = app