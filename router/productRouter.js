const express = require('express')
const Product=require('../model/products')
const router =express.Router()
router.get('/',async(req,res)=>{
    try{
        const product = await Product.find()
        res.json(product)
    }
    catch(err){
        console.log(err)
    }

})
router.post('/addproduct',async(req,res)=>{
    const {
		name,
		price,
		description,
		image,
		brand,
		category,
		countInStock,
	} = req.body
  const insert= await Product.insertOne({name,price,description,image,brand,category,countInStock})
  try{
      const Products_added= insert.save()
      res.json(Products_added)
  }catch(err){
      console.log(err)
  }

})
router.delete('/deleteProduct',)
module.exports=router