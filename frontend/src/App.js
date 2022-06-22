import logo from './logo.svg';
import  React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { listProducts } from './actions/productactions';
function App() {
  const dispatch = useDispatch()
  const productList = useSelector(state => state.productListReducer)
 console.log(productList)
 const {loading,error,products} = productList

  
  useEffect(()=>{
    dispatch(listProducts())
  },[dispatch])
  const [product,setProduct]=useState([])
  // useEffect(()=>{
  //   fetch('http://localhost:8000/product').then((res)=>{
  //     if(res.ok)
  //     {
  //       console.log('suces')
  //     }
  //     else{
  //       console.log('eerr ')
  //     }
  //   })
  // })
  return (
   <div>
    { products.map(product =>(
                             <div className>
                              <div key={product._id} >
                                    <p>{product._id}</p>
                                    <p>{product.product_name}</p>
                                    <p>{product.price}</p>
                                    <p>{product.product_category}</p> 
                                    </div>
                                  
   </div>
   ))} 
   </div>
  );
}

export default App;
