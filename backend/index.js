import express from 'express'
const app = express()
import cors from 'cors'
import './mongo.config.js'

import ProductRouter from './router/productRouter.js '


const corsOpts = {
   origin: '*',
 
   methods: [
     'GET',
     'POST',
   ],
 
   allowedHeaders: [
     'Content-Type',
   ],
 };
 
 app.use(cors(corsOpts));
 app.use(express.json())
app.use('/product',ProductRouter)
 
app.listen(8000,()=>console.log('server is running'))