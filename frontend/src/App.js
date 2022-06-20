import logo from './logo.svg';
import  React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { listProducts } from './actions/productactions';
function App() {
  const dispatch = useDispatch()
  const productList = useSelector(state => state.productList)
  const products = productList
  console.log(products)
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
   {/* { products.map(product =>(
                             <div>
                                    <p>{product._id}</p>
                                    <p>{product.name}</p>
                                    <p>{product.price}</p>
                                    <p>{product.category.join(' | ')}</p> 
                                  
   </div>
   ))} */}
   </div>
  );
}

export default App;
