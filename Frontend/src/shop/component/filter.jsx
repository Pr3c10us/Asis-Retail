import React, { useState, useEffect } from "react";

// Component for individual filter items
const FilterItem = ({ item, activeItem, setActiveItem }) => {
  const isActive = activeItem === item;

  // Handle filter item click
  const handleItemClick = () => {
    setActiveItem(isActive ? null : item);
  };

  return (
    <label
      className="my-2 flex cursor-pointer items-center gap-2"
      htmlFor={`checkbox-${item}`}
    >
      <input
        type="checkbox"
        className="checkbox cursor-pointer"
        checked={isActive}
        onChange={handleItemClick}
        id={`checkbox-${item}`}
      />
      <p
        className={`w-48 text-xs font-medium text-asisDark ${
          isActive ? "cursor-pointer" : ""
        }`}
      >
        {item}
      </p>
    </label>
  );
};

// Main Filter component
const Filter = ({ setDynamicUrl }) => {
  const [activeItem, setActiveItem] = useState(null);
  const miniData = [
    "shoes & slides",
    "Pants",
    "Shirts",
    "bags",
    "Wristwatches",
    "headset glasses",
  ];
  const filterData = [
    {
      type: "Gender",
      items: ["male", "female", "unisex"],
    },
    // {
    //   type: "Collaborations",
    //   items: [
    //     "asis X Nike",
    //     "asis X oakley",
    //     "asis X bluboy",
    //     "asis X zara",
    //     "asis X piece et patch",
    //   ],
    // },
  ];

  // Update dynamic URL on active filter change
  useEffect(() => {
    if (activeItem) {
      const query = `category=${activeItem}`;
      setDynamicUrl(`products/?${query}`);
    }
  }, [activeItem, setDynamicUrl]);

  return (
    <section className="filter_component left-0 mt-5 w-72 overflow-y-scroll border border-asisDark px-5 pb-5 pt-10 filter">
      {/* MiniData filters */}
      <div>
        <p className="px-1 text-sm font-semibold uppercase text-black">
          <em
            onClick={() => {
              setDynamicUrl("products");
              setActiveItem(null);
            }}
            className="cursor-pointer"
          >
            Shop all
          </em>
        </p>
        <ul className="border-b border-[#878787] pb-5 text-sm font-semibold uppercase text-[#878787]">
          {miniData.map((data) => (
            <li
              key={data}
              className={`my-2 cursor-pointer rounded p-1 ${
                activeItem === data ? "italic text-black" : ""
              }`}
            >
              <span
                onClick={() => setActiveItem(activeItem === data ? null : data)}
              >
                {data}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Other filter categories */}
      {filterData.map(({ type, items }) => (
        <div key={type} className="border-b border-[#878787] pb-5 uppercase">
          <p className="mt-5 text-sm font-semibold uppercase text-black">
            {type}
          </p>
          {items.map((item, index) => (
            <FilterItem
              key={index}
              item={item}
              activeItem={activeItem}
              setActiveItem={setActiveItem}
            />
          ))}
        </div>
      ))}
    </section>
  );
};

export default Filter;
