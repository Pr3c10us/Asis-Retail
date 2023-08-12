import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../components/useFetch";
import Product_detail from "./component/product_detail";
import SpecialCategory from "../components/specialCategory";
const Page = () => {
  const { id } = useParams();
  const apiUrl = `http://localhost:5000/api/products/${id}`;
  const { data, isLoading, error } = useFetch(apiUrl);

  const name = "you may also like";

console.log(data)

  return (
    <div className=" h-full p-0">
      {isLoading && <div>Loading....</div>}
      
      {data && (
        <div>
       <Product_detail data={data}/>
         
        </div>
      )}
      
       <SpecialCategory name={name}/>
    </div>
  );
};

export default Page;
