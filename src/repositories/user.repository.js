const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.create = async (data) => {
    let user = new User(data)
    await user.save()
}

exports.auth = async (data) => {
    const res = await User.findOne({
        email: data.email,
        password: data.password
    })
    return res
}

exports.getById = async (id) => {
    const res = await User.findById(id)
    return res
}