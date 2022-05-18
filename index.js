import express from 'express'
const app = express()
import './mongo.config.js' 
import ProductRouter from './router/productRouter.js '
app.use(express.json())
app.use('/product',ProductRouter)
app.get('/sujan',(req,res)=>{
    res.send('suju babayS')
})
app.listen(8000,()=>console.log('server is running'))