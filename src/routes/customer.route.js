const express = require('express')
const route = express.Router()
const controller = require('../controllers/customer.controller')

route.post('/', controller.post)
route.post('/auth', controller.auth)

module.exports = route