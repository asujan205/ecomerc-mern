import express from 'express'
const app = express()
import './mongo.config.js'
import createProduct from './seeder.js'
createProduct()
import ProductRouter from './Backedend/router/productRouter.js '
app.use(express.json())
app.use('/product',ProductRouter)

app.listen(8000,()=>console.log('server is running'))