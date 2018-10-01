const repository = require('../repositories/customer.repository')

exports.post = async (req, res, next) => {
    try {
        console.log('----------------------------------------------')
        await repository.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })

        res.status(201).send({
            message: 'Cliente cadastrado com sucesso!'
        })
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        })
    }
};