const express = require('express')
import {
	getProducts,
	getProductByid,
	deleteProduct,
	createProduct,
	updateProduct
	
} from '../controllers/productController.js'

const router =express.Router()
router.route('/').get(getProducts)
router.route('/').post(createProduct)
router
	.route('/:id')
	.get(getProductById)
	.delete(deleteProduct)
	.put(updateProduct)
module.exports=router 