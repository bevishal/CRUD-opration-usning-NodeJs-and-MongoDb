//Buildibg a RESTful Api that can perform CRUD (Create, Read, Update and Delete) oprations from a persistance database.


//importing the dependencies
const express = require('express')
const mongoose = require('mongoose')

//Declearing a URL for Mongodb
const url = 'mongodb://localhost/CRUDjs'

const app = express()

//Creating the connection
mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

//Routing the connection
const productRouter = require('./routes/products')
app.use('/products',productRouter)

app.listen(8080, () => {
    console.log('Server started at 8080, ')
})