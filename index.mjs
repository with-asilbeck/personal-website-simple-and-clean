import express from 'express'
import path from 'path'

const app = express()

const __dirname = path.resolve()

app.use(express.static("public"))

//main page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/main.html')
})
//about page
app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/public/about.html')
})
//portfolio page
app.get('/portfolio', (req, res) => {
    res.sendFile(__dirname + '/public/portfolio.html')
})
//contact page
app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/public/contact.html')
})

//listening
app.listen(8080, (req, res) => {
    console.log("Listening on port 8080")
})