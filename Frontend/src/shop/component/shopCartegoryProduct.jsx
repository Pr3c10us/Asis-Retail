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
    <div className="mainContainer ">
      <div className="theCard ">
        <div className="theFront z-20 ">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-transparent to-asisDark opacity-80"></div>
          <p className="absolute bottom-4 left-3 text-xs font-semibold text-white">
            <CapitalizeSentence name={data.name} />
          </p>

          <img
            src={`${import.meta.env.VITE_BLOB_URL}${data.images[0]}`}
            alt="products_img"
            className="h-full w-full rounded-3xl  border border-asisDark object-cover object-top"
          />
          <img
            src={spinning}
            alt="A"
            className="slow-spin absolute -bottom-14 -z-10 animate-spin"
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
        </div>
        <div className="theBack flex flex-col items-center  rounded-3xl border-2 border-asisGreen px-3 py-10 text-center">
          <img
            src={A}
            alt="A"
            className="absolute left-5 top-3 rotate-180 max-sm:left-3 max-sm:w-3"
          />
          <img
            src={A}
            alt="A"
            className="absolute bottom-3 right-5 max-sm:right-3 max-sm:w-3"
          />

          <p className="mb-4 text-sm font-semibold">{data.name}</p>
          <p className=" px-4 text-xs max-sm:px-1">
            {data.description?.slice(0, 100) + "..."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default shopCartegoryProduct;
