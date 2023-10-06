import React, { useEffect, useState, useRef } from "react";
import displayCart from "../../assets/icons/displayCart.svg";
import MwobileCategoryProduct from "../../components/mobileCategoryProduct";
import { motion, AnimatePresence } from "framer-motion";
import LimitedParagraph from "./LimitedParagraph";
const Mobile = ({
  categoriesData,
  setCategories,
  setShowProducts,
  showProducts,
}) => {
  const [hideCategory, setHideCategory] = useState(false);
  const [dimension, setDimension] = useState({ w: 0, h: 0 });
  const ref = useRef();

  useEffect(() => {
    const { width, height, top, left } = ref.current.getBoundingClientRect();

    setDimension({ w: width, h: height });
  }, []);

  return (
    <div ref={ref} className="hidden flex-col justify-center gap-5 max-sm:flex">
      <img
        src={displayCart}
        alt="displayCart"
        className=" z-20 mx-auto w-44 cursor-pointer"
        onClick={() => {
          setHideCategory((prev) => !prev);
        }}
      />
      <AnimatePresence>
        {hideCategory && (
          <motion.div
            initial={{ y: -300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -300, opacity: 0 }}
            transition={{ delay: 0.05, type: "tween" }}
            className=""
          >
            <div className="flex justify-center">
              <div className="grid grid-cols-2  justify-center gap-4">
                {categoriesData?.map((data, index) => (
                  <div key={data.name + index}>
                    <MwobileCategoryProduct
                      data={data}
                      x={dimension.w / 2}
                      y={dimension.h / 2}
                      setCategories={setCategories}
                      setShowProducts={setShowProducts}
                      showProducts={showProducts}
                      index={index}
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Mobile;
