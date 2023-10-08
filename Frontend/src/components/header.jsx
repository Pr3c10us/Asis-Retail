import React from "react";
// importing icons
import Bracket from "../assets/icons/bracket.svg";
import Logo from "../assets/icons/logo.svg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import cartIcon from "../assets/icons/cartIcon.svg";

const Header = ({ setHideCart, setHideWish, cartLength, wishlistData }) => {
  const location = useLocation();
  // React.useEffect(() => {
  //   console.log(location.pathname);
  // }, [location.pathname]);
  return (
    <div className=" sticky top-[0px]  z-30 flex w-full justify-end px-8 py-2 uppercase backdrop-blur-md max-sm:px-4">
      <div className=" flex max-sm:w-[54%] w-1/2 items-center justify-between ">
        <Link to="/homepage">
        <img src={Logo} alt="logo" className="cursor-pointer" />

        </Link>

        {location.pathname !== "/checkout" && (
          <div
            onClick={() => {
              setHideCart((prev) => !prev);
              // setHideWish(false);
            }}
            className="flex cursor-pointer justify-center gap-1 text-sm font-semibold  text-asisDark "
          >
            <img src={Bracket} alt="Bracket" className="max-md:hidden" />
            <p className="max-md:hidden">
              cart <span className="">({cartLength || 0})</span>
            </p>
            <img
              src={cartIcon}
              alt="cartIcon"
              className="hidden max-md:block"
            />
            <img
              src={Bracket}
              alt="Bracket"
              className="rotate-180 max-md:hidden"
            />
          </div>
        )}
         {location.pathname == "/checkout" && 
         <div
         onClick={() => {
           setHideCart((prev) => !prev);
           // setHideWish(false);
         }}
         className="hidden cursor-pointer justify-center gap-1 text-sm font-semibold  text-asisDark max-lg:flex"
       >
         <img src={Bracket} alt="Bracket" className="max-md:hidden" />
         <p className="max-md:hidden">
           cart <span className="">({cartLength || 0})</span>
         </p>
         <img src={cartIcon} alt="cartIcon" className="hidden max-md:block" />
         <img
           src={Bracket}
           alt="Bracket"
           className="rotate-180 max-md:hidden"
         />
       </div>
         }
        
      </div>
    </div>
  );
};

export default Header;
