import React from "react";
// importing icons
import aceLogo from "../assets/icons/aceLogo.svg";
const Header = ({setHideCart}) => {
  return (
    <div className=" sticky top-[0px] z-20 flex w-full items-center justify-between bg-[#FFFFFF] py-2 uppercase">
      <p className="text-[12px]/[20px] font-[600] text-[#0e0a0a] cursor-pointer">
        {" "}
        [ wishlist (0) ]
      </p>
      <img src={aceLogo} alt="aceLogo" />
      <p className="text-[12px]/[20px] font-[600] text-[#0e0a0a] cursor-pointer" onClick={()=> {
        setHideCart(prev=> !prev)
      }}>
        {" "}
        [ cart (0) ]
      </p>
    </div>
  );
};

export default Header;
