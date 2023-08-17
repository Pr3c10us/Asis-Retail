import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../components/useFetch";
import Product_detail from "./component/product_detail";
import SpecialCategory from "../components/specialCategory";
import Loading from "../components/loading";
const Page = () => {
  const { id } = useParams();
  const apiUrl = `http://localhost:5000/api/products/${id}`;
  const { data} = useFetch(apiUrl);

  const name = "you may also like";


  return (
    <div className=" h-full p-0">
      
      {data ? (
        <div>
       <Product_detail data={data}/>
       <SpecialCategory name={name}/>

        </div>
      ) : <div>
        <Loading />
        </div>}
      
    </div>
  );
};

export default Page;
