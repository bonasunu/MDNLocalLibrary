const config = require('../utils/config')

module.exports = {
  development: {
    username: config.USER,
    password: config.PASS,
    database: config.DB_DEV,
    host: config.HOST,
    dialect: 'postgres',
  },
  test: {
    username: config.USER,
    password: config.PASS,
    database: config.DB_TEST,
    host: config.HOST,
    dialect: 'postgres',
  },
  production: {
    username: config.USER,
    password: config.PASS,
    database: config.DB_PROD,
    host: config.HOST,
    dialect: 'postgres',
  },
}
