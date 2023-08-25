import React from "react";
import collection_img from "../../assets/images/collection_img.png";
import img_border from "../../assets/icons/img_border.svg";
import collection_arrow from "../../assets/icons/collection_arrow.svg";
import collection_small_arrow from "../../assets/icons/collection_small_arrow.svg";
import collection_ball from "../../assets/icons/collection_ball.svg";
import collection_img_2 from "../../assets/images/collection_img_2.png";
import left_button from "../../assets/icons/left_button.svg";
import right_button from "../../assets/icons/right_button.svg";

const Collection = () => {
  // Fashion data containing details of each item
  const fashionData = [
    {
      title: "ASIS HIGH FASHION ALTE HOODIE",
      description:
        "Introducing the asis High Fashion Alte Hoodie: A striking blend of contemporary style and bold expression. Crafted with meticulous a...",
      releaseDate: "13th, February, 2023",
    },
    {
      title: "ASIS HIGH FASHION ALTE HOODIE",
      description:
        "Introducing the Aisi High Fashion Alte Hoodie: A striking blend of contemporary style and bold expression. Crafted with meticulous a...",
      releaseDate: "13th, February, 2023",
    },
    {
      title: "ASIS HIGH FASHION ALTE HOODIE",
      description:
        "Introducing the Aisi High Fashion Alte Hoodie: A striking blend of contemporary style and bold expression. Crafted with meticulous a...",
      releaseDate: "13th, February, 2023",
    },
    {
      title: "ASIS HIGH FASHION ALTE HOODIE",
      description:
        "Introducing the Aisi High Fashion Alte Hoodie: A striking blend of contemporary style and bold expression. Crafted with meticulous a...",
      releaseDate: "13th, February, 2023",
    },
    // ... (more fashion data entries)
  ];

  // Determine alignment based on the number of fashion items
  const align = fashionData.length < 4 ? "items-start mt-10" : "items-center";

  return (
    // Collection section containing both sides
    <section className="flex items-start  border-b border-asisDark  ">
      {/* Left side */}
      <section className="basis-[47%] border-r border-asisDark pb-9 ">
        {/* Collection title */}
        <article className="mt-7 w-80 text-5xl  uppercase text-asisDark ">
          <p>/new 2023 </p>
          <p className="text-right">summer</p>
          <p>collection</p>
        </article>
        {/* Collection description */}
        <article>
          <p className="ml-auto mr-5 mt-7 w-[25rem] text-sm font-semibold max-xl:w-full">
            {/* Collection description text */}
          </p>
        </article>
        {/* Collection image */}
        <div className="relative mx-auto mt-5 flex max-w-[30rem] justify-center pb-10 ">
          <img
            src={collection_img}
            alt="collection_img"
            className="h-64 max-w-[32rem] overflow-hidden bg-[url('./assets/images/collection_frame.png')] bg-contain bg-no-repeat object-cover  object-top p-3"
          />
          {/* Asis x Nike tag */}
          <em className="absolute  bottom-0 left-0 text-xs font-semibold uppercase">
            [asis x nike]
          </em>
        </div>
        {/* Shop Now button */}
        <div className="ml-auto mr-5 flex w-40  cursor-pointer items-center justify-center gap-2 border border-asisDark py-2">
          <p className="text-base font-medium uppercase text-asisDark">
            shop now
          </p>
          <img src={collection_arrow} alt="collection_arrow" />
        </div>
      </section>
      {/* Right side */}
      <section
        className={`flex basis-[53%]  justify-between max-xl:flex-col-reverse ${align}`}
      >
        <div className="">
          {/* Map through fashion data */}
          {fashionData.map((item, index) => (
            <section
              key={index}
              className="w-72 border-b border-asisDark px-9 py-7 max-md:my-10 max-md:px-0"
            >
              <div className="w-[15rem]">
                {/* Fashion title */}
                <p className="w-11/12 border-b border-asisDark pb-1 text-xs font-semibold">
                  <span className="mr-1">/</span> {item.title}
                </p>
                {/* Fashion description */}
                <p className="py-2 text-[10px]/[10.5px] ">{item.description}</p>
                <div className="flex justify-between">
                  <div className="flex items-center gap-1">
                    <p className="text-[7px]/[7px] font-medium">
                      - Released on
                    </p>
                    <img src={collection_ball} alt="collection_ball" />
                    {/* ... (more date-related elements) */}
                  </div>
                  {/* Right arrow */}
                  <div className="">
                    <img
                      src={collection_small_arrow}
                      alt="collection_small_arrow"
                    />
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
        {/* Fashion image and pagination */}
        <div className="relative ">
          <div className="h-[26rem] w-80">
            <img
              src={collection_img_2}
              alt="collection_img_2"
              className="h-full w-full object-cover object-top"
            />
          </div>
          {/* Pagination */}
          <div className="absolute mt-5 flex w-full items-center justify-between">
            <img
              src={left_button}
              alt="left_button"
              className="cursor-pointer"
            />
            <div className="flex items-center gap-2">
              <p className="text-base font-medium text-black">1</p>
              <div className="h-1 w-20 rounded-sm bg-[#B0B0B0]"></div>
              <p className="text-base font-medium text-black">4</p>
            </div>
            <img
              src={right_button}
              alt="right_button"
              className="cursor-pointer"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Collection;
