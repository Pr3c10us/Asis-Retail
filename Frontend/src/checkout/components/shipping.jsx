import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setOrder } from "../../../redux/asis";
import axios from "axios";
import VowelItalicizer from "../../components/vowelItalicizer";
import { toast } from "react-hot-toast";
import Loading from "./loading";

const Shipping = ({ setActiveStep }) => {
  const orderDetails = useSelector((state) => state.asis.order);
  const cartData = useSelector((state) => state.asis.cart);
  const {
    firstName,
    lastName,
    email,
    phone,
    address,
    city,
    state,
    zip,
    country,
    shipping,
  } = orderDetails;
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedShipping, setSelectedShipping] = useState(shipping || null);
  const dispatch = useDispatch();

  const handleAddShippingDetails = () => {
    setIsLoading(true);
    if (!selectedShipping) {
      toast.error("Select a shipping method", {
        style: {
          border: "1px solid red",
          padding: "8px 16px",
          color: "red",
          borderRadius: "4px",
        },
      });
      
      setIsLoading(false);
      return;
    }
    dispatch(setOrder({ shipping: selectedShipping }));
    setActiveStep(3);
    setIsLoading(false);
  };

  const handleFetchShippingDetails = async () => {
    setIsLoading(true);
    const apiUrl = `${import.meta.env.VITE_API_URL}shippings`;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !address ||
      !city ||
      !state ||
      !zip ||
      !country
    ) {
      setActiveStep(1);
      return;
    }
    try {
      let { data } = await axios.get(apiUrl);
      setData(data.shipping);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    handleFetchShippingDetails();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col gap-12 py-8">
      <h2 className="text-2xl font-semibold uppercase">
        / <VowelItalicizer text={"Shipping method"} />
      </h2>
      <section className="flex flex-col gap-8">
        {data.map((shippingDetail) => (
          <div
            key={shippingDetail._id}
            className="flex cursor-pointer items-center gap-x-6 px-4 font-semibold text-asisDark/40"
            onClick={() => setSelectedShipping(shippingDetail._id)}
          >
            <div className=" flex h-5 w-5 items-center justify-center rounded-full border-2 border-asisDark">
              <div
                className={`h-3 w-3 rounded-full ${
                  selectedShipping === shippingDetail._id && "bg-asisDark"
                }`}
              ></div>
            </div>
            <h3
              className={`flex-1 capitalize ${
                selectedShipping === shippingDetail._id && "text-asisDark"
              }`}
            >
              {shippingDetail.name}
            </h3>
            <p
              className={`flex-1 text-sm ${
                selectedShipping === shippingDetail._id && "text-asisDark"
              }`}
            >
              {shippingDetail.durationInDays} DAYS
            </p>
            <p
              className={`flex-1 text-right text-sm ${
                selectedShipping === shippingDetail._id && "text-asisDark"
              }`}
            >
              {Intl.NumberFormat(
                shippingDetail.currency == "USD" ? "en-US" : "en-NG",
                {
                  style: "currency",
                  currency: shippingDetail.currency,
                },
              ).format(shippingDetail.fee)}{" "}
              {shippingDetail.currency}
            </p>
          </div>
        ))}
      </section>
      <section className="border-2 border-asisDark/60 px-8 py-4">
        <div className="flex gap-x-2">
          <h2 className="">Contact Information: </h2>
          <p className=" font-semibold">
            {` `}
            {firstName},{lastName},{email},{phone}
          </p>
        </div>
        <div className="flex gap-x-2">
          <h2 className="">Shipping Address: </h2>
          <p className=" font-semibold">
            {` `}
            {address},{city},{state},{country},{zip}
          </p>
        </div>
      </section>
      <section className="flex items-end justify-end gap-4 pl-4">
        <button
          onClick={() => setActiveStep(1)}
          className="h-min border-b-2 border-asisDark px-4 pb-1.5 text-sm font-bold"
        >
          Go back
        </button>
        <button
          disabled={isLoading}
          onClick={handleAddShippingDetails}
          className={`font-bold" w-1/2 bg-asisDark  py-3 text-white ${
            selectedShipping ? "" : "opacity-50 "
          }`}
        >
          Go to Payment -{" "}
          {Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(cartData.totalPrice)}{" "}
          USD
        </button>
      </section>
    </div>
  );
};

export default Shipping;
