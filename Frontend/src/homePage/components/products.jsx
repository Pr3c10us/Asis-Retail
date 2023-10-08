import React from "react";
import A from "../../assets/icons/A.svg";
import { motion } from "framer-motion";
import CapitalizeSentence from "../../components/CapitalizeSentence";

const Products = ({
  name,
  price,
  index,
  collaborations,
  images,
  top,
  left,
}) => {
  const renderCollaborations = () => {
    if (collaborations) {
      return collaborations.map((data, index) => (
        <p key={index} className="text-xs text-[#17A500]">
          {data}
        </p>
      ));
    }
    return null;
  };

  return (
    <motion.div
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
      transition={{ delay: 0.1 * index }}
      className="relative aspect-[9/16] h-[312px] w-[239px] cursor-pointer max-md:h-[235px] max-md:w-[172px]"
    >
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-transparent to-asisDark opacity-50"></div>
      <img
        src={`${import.meta.env.VITE_BLOB_URL}${images[0]}`}
        alt="products_img"
        className="h-full w-full rounded-3xl object-cover object-top"
      />
      <img src={A} alt="A" className="absolute left-5 top-5 rotate-180" />
      <img src={A} alt="A" className="absolute bottom-5 right-5 " />
      <div className="absolute bottom-5 left-5 mt-2 font-semibold lowercase">
        <p className="text-xs font-semibold text-[#ffff] uppercase">
          <CapitalizeSentence name={name} />
          </p>
        {/* <div className="flex gap-4">{renderCollaborations()}</div> */}
        <p className="text-xs font-semibold text-asisGreen">
          {Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(price)}{" "}
          usd
        </p>
      </div>
    </motion.div>
  );
};

export default Products;
// {
//   Intl.NumberFormat("en-NG", {
//     style: "currency",
//     currency: "NGN",
//   }).format(price);
// }
