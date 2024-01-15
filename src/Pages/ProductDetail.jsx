import React from 'react'

import { useParams } from 'react-router-dom'
import {Header, Footer} from '../Components/index'

const ProductDetail = () => {
  const {id}= useParams();

  const productarry = [
    {
      id:1,
      productname:'Butter Chicken',
      price:320,
      img: 'https://tse3.mm.bing.net/th?id=OIP.EF_8fVl_dppijVaO9fenKgHaF-&pid=Api&P=0&h=180' 
    },
    {
      id:2,
      productname:'Tandoori Chicken',
      price:380,
      img: 'https://foodiewish.com/wp-content/uploads/2020/05/Tandoori-Chicken-Recipe.jpg'  
    },
    {
      id:3,
      productname:'Afghani Tandoori Chicken',
      price:400,
      img: 'https://tse2.mm.bing.net/th?id=OIP.qZezX6mYXc-A2g87pKNtpgHaE8&pid=Api&P=0&h=180'  
    },
    {
      id:4,
      productname:'Chicken Pakora ',
      price:250,
      img: 'https://tse2.mm.bing.net/th?id=OIP._h_Scd0IjvG5PEvq4M5UXgHaHa&pid=Api&P=0&h=180'  
    },
    {
      id:5,
      productname:'Chilli Chicken',
      price:450,
      img: 'https://tse3.mm.bing.net/th?id=OIP.fSSemaL8tjDgsOiD2ypKOQHaEK&pid=Api&P=0&h=180'  
    },
    {
      id:6,
      productname:'Karahi Chicken',
      price:450,
      img: 'https://tse1.mm.bing.net/th?id=OIP.wR_m-uFWVVNRv6c2qyMshQHaHa&pid=Api&P=0&h=180'  
      
    }
    
    
      ]


      const product = productarry.find((product) => product.id === parseInt(id))
      console.log(product, "product");

      if(!product){
        return('Product Not Listed')
      }



  return (
    <>
    <Header />
    <section className='py-5'>
    <p>Product Id: {product.id}</p>
    <p>Product Name: {product.productname}</p>
    <p>Product Price: {product.price}</p>
    <p>Product Image Url: {product.img}</p>

    <select name="Item" id="">
      <option value="1">1</option>
      <option value="1">2</option>
      <option value="1">3</option>
      <option value="1">4</option>

</select>
    </section>
    
    <Footer />
    
   
    
    </>
  )
}

export default ProductDetail


//  www.abc.com/products/12