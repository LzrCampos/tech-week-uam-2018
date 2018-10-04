const jwt = require('jsonwebtoken')
const config = require('./config')

exports.generateToken = async (data) => {
    return jwt.sign(data, config.secretKey, { expiresIn: '1d' })
}

exports.decodeToken = async (token) => {
    var data = await jwt.verify(token, config.secretKey)
    return data
}

exports.authorize = function (req, res, next) {
    var token = req.body.token || req.query.token || req.headers['x-access-token']

    if (!token) {
        res.status(401).json({
            message: 'Acesso Restrito'
        })
    } else {
        jwt.verify(token, config.secretKey, function (error, decoded) {
            if (error) {
                res.status(401).json({
                    message: 'Token Inválido'
                })
            } else {
                next()
            }
        })
    }
}