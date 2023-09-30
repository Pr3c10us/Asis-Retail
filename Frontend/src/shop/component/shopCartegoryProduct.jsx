import React, { useEffect, useState } from "react";
import A from "../../assets/icons/A.svg";


const shopCartegoryProduct = ({ data, index, setCategories, setShowProducts,showProducts }) => {
  return (
    <div
      
      className="mainContainer"
    >
      
      <div className="theCard ">
        <div className="theFront">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-transparent to-asisDark opacity-50"></div>
          <p className="absolute bottom-5 left-5 text-xs font-semibold text-[#ffff]">
            {data.name}
          </p>

          <img
            src={`${import.meta.env.VITE_BLOB_URL}${data.images[0]}`}
            alt="products_img"
            className="h-full w-full rounded-3xl  object-cover object-top"
          />
          <img src={A} alt="A" className="absolute left-5 top-5 rotate-180" />
          <img src={A} alt="A" className="absolute bottom-5 right-5 " />
        </div>
        <div className="theBack flex flex-col items-center justify-between rounded-3xl border-2 border-asisGreen px-3 py-10 text-center">
          <img src={A} alt="A" className="absolute left-5 top-3 rotate-180" />
          <img src={A} alt="A" className="absolute bottom-3 right-5 " />

          <p className="mb-3 text-sm font-semibold">{data.name}</p>
          <p className="mb-4 px-4 text-xs max-sm:px-1">{data.description}</p>
          

        </div>
      </div>
    </div>
  );
};

export default shopCartegoryProduct;



