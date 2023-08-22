import React, { useState, useEffect } from "react";
import down from "../../assets/icons/down.svg";
import frame from "../../assets/icons/frame_border.svg";
const Product_detail = ({ data }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (data.images && data.images.length > 0) {
      setSelectedImage(data.images[0]);
    }
  }, [data]);
  const handleThumbnailClick = (img) => {
    setSelectedImage(img);
  };
  console.log(data);
  return (
    <div className="mt-9 uppercase">
      <section className="flex items-start justify-center gap-[10%] ">
        <article className="basis-[40%]  ">
          <div className="h-[80vh] w-[511px] border-[2px] border-[#130c0c]">
            <img
              src={`https://asisretail.blob.core.windows.net/asisretailimages/${selectedImage}`}
              alt="img"
              className="h-full w-full object-cover object-top"
            />
          </div>

          <article className="mt-8 flex w-full items-center flex-wrap gap-x-7 gap-y-4 px-4">
            {data.images.map((img, index) => {
              return (
                <div key={index} className="">
                  <div
                    className={`relative flex h-[107px] w-[100px] cursor-pointer  items-center justify-center transition duration-300 ${
                      img === selectedImage
                        ? "mb-6 bg-[url('./assets/images/frame.png')] transition-all duration-300"
                        : "bg-transparent transition-all duration-300"
                    } `}
                  >
                    <div
                      className={`h-[84.96px] w-[82px] border-[1px] border-[ x ] transition duration-300  ${
                        img === selectedImage
                          ? ""
                          : "absolute inset-0 bg-black opacity-50"
                      } `}
                      onClick={() => handleThumbnailClick(img)}
                    >
                      <img
                        src={`https://asisretail.blob.core.windows.net/asisretailimages/${img}`}
                        alt="img"
                        className="h-full w-full object-cover object-top"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </article>
        </article>

        <article className="basis-[40%]  px-1">
          <div className="mb-8 text-[32px]/[32px] font-[500] text-[#17A500]">
            {data.name}
          </div>
          <div className="mb-8 flex flex-wrap gap-4">
            <div className="flex h-[32px] w-[43px] cursor-pointer items-center justify-center border-[1.5px] border-[#0B0B0B] text-[12px]/[16px] font-[600] text-[#0B0B0B]">
              3.5
            </div>
          </div>
          <div className="mb-10 text-[14px]/[19.5px] font-[600] text-[#0B0B0B]">
            {data.description}
          </div>
          <div className="mb-12 flex cursor-pointer items-center justify-between border-b-[1px] border-b-[#0B0B0B]  pb-2  text-[16px]/[24px] font-[400] text-[#0B0B0B]">
            <p className="">colors</p>
            <img src={down} alt="down" className="w-[20px]" />
          </div>
          <div className="mb-3 flex h-[45px] w-full cursor-pointer items-center justify-center rounded-[7px] bg-[#0B0B0B] text-[12px]/[12px] font-[600] text-[#FFFFFF]">
            add to cart- {data.price?.toLocaleString()} ngn
          </div>
          <div className="mb-11 flex h-[45px] w-full cursor-pointer items-center justify-center rounded-[7px] border-[1px] border-[#0B0B0B] bg-[transparent] text-[12px]/[12px] font-[600] text-[#0B0B0B]">
            add to wishlist
          </div>
          <article className="border-t-[1px] border-[#0B0B0B] text-[14px]/[24px] font-[400] text-[#0B0B0B]">
            <div className="flex w-full cursor-pointer items-center justify-between border-b-[1px] border-[#0B0B0B] py-3">
              <p>product details</p>
              <img src={down} alt="down" className="w-[20px]" />
            </div>
            <div className="flex w-full cursor-pointer items-center justify-between border-b-[1px] border-[#0B0B0B] py-3">
              <p>size guide</p>
              <img src={down} alt="down" className="w-[20px]" />
            </div>
          </article>
        </article>
      </section>
    </div>
  );
};

export default Product_detail;
