import React from 'react'

const ProductHeading = () => {
  return (
    <div>
       
<div className="px-7 pt-6 pb-5">
  <div className="flex items-center gap-3">
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 7h12l1 14H5L6 7Z" />
        <path d="M9 7a3 3 0 0 1 6 0" />
      </svg>
    </div>

    <div>
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">
        All Products
      </h1>

      <p className="mt-1 text-sm text-gray-500">
        Explore our collection and find your favorites.
      </p>
    </div>
  </div>
</div>

    </div>
  )
}

export default ProductHeading
