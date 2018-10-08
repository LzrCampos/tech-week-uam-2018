const mongoose = require('mongoose')
const Recipe = mongoose.model('Recipe')

exports.create = async (data) => {
    let recipe = new Recipe(data)
    await recipe.save()
}

exports.getAll = async () => {
    const res = await Recipe.find({}, 'title description ingredients image user')
    return res
}

exports.getWithUser = async (id) => {
    const res = await Recipe.find({ user: id}, 'title description ingredients image user')
    return res
}