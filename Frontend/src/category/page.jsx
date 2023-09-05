import React from "react";
import { useParams } from "react-router-dom";
import CategoryProduct from "../components/categoryProduct";
import cartImg from "../assets/images/thankyou.png";
import cartImg1 from "../assets/images/thankyou.png";
import useFetch from "../components/useFetch";
import Products from "../components/products";
import { Link } from "react-router-dom";
const page = () => {
  const { id } = useParams();

  const apiUrl = `${import.meta.env.VITE_BACKEND_URL}products`;
  const { data } = useFetch(apiUrl);
  const products = [
    {
      id: 1,
      name: "School Supplies",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
    architecto fuga. Maxime vero sit doloribus quod omnis minus
    repellendus soluta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
    architecto fuga. Maxime `,
      img: cartImg,
    },
    {
      id: 2,
      name: "Home Supplies",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
      architecto fuga. Maxime vero sit doloribus quod omnis minus
      repellendus soluta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
      architecto fuga. Maxime `,
      img: cartImg1,
    },
    {
      id: 3,
      name: "Interiors",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
    architecto fuga. Maxime vero sit doloribus quod omnis minus
    repellendus soluta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
    architecto fuga. Maxime `,
      img: cartImg,
    },
    {
      id: 4,
      name: "Necessities",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
    architecto fuga. Maxime vero sit doloribus quod omnis minus
    repellendus soluta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
    architecto fuga. Maxime`,
      img: cartImg,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center max-sm:px-4">
      <CategoryProduct />

      <section className="mt-2 flex flex-wrap items-center justify-center gap-3">
        {data?.products.map((product) => {
          return (
            <div key={product._id}>
              <Link to={`/product/${product._id}`}>
                <Products
                  name={product.name}
                  price={product.price}
                  collaborations={product.collaborations}
                  images={product.images}
                />
              </Link>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default page;
