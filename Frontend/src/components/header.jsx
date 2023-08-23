import React from "react";
// importing icons
import Bracket from "../assets/icons/bracket.svg";
import Logo from "../assets/icons/logo.svg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = ({ setHideCart, setHideWish, cartLength, wishlistData }) => {
  const location = useLocation();
  React.useEffect(() => {
    console.log(location.pathname);
  }, [location.pathname]);
  return (
    <div className=" sticky top-[0px]  z-20 flex w-full backdrop-blur-md justify-end pt-5 uppercase">
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
            <img src={Bracket} alt="Bracket" />
            <p className="">
              cart <span className="">({cartLength || 0})</span>
            </p>
            <img src={Bracket} alt="Bracket" className="rotate-180" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
