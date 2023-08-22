import React, { useState,useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Cart from "../components/cart";
import Wishlist from "../components/wishlist";
import Footer from "../components/footer"
import collection_img_2 from "../assets/images/collection_img_2.png";



const Page = () => {
  const [hideCart, setHideCart] = useState(false);
  const [hideWish, setHideWish] = useState(false)
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  const cartData = [
    {
      name: "OVERGROWTH CONVERTIBLE PANTS",
      price: 135000,
      size: 1,
      color: "greenish brown",
      qty: 1,
      img: collection_img_2,
    },
    {
      name: "OVERGROWTH CONVERTIBLE PANTS",
      price: 135000,
      size: 1,
      color: "greenish brown",
      qty: 1,
      img: collection_img_2,
    },
    {
      name: "OVERGROWTH CONVERTIBLE PANTS",
      price: 135000,
      size: 1,
      color: "greenish brown",
      qty: 1,
      img: collection_img_2,
    },
    {
      name: "OVERGROWTH CONVERTIBLE PANTS",
      price: 135000,
      size: 1,
      color: "greenish brown",
      qty: 1,
      img: collection_img_2,
    },
  ];

  const wishData = [
    {
      name: "OVERGROWTH CONVERTIBLE PANTS",
      price: 135000,
      size: 1,
      color: "greenish brown",
      qty: 1,
      img: collection_img_2,
    },
    {
      name: "OVERGROWTH CONVERTIBLE PANTS",
      price: 135000,
      size: 1,
      color: "greenish brown",
      qty: 1,
      img: collection_img_2,
    },

  ];
  return (
    <div className=" px-7  max-md:px-3 bg-[#ffff]">
      <section className="w-full">
      <div className="max-w-7xl">
        <Header setHideCart={setHideCart} setHideWish={setHideWish} cartData={cartData} wishlistData={wishData}/>
        {hideCart && <Cart setHideCart={setHideCart} cartData={cartData}/>}
        {hideWish && <Wishlist setHideWish={setHideWish} wishlistData={wishData}/>}
        <Outlet />
      </div>
      </section>
      
    </div>
  );
};

export default Page;
