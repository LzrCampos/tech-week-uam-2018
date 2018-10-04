const express = require('express')
const route = express.Router()
const controller = require('../controllers/recipe.controller')

route.post('/', controller.post)
route.get('/', controller.get)

module.exports = route