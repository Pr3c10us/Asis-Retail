import React from "react";
import discover_img from "../../assets/images/discover_img.png";

const Discover = () => {
  return (
    // Discover section
    <section className="mt-12 flex justify-end pt-3 max-md:block">
      {/* Title and text */}
      <article className="relative text-6xl font-normal uppercase">
        {/* First line */}
        <p className="mr-0 w-96 text-right">
          <span className="-mr-1 font-light">/</span>W
          <em className="font-light">E</em> CRE<em className="font-light">a</em>
          TE
        </p>
        {/* Second line */}
        <p className="absolute left-2/3 w-[32rem] max-md:w-full max-md:relative">
          F<em className="font-light">a</em>SH
          <span className="text-[#FFFFFF]">
            I<em className="font-light">o</em>N AR
            <em className="font-light">t</em> F<em className="font-light">o</em>
            R
          </span>
        </p>
        {/* Third line */}
        <p className="absolute right-6 top-[125px]">
          ev<em className="font-light">e</em>ry<em className="font-light">o</em>
          ne
        </p>
        {/* Discover button */}
        <div className="absolute bottom-0 right-6 flex h-[131px] w-[131px] items-center justify-center rounded-full bg-[#A67700]">
          <p className="rounded-full text-xs font-semibold text-[#FFFFFF]">
            discover
          </p>
        </div>
      </article>
      {/* Image */}
      <article className="">
        <img src={discover_img} alt="discover_img" />
      </article>
    </section>
  );
};

export default Discover;
