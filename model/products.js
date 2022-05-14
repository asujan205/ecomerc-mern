const mongoose =require('mongoose')
const ProductSchema=new mongoose.Schema({
    product_name: {
    type: String,
    required: true,
},
product_image: {
    type: String,
    required: true,
},
product_brand: {
    type: String,
    required: true,
},
product_category: {
    type: String,
    required: true,
},
product_description: {
    type: String,
    required: true,
},

price: {
    type: Number,
    required: true,
    default: 0,
},
countInStock: {
    type: Number,
    required: true,
    default: 0,
},
},
{
timestamps: true,
}
)

module.exports=mongoose.model('product',ProductSchema)