const express = require('express')
const app = express()
const connect=require('./mongo.config')
const ProductRouter=require('./router/productRouter')
app.use('/product',ProductRouter)

app.listen(8000,()=>console.log('server is running'))