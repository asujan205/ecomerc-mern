const express = require('express')
const Product=require('../model/products')
const router =express.Router()
router.get('/',async(req,res)=>{
    res.send('get request ho hai')
    // try{
    //     const product = await Product.find()
    //     res.json(product)
    // }
    // catch(err){
    //     console.log(err)
    // }

})
// router.post('/addproduct',async(req,res)=>{
//     const {
// 		name,
// 		price,
// 		description,
// 		image,
// 		brand,
// 		category,
// 		countInStock,
// 	} = req.body
//   const insert= await Product.insertOne({name,price,description,image,brand,category,countInStock})
//   try{
//       const Products_added= insert.save()
//       res.json(Products_added)
//   }catch(err){
//       console.log(err)
//   }

// })
// router.delete('/deleteProduct',async(req,res)=>{
//     const product = await Product.findById(req.params.id)
//     if(product){

//         await product.remove()
// 		res.json({ message: 'Product removed' })
//     }
//     else{
        
// 		res.status(404)
// 		throw new Error('Product not found')
//     }

// })
// router.post('/update',async(req,res)=>{
//     const product= await Product.findById(req.params.id)
//     const {
// 		name,
// 		price,
// 		description,
// 		image,
// 		brand,
// 		category,
// 		countInStock,
// 	} = req.body

//     if(product){
//         product.product_name = name
// 		product.product_price = price
// 		product.product_description = description || product.description
// 		product.product_image = image || product.image
// 		product.product_brand = brand || product.brand
// 		product.product_category = category || product.category
// 		product.product_countInStock = countInStock

// 		const updatedProduct = await product.save()
// 		res.status(201).json(updatedProduct)

//     }
//     else{
//         res.status(404)
// 		throw new Error('Product not found')
//     }
//     router.get('/:id',async(req,res)=>{
//         const product= await Product.findById(req.params.id)
//         if(product){
//             res.json(product)
//         }
//         else{
//             res.status(404)
// 		throw new Error('Product not found')
//         }
//     })

// })
module.exports=router