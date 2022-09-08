const express = require('express')

const app = express()
app.use(express.json())

let imoveisArray = []

app.get('/imoveis', (req, res) => {
    res.status(200).send(imoveisArray)
})

app.post('/imoveis', (req, res) => {
    imoveisArray.push(req.body)
    res.status(201).send(imoveisArray)
})

app.delete('/imoveis/:id', (req, res) => {
    const id = req.params.id
    if (id) {
        imoveisArray = imoveisArray.filter(imovel => imovel.id != id)
        res.status(200).send(imoveisArray)
    } else {
        res.status(400).send('Id não informado')
    }
})

app.put('/imoveis/:id', (req, res) => {
    const id = req.params.id
    if (id) {
        const index = imoveisArray.findIndex(imovel => imovel.id == id)
        imoveisArray[index] = req.body
        res.status(200).send(imoveisArray[index])
    } else {
        res.status(400).send('Id não informado')
    }
})

app.listen(3001, () => {
    console.log('Servidor rodando na porta 3001')
})