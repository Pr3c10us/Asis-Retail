import React,{useState, useEffect} from "react";
import cancel_cart from "../assets/icons/cancel_cart.svg";
import collection_img_2 from "../assets/images/collection_img_2.png";
import down from "../assets/icons/down.svg"
const Cart = ({ setHideCart }) => {

  return (
    
    <div className="sticky right-7 top-[45px] ml-auto nt-5 z-20">
      <div className="absolute  z-50 right-0 max-h-[85vh] w-[33vw] overflow-hidden bg-[#FFFFFF] p-5  uppercase shadow-[-7px_8px_30px_0px_#00000033] ">

     
      <div className="item-center relative flex justify-between border-b-[1.5px] border-[#0B0B0B] pb-12">
        <div className="">
          <p className="text-[36px]/[36px] font-[500] uppercase">
            <span className="font-400 mr-1">/</span>y
            <em className="font-[400]">o</em>ur c
            <em className="font-[400]">a</em>rt
          </p>
          <p className="absolute left-[215px] top-[-8px] text-[16px]/[16px] font-[500] text-[#000000]">
            (1)
          </p>
        </div>
        <div
          className="cursor-pointer"
          onClick={()=> setHideCart(false)}
        >
          <img src={cancel_cart} alt="cancel_cart" />{" "}
        </div>
      </div>
      <div className="my-5 flex gap-5 items-start justify-between pb-4 border-b-[1.5px] border-[#0B0B0B] ">
        <div className=" h-[154px] w-[116px]">
          <img
            src={collection_img_2}
            alt="collection_img_2"
            className="h-full w-full object-cover object-top"
          />
        </div>
        <div className="w-[70%]">
          <div className="flex items-start justify-between  border-b-[0.5px] border-b-[#0B0B0B] pb-2">
            <div className="">
              <p className="w-[212px] text-[14px]/[20px] font-[700] text-[#17A500]">
                OVERGROWTH CONVERTIBLE PANTS
              </p>
              <p className="text-[11px]/[20px] font-[600] text-[#000000] mt-2">
                135,000 NGN
              </p>
            </div>
            <div className="" >
              <img
                src={cancel_cart}
                alt="cancel_cart"
                className="w-[20px] cursor-pointer"
              />
            </div>
          </div>
          <div className=" flex w-full items-start justify-between mt-3">
            <div className="font-[600] text-[11px]/[20px] text-[#000000]">
              <p className="">greenish brow</p>
              <p className="">size: l</p>
            </div>
            <div className=" flex items-center gap-1 font-[600] text-[#0B0B0B] text-[11px]/[16px]">
            <p> q.ty:1</p> 
            <img src={down} alt="down"/>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between text-[14px]/[20px] font-[700]">
        <p>Total</p>
        <p>270,000 NGN</p>
      </div>
      <div className="mt-3 flex items-center justify-between border-b-[0.5px] border-b-[#0B0B0B] pb-4  text-[13px]/[20px] font-[500]">
        <p>shipping</p>
        <p>calculated at checkout</p>
      </div>
      <div className="mt-5 flex items-center justify-center bg-[#0B0B0B] py-3 text-[14px]/[20px] font-[600] text-[#FFFFFF] cursor-pointer rounded-[7px]">
        checkout
      </div>
      </div>
    </div>
  );
};

export default Cart;
