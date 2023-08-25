import React from "react";
import Rotation from "../assets/icons/rotation.svg";
import Ace from "../assets/icons/aceRotation.svg";
const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[url('./assets/images/bg_img.png')] bg-fit bg-repeat  left-0 top-0 h-screen w-screen">
      <div className="w-screen h-screen flex items-center justify-center">
      <img
          src={Ace}
          alt="Ace"
          className="animate-bounce slow-ping max-sm:w-24"
        />
        
      </div>
      <div className="absolute -left-[20rem] top-1/3 flex  h-[40rem] w-[40rem] -translate-y-1/3 items-center justify-center md:-left-[25rem] md:h-[50rem] md:w-[50rem]">
        <img
          src={Ace}
          alt="Ace"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        />
        <img
          src={Rotation}
          alt="rotation"
          className="slow-spin h-full w-full animate-spin"
        />
      </div>
      <img
        src={Rotation}
        alt="rotation"
        className="slow-spin absolute -bottom-[25rem] -right-[25rem] h-[50rem] w-[50rem] animate-spin"
      />
    </div>
  );
};

export default Loading;
