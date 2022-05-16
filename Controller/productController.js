const Product=require('../model/products')
const getProducts=async(req,res)=>{
    try{
            const product = await Product.find()
         res.json(product)
     }
        catch(err){
           console.log(err)
         } 

}
const createProduct = async(req,res)=>{
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
    
}
const getProductByid=async(req,res)=>{
   const product = await Product.findById(req.prams.id)
   if(product){
      res.json(product)
   }else{
      console.log('product not found')
   }
}
//@desc delete single product
//@ delete/product/:id
const deleteProduct =async(req,res)=>{
   const product= await Product.findById(req.prams.id)
    if(product){
       await product.remove()
       res.json(product)
    }
    else{
       console.log('product caant found')
    }
}