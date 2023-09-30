import React, { useState } from "react";
import displayCart from "../../assets/icons/displayCart.svg";
import MwobileCategoryProduct from "../../components/mobileCategoryProduct";
import { motion, AnimatePresence } from "framer-motion";
const Mobile = ({
  categoriesData,
  setCategories,
  setShowProducts,
  showProducts,
}) => {

    const [hideCategory, setHideCategory] = useState(false)

  return (
    <div className="hidden max-sm:flex justify-center gap-5 flex-col">
 
      <img
        src={displayCart}
        alt="displayCart"
        className=" z-20 w-44 cursor-pointer mx-auto"
        onClick={()=> {
            setHideCategory(prev => !prev)
        }}
      />
      <AnimatePresence>
     {hideCategory && <motion.div
              initial={{
                y:
                  // make y the height of the asisCardRef
                  -50,
                opacity: 0,
              }}
              animate={{ y: 0, x: 0, opacity: 1 }}
              exit={{
                y:
                  // make y the
                  -50,
                opacity: 0,
              }}
              className=""
            >
              <div className="flex justify-center">
              <div className="grid grid-cols-2  gap-4 justify-center">
      {categoriesData?.map((data, index) => (
        <div key={data.name + index}>
          <MwobileCategoryProduct
            data={data}
            setCategories={setCategories}
            setShowProducts={setShowProducts}
            showProducts={showProducts}
            index={index}
          />
        </div>
      ))}
      </div>
              </div>
      
      </motion.div>}
      </AnimatePresence>
    </div>
  );
};

export default Mobile;
