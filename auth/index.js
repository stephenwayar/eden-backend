const app = require('./app')
const http = require('http')
const logger = require('../utils/logger')
require('dotenv').config();

const server = http.createServer(app)

server.listen(process.env.AUTH_PORT, () => {
  logger.info(`Auth service running on port ${process.env.AUTH_PORT}`)
})