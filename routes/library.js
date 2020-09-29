const router = require('express').Router()
const user = require('../controllers/userController')

router.get('/', async (req, res) => {
  await res.json({ info: 'Homepage' })
})

router.post('/register', user.register)

router.get('/login', async (req, res) => {
  await res.json({ login: 'Login Page' })
})

module.exports = router
