const express = require('express')
var faker = require('faker')
const app = express()
const port = 3000

app.use(express.static('views'))
app.set('view engine', 'ejs')

const rootRoute = require('./route/rootRoute')
app.use(rootRoute)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})