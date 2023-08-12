import React from "react";

const Shipping = () => {
    const shippingOptions = [
        { name: "Edx", duration: "2-3 days", price: "24,309.01ngn" },
        { name: "Swift", duration: "4-7 days", price: "24,309.01ngn" },
        { name: "FedEx", duration: "7-10 days", price: "24,309.01ngn" },
      ];

  return (
    <section className="grid-cols-3">
      {shippingOptions.map((option, index) => (
        <article className="flex w-full justify-between uppercase my-4" key={index}>
          <div className="flex gap-4">
            <input type="radio" name="shippingMethod" />
            <p>{option.name}</p>
          </div>
          <p className="">{option.duration}</p>
          <p>{option.price}</p>
        </article>
      ))}
    </section>
  );
};

export default Shipping;
