const http = require('http')
const app = require('./app')
const config = require('./utils/config')

const server = http.createServer(app)
const port = config.PORT || 5000

server.listen(port, () => console.log(`App listen on port ${port}`))
