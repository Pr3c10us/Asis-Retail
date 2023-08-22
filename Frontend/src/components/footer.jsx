import React from "react";
import footer_logo from "../assets/icons/footer_logo.svg";
import footer_img from "../assets/images/footer_img.png";
import footer_icon from "../assets/icons/footer_icon.svg";
import facebook from "../assets/icons/facebook.svg";
import Instagram from "../assets/icons/Instagram.svg";
import Reddit from "../assets/icons/Reddit.svg";
import Twitter from "../assets/icons/Twitter.svg";

const Footer = () => {
  return (
    <div className="grid grid-cols-4 max-lg:grid-cols-2 border-[#0B0B0B] border-t w-full mt-20">
      {/* Section 1 */}
      <div className="uppercase border-b border-[#0B0B0B]">
        {/* Newsletter subscription */}
        <p className="w-[512px] max-md:w-full font-semibold text-[20px]/[32px] mt-2 ml-3">
          /subsricb<em className="font-normal">e</em> to our n
          <em className="font-normal">e</em>wslett<em className="font-normal">e</em>r & be th
          <em className="font-normal">e</em> first to he<em className="font-normal">a</em>r ab
          <em className="font-normal">o</em>ut new pr<em className="font-normal">o</em>ducts
          & <em className="font-normal">e</em>vents
        </p>
      </div>
      <div className="border-b border-[#0B0B0B]"></div>

      {/* Section 2 */}
      <div className="border-b border-l border-[#0B0B0B] relative max-lg:border-l-0">
        {/* Email input for subscription */}
        <input
          type="email"
          placeholder="ENTER YOUR EMAIL ADDRESS"
          className="w-full absolute bottom-3 outline-0 font-semibold text-[12px]/[16px] text-[#3C3C3C] px-5 bg-[transparent]"
        />
      </div>
      <div className="border-b border-l border-[#0B0B0B] h-[96px] uppercase relative pl-5">
        {/* Agree & subscribe button */}
        <div className="absolute bottom-[5px] flex items-center gap-2 cursor-pointer">
          <p className="font-semibold text-[12px]/[16px] text-[#0B0B0B] ">
            agree & subscribe
          </p>
          <img src={footer_icon} alt="footer_icon" />
        </div>
      </div>
      
      {/* Section 3 */}
      <div className="border-r border-[#0B0B0B]  h-[392px] pt-7 pr-4 pl-3 border-b">
        {/* Image */}
        <div className="w-[305px] h-[348px] max-lg:w-[100%] max-lg:h-[97%] ">
          <img
            src={footer_img}
            alt="footer_img"
            className="w-[100%] h-[100%] object-cover object-top"
          />
        </div>
      </div>
      
      {/* Section 4 */}
      <div className="relative border-b border-[#0B0B0B]">
        {/* Brand logo and text */}
        <img src={footer_logo} alt="footer_logo" className="ml-5 absolute top-8 cursor-pointer" />
        <p className="w-[90%] ml-5 absolute top-[30%] font-[500] text-sm text-[#0B0B0B] uppercase max-lg:w-[100%]">
          AISI offers a carefully curated collection of stylish and versatile
          clothing pieces that are designed to elevate everyday looks. From
          comfortable essentials to trendy statement pieces, Aisi aims to
          empower individuals to express their unique sense of style with
          confidence.
        </p>
        {/* Social media icons */}
        <div className="flex items-center gap-5 absolute bottom-4 ml-5">
          <img src={facebook} alt="facebook" className="cursor-pointer" />
          <img src={Instagram} alt="Instagram" className="cursor-pointer" />
          <img src={Reddit} alt="Reddit" className="cursor-pointer" />
          <img src={Twitter} alt="Twitter" className="cursor-pointer" />
        </div>
      </div>

      {/* Section 5 */}
      <div className="uppercase border-l border-b border-[#0B0B0B] h-[392px] relative max-lg:border-l-0 ">
        {/* Site navigation */}
        <p className="font-normal text-sm text-[#0b0b0b77] ml-5 absolute top-[30%]">
          <em>/ site navigation</em>
        </p>
        {/* Navigation links */}
        <ul className="list-none font-semibold text-base text-[#0B0B0B] absolute bottom-4 ml-5">
          <li className="my-2 cursor-pointer">homepage</li>
          <li className="my-2 cursor-pointer">shop</li>
          <li className="my-2 cursor-pointer">collections</li>
          <li className="cursor-pointer">contact</li>
        </ul>
      </div>

      {/* Section 6 */}
      <div className="uppercase border-l border-[#0B0B0B] border-b  relative">
        {/* Customer care */}
        <p className="font-normal text-sm text-[#0B0B0B] ml-5 absolute top-[30%]">
          <em>/ customer care</em>
        </p>
        {/* Customer care links */}
        <ul className="list-none font-semibold text-base text-[#0B0B0B] absolute bottom-4 ml-5">
          <li className="my-2 cursor-pointer">shipping & payment</li>
          <li className="my-2 cursor-pointer">refund & return policy</li>
          <li className="cursor-pointer">care instructions</li>
        </ul>
      </div>

      {/* Footer text */}
      <div className="my-8 ml-5 uppercase font-semibold text-xs text-[#0B0B0B]">coyright 2023, aisi right reserved </div>
      <div className="max-lg:hidden"></div>
      <div className="my-8 ml-5 uppercase font-semibold text-xs text-[#0B0B0B]">[ terms and conditions ]</div>
      <div className="my-8 uppercase text-right font-semibold text-xs text-[#0B0B0B] max-md:text-left ml-5">[ privacy ]</div>
    </div>
  );
};

export default Footer;
