import React from "react";

const Contact = () => {
  return (
    <section>
      <div className="flex flex-wrap justify-between gap-y-8 text-[12px]/[18px] font-[600] text-[#0B0B0B]">
        <input
          type="text"
          className="h-[39px] w-[49%] border-[1px] border-[#0B0B0B] bg-[transparent] px-3 outline-0"
          autoComplete="off"
          placeholder="FIRST NAME *"
          name="username"
        />
        <input
          type="text"
          className="h-[39px] w-[49%] border-[1px] border-[#0B0B0B] bg-[transparent] px-3 outline-0"
          autoComplete="off"
          placeholder="LAST NAME *"
        />
        <input
          type="text"
          className="h-[39px] w-[49%] border-[1px] border-[#0B0B0B] bg-[transparent] px-3 outline-0"
          autoComplete="off"
          placeholder="PHONE NUMBER *"
        />
        <input
          type="text"
          className="h-[39px] w-[49%] border-[1px] border-[#0B0B0B] bg-[transparent] px-3 outline-0"
          autoComplete="off"
          placeholder="EMAIL ADDRESS*"
        />
     

      </div>
      <p className="font-[500] text-[24px]/[24px] my-9">/shipping address</p>
      <div className="flex flex-wrap justify-between gap-y-8 text-[12px]/[18px] font-[600] text-[#0B0B0B]">
        <input
          type="text"
          className="h-[39px] w-[49%] border-[1px] border-[#0B0B0B] bg-[transparent] px-3 outline-0"
          autoComplete="off"
          placeholder="STREET *"
          name="username"
        />
        <input
          type="text"
          className="h-[39px] w-[49%] border-[1px] border-[#0B0B0B] bg-[transparent] px-3 outline-0"
          autoComplete="off"
          placeholder="APARTMENT/SUITE *"
        />
        <input
          type="text"
          className="h-[39px] w-[49%] border-[1px] border-[#0B0B0B] bg-[transparent] px-3 outline-0"
          autoComplete="off"
          placeholder="CITY *"
        />
        <input
          type="text"
          className="h-[39px] w-[49%] border-[1px] border-[#0B0B0B] bg-[transparent] px-3 outline-0"
          autoComplete="off"
          placeholder="COUNTRY*"
        />
                <input
          type="text"
          className="h-[39px] w-[49%] border-[1px] border-[#0B0B0B] bg-[transparent] px-3 outline-0"
          autoComplete="off"
          placeholder="STATE *"
        />
        <input
          type="text"
          className="h-[39px] w-[49%] border-[1px] border-[#0B0B0B] bg-[transparent] px-3 outline-0"
          autoComplete="off"
          placeholder="ZIP CODE *"
        />
      </div>
    </section>
  );
};

export default Contact;
