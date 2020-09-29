'use strict'
const { Model } = require('sequelize')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('../../utils/config')

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {}
    static #encrypt = (password) => bcrypt.hashSync(password, 10)
    static register = ({ username, password, role }) => {
      const passwordHash = this.#encrypt(password)

      return this.create({
        username,
        password: passwordHash,
        role,
      })
    }

    checkPassword = (password) => bcrypt.compareSync(password, this.password)

    generateToken = () => {
      const payload = {
        id: this.id,
        username: this.username,
      }

      const secret = config.SECRET
      const token = jwt.sign(payload, secret)

      return token
    }

    static authenticate = async ({ username, password }) => {
      try {
        const user = await this.findOne({ where: { username } })
        if (!user) Promise.reject('User does not exist.')
        const passwordCorrect = await user.checkPassword(password)
        if (!passwordCorrect) Promise.reject('Wrong password!')

        return Promise.resolve(user)
      } catch (error) {
        return Promise.reject(error)
      }
    }
  }
  Users.init(
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Users',
      tableName: 'users',
    }
  )
  return Users
}
