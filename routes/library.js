const router = require('express').Router()

router.get('/', async (req, res) => {
  res.json({ info: 'Homepage' })
})

module.exports = router
