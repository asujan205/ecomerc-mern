import productsdommy from "./data/productsdommy.js";
import mongoose from 'mongoose'
import  Product from "./model/products.js";
import './mongo.config.js'

const createProduct=async()=>{
    const create= await Product.insertMany(productsdommy)

}
export default createProduct