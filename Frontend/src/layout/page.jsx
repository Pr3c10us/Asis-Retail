import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import Cart from "../components/cart";

const Page = () => {
  const [hideCart, setHideCart] = useState(false);
  return (
    <div className="bg-[#FFFFFF] px-7  max-md:px-3 max-w-[1300px]">
      <div>
        <Header setHideCart={setHideCart} />
        {hideCart && <Cart setHideCart={setHideCart}/>}
        <Outlet />
      </div>
    </div>
  );
};

export default Page;
