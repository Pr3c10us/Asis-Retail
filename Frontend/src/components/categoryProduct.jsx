import React from "react";
import down from "../assets/icons/down_arrow.svg"
import A from "../assets/icons/A.svg"
import cartImg from "../assets/images/thankyou.png"
import { Link } from "react-router-dom";

const CategoryProduct = ({name, text, image}) => {

  return (
    <div>
      <div className="mainContainer">
        
        <div className="theCard">
            
          <div className="theFront">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-asisDark opacity-50 rounded-3xl"></div>
        <p className="text-xs text-[#ffff] font-semibold absolute bottom-5 left-5">{name}</p>

          <img
          src={image}
          alt="products_img"
          className="h-full w-full object-cover object-top rounded-3xl  border-2 border-asisGreen"
        />
          <img src={A} alt="A" className="absolute top-5 left-5 rotate-180"/>
        <img src={A} alt="A" className="absolute bottom-5 right-5 "/>
            </div>
          <div className="theBack flex justify-center items-center text-center border-2 border-asisGreen px-3 rounded-3xl ">
          <img src={A} alt="A" className="absolute top-3 left-5 rotate-180"/>
        <img src={A} alt="A" className="absolute bottom-3 right-5 "/>
            <div>

            <p className="text-sm mb-3 font-semibold">{name}</p>
            <p className="mb-4 text-xs px-4">
              {text}
            </p>
            <Link to={`/product`}>
            <div className="flex items-center gap-2  justify-center w-[60%] mx-auto border-dashed border border-asisDark text-xs cursor-pointer">View Products
                <img src={down} alt="down" /> </div>
                </Link>
                </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryProduct;
