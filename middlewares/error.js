const logger = require('../utils/logger')

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

const errorHandler = (error, request, response, next) => {
  if(error.name === 'CastError'){
    response.status(400).send({
      error: 'malformatted id'
    })
  }else if(error.name === 'ValidationError'){
    return response.status(400).json({
      error: error.message
    })
  }else if (error.name === 'JsonWebTokenError') {
    return response.status(401).json({
      error: 'invalid token'
    })
  }else if(error.name === 'UnhandledPromiseRejectionWarning'){
    return response.status(500).json({
      error: 'Snap! there was a problem somewhere'
    })
  }

  logger.error(error.message)

  next(error)
}

module.exports = { unknownEndpoint, errorHandler }