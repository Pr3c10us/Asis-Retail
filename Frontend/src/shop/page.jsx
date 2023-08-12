import React, { useState } from "react";
import Banner from "../components/banner";
import backToTop from "../assets/icons/back_to_top.svg";
import ShopProducts from "./component/shop_products";
import Filter from "./component/filter";
import Search from "./component/search";
import useFetch from "../components/useFetch";

const Page = () => {
  const [dynamicUrl, setDynamicUrl] = useState("products");
  const [hide_filter, setHide_filter] = useState(true);
  const apiUrl = `http://localhost:5000/api/${dynamicUrl}`;
  const { data, isLoading, error } = useFetch(apiUrl);

  const isShortList = data?.products?.length <= 3;

  return (
    <div className="h-full p-0">
      <Banner />
      <Search setDynamicUrl={setDynamicUrl}  setHide_filter={ setHide_filter}/>
      <div className="my-4 text-center text-[20px] font-[600] text-[red]">
        {error && error.message !== "canceled" && (
          <div>
            <p>{error.message}</p>
            <p className="text-[13px]">{error.code}</p>
          </div>
        )}
      </div>
      
      {isLoading && <div>Loading...</div>}

      <section className={`flex flex-row-reverse justify-between ${isShortList ? "items-start" : ""}`}>
        <div className={hide_filter ? "flex items-center justify-center" : "m-auto flex items-center justify-center"}>
          <div className="relative">
            {data && <ShopProducts hide_filter={hide_filter} data={data} />}
          </div>
        </div>
        <div>
          {hide_filter && (
            <div className="sticky top-10">
              <Filter setDynamicUrl={setDynamicUrl} />
            </div>
          )}
          <div>
            <div className="sticky top-0"></div>
            <div className="relative mt-[100px]"></div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="relative mt-[100px] border-t-[1.5px] border-[#0B0B0B]">
          <img
            src={backToTop}
            alt="back_to_top"
            className="absolute right-[10%] top-[-25px] cursor-pointer"
          />
        </div>
      </section>
    </div>
  );
};

export default Page;
