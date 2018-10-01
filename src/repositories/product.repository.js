const mongoose = require('mongoose')
const Product = mongoose.model('Product')

exports.create = async(data) => {
    let product = new Product(data)
    await product.save()
}

exports.getAll = async() => {
    const res = await Product.find({
        active: true
    }//, 'title price slug')
    )
    return res
}