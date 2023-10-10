import React from "react";
import CapitalizeSentence from "./CapitalizeSentence";
import A from "../assets/icons/A.svg"
const Products = ({ name, price, collaborations, images }) => {
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
    <div className="relative aspect-[1/1.35] w-[11rem] sm:w-[14rem] cursor-pointer">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-transparent to-asisDark opacity-80"></div>
      <img
        src={`${import.meta.env.VITE_BLOB_URL}${images[0]}`}
        alt="products_img"
        className="h-full w-full rounded-3xl object-cover object-top"
      />

      <img
        src={A}
        alt="A"
        className="absolute left-5 top-4 rotate-180 max-sm:left-3 max-sm:w-3"
      />
      <img
        src={A}
        alt="A"
        className="absolute bottom-4 right-5 max-sm:right-3 max-sm:w-3"
      />
      <div className="absolute bottom-5 left-5 mt-2 font-semibold  max-sm:bottom-4 max-sm:left-3">
        <p className="text-xs font-semibold text-[#ffff]">
          <CapitalizeSentence name={name} />
        </p>
        {/* <div className="flex gap-4">{renderCollaborations()}</div> */}
        <p className="text-xs font-semibold uppercase text-asisGreen">
          {Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(price)}{" "}
          USD
        </p>
      </div>
    </div>
  );
};

export default Products;
// {
//   Intl.NumberFormat("en-NG", {
//     style: "currency",
//     currency: "NGN",
//   }).format(price);
// }
