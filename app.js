var express = require('express')
var ejs = require('ejs')
var bodyParser = require('body-parser')
var app = express()

app.use(bodyParser.urlencoded({ extended: true }))

// app.get('/', (req, res)=>{
//     res.render('index.ejs')
// })

// app.post('/save_gender', (req, res)=>{
//     res.send(req.body.gender)
// })

app.get('/checkbox', (req, res)=>{
    res.render('index.ejs')
})

app.post('/submit_answer', (req, res)=>{
    res.send(req.body.answer)
})

app.listen(3000, ()=>{
    console.log('your server is now running')
})