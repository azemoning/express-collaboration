const express = require('express')
const app = express.Router()

let counter = 1

app.get('/', (req, res) => {
    counter++
    res.render('index', {
        counter: counter,
    })
})

app.get('/', (req, res) => {
    counter++
    res.render('about', {
        counter: counter,
    })
})

app.get('/', (req, res) => {
    counter++
    res.render('news', {
        counter: counter,
    })
})

app.get('/:path', (req, res) => {
    res.render(req.params.path, {}, (err, html) => {
        if (err) {
            res.render('404')
        } else {
            res.send(html)
        }
    })
})



module.exports = app