const mongoose = require('mongoose')
const logger = require('../utils/logger')
const url = process.env.MONGODB_URI

mongoose.set('strictQuery', false); // Add this line to disable the strictQuery option

logger.info("Connecting to mongoDB...")

mongoose.connect(url).then(() => {
  logger.info("Successfully connected to MongoDB!")
}).catch(err => {
  logger.error("Failed to connect to MongoDB: ", err.message)
})