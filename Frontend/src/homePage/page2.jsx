import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import displayCart from "../assets/icons/displayCart.svg";
import CategoryProduct from "../components/categoryProduct";
import { motion, AnimatePresence } from "framer-motion";

const Page2 = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showCategory, setShowCategory] = useState(false);

  const asisCardRef = useRef(null);
  const bodyRef = useRef(null);

  const handleProductsFetch = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}products`,
      );
      const categoryResponse = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}products/category`,
      );
      console.log({
        prod: response.data.products,
        category: categoryResponse.data.categories,
      });
      setCategory(categoryResponse.data.categories);
      setProducts(response.data.products);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    handleProductsFetch();
  }, []);

  return (
    <motion.main className="mt-6 flex flex-col items-center">
      {/* <div className="max-w-screen mx-12 overflow-hidden"> */}
      <div className="flex gap-x-12 flex-1">
        <motion.img
          src={displayCart}
          alt="displayCart"
          className={`object-fit z-20 aspect-[10/13] h-[40dvh] max-h-[312px]  cursor-pointer transition-all duration-200 2xl:h-[30dvh] 
         
          `}
        />

        <div ref={bodyRef} className="flex w-full">
          <motion.section
            drag="x"
            dragConstraints={bodyRef}
            // dragTransition={{ bounceStiffness: 50, bounceDamping: 10 }}
            className={`flex h-full w-max min-w-full flex-1 flex-nowrap gap-x-6`}
          >
            {category?.map((data, index) => {
              return (
                <CategoryProduct
                  key={data._id}
                  data={data}
                  // setCategories={setCategories}
                  // setShowProducts={setShowProducts}
                  // showProducts={showProducts}
                  // setShowAllProducts={setShowAllProducts}
                  index={index}
                />
              );
            })}
            {category?.map((data, index) => {
              return (
                <CategoryProduct
                  key={data._id}
                  data={data}
                  // setCategories={setCategories}
                  // setShowProducts={setShowProducts}
                  // showProducts={showProducts}
                  // setShowAllProducts={setShowAllProducts}
                  index={index + 2}
                />
              );
            })}
          </motion.section>
        </div>
      </div>
      {/* </div> */}

      <section className="h-full w-full flex-1"></section>
    </motion.main>
  );
};

export default Page2;
//  ${
//             !hideCategory ? "left-1/2 -translate-x-1/2" : "left-0"
//           }
