import React from "react";
// importing icons
import header_logo from "../assets/icons/header_logo.svg";
import globe from "../assets/icons/globe.svg";
import down from "../assets/icons/down.svg";
import flag from "../assets/icons/flag.svg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = ({ setHideCart, setHideWish, cartLength, wishlistData }) => {
  const location = useLocation();
  React.useEffect(() => {
    console.log(location.pathname);
  }, [location.pathname]);
  return (
    <div className=" sticky top-[-66px] z-10 w-full pt-[10px] uppercase">
      <section className=" flex justify-end px-4 py-3">
        <div className="flex gap-6">
          <div className="flex w-[139px] cursor-pointer items-center gap-3 border border-asisDark px-[8px] py-[5px] font-[500] text-asisDark ">
            <img src={globe} alt="globe" />
            <p className="text-xs">language</p>
            <img src={down} alt="down" />
          </div>
          <div className="item-center flex h-[32px] w-[99px]  cursor-pointer justify-center border border-asisDark px-[8px] py-[12px] font-[500] text-asisDark">
            <div className="flex items-center gap-2">
              <img src={flag} alt="globe" />
              <p className="text-xs">ngn</p>
              <img src={down} alt="down" />
            </div>
          </div>
        </div>
      </section>
      <div className="flex items-center justify-between border-y border-asisDark backdrop-blur-md ">
        <div className="flex flex-1">
          <Link
            to="/shop"
            className="flex flex-1 cursor-pointer justify-center px-16 py-2.5 text-[14px]/[21px] font-[600] text-[#] text-asisDark  max-lg:hidden"
          >
            <p className="">shop</p>
          </Link>
          <div
            className="flex flex-1 cursor-pointer
           justify-center border-x border-asisDark 
           px-16 py-2.5 text-[14px]/[21px] font-[600] 
           text-asisDark max-lg:border-l-0 max-md:w-full"
          >
            <div className="flex items-center gap-4">
              <p>explore</p>
              <img src={down} alt="down" />
            </div>
          </div>
        </div>
        <Link className="flex flex-1 justify-center" to="/homepage">
          <img
            src={header_logo}
            alt="header_logo"
            className="ml-5 cursor-pointer"
          />
        </Link>
        <article className="flex flex-1 justify-end">
          {location.pathname !== "/checkout" && (
            <div
              onClick={() => {
                setHideCart((prev) => !prev);
                // setHideWish(false);
              }}
              className="flex min-w-[172px] flex-1 cursor-pointer justify-center border-l border-asisDark px-16 py-2.5 text-[14px]/[21px] font-[600] text-[#] text-asisDark  max-lg:hidden"
            >
              <p className="">
                cart <span className="">({cartLength || 0})</span>
              </p>
            </div>
          )}
          <div className="flex min-w-[108px] flex-1 cursor-pointer justify-center border-l border-asisDark px-4 py-2.5 text-[14px]/[21px] font-[600] text-[#] text-asisDark max-lg:border-l max-md:w-full ">
            <p className="">sign in</p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Header;
