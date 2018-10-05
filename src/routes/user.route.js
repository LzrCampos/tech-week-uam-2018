const express = require('express')
const route = express.Router()
const controller = require('../controllers/user.controller')
const auth = require('../auth')

route.post('/', controller.post)
route.post('/auth', controller.auth)
route.post('/refresh', auth.authorize, controller.refreshToken)

module.exports = route