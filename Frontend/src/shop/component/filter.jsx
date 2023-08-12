import React from "react";

const FilterItem = ({ item, setDynamicUrl, lastItem }) => {
  const handleItemClick = () => {
    setDynamicUrl(`products/?${lastItem}=${item}`);
  };

  return (
    <label
      className="my-2 flex cursor-pointer items-center gap-2"
      onClick={handleItemClick}
    >
      <input type="checkbox" className="cursor-pointer" />
      <p className="w-[194px] text-[12px]/[16px] font-[500] text-[#0B0B0B]">
        {item}
      </p>
    </label>
  );
};

const Filter = ({ setDynamicUrl }) => {
  const miniData = [
    "shoes & slides",
    "Pants",
    "Shirts",
    "bags",
    "wristwatches",
    "headset glasses",
  ];
  const filterData = [
    {
      type: "sales & offers",
      items: [
        "Members only free shipping for orders above 50,000 NGN",
        "LIMITED TIME SALES",
      ],
    },
    {
      type: "Gender",
      items: ["male", "female", "unisex"],
    },
    {
      type: "Collaborations",
      items: [
        "aisi X Nike",
        "aisi X oakley",
        "aisi X bluboy",
        "aisi X zara",
        "aisi X piece et patch",
      ],
    },
  ];

  return (
    <section className="filter_component mt-5 h-[90vh] max-h-[] w-[292px] border-[1.5px] border-[#0B0B0B] bg-[url('./assets/images/bg_img.png')] px-5 pb-5 pt-10">
      <div>
        <p className="text-[14px]/[21px] font-[600] uppercase text-[#000000]">
          <em>Shop all </em>
        </p>
        <ul className="border-b-[1px] border-[#878787] pb-5 text-[14px]/[21px] font-[600] uppercase text-[#878787]">
          {miniData.map((data) => (
            <li
              key={data}
              onClick={() => {
                setDynamicUrl(`products/?category=${data}`);
              }}
              className="my-2 cursor-pointer"
            >
              {data}
            </li>
          ))}
        </ul>
      </div>
      {filterData.map(({ type, items }) => (
        <div
          key={type}
          className="border-b-[1px] border-[#878787] pb-5 uppercase"
        >
          <p className="mt-5 text-[14px]/[21px] font-[600] uppercase text-[#000000]">
            {type}
          </p>
          {items.map((item, index) => (
            <FilterItem
              key={index}
              item={item}
              setDynamicUrl={setDynamicUrl}
              lastItem={type.toLowerCase()}
            />
          ))}
        </div>
      ))}
    </section>
  );
};

export default Filter;
