import React from "react";
import X_cancel from "../assets/icons/X_cancel.svg";
import changeImageIcon from "../assets/icons/changeImage_icon.svg";
const DisplayImage = ({ img, setDisplayImage, changeSelectedImage }) => {
  return (
    <div className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-[#000000d3] p-10">
      <img
        onClick={() => {
          setDisplayImage(false);
        }}
        src={X_cancel}
        alt="X_cancel"
        className="absolute right-5 top-5 cursor-pointer bg-white"
      />
      <div className="relative">
        <img
          src={img}
          alt="img"
          className="max-h-[85vh] object-contain object-top max-md:max-h-[80vh]"
        />

        <img
          onClick={changeSelectedImage.bind(null, "left")}
          src={changeImageIcon}
          className="absolute -left-6 top-2/4 bg-white w-10 h-10 p-3 cursor-pointer rounded-full"
          alt="changeImageIcon"
        />
         <img
          onClick={changeSelectedImage.bind(null, "right")}
          src={changeImageIcon}
          className="absolute -right-6 top-2/4 bg-white w-10 h-10 p-3 cursor-pointer rounded-full rotate-180"
          alt="changeImageIcon"
        />
    
      </div>
    </div>
  );
};

export default DisplayImage;
