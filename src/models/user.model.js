const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.set('useCreateIndex', true)

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        index: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('User', schema)