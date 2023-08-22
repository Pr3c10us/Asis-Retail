import React from "react";
import limited_img from "../../assets/images/limited_img.png";
import img_border from "../../assets/icons/img_border.svg";
import down_arrow from "../../assets/icons/down_arrow.svg";
import { Link } from "react-router-dom";

const Limited_collection = () => {
  const superSpecialCategoryData = [
    "pre-fall 2023",
    "uncommon [limited time sale]",
    "essentials 2023",
  ];
  return (
    <section className="relative mt-24 flex items-start justify-between border-t border-asisDark pt-3 max-md:block">
      <article className="mt-6  h-full basis-6/12 uppercase">
        <div className="w-64 text-4xl font-medium ">
          <p>
            <span className="font-normal">/</span>limit
            <em className="font-normal">e</em>d{" "}
            <span className="font-normal">
              c<em>o</em>llecti<em>o</em>n
            </span>
          </p>
        </div>
        <article className="absolute bottom-0 w-6/12 border-t border-[#5C5C5C] text-base font-normal uppercase text-[#5C5C5C]">
          {superSpecialCategoryData.map((data, index) => {
            return (
              <div key={index}>
                <Link to={`/superspecialcategory/${data}`}>
                  <div className="flex cursor-pointer justify-between border-b border-[#5C5C5C] py-2">
                    {data}
                    <img src={down_arrow} alt="down_arrow" />
                  </div>
                </Link>
              </div>
            );
          })}
        </article>
      </article>
      <article className="relative h-[39rem] w-[30rem] max-md:h-full max-md:w-full">
        <div className="mt-5 flex h-[38rem] w-[29rem] items-center justify-center  max-md:h-full max-md:w-full">
          <img
            src={limited_img}
            alt="limited_img"
            className=" h-11/12 ml-4 mt-1 w-11/12 object-cover object-top"
          />
        </div>
        <img
          src={img_border}
          alt="img_border"
          className="absolute bottom-0 right-0"
        />
        <img
          src={img_border}
          alt="img_border"
          className="absolute top-6 rotate-180"
        />
        <img
          src={img_border}
          alt="img_border"
          className="absolute right-0 top-6 rotate-[270deg]"
        />
        <img
          src={img_border}
          alt="img_border"
          className="absolute bottom-0 rotate-90"
        />
      </article>
    </section>
  );
};

export default Limited_collection;
