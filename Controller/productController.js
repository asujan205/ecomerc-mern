import asyncHandler from 'express-async-handler'
import Product from '../model/products.js'

const getProducts=asyncHandler(async(req,res)=>{
    try{
            const product = await Product.find()
         res.json(product)
     }
        catch(err){
           console.log(err)
         } 

})
const Productcreate = asyncHandler(async(req,res)=>{
   const product = new Product({
		product_name: 'Sample name',
		product_price: 0,
		
		product_image: '/images/sample.jpg',
		product_brand: 'Sample brand',
		product_category: 'Sample category',
		product_countInStock: 0,
		product_numReviews: 0,
		product_description: 'Sample description',
	})
   const createdProduct= await Product.save()
   res.json(createProduct)
    
})
const getProductByid=asyncHandler(async(req,res)=>{
   const product = await Product.findById(req.prams.id)
   if(product){
      res.json(product)
   }else{
      console.log('product not found')
   }
})
//@desc delete single product
//@ delete/product/:id
const deleteProduct =asyncHandler(async(req,res)=>{
   const product= await Product.findById(req.params.id)
    if(product){
       await product.remove()
       res.json(product)
    }
    else{
       console.log('product caant found')
    }
})
const updateProduct = asyncHandler(async(req,res)=>{

   const product= await product.findById(req.params.id)
	const {
		name,
		price,
		description,
		image,
		brand,
		category,
		countInStock,
	} = req.body
   if(product){
      product.product_name=name,
      product.product_price=price,
      product.product_description=description,
      product.product_image=image,
      product.product_brand=brand,
      product.product_category=category,
      product.product_countInStock=countInStock
    const updatedProduct=   await product.save()
    res.json(updatedProduct)
   }
   else{
     console.log('product doesnt exits')
   }

})
export  default{
	getProducts,
	getProductByid,
	deleteProduct,
   Productcreate
	,
	updateProduct,
}
