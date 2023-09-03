import React, { useEffect, useState } from "react";
import SpecialCategory from "../components/specialCategory";
import { motion, AnimatePresence, stagger } from "framer-motion";
import back_to_top from "../assets/icons/back_to_top.svg";
import down from "../assets/icons/down.svg";
import useFetch from "../components/useFetch";
import StackingSection from "../components/StackingSection ";
import CategoryProduct from "../components/categoryProduct";
import cartImg from "../assets/images/thankyou.png";
import cartImg1 from "../assets/images/discover_img.png";
import displayCart from "../assets/icons/displayCart.svg";
import Products from "../components/products";
import { Link } from "react-router-dom";

const Page = () => {
  
  const [hideCategory, showCategory] = useState(false);
  const align = hideCategory ? "justify-center" : "justify-center";
  const [dynamicUrl, setDynamicUrl] = useState("products");
  const [activeItem, setActiveItem] = useState(null);
  console.log(dynamicUrl);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const apiUrl = `${import.meta.env.VITE_API_URL}${dynamicUrl}`;
  const { data } = useFetch(apiUrl);

  console.log(data?.products);
  const products = [
    {
      id: 1,
      name: "School Supplies",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
    architecto fuga. Maxime vero sit doloribus quod omnis minus
    repellendus soluta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
    architecto fuga. Maxime `,
      img: cartImg,
    },
    {
      id: 2,
      name: "Home Supplies",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
      architecto fuga. Maxime vero sit doloribus quod omnis minus
      repellendus soluta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
      architecto fuga. Maxime `,
      img: cartImg1,
    },
    {
      id: 3,
      name: "Interiors",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
    architecto fuga. Maxime vero sit doloribus quod omnis minus
    repellendus soluta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
    architecto fuga. Maxime `,
      img: cartImg,
    },
    {
      id: 4,
      name: "Necessities",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
    architecto fuga. Maxime vero sit doloribus quod omnis minus
    repellendus soluta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
    architecto fuga. Maxime`,
      img: cartImg,
    },
    {
      id: 1,
      name: "School Supplies",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
    architecto fuga. Maxime vero sit doloribus quod omnis minus
    repellendus soluta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
    architecto fuga. Maxime `,
      img: cartImg,
    },
    {
      id: 2,
      name: "Home Supplies",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
      architecto fuga. Maxime vero sit doloribus quod omnis minus
      repellendus soluta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
      architecto fuga. Maxime `,
      img: cartImg1,
    },
    {
      id: 3,
      name: "Interiors",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
    architecto fuga. Maxime vero sit doloribus quod omnis minus
    repellendus soluta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
    architecto fuga. Maxime `,
      img: cartImg,
    },
    {
      id: 4,
      name: "Necessities",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
    architecto fuga. Maxime vero sit doloribus quod omnis minus
    repellendus soluta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
    architecto fuga. Maxime`,
      img: cartImg,
    },
  ];

  return (
    <div className=" h-full px-5 ">
      <section className="flex flex-col">
        <StackingSection />

        {/* <SpecialCategory name={name} /> */}
        <section
          className={`relative flex min-h-[20rem] w-full overflow-hidden pl-[16rem] transition-all duration-100`}
        >
          <img
            src={displayCart}
            alt="displayCart"
            className={`absolute z-20 w-[239px] cursor-pointer pb-3 transition-all duration-200 ${
              !hideCategory ? " left-1/2 -translate-x-1/2" : "left-0"
            }`}
            onClick={() => {
              showCategory((prev) => !prev);
              setActiveItem(false);
            }}
          />

          {hideCategory &&
            products.map((data) => {
              return (
                <div key={data.name}>
                  <CategoryProduct
                  id={data.id}
                    name={data.name}
                    text={data.text}
                    image={data.img}
                  setDynamicUrl={setDynamicUrl}
                  activeItem={activeItem}
                  setActiveItem={setActiveItem}
                  />
                </div>
              );
            })}
         
        </section>
        {activeItem && (
          <div>
            <div className="mx-14 mb-10 mt-14 flex border border-asisDark backdrop-blur-md">
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-transparent p-2 outline-0"
              />
              <div className="flex w-28 cursor-pointer items-center justify-center gap-x-3  border-l border-asisDark text-xs uppercase">
                sort by
                <img src={down} alt="down" />
              </div>
            </div>
            <section className="mt-2 flex flex-wrap items-center justify-center gap-5">
              {data?.products.map((product) => {
                return (
                  <div key={product._id}>
                    <Link to={`/product/${product._id}`}>
                      <Products
                        name={product.name}
                        price={product.price}
                        collaborations={product.collaborations}
                        images={product.images}
                      />
                    </Link>
                  </div>
                );
              })}
            </section>
          </div>
        )}
        {/* <section>
          <div className="relative my-20  border-t  border-asisDark">
            <img
              src={back_to_top}
              alt="back_to_top"
              className="absolute -top-5 right-[10%] cursor-pointer"
              onClick={() => {
                handleScrollToTop();
              }}
            />
          </div>
        </section> */}
      </section>
    </div>
  );
};

export default Page;
