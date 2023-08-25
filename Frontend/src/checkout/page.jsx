import React, { useState } from "react";
import Order from "./components/order";
import CheckoutCart from "./components/checkoutCart";
const Page = () => {
  return (
    <main className="flex justify-center px-5">
      <Order />

      {/* <CheckoutCart /> */}


    </main>
  );
};

export default Page;
