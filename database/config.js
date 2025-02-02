const mongoose = require('mongoose')
const logger = require('../utils/logger')
require('dotenv').config();

mongoose.Promise = global.Promise;
mongoose.set("strictQuery", true);

logger.info("Connecting to mongoDB...")

mongoose.connect(process.env.MONGODB_URI).then(() => {
  logger.info("Successfully connected to MongoDB!")
}).catch(err => {
  logger.error("Failed to connect to MongoDB: ", err.message)
})