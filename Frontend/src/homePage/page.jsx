import React, { useEffect } from "react";
import SpecialCategory from "../components/specialCategory";
import back_to_top from "../assets/icons/back_to_top.svg";
import useFetch from "../components/useFetch";
import StackingSection from "../components/StackingSection ";
const Page = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const { data } = useFetch(
    `${import.meta.env.VITE_API_URL}products/`,
  );
  const name = "new arrival";
  return (
    <div className=" h-full p-0 ">
      
        <section>
        <StackingSection />
          {/* <SpecialCategory name={name} /> */}
       
          <section>
            <div className="relative my-20  border-t  border-asisDark">
              <img
                src={back_to_top}
                alt="back_to_top"
                className="absolute -top-5 right-[10%] cursor-pointer"
                onClick={() => {
                  handleScrollToTop();
                }}
              />
            </div>
          </section>
        </section>
     
    </div>
  );
};

export default Page;
