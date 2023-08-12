import React from "react";

const Products = ({ name, price, collaborations, images }) => {
  const renderCollaborations = () => {
    if (collaborations) {
      return collaborations.map((data, index) => (
        <p key={index} className="text-[12px]/[16px] text-[#17A500]">
          {data}
        </p>
      ));
    }
    return null;
  };

  return (
    <div className="h-[312px] w-[239px] cursor-pointer relative rounded-[20px] border-[0px] border-[white]">
        <img
          src={`https://asisretail.blob.core.windows.net/asisretailimages/${images[0]}`}
          alt="products_img"
          className="h-full w-full object-cover object-top  border-[1px] border-[#878787] rounded-[20px]"
        />
      <div className="mt-2 font-[600] uppercase absolute bottom-4 left-4">
        <p className="text-[12px]/[14.52px] text-[#FFFFFF]">{name}</p>
        <div className="flex gap-4">{renderCollaborations()}</div>
        <p className="text-[12px]/[14.52px] text-[#17A500] mt-2">{price?.toLocaleString()} ngn</p>
      </div>
    </div>
  );
};

export default Products;
