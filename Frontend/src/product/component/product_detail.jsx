import React, { useState, useEffect } from "react";
import down from "../../assets/icons/down.svg";
import toast from "react-hot-toast";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

import { useDispatch } from "react-redux";
import { setCart } from "../../../redux/asis";
import CartLoading from "../../components/cartLoader";
import AddToCartLoading from "./addToCartLoading";
import VowelItalicizer from "../../components/vowelItalicizer";
import DisplayImage from "../../components/displayImage";
const Product_detail = ({ data }) => {
  // States
  const [selectedImage, setSelectedImage] = useState(null);
  const [showDescription, setShowDescription] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [displayImage, setDisplayImage] = useState(false);

  const dispatch = useDispatch();

  function getFormattedTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    const milliseconds = String(now.getMilliseconds()).padStart(3, "0");

    return `${hours}:${minutes}:${seconds}:${milliseconds}`;
  }
  const [currentTime, setCurrentTime] = useState(getFormattedTime());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getFormattedTime());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // Effect to set initial selected image
  useEffect(() => {
    if (data.images && data.images.length > 0) {
      setSelectedImage(data.images[0]);
    }
  }, [data]);

  // Handle adding to cart
  const handleAddToCart = async () => {
    setIsAddingToCart(true);
    if (selectedSize) {
      try {
        axios.defaults.withCredentials = true;
        let item = {
          productId: data._id,
          option: selectedSize,
          quantity: 1,
        };
        const response = await axios.put(
          `${import.meta.env.VITE_API_URL}carts`,
          item,
        );
        dispatch(setCart(response.data.cart));
        toast.success("Item added to cart", {
          style: {
            border: "1px solid green",
            padding: "8px 16px",
            color: "green",
            borderRadius: "4px",
          },
          iconTheme: {
            primary: "green",
            secondary: "#FFFAEE",
          },
        });
        setIsAddingToCart(false);
      } catch (error) {
        console.log(error);
        toast.error("Failed to add item to cart", {
          style: {
            border: "1px solid red",
            padding: "8px 16px",
            color: "red",
            borderRadius: "4px",
          },
        });
        setIsAddingToCart(false);
      }
    } else {
      toast.error("Select a option to add to cart", {
        style: {
          border: "1px solid red",
          padding: "8px 16px",
          color: "red",
          borderRadius: "4px",
        },
      });
      setIsAddingToCart(false);
    }
  };

  useEffect(() => {
    // Apply or remove the no-scroll class based on the displayImage value
    if (displayImage) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Clean up by removing the class when the component unmounts
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [displayImage]);

  const changeSelectedImage = (direction) => {
    const currentIndex = data.images.indexOf(selectedImage);
    let newIndex;

    if (direction === "left") {
      newIndex = (currentIndex - 1 + data.images.length) % data.images.length;
    } else if (direction === "right") {
      newIndex = (currentIndex + 1) % data.images.length;
    }

    setSelectedImage(data.images[newIndex]);
  };

  return (
    <section className="product_container mb-20 mt-5 h-full px-20 max-xl:px-0 max-md:mt-2">
      {/* Product details */}
      {data ? (
        <section className="flex items-start justify-center gap-10 max-lg:flex-col max-md:gap-0">
          {/* Thumbnail images */}
        

          {/* Selected image */}
          <AnimatePresence>
          <div className="flex w-full flex-col items-center">
            <div className="max-md:w-screen ">
              {selectedImage && (
                    
                <div className=" h-[500px] w-[32rem] z-20 cursor-pointer border-2 border-asisDark  max-lg:place-self-center max-md:mx-auto max-sm:h-[341px] max-sm:w-[303px]">
               
                  <motion.img
                  key={selectedImage}
                    src={`${import.meta.env.VITE_BLOB_URL}${selectedImage}`}
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -100, opacity: 0 }}
                    className="w-full h-full object-cover  object-top z-10"
                    onClick={() => {
                      setDisplayImage(true);
                    }}
                  />
                  </div>
                                 )}
              {displayImage && (
                <DisplayImage
                  img={`${import.meta.env.VITE_BLOB_URL}${selectedImage}`}
                  setDisplayImage={setDisplayImage}
                  changeSelectedImage={changeSelectedImage}
                />
              )}
            </div>

            <section className="gap flex flex-wrap items-center justify-center px-0 py-5 backdrop-blur-sm">
              {data.images?.map((img, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(img)}
                  className={`mb-5 flex h-20 w-[100px] cursor-pointer items-center justify-center bg-contain bg-center bg-no-repeat px-5 py-2 ${
                    img === selectedImage
                      ? `bg-[url('./assets/images/frames.png')]`
                      : ""
                  }`}
                >
                  <img
                    src={`${import.meta.env.VITE_BLOB_URL}${img}`}
                    alt="collection_img"
                    className="h-full w-full object-cover object-center "
                  />
                </div>
              ))}
            </section>
          </div>
          </AnimatePresence>


          {/* Product information */}

          <section className="w-full py-5 max-lg:px-5 max-sm:px-3">
            <p className="mb-9 text-3xl font-medium uppercase text-asisGreen max-sm:text-2xl">
              {/* <VowelItalicizer text={data.name} /> */}
              {data.name}
            </p>
            {/* Sizes */}
            <section className="flex  flex-wrap gap-x-5 gap-y-3 p-4 backdrop-blur-sm ">
              {data.countInStock?.map((optData, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedSize(optData.option)}
                  className={`flex h-10 w-24 cursor-pointer items-center justify-center border text-xs font-medium uppercase rounded-md${
                    selectedSize === optData.option
                      ? " border-asisDark text-asisDark"
                      : " border-[#C4C4C4] text-[#C4C4C4]"
                  }`}
                >
                  {optData.option}
                </div>
              ))}
            </section>

            {/* Additional details */}
            <section className="">
              {/* Time */}
              {/* <article className="flex items-center justify-between text-base font-semibold">
                <p className="uppercase text-asisDark">time</p>
                <p className="text-asisGreen">{currentTime}</p>
              </article> */}

              {/* Description */}
              <p className="my-9 text-sm font-medium text-asisDark">
                {data.brief}
              </p>

              {/* Add to cart */}

              <button
                className={`relative my-3 flex max-h-12 w-full justify-center rounded-md  py-4 text-center text-xs font-semibold uppercase ${
                  selectedSize
                    ? "bg-asisDark text-[#FFFFFF]"
                    : "bg-asisDark/70 text-[#C4C4C4]"
                }`}
                disabled={isAddingToCart}
                onClick={() => {
                  handleAddToCart();
                }}
              >
                {isAddingToCart ? (
                  <AddToCartLoading />
                ) : (
                  <p>
                    Add to cart-{" "}
                    {Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                    }).format(data.price)}{" "}
                    USD
                  </p>
                )}
              </button>

              {/* Add to wishlist */}
              {/* <button className="relative mb-3 w-full cursor-pointer border border-asisDark py-4 text-center text-xs font-semibold uppercase text-asisDark">
                add to wishlist
              </button> */}

              {/* Accordion */}
              <section
                onClick={() => setShowDescription((prev) => !prev)}
                className="border-y border-asisDark text-sm uppercase text-asisDark backdrop-blur-sm "
              >
                <article className="border-b1 flex cursor-pointer items-center justify-between border-asisDark py-2 font-semibold">
                  <p>product details</p>
                  <img
                    className={`transition-all duration-300 ${
                      showDescription ? "rotate-180 transform" : ""
                    }`}
                    src={down}
                    alt="down"
                  />
                </article>

                {/* <article className="flex cursor-pointer items-center justify-between py-2">
                  <p>option guild</p>
                  <img src={down} alt="down" />
                </article> */}
              </section>
              <div
                className={`grid   text-sm text-asisDark/80 transition-all duration-300 ${
                  showDescription
                    ? "grid-rows-[1fr] border-b border-asisDark py-2"
                    : "grid-rows-[0fr]"
                } `}
              >
                <p className="overflow-hidden">{data.description} </p>
              </div>
            </section>
          </section>
        </section>
      ) : (
        <section>product not found</section>
      )}
    </section>
  );
};

export default Product_detail;
