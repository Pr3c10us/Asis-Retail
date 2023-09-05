import React, { useState, useEffect } from "react";
import Banner from "../components/banner";
import backToTop from "../assets/icons/back_to_top.svg";
import ShopProducts from "./component/shop_products";
import Filter from "./component/filter";
import Search from "./component/search";
import useFetch from "../components/useFetch";
import Loading from "../components/loading";

const Page = () => {
  // States
  const [dynamicUrl, setDynamicUrl] = useState("products");
  const [hideFilter, setHideFilter] = useState(true);

  // API URL
  const apiUrl = `${import.meta.env.VITE_BACKEND_URL}${dynamicUrl}`;
  const { data } = useFetch(apiUrl);

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle scroll to top
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Determine alignment based on product count
  const align = data?.products?.length <= 3 ? "items-start" : "";

  return (
    <div className="h-full ">
      {data ? (
        <section className="">
          {/* Search */}
          <Search
            setDynamicUrl={setDynamicUrl}
            setHideFilter={setHideFilter}
            hideFilter={hideFilter}
          />

          {/* Main content */}
          <section className="flex justify-start px-8">
            <div
              className={`flex flex-row-reverse ${align} justify-start gap-10`}
            >
              {/* Shop products */}
              {data && <ShopProducts hideFilter={hideFilter} data={data} />}

              {/* Filter */}
              <div>
                {hideFilter && (
                  <div className="sticky top-12 hidden lg:block ">
                    <Filter setDynamicUrl={setDynamicUrl} />
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Back to top */}
          <div className="relative mt-16 border-t border-asisDark">
            <img
              src={backToTop}
              alt="back_to_top"
              className="absolute -top-7 right-10 cursor-pointer"
              onClick={() => {
                handleScrollToTop();
              }}
            />
          </div>
        </section>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Page;
