import React from "react";
import Products from "../../components/products";
import { Link } from "react-router-dom";

const ShopProducts = ({ data, hide_filter }) => {
  const gridColumns = hide_filter ? "grid-cols-3" : "grid-cols-4";

  return (
    <section className="mt-5">

      <div className={`grid ${gridColumns} gap-10`}>
        {data.products?.map((product) => (
          <div key={product.name}>
            <Link to={`/product/${product._id}`}>
            <Products
              name={product.name}
              price={product.price}
              collaborations={product.collaborations}
              images={product.images}
            /></Link>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopProducts;
