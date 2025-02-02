const app = require('./app')
const http = require('http')
const logger = require('../utils/logger')
require('dotenv').config();

const server = http.createServer(app)

server.listen(process.env.PRODUCT_PORT, () => {
  logger.info(`Product service running on port ${process.env.PRODUCT_PORT}`)
})