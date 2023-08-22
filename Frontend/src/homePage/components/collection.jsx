import React from "react";
import displayCat from "../../assets/icons/display_cat.svg";
import greenDisplay from "../../assets/icons/green_display.svg";
const Collection = () => {
  return (
    <section className="z-50 mt-8 flex cursor-pointer justify-center uppercase">
      <article className="relative z-20">
        <img src={displayCat} alt="displayCat" />
        <div className="absolute -bottom-20 left-7 -z-10">
          <img
            src={greenDisplay}
            alt="greenDisplay"
            className="animate-spin-slow"
          />
        </div>
        <p className="absolute -bottom-5 left-14 ml-[2px] animate-pulse text-[9px] font-semibold text-[#0B0B0B]">
          click to see more items
        </p>
      </article>
    </section>
  );
};

export default Collection;
