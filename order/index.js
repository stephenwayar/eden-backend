const app = require('./app')
const http = require('http')
const logger = require('../utils/logger')
require('dotenv').config();

const server = http.createServer(app)

server.listen(process.env.ORDER_PORT, () => {
  logger.info(`Order service running on port ${process.env.ORDER_PORT}`)
})