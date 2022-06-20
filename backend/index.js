import express from 'express'
const app = express()
import cors from 'cors'
import './mongo.config.js'

import ProductRouter from './router/productRouter.js '
app.use(express.json())
app.use('/product',ProductRouter)

const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))
 
app.listen(8000,()=>console.log('server is running'))