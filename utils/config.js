require('dotenv').config()

const PORT = process.env.PORT
const USER = process.env.USER
const PASS = process.env.PASS
const HOST = process.env.HOST
const DB_DEV = process.env.DB_DEV
const DB_TEST = process.env.DB_TEST
const DB_PROD = process.env.DB_DEV

module.exports = {
  PORT,
  USER,
  PASS,
  HOST,
  DB_DEV,
  DB_TEST,
  DB_PROD,
}
