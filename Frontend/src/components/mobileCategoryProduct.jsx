import React, { useEffect, useState } from "react";
import down from "../assets/icons/down_arrow.svg";
import A from "../assets/icons/A.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CapitalizeSentence from "./CapitalizeSentence";

const MobileCategoryProduct = ({
  data,
  index,
  setCategories,
  setShowProducts,
  showProducts,
}) => {
  return (
    <motion.div
      initial={{ x: index * -20, opacity: 0 }}
      animate={{ x: index * 0, opacity: 1 }}
      exit={{ x: index * -20, opacity: 0 }}
      transition={{ delay: 0.1 * index }}
      className="mainContainer"
    >
      <div className="theCard ">
        <div className="theFront">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-transparent to-asisDark opacity-80"></div>
          <p className="absolute bottom-4 left-3 text-xs font-semibold text-white">
            <CapitalizeSentence name={data.name} />
          </p>

          <img
            src={`${import.meta.env.VITE_BLOB_URL}${data.images[0]}`}
            alt="products_img"
            className="h-full w-full rounded-3xl  object-cover object-top"
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
        <div className="theBack flex flex-col items-center justify-between rounded-3xl border-2  border-asisGreen px-3 py-12  text-center">
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

          <p className="mb-3 text-sm font-semibold capitalize">{data.name}</p>
          <p className="mb-4 overflow-y-hidden px-4 text-xs max-sm:h-12 max-sm:px-0 ">
            {data.description?.slice(0, 75) + "..."}
          </p>

          <Link to={`/shop/${data._id}`}>
            <div className="mx-auto flex w-full cursor-pointer  items-center gap-2  border border-dashed border-asisDark px-2 py-1 text-[10px]">
              Show Products
              <img src={down} alt="down" className="max-sm:w-4" />
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default MobileCategoryProduct;
