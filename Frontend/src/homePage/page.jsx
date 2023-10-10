import React, { useEffect, useLayoutEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Axios from "axios";
import { Link } from "react-router-dom";
import down from "../assets/icons/down.svg";
import displayCart from "../assets/icons/displayCart.svg";
import spinning from "../assets/icons/spining_text.svg";
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
  const [screenWidth, setScreenWidth] = useState(0);
  const asisCardRef = React.useRef(null);
  const bodyRef = React.useRef(null);
  const [categories, setCategories] = useState({ name: "", id: "" });
  const [searchWord, setSearchWord] = useState("");

  const url = `${import.meta.env.VITE_BACKEND_URL}products`;

  useLayoutEffect(() => {
    // fetchData();

    const displayProduct = allProductData.filter(
      (product) => product.categories.indexOf(categories.id) > -1,
    );
    // console.log({ displayProduct, allProductData });
    setProductData(displayProduct);
  }, [categories]);

  useLayoutEffect(() => {
    // fetchData();

    const displayProduct = allProductData.filter(
      (product) =>
        product.name.toLowerCase().indexOf(searchWord.toLowerCase()) > -1 &&
        product.categories.indexOf(categories.id) > -1,
    );
    console.log({ displayProduct, allProductData });
    setProductData(displayProduct);
  }, [searchWord]);

  useLayoutEffect(() => {
    setIsLoading(true);
    window.scrollTo(0, 0);
    const screenWidth = window.innerWidth;
    setScreenWidth(screenWidth);
    async function fetchData() {
      try {
        const response = await Axios.get(
          `${import.meta.env.VITE_BACKEND_URL}products/category`,
        );
        const responseProduct = await Axios.get(
          `${import.meta.env.VITE_BACKEND_URL}products`,
        );
        setAllProductData(responseProduct.data.products);
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
    <main className="h-full scroll-smooth px-5 max-sm:px-2">
      <section className="mt-10 flex flex-col">
        <section
          className={`relative hidden min-h-[20rem] w-full pl-[16.4rem] transition-all duration-100 sm:flex`}
        >
          <div className="">
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
                // setShowAllProducts(true);
              }}
            />

            <div className="absolute -bottom-16 left-1/2 flex aspect-square w-40 -translate-x-1/2  text-[0.6rem]">
              <p className="absolute bottom-12 left-1/2 w-max -translate-x-1/2">
                {!hideCategory ? "Tap to view Categories" : "Tap to view Items"}
              </p>
              <img
                src={spinning}
                alt="spinning"
                className="slow-spin animate-spin"
              />
            </div>
          </div>
          <div
            ref={bodyRef}
            className="min-h-[324px] w-full flex-1 overflow-hidden"
          >
            <AnimatePresence>
              {hideCategory && (
                <motion.section
                  initial={{ x: -screenWidth, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{
                    x: screenWidth / 2,
                    opacity: 0,
                  }}
                  transition={{
                    type: "tween",
                    duration: 0.5,
                    ease: "backOut",
                    delay: 0.1,
                  }}
                  drag="x"
                  dragConstraints={bodyRef}
                  className={`gap-10 ${
                    !hideCategory
                      ? "hidden "
                      : "ml-6 flex w-max min-w-full cursor-grab flex-nowrap active:cursor-grabbing"
                  }`}
                >
                  {categoriesData?.map((data, index) => (
                    <div key={data.name + index} className="">
                      <CategoryProduct
                        data={data}
                        setCategories={setCategories}
                        setShowProducts={setShowProducts}
                        showProducts={showProducts}
                        setShowAllProducts={setShowAllProducts}
                        index={index}
                        screenWidth={screenWidth}
                      />
                    </div>
                  ))}
                </motion.section>
              )}
            </AnimatePresence>
          </div>
        </section>
        <AnimatePresence>
          {showProducts && (
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
              className="my-14 hidden gap-x-4 backdrop-blur-md sm:flex lg:mx-14"
            >
              {/* <div className="flex w-40 cursor-pointer items-center justify-center gap-x-3 rounded border border-asisDark text-xs uppercase">
                sort by
                <img src={down} alt="down" />
              </div> */}
              <input
                type="text"
                placeholder={`Search for ${categories.name} product . . .`}
                value={searchWord}
                onChange={(e) => setSearchWord(e.target.value)}
                className="w-full rounded border border-asisDark bg-transparent p-2 outline-0"
              />
              {/* <div className="flex w-28 cursor-pointer items-center justify-center gap-x-3 rounded bg-asisDark text-xs uppercase text-white">
                Search
              </div> */}
            </motion.div>
          )}
        </AnimatePresence>
        <div className="hidden sm:flex">
          <AnimatePresence>
            {showProducts && (
              <>
                {productData.length > 0 ? (
                  <section className=" 4xl:grid-cols-7 3xl:grid-cols-6 mt-2 grid w-min min-w-full grid-cols-2 place-items-center items-center gap-10 max-lg:justify-around md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
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
                ) : (
                  <div className="flex w-full flex-col items-center justify-center">
                    <p className="text-2xl font-semibold">No Products Found</p>
                    <p className="text-sm">Please try another search</p>
                  </div>
                )}
              </>
            )}
          </AnimatePresence>
        </div>
        <Mobile
          categoriesData={categoriesData}
          setCategories={setCategories}
          setShowProducts={setShowProducts}
          showProducts={showProducts}
        />
      </section>
    </main>
  );
};

export default Page;
// {
//   showAllProducts && hideCategory && (
//     <section className=" 4xl:grid-cols-7 3xl:grid-cols-6 mt-2 grid w-min min-w-full grid-cols-2 place-items-center items-center gap-10 max-lg:justify-around md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
//       {allProductData.map((product, index) => (
//         <div key={product._id}>
//           <Link to={`/product/${product._id}`}>
//             <Products
//               top={asisCardRef.current?.offsetTop}
//               left={asisCardRef.current?.offsetLeft}
//               name={product.name}
//               price={product.price}
//               collaborations={product.collaborations}
//               images={product.images}
//               index={index}
//             />
//           </Link>
//         </div>
//       ))}
//     </section>
//   );
// }
