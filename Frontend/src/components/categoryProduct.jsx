import React, { useEffect, useState } from "react";
import down from "../assets/icons/down_arrow.svg";
import A from "../assets/icons/A.svg";
import cartImg from "../assets/images/thankyou.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CategoryProduct = ({
  name,
  text,
  image,
  setDynamicUrl,
  setActiveItem,
  activeItem,
  id,
  index,
}) => {
  useEffect(() => {
    if (activeItem) {
      const query = `category=${activeItem}`;
      setDynamicUrl(`products/?${query}`);
    }
  }, [activeItem, setDynamicUrl]);
  return (
    <motion.div
      initial={{ x: index * -300, opacity: 0 }}
      animate={{ x: index * 0, opacity: 1 }}
      exit={{ x: index * -300, opacity: 0 }}
      transition={{ delay: index * 0.05, type: "tween" }}
      className="mainContainer"
    >
      <div className="theCard ">
        <div className="theFront">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-transparent to-asisDark opacity-50"></div>
          <p className="absolute bottom-5 left-5 text-xs font-semibold text-[#ffff]">
            {name}
          </p>

          <img
            src={image}
            alt="products_img"
            className="h-full w-full rounded-3xl border-2 border-asisGreen  object-cover object-top"
          />
          <img src={A} alt="A" className="absolute left-5 top-5 rotate-180" />
          <img src={A} alt="A" className="absolute bottom-5 right-5 " />
        </div>
        <div className="theBack flex items-center justify-center rounded-3xl border-2 border-asisGreen px-3 text-center ">
          <img src={A} alt="A" className="absolute left-5 top-3 rotate-180" />
          <img src={A} alt="A" className="absolute bottom-3 right-5 " />
          <div>
            <p className="mb-3 text-sm font-semibold">{name}</p>
            <p className="mb-4 px-4 text-xs">{text}</p>
            {/* big screen */}
            <div
              className="mx-auto flex w-[60%] cursor-pointer  items-center justify-center gap-2 border border-dashed border-asisDark text-xs max-sm:hidden"
              onClick={() => {
                setActiveItem(name);
              }}
            >
              View Products
              <img src={down} alt="down" />
            </div>
            {/* small screen  */}
            <Link to={`/category/${id}`}>
              <div
                className="mx-auto hidden w-[60%] cursor-pointer   items-center justify-center gap-2 border border-dashed border-asisDark text-xs max-sm:flex"
                onClick={() => {
                  setActiveItem(name);
                }}
              >
                View Products
                <img src={down} alt="down" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CategoryProduct;
