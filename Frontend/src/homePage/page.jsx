import React from "react";
import Collection from "./components/collection";
import Banner from "../components/banner";
import New_Arrival from "./components/new_arrival";
import Limited_collection from "./components/limited_collection";
import Shop from "./components/shop";
import Discover from "./components/discover";
import Membership from "./components/membership";
import Exclusive from "./components/exclusive";
import SpecialCategory from "../components/specialCategory";
import back_to_top from "../assets/icons/back_to_top.svg";
const Page = () => {
  const name = "new arrival"
  return (
    <div className=" h-full p-0 ">
      <Collection />
      <Banner />
      <SpecialCategory name={name}/>
      <Limited_collection />
      <Shop />
      <Discover />
      <Membership />
      <Exclusive />
      <section>
        <div className="relative mt-[100px]   border-t-[1.5px] border-[#0B0B0B]">
          <img
            src={back_to_top}
            alt="back_to_top"
            className="absolute right-[10%] top-[-25px] cursor-pointer"
          />
        </div>
      </section>
    </div>
  );
};

export default Page;
