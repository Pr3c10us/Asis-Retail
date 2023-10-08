import React, { useEffect, useState, useRef } from "react";
import displayCart from "../../assets/icons/displayCart.svg";
import MobileCategoryProduct from "../../components/mobileCategoryProduct";
import spinning from "../../assets/icons/spining_text.svg";

import { motion, AnimatePresence } from "framer-motion";
const Mobile = ({
  categoriesData,
  setCategories,
  setShowProducts,
  showProducts,
}) => {
  const [hideCategory, setHideCategory] = useState(false);
  // const [dimension, setDimension] = useState({ w: 0, h: 0 });
  // const ref = useRef();

  // useEffect(() => {
  //   const { width, height, top, left } = ref.current.getBoundingClientRect();

  //   setDimension({ w: width, h: height });
  // }, []);

  return (
    <div className="hidden flex-col items-center justify-center max-sm:flex">
      <div className="relative flex items-center justify-center">
        <img
          src={displayCart}
          alt="displayCart"
          className=" z-30 mx-auto w-44 cursor-pointer"
          onClick={() => {
            setHideCategory((prev) => !prev);
          }}
        />
        <img
          src={spinning}
          alt="spinning"
          className="slow-spin absolute -bottom-16 left-1 -z-10 flex animate-spin"
        />
        <p className="slow-ping absolute -bottom-5 left-1/2 -translate-x-1/2 w-max animate-pulse text-[8px] font-bold uppercase text-black">
          tap to view all category
        </p>
      </div>
      <AnimatePresence>
        {hideCategory && (
          
            <div className=" mt-24 grid grid-cols-2 gap-3 w-full">
              {categoriesData?.map((data, index) => (
                <div key={data.name + index}>
                  <MobileCategoryProduct
                    data={data}
                    setCategories={setCategories}
                    setShowProducts={setShowProducts}
                    showProducts={showProducts}
                    index={index}
                  />
                </div>
              ))}
            </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Mobile;

{
  /* <div className="">
  <AnimatePresence>
    {hideCategory && (
      <motion.div
      // initial={{ y: -300, opacity: 0 }}
      // animate={{ y: 0, opacity: 1 }}
      // exit={{ y: -300, opacity: 0 }}
      // transition={{ delay: 0.05, type: "tween" }}
      >
        <div className="mt-20 grid grid-cols-2 items-center justify-between gap-3">
          {categoriesData?.map((data, index) => (
            <div key={data.name + index}>
              <MobileCategoryProduct
                data={data}
                setCategories={setCategories}
                setShowProducts={setShowProducts}
                showProducts={showProducts}
                index={index}
              />
            </div>
          ))}
        </div>
      </motion.div>
    )}
  </AnimatePresence>
</div>; */
}
