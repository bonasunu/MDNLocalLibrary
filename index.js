const http = require('http')
const app = require('./app')
const config = require('./utils/config')
const logger = require('./utils/logger')

const server = http.createServer(app)
const port = config.PORT || 5000

server.listen(port, () => logger.info(`App listen on port ${port}`))
