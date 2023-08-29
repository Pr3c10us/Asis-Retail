import React, { useEffect } from "react";
import SpecialCategory from "../components/specialCategory";
import { motion } from "framer-motion";
import back_to_top from "../assets/icons/back_to_top.svg";
import useFetch from "../components/useFetch";
import StackingSection from "../components/StackingSection ";
import CategoryProduct from "../components/categoryProduct";
import cartImg from "../assets/images/thankyou.png";

const Page = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const { data } = useFetch(`${import.meta.env.VITE_API_URL}products/`);
  const products = [
    {
      name: "School Supplies",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
    architecto fuga. Maxime vero sit doloribus quod omnis minus
    repellendus soluta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
    architecto fuga. Maxime `,
      img: cartImg,
    },
    {
      name: "School Supplies",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
      architecto fuga. Maxime vero sit doloribus quod omnis minus
      repellendus soluta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
      architecto fuga. Maxime `,
      img: cartImg,
    },
  ];

  return (
    <div className=" h-full p-0 ">
      <section>
        <StackingSection />
        {/* <SpecialCategory name={name} /> */}
        <section className="flex  gap-5">
          {products.map((data) => {
            return (
              <div key={data.name}>
                <CategoryProduct name={data.name} text={data.text} image={data.img}/>
              </div>
            );
          })}
        </section>

        <section>
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
        </section>
      </section>
    </div>
  );
};

export default Page;
