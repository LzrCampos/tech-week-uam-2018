const repository = require('../repositories/product.repository')

exports.get = async (req, res, next) => {
    try {
        var data = await repository.getAll()
        res.status(200).send(data)
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        })
    }
}

exports.post = async (req, res, next) => {
    try {
        await repository.create({
            title: req.body.title,
            slug: req.body.slug,
            description: req.body.description,
            price: req.body.price,
            active: true,
            tag: req.body.tag,
            image: 'local'
        })
        res.status(201).send({
            message: 'Produto cadastrado com sucesso!'
        })
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        })
    }
}