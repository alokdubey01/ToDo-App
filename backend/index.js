const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const cors = require('cors')
const url = 'mongodb://127.0.0.1:27017/todoDB'

const app = express()
mongoose.connect(url, {useNewUrlParser:true})
const conn = mongoose.connection

conn.on('open',() => {
    console.log('connected...');
})

app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use(cors())

const todoRouter = require('./routers/router')
app.use(todoRouter)

app.listen(5000, () => {
    console.log('Server started...');
})
