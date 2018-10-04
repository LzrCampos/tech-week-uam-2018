const repository = require('../repositories/user.repository')
const md5 = require('md5')
const config = require('../config')
const auth = require('../auth')

exports.post = async (req, res, next) => {
    try {
        await repository.create({
            name: req.body.name,
            email: req.body.email,
            password: md5(req.body.password, config.secretKey)
        })

        res.status(201).send({
            message: 'Cliente cadastrado com sucesso!'
        })
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        })
    }
}

exports.auth = async (req, res, next) => {
    try{
        const user = await repository.auth({
            email: req.body.email,
            password: md5(req.body.password, config.secretKey)
        })

        if (!user) {
            res.status(404).send({
                message: 'Usuário ou senha inválidos'
            })
            return
        }

        const token = await auth.generateToken({
            id: user._id,
            email: user.email,
            name: user.name
        })

        res.status(200).send({
            token: token,
            data: {
                name: user.name,
                email: user.email
            }
        })
    } catch(e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        })
    }
}