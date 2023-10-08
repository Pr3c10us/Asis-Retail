import React, { useEffect, useState } from "react";
import A from "../../assets/icons/A.svg";
import spinning from "../../assets/icons/spining_text.svg";
import CapitalizeSentence from "../../components/CapitalizeSentence";

const shopCartegoryProduct = ({
  data,
  index,
  setCategories,
  setShowProducts,
  showProducts,
}) => {
  return (
    <div className="relative flex h-[312px] w-[239px] cursor-pointer items-center justify-center">
      <img
        src={spinning}
        alt="A"
        className="slow-spin absolute -z-10 animate-spin -bottom-14"
      />
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-transparent to-asisDark opacity-80"></div>

      <img
        src={`${import.meta.env.VITE_BLOB_URL}${data.images[0]}`}
        alt="products_img"
        className="h-full w-full rounded-3xl object-cover object-top"
      />

      <img
        src={A}
        alt="A"
        className="absolute left-5 top-4 rotate-180 max-sm:left-3 max-sm:w-3"
      />
      <img
        src={A}
        alt="A"
        className="absolute bottom-4 right-5 max-sm:right-3 max-sm:w-3"
      />
      <p className="absolute bottom-4 left-3 text-xs font-semibold capitalize text-white">
        {data.name}
      </p>
    </div>
  );
};

export default shopCartegoryProduct;
