const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()
const router = express.Router()

// Carrega os Models
mongoose.connect('mongodb://localhost:27017/store')

//carrega modulos
const customer = require('./models/customer.model')

//carrega rotas
const customerRoute = require('./routes/customer.route')

app.use(bodyParser.json({
    limit: '5mb'
}));

app.use('/customer', customerRoute)

module.exports = app