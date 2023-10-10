import React, { useState, useEffect } from "react";
import MwobileCategoryProduct from "../components/mobileCategoryProduct";
import { useParams } from "react-router-dom";
import useFetch from "../components/useFetch";
import ShopCartegoryProduct from "./component/shopCartegoryProduct";
import Products from "../components/products";
import { Link } from "react-router-dom";
import down from "../assets/icons/down.svg";

const page = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const apiUrl = `${import.meta.env.VITE_BACKEND_URL}products/category/${id}`;
  const asisCardRef = React.useRef(null);

  const { data } = useFetch(apiUrl);

  const url = `${import.meta.env.VITE_BACKEND_URL}products/?categories=${id}`;

  const { data: productsData } = useFetch(url);

  return (
    <div className="h-full">
      {data && (
        <section className="mt-10 flex flex-col items-center justify-center px-2">
          <div className="flex justify-center">
            <ShopCartegoryProduct data={data} />
          </div>

          {/* <div className="my-14 gap-x-2 sm:gap-x-4 backdrop-blur-md flex lg:px-14 w-full">
            <div className="flex w-40 cursor-pointer items-center justify-center gap-x-3 rounded border border-asisDark text-xs uppercase">
              sort by
              <img src={down} alt="down" />
            </div>
            <input
              type="text"
              placeholder="Search for a product . . ."
              className="w-full rounded border border-asisDark bg-transparent p-2 outline-0"
            />
            <div className="flex w-28 cursor-pointer items-center justify-center gap-x-3 rounded bg-asisDark text-xs uppercase text-white">
              Search
            </div>
          </div> */}
          {productsData && (
            <section className=" 4xl:grid-cols-7 3xl:grid-cols-6 mt-20 grid w-min min-w-full grid-cols-2 place-items-center items-center gap-10 max-lg:justify-around md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-2">
              {productsData.products?.map((product) => (
                <div key={product._id}>
                  <Link to={`/product/${product._id}`}>
                    <Products
                      top={asisCardRef.current?.offsetTop}
                      left={asisCardRef.current?.offsetLeft}
                      name={product.name}
                      price={product.price}
                      collaborations={product.collaborations}
                      images={product.images}
                    />
                  </Link>
                </div>
              ))}
            </section>
          )}
        </section>
      )}
    </div>
  );
};

export default page;
