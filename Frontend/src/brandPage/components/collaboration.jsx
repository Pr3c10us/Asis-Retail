import React from "react";
import nike from "../../assets/icons/nike.svg";
import kappa from "../../assets/icons/kappa.svg";
import ck from "../../assets/icons/ck.svg";
import carhartt from "../../assets/icons/carhartt.svg";
import umbro from "../../assets/icons/umbro.svg";
import lv from "../../assets/icons/lv.svg";

const Collaboration = () => {
  return (
    <section>
        <div className="border-t-[1.5px] border-[#0B0B0B]   mt-[40px] relative">
</div>
        <p className="font-[500] text-[30px]/[30px] uppercase mt-10 mb-16">/C<em className="font-[400]">o</em>llaborati<em className="font-[400]">o</em>ns</p>
    <div className=" flex items-center justify-center">
      <div className="grid grid-cols-3 gap-x-40  items-center justify-between w-[80%]">
        <img src={nike} alt="nike" />
        <img src={kappa} alt="kappa" />
        <img src={ck} alt="ck" />
        <img src={carhartt} alt="carhartt" />
        <img src={umbro} alt="umbro" />
        <img src={lv} alt="lv" />
      </div>
    </div>
    </section>
  );
};

export default Collaboration;
