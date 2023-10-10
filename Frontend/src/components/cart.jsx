import React from "react";
import cancel_cart from "../assets/icons/cancel_cart.svg";
import cartIcon from "../assets/icons/cart-icon.svg";
import Logo from "../assets/icons/logo.svg";
import down from "../assets/icons/down.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import CartLoading from "./cartLoader";
import { useSelector, useDispatch } from "react-redux";
import { setCart } from "../../redux/asis";
import removeCart from "../assets/icons/cartIcon.svg";
import SpecialChar from "./specialChar";
import VowelItalicizer from "./vowelItalicizer";
import CartItem from "./cartItem";

const Cart = ({ setHideCart }) => {
  const ref = React.useRef(null);
  const cartData = useSelector((state) => state.asis.cart);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = React.useState(true);

  const handleEffect = async () => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setHideCart(false);
      }
    };

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  };
  React.useEffect(() => {
    handleEffect();
  }, [ref]);

  const handleGetCartContent = async () => {
    setIsLoading(true);
    try {
      axios.defaults.withCredentials = true;
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}carts`,
      );
      // console.log(response.data);
      // setCartData(response.data);
      dispatch(setCart(response.data));
      setIsLoading(false);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("Failed to load cart items", {
        style: {
          border: "1px solid red",
          padding: "8px 16px",
          color: "red",
          borderRadius: "4px",
        },
      });
      setIsLoading(false);
    }
  };
  React.useEffect(() => {
    handleGetCartContent();
    console.log(cartData);
  }, []);

  const removeItemFromCart = async (id, size) => {
    setIsLoading(true);
    try {
      axios.defaults.withCredentials = true;
      const item = {
        productId: id,
        size: size,
      };
      await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}carts/removeItem`,
        {
          data: item,
        },
      );
      console.log(item);
      toast.success("Item removed from cart", {
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
      await handleGetCartContent();
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("Failed to remove item, try again", {
        style: {
          border: "1px solid red",
          padding: "8px 16px",
          color: "red",
          borderRadius: "4px",
        },
      });
      setIsLoading(false);
    }
  };

  const clearCart = async () => {
    setIsLoading(true);
    try {
      axios.defaults.withCredentials = true;
      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}carts/`);
      toast.success("Item removed from cart", {
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
      await handleGetCartContent();
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("Failed to remove item, try again", {
        style: {
          border: "1px solid red",
          padding: "8px 16px",
          color: "red",
          borderRadius: "4px",
        },
      });
      setIsLoading(false);
    }
  };

  return (
    <div ref={ref} className="sticky right-7 top-12 z-40 ml-auto ">
      <div className="absolute right-7 overflow-y-auto bg-[url('./assets/images/bg_img.png')] uppercase shadow-lg max-md:fixed max-md:right-0 max-md:top-0 max-md:h-screen max-md:w-screen max-md:px-5 max-md:shadow-transparent  max-sm:px-1 md:min-w-[28rem]">
        <div className="mb-4 hidden w-full items-end justify-end p-5  max-md:flex">
          <div className="flex w-1/2 items-center justify-between gap-2">
            <Link to="/homepage">
              <img src={Logo} alt="Logo" className="pointer" />
            </Link>
            <img
              src={removeCart}
              alt="removeCart"
              className="cursor-pointer"
              onClick={() => setHideCart(false)}
            />
          </div>
        </div>

        {isLoading && <CartLoading />}
        {!isLoading && cartData?.products?.length >= 1 ? (
          // Cart with items

          <section className="p-5">
            <div className="item-center relative flex justify-between border-b-2 border-asisDark pb-10">
              <div className="flex items-start gap-1">
                <p className="text-4xl font-medium uppercase">your cart</p>
                <p className=" left-[12.5rem] text-base font-medium text-black">
                  ({cartData?.products?.length})
                </p>
              </div>
              {/* close cart component */}
              <img
                src={cancel_cart}
                alt="cancel_cart"
                className="cursor-pointer max-md:hidden"
                onClick={() => setHideCart(false)}
              />
            </div>
            <div className="max-h-[40vh] overflow-y-scroll">
              {cartData.products.map((data, index) => (
                <CartItem
                  key={data._id}
                  data={data}
                  index={index}
                  removeItemFromCart={removeItemFromCart}
                  handleGetCart={handleGetCartContent}
                />
              ))}
            </div>
            {/* total calculation  */}
            <div className="gap- flex flex-col border-b-2 border-b-asisDark ">
              <div className="mt-4 flex items-center justify-between  text-sm font-bold">
                <p>Total</p>
                <p>
                  {Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(cartData.totalPrice)}{" "}
                  USD
                </p>
              </div>
              <div className="mt-3 flex items-center justify-between  pb-4 text-[13px]/[20px] font-medium">
                <p>shipping</p>
                <p>calculated at checkout</p>
              </div>
            </div>
            {/* Link to checkout */}
            <Link to="/checkout">
              <button
                className="mt-5 flex w-full cursor-pointer items-center justify-center rounded-md bg-asisDark py-3 text-sm font-semibold uppercase text-[#FFFFFF]"
                onClick={() => {
                  setHideCart(false);
                }}
              >
                checkout
              </button>
            </Link>
            <button
              className="mt-4 w-full text-right font-semibold italic underline"
              onClick={() => {
                clearCart();
              }}
            >
              Clear your Cart
            </button>
          </section>
        ) : (
          // Empty cart
          <section className="relative w-full px-5 py-9 max-md:py-0">
            <div className="flex flex-col items-center">
              <div className="item-center relative flex w-full justify-between border-b border-asisDark pb-8">
                <div>
                  <p className="text-4xl font-medium uppercase max-md:text-2xl">
                    your cart
                  </p>
                  <p className="absolute -top-1 left-52 text-base font-medium text-black">
                    {/* ({cartData?.products?.length}) */}
                  </p>
                </div>
                <img
                  src={cancel_cart}
                  alt="cancel_cart"
                  className="cursor-pointer max-md:hidden"
                  onClick={() => setHideCart(false)}
                />
              </div>
              <img src={cartIcon} alt="cartIcon" className="opacity-30 " />
              <div className="mt-4 flex w-full items-center justify-center rounded-md bg-[#525050] py-2 text-sm font-semibold text-[#FFFEF5]">
                cart is empty
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Cart;
