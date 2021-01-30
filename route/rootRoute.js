const express = require('express')
var faker = require('faker')
const app = express.Router()

let newsContent = []

for (var i = 0; i < 5; i++) {
    newsContent.push({
        index: i,
        title: faker.random.words(),
        news: faker.lorem.paragraphs(),
        image: faker.random.image()
    })
}

let counter = 0

app.get('/', (req, res) => {
    counter++
    res.render('index', {
        counter: counter,
        newsContent: newsContent
    })
})

app.get('/news/:id', (req, res) => {
    res.render('news', {
        newsContent: newsContent[req.params.id]
    })
})

app.get('/:path', (req, res) => {
    res.render(req.params.path, {
        counter: counter,
        newsContent: newsContent
    }, (err, html) => {
        if (err) {
            res.render('404')
        } else {
            res.send(html)
        }
    })
})



module.exports = app