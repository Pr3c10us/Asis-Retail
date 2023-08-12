import React, { useState } from "react";
import down from "../../assets/icons/down.svg";
import hidden_filter from "../../assets/icons/hidden_filter.svg";
import search from "../../assets/icons/search.svg";

const Search = ({ setHide_filter, setDynamicUrl }) => {
  const [name, setName] = useState("");

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      setDynamicUrl(`products/?name=${name}`);
    }
  }

  return (
    <section className="mt-8 flex items-center border-y-[1.5px] border-[#000000]">
      <div className="flex h-[37px] w-[145px] cursor-pointer items-center justify-center border-r-[1.5px] border-[#000000] uppercase text-[#0B0B0B]">
        <div
          className="flex justify-center gap-1"
          onClick={() => setHide_filter((prevFilter) => !prevFilter)}
        >
          <p className="text-[14px]/[16px] font-[500]">hide filter</p>
          <img src={hidden_filter} alt="hidden_filter" />
        </div>
      </div>
      <div className="relative w-full basis-[80%] items-center gap-3 uppercase text-[#0B0B0B]">
        <input
          type="text"
          placeholder="SEARCH"
          onKeyPress={handleKeyPress}
          onChange={(event) => setName(event.target.value)}
          className="w-full bg-[transparent] px-5 text-[14px]/[16px] font-[500] text-[#B0B0B0] outline-0"
        />
        <img
          src={search}
          alt="search"
          className="absolute bottom-1 right-5 cursor-pointer"
        />
      </div>{" "}
      <div className="flex h-[37px] w-[145px] cursor-pointer items-center justify-center border-l-[1.5px] border-[#000000] uppercase text-[#0B0B0B]">
        <div className="flex justify-center gap-1">
          <p className="text-[14px]/[16px] font-[500]">sort by</p>
          <img src={down} alt="down" />
        </div>
      </div>
    </section>
  );
};

export default Search;
