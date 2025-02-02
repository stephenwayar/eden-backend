const app = require('./app')
const http = require('http')
const logger = require('../utils/logger')
require('dotenv').config();

const server = http.createServer(app)

server.listen(process.env.NOTIFICATION_PORT, () => {
  logger.info(`Notification service running on port ${process.env.NOTIFICATION_PORT}`)
})