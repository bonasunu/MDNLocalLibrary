const express = require('express')
const app = express()
const routes = require('./routes/library')
const middleware = require('./utils/middleware')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.use('/', routes)
app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
