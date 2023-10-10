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

  return (
    <div className="flex flex-col items-center justify-center sm:hidden">
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
          className="slow-spin absolute -bottom-16 -z-10 flex aspect-square w-5/6 animate-spin"
        />
        <p className="slow-ping absolute -bottom-5 left-1/2 w-max -translate-x-1/2 animate-pulse text-[0.45rem] font-bold uppercase text-black">
          {!hideCategory ? "Tap to view Categories" : "Tap on categories to view Items"}
        </p>
      </div>
      <AnimatePresence>
        {hideCategory && (
          <div className=" mt-24 grid w-full grid-cols-2 place-items-center items-center gap-3">
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
