const express = require('express')
var faker = require('faker')
const app = express.Router()

var randomNewsTitle = [] //array yang berisi judul-judul berita 
var randomNews = [] //array yang berisi paragraf-paragraf berita
var randomImages = [] //berisi link gambar-gambar kucing

for (var i = 0; i < 20; i++) {
    randomNewsTitle[i] = faker.lorem.sentence()
}

for (var i = 0; i < 20; i++) {
    randomNews[i] = faker.lorem.paragraphs()
}

for (var i = 0; i < 20; i++) {
    randomImages[i] = faker.image.cats()
}

let counter = 1

app.get('/', (req, res) => {
    counter++
    res.render('index', {
        counter: counter,
        titles: randomNewsTitle,
        images: randomImages
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
        titles: randomNewsTitle,
        images: randomImages,
        news: randomNews
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