const router = require('express').Router()
const user = require('../controllers/userController')

router.get('/', async (req, res) => {
  await res.json({ info: 'Homepage' })
})

router.get('/register', async (req, res) => {
  await res.render('register')
})
router.post('/register', user.register)

router.get('/login', async (req, res) => {
  await res.render('login')
})

router.post('/login', user.login)

module.exports = router
