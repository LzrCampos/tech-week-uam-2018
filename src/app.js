const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const config = require('./config')

const app = express()
const router = express.Router()

// carrega o repositorio
mongoose.connect(config.connectionString, { useNewUrlParser: true })

// carrega modulos
const user = require('./models/user.model')
const recipe = require('./models/recipe.model')

// carrega rotas
const userRoute = require('./routes/user.route')
const recipeRoute = require('./routes/recipe.route')

app.use(bodyParser.json({
    limit: '5mb'
}))

app.use('/user', userRoute)
app.use('/recipe', recipeRoute)

module.exports = app