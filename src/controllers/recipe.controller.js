const repository = require('../repositories/recipe.repository')
const auth = require('../auth')

exports.get = async (req, res, next) => {
    try {
        let data = await repository.getAll()
        res.status(200).send(data)
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        })
    }
}

exports.getWithUser = async (req, res, next) => {
    try {
        const token = req.headers['x-access-token']
        const tokenData = await auth.decodeToken(token)

        let data = await repository.getWithUser(tokenData.id)
        
        res.status(200).send(data)
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        })
    }

}

exports.post = async (req, res, next) => {
    try {
        const token = req.body.token || req.query.token || req.headers['x-access-token']
        const data = await auth.decodeToken(token)

        await repository.create({
            title: req.body.title,
            description: req.body.description,
            ingredients: req.body.ingredients,
            image: '../local',
            user: data.id
        })
        res.status(201).send({
            message: 'Receita cadastrada com sucesso!'
        })
    } catch (e) {
        console.log(e)
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        })
    }
}