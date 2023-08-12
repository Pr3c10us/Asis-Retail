import React from "react";
import useFetch from "./useFetch.jsx";
import Products from "./products.jsx";
import { Link } from "react-router-dom";
const Category = () => {
  const { data } = useFetch(
    "http://localhost:5000/api/products/?limit=3",
  );
  console.log(data);
  return (
    <section className=" border-t-[1.5px] border-[#ACACAC80] pt-12 mt-12  uppercase">
      
      <article>
        {data && (
          <div className="flex gap-10">
            {data.products.map((data) => {
              return (
                <div key={data._id}>
                    <Link to={`/product/${data._id}`}>
                  <Products
                    name={data.name}
                    price={data.price}
                    collaborations={data.collaborations}
                    images={data.images}
                  />
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </article>
    </section>
  );
};

export default Category;
