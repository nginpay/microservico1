const express = require('express')

const app = express()

const produtcts = [
    {id: 1, product:'Pendrive', price: 2.99},
    {id: 2, product:'Pendrive', price: 2.99},
    {id: 3, product:'Pendrive', price: 2.99},
    {id: 4, product:'Pendrive', price: 2.99},
    {id: 5, product:'Pendrive', price: 2.99}
]

app.get('/', (req, res, next) => {

    res.status(200).json(produtcts)

}) 

app.get('/info', (req, res, next) => {
    res.send('Im MS1')
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log('ms 1 running')
})