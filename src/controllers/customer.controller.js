const repository = require('../repositories/customer.repository')

exports.post = async (req, res, next) => {
    try {
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
}

exports.auth = async (req, res, next) => {
    try{
        const customer = await repository.auth({
            email: req.body.email,
            password: req.body.password
        })

        if (!customer) {
            res.status(404).send({
                message: 'Usuário ou senha inválidos'
            })
            return
        }

        res.status(200).send({
            data: {
                name: customer.name,
                email: customer.email
            }
        })
    } catch(e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        })
    }
}