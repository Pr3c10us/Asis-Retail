import React from "react";
// importing icons
import Bracket from "../assets/icons/bracket.svg";
import Logo from "../assets/icons/logo.svg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import cartIcon from "../assets/icons/cartIcon.svg"

const Header = ({ setHideCart, setHideWish, cartLength, wishlistData }) => {
  const location = useLocation();
  React.useEffect(() => {
    console.log(location.pathname);
  }, [location.pathname]);
  return (
    <div className=" sticky top-[0px]  z-50 flex w-full backdrop-blur-md justify-end py-2 uppercase px-8 max-sm:px-4">
      <div className=" flex w-[52%] items-center justify-between ">
        <img src={Logo} alt="logo" />

        {location.pathname !== "/checkout" && (
          <div
            onClick={() => {
              setHideCart((prev) => !prev);
              // setHideWish(false);
            }}
            className="flex cursor-pointer justify-center gap-1 text-sm font-semibold  text-asisDark "
          >
            <img src={Bracket} alt="Bracket" className="max-md:hidden"/>
            <p className="max-md:hidden">
              cart <span className="">({cartLength || 0})</span>
            </p>
            <img src={cartIcon} alt="cartIcon" className="hidden max-md:block"/>
            <img src={Bracket} alt="Bracket" className="rotate-180 max-md:hidden" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
