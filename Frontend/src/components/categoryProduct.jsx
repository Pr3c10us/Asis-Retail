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
  setProduct,
}) => {
  useEffect(() => {
    if (activeItem) {
      const query = `category=${activeItem}`;
      setDynamicUrl(`products/?${query}`);
    }
  }, [activeItem, setDynamicUrl]);

  const [selectedImage, setSelectedImage] = useState(null);
  useEffect(() => {
    if (image && image.length > 0) {
      setSelectedImage(image[0]);
    }
  }, [image]);


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
            src={`${import.meta.env.VITE_BLOB_URL}${selectedImage}`}
            alt="products_img"
            className="h-full w-full rounded-3xl border-2 border-asisGreen  object-cover object-top"
          />
          <img src={A} alt="A" className="absolute left-5 top-5 rotate-180" />
          <img src={A} alt="A" className="absolute bottom-5 right-5 " />
        </div>
        <div className="theBack flex flex-col items-center justify-between rounded-3xl border-2 border-asisGreen px-3 text-center py-10">
          <img src={A} alt="A" className="absolute left-5 top-3 rotate-180" />
          <img src={A} alt="A" className="absolute bottom-3 right-5 " />

          <p className="mb-3 text-sm font-semibold">{name}</p>
          <p className="mb-4 px-4 text-xs">{text}</p>
          <div
            className="mx-auto flex w-[60%] cursor-pointer  items-center justify-center gap-2 border border-dashed border-asisDark text-xs max-sm:hidden"
            onClick={() => {
              setActiveItem(name);
              setProduct(false);
              setTimeout(() => {
                setProduct(true);
              }, 1000);

            }}
          >
            View Products
            <img src={down} alt="down" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CategoryProduct;
