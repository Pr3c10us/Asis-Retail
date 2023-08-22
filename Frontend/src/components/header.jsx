import React from "react";
// importing icons

import logo from "../assets/icons/retail_logo.svg";
import bracket from "../assets/icons/left-bracket.svg"
import { Link } from "react-router-dom";

const Header = ({ setHideCart, setHideWish, cartData, wishlistData }) => {
  return (
    <div className=" sticky top-0 z-10 bg-[#ffff] py-3  font-semibold text-xs">
<section className="flex items-center justify-between">

      <img src={logo} alt="logo" />
      <div className="cursor-pointer flex basis-60 ">
        <img src={bracket} alt="bracket" className="w-5" />
        <input type="text" placeholder="Search" className="bg-transparent outline-0 w-[25vw] py-1" />
        <img src={bracket} alt="bracket" className="rotate-180 w-5" />
      </div>
      <article className="flex items-center gap-4">
      <div className="cursor-pointer flex" onClick={()=> {
        setHideWish(prev => !prev)
        setHideCart(false)
      }} >
        <img src={bracket} alt="bracket" className="" />
        <p>Wishlist ( {wishlistData.length} )</p>
        <img src={bracket} alt="bracket" className="rotate-180" />
      </div>
      <div className="cursor-pointer flex" onClick={()=> {
        setHideCart(prev => !prev)
        setHideWish(false)
      }} >
        <img src={bracket} alt="bracket" className="" />
        <p>Cart ( {cartData.length} )</p>
        <img src={bracket} alt="bracket" className="rotate-180" />
      </div>
      <div className="cursor-pointer flex">
      <img src={bracket} alt="bracket" className="" />
       Sign In
       <img src={bracket} alt="bracket" className="rotate-180" />

      </div>
      </article>
      
      </section>

    </div>
  );
};

export default Header;
