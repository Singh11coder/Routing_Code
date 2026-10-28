
import React, { useContext } from "react";
import {Product} from '../context/ProductContext'

const Card = ({ val }) => {
  const {
    id,
    title,
    description,
    category,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    thumbnail,
    images,
  } = val;
  const {
    products,
    cartItems, 
    setCartItems, 
    } = useContext(Product);
  const discountedPrice = (
    price * (1 - discountPercentage / 100)
  ).toFixed(2);
  

  const addCartItem = () => {
     let item = products.find((val) => val.id === id);
     let newobj;
     if(item.quantity){
       newobj = {...item,quantity:item.quantity + 1}
     }
     else{
       newobj = {...item,quantity:1}
     }

     setCartItems([...cartItems,newobj]);
     
  }

  const handleIncrement = () => {
    let arr = cartItems.map((val) => {
       return  val.id === id 
        ? {...val,quantity:val.quantity + 1}
        : val;
    });
    console.log(arr);
    setCartItems(arr);
  }

  const handleDecrement = () => {
    let arr = cartItems.find((val) => val.id === id);
    let arr2;
    if(arr.quantity == 1){
       arr2 = cartItems.filter((val) => val.id !== id);
    }
    else{
       arr2 = cartItems.map((val) => {
          return val.id === id
          ? {...val,quantity:val.quantity-1}
          : val
      })
    }
    setCartItems(arr2);
  }

  return (
    <div className="w-full max-w-sm overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition hover:shadow-xl">
      {/* Product Image */}
      <div className="flex h-56 items-center justify-center bg-gray-50 p-4">
        <img
          src={thumbnail || images?.[0]}
          alt={title}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between gap-2">
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium capitalize text-blue-700">
            {category}
          </span>

          <span className="text-sm text-yellow-600">
            ★ {rating}
          </span>
        </div>

        <p className="mb-1 text-sm text-gray-500">
          {brand}
        </p>

        <h2 className="truncate text-lg font-bold text-gray-800">
          {title}
        </h2>

        <p className="mt-2 h-12 overflow-hidden text-sm text-gray-600">
          {description}
        </p>

        {/* Price */}
        <div className="mt-4 flex items-center gap-2">
          <span className="text-xl font-bold text-green-700">
            ${discountedPrice}
          </span>

          <span className="text-sm text-gray-400 line-through">
            ${price.toFixed(2)}
          </span>

          <span className="text-xs font-semibold text-red-600">
            {discountPercentage}% off
          </span>
        </div>

        {/* Stock */}
        <p className={`mt-3 text-sm ${stock > 0 ? "text-green-600" : "text-red-600"}`}>
          {stock > 0 ? `${stock} items in stock` : "Out of stock"}
        </p>

        { !cartItems.find((val) => val.id === id)
          ?
           <button
            disabled={stock <= 0}
            onClick={addCartItem}
            className="mt-4 w-full rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400"
           >
            Add to Cart
           </button>
         : 
           <div
            className="flex justify-between text-xl  mt-4 w-full rounded-lg bg-blue-600 px-8 py-2 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400"
           >
            <button onClick={handleDecrement}>-</button>
            <p className="font-bold">{cartItems.find((val) => val.id === id).quantity}</p>
            <button onClick={handleIncrement}>+</button>            
           </div>
         }
          
      </div>
    </div>
  );
};

export default Card;
