import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Axios from "axios";
import { Link } from "react-router-dom";
import down from "../assets/icons/down.svg";
import displayCart from "../assets/icons/displayCart.svg";
import useFetch from "../components/useFetch";
import CategoryProduct from "../components/categoryProduct";
import Products from "./components/products";
import Loading from "../components/loading";
import Mobile from "./components/mobile";

const Page = () => {
  const [hideCategory, setHideCategory] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [productData, setProductData] = useState([]);
  const [allProductData, setAllProductData] = useState([]);
  const [categoriesData, setCategoriesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const asisCardRef = React.useRef(null);
  const bodyRef = React.useRef(null);
  const [categories, setCategories] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const categoryData = `${import.meta.env.VITE_BACKEND_URL}products/categories`;
  // const { data: categoryDataResponse } = useFetch(categoryData);

  const url = `${import.meta.env.VITE_BACKEND_URL}products`;

  useEffect(() => {
    // async function fetchData() {
    //   // setIsLoading(true);
    //   try {
    //     const response = await Axios.get(url);
    //     setProductData(response.data.products);
    //     // setIsLoading(false);
    //   } catch (error) {
    //     // setIsLoading(false);
    //   }
    // }

    // fetchData();

    const displayProduct = allProductData.filter(
      (product) => product.categories.indexOf(categories) > -1,
    );
    console.log({ displayProduct, allProductData });
    setProductData(displayProduct);
  }, [categories]);
  useEffect(() => {
    async function fetchData() {
      // setIsLoading(true);
      try {
        const response = await Axios.get(
          `${import.meta.env.VITE_BACKEND_URL}products`,
        );
        console.log(response.data.products);
        setAllProductData(response.data.products);
        // setIsLoading(false);
      } catch (error) {
        // setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await Axios.get(
          `${import.meta.env.VITE_BACKEND_URL}products/category`,
        );
        setCategoriesData(response.data.categories);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="h-full px-5 max-sm:px-2">
      <section className="mt-10 flex flex-col">
        {/* <StackingSection /> */}
        <section
          className={`relative flex min-h-[20rem] w-full overflow-hidden pl-[16.4rem] transition-all duration-100 max-sm:hidden`}
        >
          <img
            ref={asisCardRef}
            src={displayCart}
            alt="displayCart"
            className={`absolute z-20 aspect-[1/1.35] w-[15rem] cursor-pointer transition-all duration-200 ${
              !hideCategory ? "left-1/2 -translate-x-1/2" : "left-0 "
            }`}
            onClick={() => {
              setHideCategory((prev) => !prev);
              setCategories("");
              setShowProducts(false);
              setShowAllProducts(true);
            }}
          />

          <div ref={bodyRef} className="w-full flex-1 overflow-hidden">
            <AnimatePresence>
              {hideCategory && (
                <motion.section
                  initial={{ x: -300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{
                    x: 500,
                    left: "50%",
                    opacity: 0,
                    transition: { type: "tween", duration: 0.5 },
                  }}
                  transition={{ type: "tween", duration: 0.5, delay: 0.2 }}
                  drag="x"
                  dragConstraints={bodyRef}
                  className={`gap-10 pb-2 ${
                    !hideCategory ? "hidden " : "ml-6 min-w-full flex w-max flex-nowrap cursor-grab"
                  }`}
                >
                  {categoriesData?.map((data, index) => (
                    <div key={data.name + index} className="cursor-pointer">
                      <CategoryProduct
                        data={data}
                        setCategories={setCategories}
                        setShowProducts={setShowProducts}
                        showProducts={showProducts}
                        setShowAllProducts={setShowAllProducts}
                        index={index}
                      />
                    </div>
                  ))}
                </motion.section>
              )}
            </AnimatePresence>
          </div>
        </section>
        <AnimatePresence>
          {hideCategory && (
            <motion.div
              initial={{
                y: -50,
                opacity: 0,
              }}
              animate={{ y: 0, x: 0, opacity: 1 }}
              exit={{
                y: -50,
                opacity: 0,
              }}
              className="mx-14 mb-10 mt-14 flex backdrop-blur-md max-sm:hidden"
            >
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-transparent p-2 outline-0"
              />
              <div className="flex w-28 cursor-pointer items-center justify-center gap-x-3 border border-asisDark text-xs uppercase">
                sort by
                <img src={down} alt="down" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <Mobile
          categoriesData={categoriesData}
          setCategories={setCategories}
          setShowProducts={setShowProducts}
          showProducts={showProducts}
        />
        <div className="hidden sm:block">
          <AnimatePresence>
            {showAllProducts && hideCategory && (
              <div>
                <section className="mt-2 flex flex-wrap items-center max-md:justify-center gap-10">
                  {allProductData.map((product, index) => (
                    <div key={product._id}>
                      <Link to={`/product/${product._id}`}>
                        <Products
                          top={asisCardRef.current?.offsetTop}
                          left={asisCardRef.current?.offsetLeft}
                          name={product.name}
                          price={product.price}
                          collaborations={product.collaborations}
                          images={product.images}
                          index={index}
                        />
                      </Link>
                    </div>
                  ))}{" "}
                </section>
              </div>
            )}

            {showProducts && (
              <div>
                <section className="mt-2 flex flex-wrap items-center gap-10">
                  {productData.map((product, index) => (
                    <div key={product._id}>
                      <Link to={`/product/${product._id}`}>
                        <Products
                          top={asisCardRef.current?.offsetTop}
                          left={asisCardRef.current?.offsetLeft}
                          name={product.name}
                          price={product.price}
                          collaborations={product.collaborations}
                          images={product.images}
                          index={index}
                        />
                      </Link>
                    </div>
                  ))}
                </section>
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default Page;
