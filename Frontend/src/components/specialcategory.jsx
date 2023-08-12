import React, { useState } from "react";
import useFetch from "./useFetch.jsx";
import Products from "./products.jsx";
import { Link } from "react-router-dom";
import left_button from "../assets/icons/left_button.svg";
import right_button from "../assets/icons/right_button.svg";
import up_arrow from "../assets/icons/up_arrow.svg";

const SpecialCategory = ({ name }) => {
  const { data } = useFetch("http://localhost:5000/api/products/");
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (increment) => {
    const container = document.querySelector(".scroll-container");
    if (container) {
      const newPosition = Math.max(
        0,
        Math.min(
          container.scrollWidth - container.clientWidth,
          scrollPosition + increment,
        ),
      );
      setScrollPosition(newPosition);
      container.scrollLeft = newPosition;
    }
  };

  return (
    <section className="relative mt-14 mb-2 border-t-[1.5px] border-[#ACACAC80] pt-12 uppercase">
      <article className=" flex w-full items-start justify-between text-right text-[28px]/[32px] font-[600] mb-6">
        <p >{name}</p>
        <div className="">
          <div className="ml-[auto] flex w-[96px] items-center justify-between">
            <img
              src={left_button}
              alt="left_button"
              className="w-[32px] cursor-pointer"
              onClick={() => handleScroll(-310)}
            />
            <img
              src={right_button}
              alt="right_button"
              className="w-[32px] cursor-pointer"
              onClick={() => handleScroll(310)}
            />
          </div>
        </div>
      </article>
      <article className="scroll-container scroll-snap-x mandatory scrollbar-width-thin scrollbar-thumb-gray-500 w-[100%] overflow-x-scroll scroll-smooth pb-4 transition-all duration-300">
        {data && (
          <div className="flex gap-10">
            {data.products.map((data) => (
              <div key={data._id}>
                <Link to={`/product/${data._id}`}>
                  <Products
                    name={data.name}
                    price={data.price}
                    collaborations={data.collaborations}
                    images={data.images}
                  />
                </Link>
              </div>
            ))}
          </div>
        )}
      </article>
    </section>
  );
};

export default SpecialCategory;
