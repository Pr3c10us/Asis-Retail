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
    <main className="h-full">
      {/* <section className="flex w-full flex-col items-start justify-center"> */}
      <div className=" pb-8 max-xl:px-0">
        <Toaster position="top-center" />
        {/* Render the header component and pass cart and wishlist data */}
        <Header
          setHideCart={setHideCart}
          cartLength={cartData?.products?.length}
          // wishlistData={wishData}
        />

        {/* Render the Cart component if hideCart is true */}
        {hideCart && (
          <Cart setHideCart={setHideCart} cartData={cartData.products} />
        )}
        {/* Render banner component */}
        {/* <Banner /> */}

        {/* Render the Wishlist component if hideWish is true */}
        {/* {hideWish && (
            <Wishlist setHideWish={setHideWish} wishlistData={wishData} />
          )} */}
        <Rotational />
        {/* Render the nested route components */}
        <div className="relative">
          <Outlet />
        </div>

        {/* Render the footer component */}
        {/* <Footer /> */}
      </div>
      {/* </section> */}
    </main>
  );
};

export default Page;
