import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Cart from "../components/cart";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { setCart } from "../../redux/asis";
import Rotational from "../components/rotational";
const Page = () => {
  // State to control the visibility of the cart and wishlist
  const [hideCart, setHideCart] = useState(false);
  // const [hideWish, setHideWish] = useState(false);

  const cartData = useSelector((state) => state.asis.cart);
  const dispatch = useDispatch();

  const handleGetCartContent = async () => {
    try {
      axios.defaults.withCredentials = true;
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}carts`,
      );
      // console.log(response.data);
      // setCartData(response.data.products);
      dispatch(setCart(response.data));
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
    handleGetCartContent();
  }, []);

  useEffect(() => {}, []);

  return (
    <main className="h-full flex justify-center">
      <div className="pb-8 max-xl:px-0 max-w-7xl w-full">
        <Toaster position="top-center" />
        <Header
          setHideCart={setHideCart}
          cartLength={cartData?.products?.length}
        />

        {hideCart && (
          <Cart setHideCart={setHideCart} cartData={cartData.products} />
        )}

        <Rotational />
        <div className="relative">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default Page;
