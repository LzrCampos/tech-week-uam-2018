const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    ingredients: [{
        quantity: {
            type: Number,
            required: true,
            default: 1
        },
        ingredient: {
            type: String,
            required: true
        }
    }],
    image: {
        type: String,
        required: true,
        trim: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Recipe', schema)