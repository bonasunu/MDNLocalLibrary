const { Users } = require('../db/models')

module.exports = {
  users: async (req, res) => {
    const users = await Users.findAll()
    res.json(users)
  },
}
