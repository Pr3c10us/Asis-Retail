import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Axios from 'axios';
import { Link } from "react-router-dom";
import down from "../assets/icons/down.svg";
import displayCart from "../assets/icons/displayCart.svg";
import useFetch from "../components/useFetch";
import CategoryProduct from "../components/categoryProduct";
import Products from "../components/products";

const Page = () => {
  const [hideCategory, setHideCategory] = useState(false);
  const [dynamicUrl, setDynamicUrl] = useState(null);
  const [activeItem, setActiveItem] = useState(null);
  const [productData, setProductData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categoryData = `${import.meta.env.VITE_API_URL}products/category`;
  const { data: categoryDataResponse } = useFetch(categoryData);

  const url = `${import.meta.env.VITE_API_URL}${dynamicUrl}`;

  useEffect(() => {
    if (categoryDataResponse) {
      // Ensure categoryDataResponse is not null before logging
      console.log(categoryDataResponse);
    }

    async function fetchData() {
      try {
        const response = await Axios.get(url);
        setProductData(response.data);
        setError(null);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error);
      }
    }

    fetchData();

    return () => {
      // Cleanup if needed
    };
  }, [url, categoryDataResponse]); // Include categoryDataResponse as a dependency

  return (
    <div className="h-full px-5">
      <section className="mt-10 flex flex-col">
        {/* <StackingSection /> */}
        <section className={`relative flex min-h-[20rem] w-full overflow-hidden pl-[16rem] transition-all duration-100`}>
          <img
            src={displayCart}
            alt="displayCart"
            className={`absolute z-20 w-[239px] cursor-pointer pb-3 transition-all duration-200 ${
              !hideCategory ? "left-1/2 -translate-x-1/2" : "left-0"
            }`}
            onClick={() => {
              setHideCategory((prev) => !prev);
              setActiveItem(null);
            }}
          />

          <AnimatePresence>
            {hideCategory && (
              <motion.section
                initial={{ x: -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{
                  x: 500,
                  opacity: 0,
                  transition: { type: "tween", duration: 0.5 },
                }}
                transition={{ type: "tween", duration: 0.5, delay: 0.2 }}
                className={`gap-5 pb-2 ${
                  !hideCategory ? "hidden overflow-hidden" : "flex overflow-auto"
                }`}
              >
                {categoryDataResponse?.categories.map((data, index) => (
                  <div key={data.name + index}>
                    <CategoryProduct
                      id={data.id}
                      name={data.name}
                      text={data.description}
                      image={data.images}
                      setDynamicUrl={setDynamicUrl}
                      activeItem={activeItem}
                      setActiveItem={setActiveItem}
                      index={index}
                    />
                  </div>
                ))}
              </motion.section>
            )}
          </AnimatePresence>
        </section>

        <AnimatePresence>
          {productData && (
            <motion.div
              initial={{ y: -200, x: 100, opacity: 0 }}
              animate={{ y: 0, x: 0, opacity: 1 }}
              exit={{ y: -200, x: 100, opacity: 0 }}
            >
              <div className="mx-14 mb-10 mt-14 flex backdrop-blur-md">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full bg-transparent p-2 outline-0"
                />
                <div className="flex w-28 cursor-pointer items-center justify-center gap-x-3 border border-asisDark text-xs uppercase">
                  sort by
                  <img src={down} alt="down" />
                </div>
              </div>
              <section className="mt-2 flex flex-wrap items-center justify-center gap-5">
                {productData.products.map((product) => (
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
                ))}
              </section>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
};

export default Page;
