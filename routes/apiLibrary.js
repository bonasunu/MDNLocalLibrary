const router = require('express').Router()
const api = require('../controllers/apiController')

router.get('/users', api.users)

module.exports = router
