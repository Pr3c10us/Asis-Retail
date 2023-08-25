import React from "react";
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
      <div className="aspect-[9/16] h-[312px] w-[239px] max-md:w-[172px] max-md:h-[235px] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-asisDark opacity-50 rounded-3xl"></div>
        <img
          src={`${import.meta.env.VITE_BLOB_URL}${images[0]}`}
          alt="products_img"
          className="h-full w-full object-cover object-top rounded-3xl"
        />
        <img src={A} alt="A" className="absolute top-5 left-5 rotate-180"/>
        <img src={A} alt="A" className="absolute bottom-5 right-5 "/>
      <div className="mt-2 font-semibold uppercase absolute bottom-5 left-5">
        
        <p className="text-xs text-[#ffff] font-semibold">{name}</p>
        {/* <div className="flex gap-4">{renderCollaborations()}</div> */}
        <p className="text-xs font-semibold text-asisGreen">
          {Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(price)}{" "}
          usd
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
