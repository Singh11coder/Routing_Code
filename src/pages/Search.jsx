import React, { useContext, useEffect, useState } from 'react'
import SearchProduct from '../components/SearchProduct';
import {Product} from '../context/ProductContext';
import Card from '../components/Card';

const Search = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const {products} = useContext(Product);

  const filteredData = () =>{
     let ans = products.filter((product) => {
        return product.title.toLowerCase().includes(value.toLowerCase());
     })

     setData(ans);
  }
  
  useEffect(() => {
     filteredData();
  },[value]);

  return (
    <div>
      <SearchProduct value={value} setValue={setValue}/>
      <div className="h-screen flex flex-wrap gap-1 overflow-y-scroll">
        {data.map((val) => {
           return <div>
              <Card val={val}/>
           </div>
        })}
      </div>
    </div>
  )
}

export default Search;
