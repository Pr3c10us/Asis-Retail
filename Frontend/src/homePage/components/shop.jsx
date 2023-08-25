import React from "react";
import shop_img from "../../assets/images/shop_img.png";
import shop_img2 from "../../assets/images/shop_img2.png";
import img_border from "../../assets/icons/img_border.svg";
import up_arrow from "../../assets/icons/up_arrow.svg";

const Shop = () => {
  return (
    <section
      className=" relative mt-24 flex items-start 
     justify-between border-t border-asisDark pt-3 max-md:block"
    >
      <article className="basis-1/5">
        <div className="mt-10 w-48 text-4xl	font-medium uppercase">
          <p className="">
            ch<em className="font-normal">o</em>
            <em className="font-normal">o</em>se
          </p>
          <p className="text-right">
            y<em className="font-normal">o</em>ur
          </p>
          <p>
            <em className="font-normal">o</em>wn s
            <em className="font-normal">i</em>n
          </p>
        </div>
        <div className="mt-10 w-80 text-sm  uppercase">
          stylish and versatile clothing pieces that are designed to GIVE MORAL
          AND MEAINING. ALL FASHION PERKS INCLUDING COLLABS WITH BRANDS THAT
          SERVE THE SAME PURPOSE.
        </div>
        <div className="absolute bottom-0 w-3/12 ">
          <div className="ml-auto flex h-8 w-28 cursor-pointer items-center justify-center gap-2 border border-black uppercase">
            <p className="text-xs font-semibold">shop now</p>
            <img src={up_arrow} alt="up_arrow" />
          </div>
        </div>
      </article>
      <article className="flex basis-8/12 items-start justify-between gap-5 max-xl:block">
        <article className="relative h-[40rem] w-[30rem] max-md:h-full max-md:w-full">
          <div className="mt-7 flex h-[38rem] w-[29rem] items-center justify-center max-md:h-full max-md:w-full">
            <img
              src={shop_img}
              alt="limited_img"
              className=" h-11/12 ml-4 mt-1 w-11/12 object-cover object-top"
            />
          </div>
          <img
            src={img_border}
            alt="img_border"
            className="absolute bottom-2 right-1"
          />
          <img
            src={img_border}
            alt="img_border"
            className="absolute left-1 top-8 rotate-180"
          />
          <img
            src={img_border}
            alt="img_border"
            className="absolute right-1 top-8 rotate-[270deg]"
          />
          <img
            src={img_border}
            alt="img_border"
            className="let-1 absolute bottom-2 rotate-90"
          />
        </article>
        <article className="">
          <div className="mt-14 h-96 w-[27rem] max-md:h-full max-md:w-full">
            <img src={shop_img2} alt="shop_img2" className="h-full w-full" />
          </div>
        </article>
      </article>
    </section>
  );
};

export default Shop;
