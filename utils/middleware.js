const logger = require('./logger')

const unknownEndpoint = async (req, res) =>
  await res.status(404).send({ error: 'Unknown Endpoint' })

const errorHandler = async (error, req, res, next) => {
  await logger.error(error.message)
  await res.json({ error: error.message })

  next()
}

module.exports = {
  unknownEndpoint,
  errorHandler,
}
