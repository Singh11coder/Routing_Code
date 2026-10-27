import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const Product = createContext();

export const ProductProvider = ({children}) => {

  const [products,setProducts] = useState([]);
  const [loading,setLoading] = useState (true);
  const [error,setError] = useState("");


   const fetchProducts = async() => {
        
      const res = await axios.get("https://dummyjson.com/products");
   
      setProducts(res.data.products);
    }

    useEffect(() => {
       fetchProducts();
    },[])

  return <Product.Provider value={{
      products,
      setProducts,
      loading,setLoading,
      error,
      setError
  }}>
    {children}
  </Product.Provider>
}
