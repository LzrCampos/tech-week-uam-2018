const express = require('express')
const route = express.Router()
const controller = require('../controllers/recipe.controller')
const auth = require('../auth')

route.post('/', auth.authorize, controller.post)
route.get('/', auth.authorize, controller.get)
route.get('/myrecipes', auth.authorize, controller.getWithUser)

module.exports = route