import express from 'express'
import {
	getProducts,
	getProductByid,
	deleteProduct,
 Productcreate
	,
	updateProduct,
	
} from '../Controller/productController.js'

const router =express.Router()
router.route('/').get(getProducts)
router.route('/').post(Productcreate)
router
	.route('/:id')
	.get(getProductByid)
	.delete(deleteProduct)
	.put(updateProduct)
export default router