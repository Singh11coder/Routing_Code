import React from 'react'
import { useNavigate } from 'react-router'
const ProductNavbar = () => {
  let navigate = useNavigate();
  return (
    <div>
      <aside className="text-2xl text-blue-600 font-semibold pl-2 ">
         <h1 
         onClick={() => navigate("/main/products/all")}
         className="m-4 cursor-pointer">All</h1>
         <h1 
         onClick={() => navigate("/main/products/search")}
         className="m-4 cursor-pointer">Products</h1>
         <h1 
         onClick={() => navigate("/main/products/carts")}
         className="m-4 cursor-pointer">Cart</h1>
         <h1 className="m-4 cursor-pointer">Orders</h1>
       </aside>
    </div>
  )
}

export default ProductNavbar
