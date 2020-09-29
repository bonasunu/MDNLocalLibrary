const { Users } = require('../db/models')

const format = (user) => {
  const { id, username } = user
  return {
    id,
    username,
    accessToken: user.generateToken(),
  }
}

module.exports = {
  login: async (req, res) => {
    const user = await Users.authenticate(req.body)
    res.json(format(user))
  },
  register: async (req, res) => {
    await Users.register(req.body)
    res.redirect('/login')
  },
  whoami: async (req, res) => {
    const currentUser = await req.user
    res.json(currentUser)
  },
}
