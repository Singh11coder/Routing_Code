import React, { useContext, useEffect, useState } from 'react'
import ProductNavbar from '../components/ProductNavbar';
import {Product} from '../context/ProductContext';
import Card from '../components/Card';
import ProductHeading from '../components/ProductHeading';
 
const Products = () => {
  
  const {
    products,
    setProducts,
    
  } = useContext(Product);

  return (
    <div >
      
      <div>
       <ProductHeading/>
       <div className="h-screen flex flex-wrap gap-1 overflow-y-scroll">
         {products.map((val) => {
            return <div key={val.id}>
               <Card val={val}/> 
            </div> 
         })}
       </div>
      </div>
    </div>
  )
}

export default Products
