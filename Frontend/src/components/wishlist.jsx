import React, { useState, useEffect } from "react";
import cancel_cart from "../assets/icons/cancel_cart.svg";
import heart from "../assets/icons/heart.svg";
import emptyWish from "../assets/icons/empty_wish.svg";
import down from "../assets/icons/down.svg";
const Wishlist = ({ setHideWish, wishlistData }) => {
  return (
    <div className="nt-5 sticky right-7 top-11 z-20 ml-auto">
      <div className="absolute  right-0 z-40 overflow-hidden bg-[#FFFFFF] uppercase shadow-[-7px_8px_30px_0px_#00000033] ">
        {wishlistData.length >= 1 ? (
          <section className="p-5">
            <div className="item-center relative flex justify-between border-b border-[#0B0B0B] pb-12">
              <div className="">
                <p className="text-4xl font-[500] uppercase">
                  wishlist
                </p>
                <p className="absolute left-[160px] -top-1 text-sm font-[500] text-[#000000]">
                  ({wishlistData.length})
                </p>
              </div>
              <div
                className="cursor-pointer"
                onClick={() => setHideWish(false)}
              >
                <img src={cancel_cart} alt="cancel_cart" />{" "}
              </div>
            </div>
            <div className="max-h-[45vh] overflow-y-scroll">
              {wishlistData.map((data, index) => {
                return (
                  <div key={index}>
                    <div className="my-5 flex items-start justify-between gap-5  border-b-[1.5px] border-[#0B0B0B] pb-4 ">
                      <div className=" h-[154px] w-[116px]">
                        <img
                          src={data.img}
                          alt="collection_img_2"
                          className="h-full w-full object-cover object-top"
                        />
                      </div>
                      <div className="w-[70%]">
                        <div className="flex items-start justify-between  border-b-[0.5px] border-b-[#0B0B0B] pb-2">
                          <div className="">
                            <p className="w-[212px] text-[14px]/[20px] font-[700] text-[#17A500]">
                              {data.name}
                            </p>
                            <p className="mt-2 text-[11px]/[20px] font-[600] text-[#000000]">
                              {data.price} NGN
                            </p>
                          </div>
                          <div className="flex flex-col gap-y-5">
                            <img
                              src={heart}
                              alt="heart"
                              className="w-[20px] cursor-pointer"
                            />
                            <div className="">
                              <img
                                src={cancel_cart}
                                alt="cancel_cart"
                                className="w-[20px] cursor-pointer"
                              />
                            </div>
                          </div>
                        </div>
                        <div className=" mt-3 flex w-full items-start justify-between">
                          <div className="text-[11px]/[20px] font-[600] text-[#000000]">
                            <p className="">{data.color}</p>
                            <p className="">size: {data.size}</p>
                          </div>
                          <div className=" flex items-center gap-1 text-[11px]/[16px] font-[600] text-[#0B0B0B]">
                            <p> q.ty:{data.qty}</p>
                            <img src={down} alt="down" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-5 flex cursor-pointer items-center justify-center rounded-[7px] bg-[#0B0B0B] py-3 text-[14px]/[20px] font-[600] text-[#FFFFFF]">
              add wishlist to cart
            </div>
          </section>
        ) : (
          <section className="relative w-96 px-3 py-6 ">
            <div className="">
              <div className="item-center relative flex justify-between border-b-[1.5px] border-[#0B0B0B] pb-12">
                <div className="">
                  <p className="text-[36px]/[36px] font-[500] uppercase">
                    wishlist
                  </p>
                  <p className="absolute left-[162px] top-[-5px] text-[16px]/[16px] font-[500] text-[#000000]">
                    ({wishlistData.length})
                  </p>
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() => setHideWish(false)}
                >
                  <img src={cancel_cart} alt="cancel_cart" />{" "}
                </div>
              </div>
              <img src={emptyWish} alt="cartIcon" className="ml-12 mt-14" />
              <div className="mt-4 flex w-full cursor-pointer items-center justify-center bg-[#525050] py-2 text-sm font-semibold text-[#FFFEF5]">
                wishlist is empty
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
