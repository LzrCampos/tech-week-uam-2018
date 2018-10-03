const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');

exports.create = async(data) => {
    let customer = new Customer(data);
    await customer.save();
}

exports.auth = async(data) => {
    const res = await Customer.findOne({
        email: data.email,
        password: data.password
    }, 'name email')
    return res
}