import React from 'react'
import ProductNavbar from '../components/ProductNavbar'
import { Outlet } from 'react-router'

const ProductLayout = () => {
  return (
    <div className="grid grid-cols-[1fr_5fr] p-2">
      <div className="w-50 border-r-2 h-screen">
        <ProductNavbar/>
      </div>
      <div>
        <Outlet/>
      </div>
      
    </div>
  )
}

export default ProductLayout
