import React, { useState } from "react";
import down from "../../assets/icons/down.svg";
import hidden_filter from "../../assets/icons/hidden_filter.svg";
import search from "../../assets/icons/search.svg";

const Search = ({ setHideFilter, hideFilter, setDynamicUrl }) => {
  // State for the search input value
  const [name, setName] = useState("");

  // Handle Enter key press in search input
  function handleKeyPress(event) {
    if (event.key === "Enter") {
      setDynamicUrl(`products/?name=${name}`);
    }
  }

  return (
    <section className="mt-8 flex items-center border-y border-black">
      {/* Hide/Show Filter */}
      <div
        onClick={() => setHideFilter((prevFilter) => !prevFilter)}
        className="flex h-10 cursor-pointer items-center justify-center gap-1 border-r border-black px-5 uppercase text-asisDark max-md:px-3"
      >
        <p className="text-sm font-medium max-md:text-xs max-md:font-bold">
          {hideFilter ? "hide filter" : "show filter"}
        </p>
        <img src={hidden_filter} alt="hidden_filter" />
      </div>

      {/* Search input */}
      <div className="relative basis-[79%] items-center gap-3 uppercase text-asisDark max-xl:basis-[70%] max-lg:basis-[69%] max-md:basis-[60]">
        <input
          type="text"
          placeholder="SEARCH"
          onKeyPress={handleKeyPress}
          onChange={(event) => setName(event.target.value)}
          className="w-full bg-transparent px-5 text-sm font-medium text-[#B0B0B0] outline-0"
        />
        <img
          src={search}
          alt="search"
          className="absolute bottom-1 right-5 cursor-pointer"
        />
      </div>

      {/* Sort by */}
      <div className="flex h-10 cursor-pointer items-center justify-center gap-1 border-l border-black px-5 uppercase text-asisDark">
        <p className="text-sm font-medium">sort by</p>
        <img src={down} alt="down" />
      </div>
    </section>
  );
};

export default Search;
