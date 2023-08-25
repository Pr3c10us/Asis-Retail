import React, { useState, useEffect } from "react";
import cancel_cart from "../assets/icons/cancel_cart.svg";
import heart from "../assets/icons/heart.svg";
import emptyWish from "../assets/icons/empty_wish.svg";
import down from "../assets/icons/down.svg";

const Wishlist = ({ setHideWish, wishlistData }) => {
  return (
    <div className="sticky right-7 top-10 z-20 ml-auto uppercase ">
      <div className="absolute right-0  overflow-hidden bg-[url('./assets/images/bg_img.png')]  shadow-[-7px_8px_30px_0px_#00000033]">
        {wishlistData.length >= 1 ? (
          // Cart with items
          <section className="p-5">
            <div className="item-center relative flex justify-between border-b border-asisDark pb-10">
              <div>
                <p className="text-4xl font-medium ">wishlist</p>
                <p className="absolute -top-2 left-40 text-base font-medium text-black">
                  ({wishlistData.length})
                </p>
              </div>
              {/* close cart component */}
              <img
                src={cancel_cart}
                alt="cancel_cart"
                className="cursor-pointer"
                onClick={() => setHideWish(false)}
              />
            </div>
            <div className="max-h-[43vh] overflow-y-scroll">
              {wishlistData.map((data, index) => {
                return (
                  <section key={index}>
                    <div className="my-5 flex items-start justify-between gap-5 border-b border-asisDark pb-4">
                      {/* cart image */}
                      <img
                        src={data.img}
                        alt="collection_img_2"
                        className="h-36 w-[116px] object-cover object-top"
                      />
                      {/* right hand of the product detail of the cart */}
                      <section className="w-4/5">
                        {/* Product details */}
                        <div className="flex items-start justify-between border-b border-b-asisDark pb-2">
                          <div>
                            <p className="w-[212px] text-sm font-bold text-asisDark">
                              {data.name}
                            </p>
                            <p className="mt-2 text-xs font-semibold text-black">
                              {Intl.NumberFormat("en-US", {
                                style: "currency",
                                currency: "USD",
                              }).format(data.price)}{" "}
                              USD
                            </p>
                          </div>
                          {/* remove item from cart */}
                          <div className="flex flex-col gap-y-5">
                            <img
                              src={heart}
                              alt="heart"
                              className="w-5 cursor-pointer"
                            />
                            <div className="">
                              <img
                                src={cancel_cart}
                                alt="cancel_cart"
                                className="w-5 cursor-pointer"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="mt-3 flex w-full items-start justify-between text-xs font-semibold text-black">
                          <div>
                            <p>{data.color}</p>
                            <p>size: {data.size}</p>
                          </div>
                          <div className="flex items-center gap-1 ">
                            <p> q.ty:{data.qty}</p>
                            <img src={down} alt="down" />
                          </div>
                        </div>
                      </section>
                    </div>
                  </section>
                );
              })}
            </div>
            {/* add to cart */}

            <button className="mt-5 flex w-full cursor-pointer items-center justify-center rounded-[7px] bg-asisDark py-3 text-sm font-semibold uppercase text-[#FFFFFF]">
              add wishlist to cart
            </button>
          </section>
        ) : (
          // Empty cart
          <section className="relative w-96 px-3 py-6">
            <div>
              <div className="item-center relative flex justify-between border-b border-asisDark pb-8">
                <div>
                  <p className="text-4xl font-medium ">Wishlist</p>
                  <p className="absolute -top-1 left-40 text-base font-medium text-black">
                    ({wishlistData.length})
                  </p>
                </div>
                <img
                  src={cancel_cart}
                  alt="cancel_cart"
                  className="cursor-pointer"
                  onClick={() => setHideWish(false)}
                />
              </div>
              <img src={emptyWish} alt="cartIcon" className="ml-5 mt-8" />
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
